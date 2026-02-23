import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';
import { AdminNotificationEmail } from '@/emails/admin-notification';
import { VisitorConfirmationEmail } from '@/emails/visitor-confirmation';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

function getClientIP(request: NextRequest): string {
  // Get IP from various headers in order of preference
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // First request or window expired
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count
  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return false;
  }

  if (!telegramChatId) {
    console.error('TELEGRAM_CHAT_ID not configured');
    return false;
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name.trim()}
📧 *Email:* ${data.email.trim()}
📱 *Phone:* ${data.phone.trim()}

💬 *Message:*
${data.message.trim()}

⏰ *Submitted:* ${new Date().toISOString()}
📍 *Timezone:* ${Intl.DateTimeFormat().resolvedOptions().timeZone}
  `.trim();

  try {
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      console.error('Failed to send to Telegram:', errorText);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

async function sendEmails(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<{ success: boolean; errors: string[] }> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'sultanalamdev@gmail.com';

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not configured, skipping email notifications');
    return { success: false, errors: ['RESEND_API_KEY not configured'] };
  }

  const resend = new Resend(resendApiKey);
  const errors: string[] = [];
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // Send admin notification email
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: adminEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      react: (
        <AdminNotificationEmail
          name={data.name}
          email={data.email}
          phone={data.phone}
          message={data.message}
          submittedAt={submittedAt}
        />
      ),
    });
  } catch (error) {
    console.error('Failed to send admin notification email:', error);
    errors.push('admin notification');
  }

  // Send visitor confirmation email
  try {
    await resend.emails.send({
      from: 'Sultan Alam <onboarding@resend.dev>',
      to: data.email,
      subject: 'Thank you for reaching out!',
      react: <VisitorConfirmationEmail name={data.name} />,
    });
  } catch (error) {
    console.error('Failed to send visitor confirmation email:', error);
    errors.push('visitor confirmation');
  }

  return {
    success: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send to both Telegram and Email
    const telegramSent = await sendToTelegram(validatedData);
    const emailResult = await sendEmails(validatedData);

    // Consider it successful if at least one method worked
    if (!telegramSent && !emailResult.success) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 },
      );
    }

    // Build success message
    let successMessage = 'Message sent successfully!';
    if (!telegramSent) {
      successMessage += ' (Email sent, Telegram notification failed)';
    } else if (!emailResult.success) {
      successMessage += ' (Telegram sent, Email notification failed)';
    }

    return NextResponse.json(
      {
        message: successMessage,
        success: true,
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

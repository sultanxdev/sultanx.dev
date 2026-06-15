# Email Integration Setup Guide

## Overview
Your contact form now sends notifications via **both Telegram and Email** using Resend API.

## Features Added
✅ **Admin Email Notifications** - Get notified via email when someone submits the contact form
✅ **Visitor Confirmation Emails** - Automatic confirmation email sent to visitors
✅ **Graceful Fallback** - Works even if one method fails (Telegram or Email)
✅ **Professional Templates** - Beautiful HTML email templates

## Setup Instructions

### 1. Sign Up for Resend
1. Go to [resend.com](https://resend.com)
2. Create a free account (100 emails/day, 3,000/month)
3. Verify your email address

### 2. Get Your API Key
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (starts with `re_`)

### 3. Add to Environment Variables
Add these to your `.env` file:

```bash
RESEND_API_KEY="re_your_actual_api_key_here"
ADMIN_EMAIL="sultanalamdev@gmail.com"  # Optional, defaults to this
```

### 4. Domain Verification (Optional but Recommended)
For production, verify your domain to send from your own email:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `sultanxdev.com`)
4. Add the DNS records shown
5. Wait for verification (usually a few minutes)

Once verified, update the email templates to use your domain:
- Change `onboarding@resend.dev` to `contact@yourdomain.com`

### 5. Test the Integration
1. Make sure your `.env` file has `RESEND_API_KEY`
2. Restart your dev server: `bun dev`
3. Go to `/contact` page
4. Submit a test message
5. Check:
   - ✅ Your email inbox for admin notification
   - ✅ Test email address for visitor confirmation
   - ✅ Your Telegram for the message

## Email Templates

### Admin Notification Email
- **From**: Portfolio Contact <onboarding@resend.dev>
- **To**: Your admin email (from env or config)
- **Subject**: New Contact Form Submission from [Name]
- **Content**: Name, email, phone, message, timestamp

### Visitor Confirmation Email
- **From**: Sultan Alam <onboarding@resend.dev>
- **To**: Visitor's email
- **Subject**: Thank you for reaching out!
- **Content**: Confirmation message, what happens next, social links

## Customization

### Change Admin Email
Edit `.env`:
```bash
ADMIN_EMAIL="your-email@example.com"
```

### Customize Email Templates
Edit these files:
- `src/emails/admin-notification.tsx` - Admin notification template
- `src/emails/visitor-confirmation.tsx` - Visitor confirmation template

### Change Response Time
Edit `src/emails/visitor-confirmation.tsx` line 99:
```tsx
I typically respond within <strong>24-48 hours</strong>
```

## Troubleshooting

### Emails Not Sending
1. **Check API Key**: Make sure `RESEND_API_KEY` is set in `.env`
2. **Check Logs**: Look for errors in terminal/console
3. **Verify Rate Limits**: Free tier = 100 emails/day
4. **Test API Key**: Try sending a test email from Resend dashboard

### Only Telegram Works
- This is expected if `RESEND_API_KEY` is not set
- The system will gracefully fallback to Telegram only
- Check console for warning: "RESEND_API_KEY not configured"

### Only Email Works
- Check `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env`
- The system will gracefully fallback to Email only

### Visitor Not Receiving Confirmation
- Check spam folder
- Verify the email address is valid
- Check Resend dashboard for delivery status

## Production Checklist

Before deploying to production:

- [ ] Add `RESEND_API_KEY` to production environment variables
- [ ] Add `ADMIN_EMAIL` to production environment variables (optional)
- [ ] Verify your domain in Resend (recommended)
- [ ] Update email templates to use your domain
- [ ] Test the contact form in production
- [ ] Monitor Resend dashboard for delivery issues

## API Response Behavior

The contact form API now returns different messages based on what succeeded:

- **Both work**: "Message sent successfully!"
- **Only Email works**: "Message sent successfully! (Email sent, Telegram notification failed)"
- **Only Telegram works**: "Message sent successfully! (Telegram sent, Email notification failed)"
- **Both fail**: "Failed to send message. Please try again."

## Cost & Limits

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month
- No credit card required

**Resend Pro ($20/month):**
- 50,000 emails per month
- Custom domains
- Priority support

For a portfolio, the free tier should be more than enough!

## Support

If you encounter issues:
1. Check [Resend Documentation](https://resend.com/docs)
2. Check [Resend Status Page](https://status.resend.com)
3. Review error logs in your terminal
4. Test with Resend's test mode

---

**Note**: The system is designed to work even if Resend is not configured. It will gracefully fall back to Telegram-only notifications.

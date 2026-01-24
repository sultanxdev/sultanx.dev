# Contact Form Testing Guide

## Current Status

The contact form has been updated with email integration, but **you need to configure your API keys** for it to work.

## What's Working Right Now

✅ **Telegram Notifications** - If you have `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` configured
✅ **Form Validation** - Name, email, phone, message validation
✅ **Rate Limiting** - 5 requests per minute per IP
✅ **Email Integration Code** - Ready to work once API key is added

## What You Need to Do

### Option 1: Test with Telegram Only (Immediate)

If you already have Telegram configured, the form should work and send messages to Telegram.

**Test Steps:**
1. Go to `http://localhost:3000/contact`
2. Fill out the form:
   - Name: Your Name
   - Email: your@email.com
   - Phone: 1234567890
   - Message: Test message
3. Click "Send Message"
4. Check your Telegram for the notification

**Expected Result:**
- ✅ Success message: "Message sent successfully! (Telegram sent, Email notification failed)"
- ✅ Message appears in your Telegram

### Option 2: Test with Email (Requires Setup)

To enable email notifications, you need to add your Resend API key.

**Setup Steps:**

1. **Sign up for Resend** (if you haven't):
   - Go to https://resend.com
   - Create free account
   - Verify your email

2. **Get API Key**:
   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Name it "Portfolio Contact Form"
   - Copy the key (starts with `re_`)

3. **Add to .env file**:
   ```bash
   RESEND_API_KEY="re_your_actual_api_key_here"
   ```

4. **Restart dev server**:
   ```bash
   # Press Ctrl+C to stop
   bun dev
   ```

5. **Test the form**:
   - Go to `http://localhost:3000/contact`
   - Fill out with your real email address
   - Submit
   - Check both:
     - Your email inbox (admin notification)
     - The test email address (visitor confirmation)

**Expected Result:**
- ✅ Success message: "Message sent successfully!"
- ✅ Telegram notification
- ✅ Email to you (admin notification)
- ✅ Email to visitor (confirmation)

## Troubleshooting

### "Failed to send message"

**Cause**: Both Telegram and Email failed

**Fix**:
1. Check your `.env` file has at least one of:
   - `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`
   - `RESEND_API_KEY`
2. Restart dev server after adding keys

### "Message sent successfully! (Email sent, Telegram notification failed)"

**Cause**: Email works but Telegram doesn't

**Fix**:
- This is fine if you only want email notifications
- To fix Telegram: Check `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env`

### "Message sent successfully! (Telegram sent, Email notification failed)"

**Cause**: Telegram works but Email doesn't

**Fix**:
- This is expected if you haven't added `RESEND_API_KEY` yet
- Add Resend API key to enable email

### No confirmation email received

**Check**:
1. Spam folder
2. Email address is correct
3. Resend dashboard for delivery status: https://resend.com/emails
4. Check terminal for errors

### Emails not rendering properly

**Cause**: Missing `@react-email/components` package

**Fix**: Already installed! Should work now.

## Quick Test Command

You can test the API directly with curl:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message"
  }'
```

**Expected Response:**
```json
{
  "message": "Message sent successfully!",
  "success": true
}
```

## Check Your Configuration

Run this to see what's configured:

```bash
# Check if .env file exists
ls .env

# Check environment variables (without showing values)
# In PowerShell:
Get-Content .env | Select-String "TELEGRAM_BOT_TOKEN|TELEGRAM_CHAT_ID|RESEND_API_KEY|GEMINI_API_KEY"
```

## What to Look For in Terminal

When you submit the form, you should see in terminal:

**Success:**
```
POST /api/contact 200 in XXXms
```

**Errors:**
```
Failed to send admin notification email: [error details]
Failed to send visitor confirmation email: [error details]
Failed to send to Telegram: [error details]
```

## Current .env.example Template

Your `.env` file should look like this:

```bash
TELEGRAM_BOT_TOKEN="your-token"
TELEGRAM_CHAT_ID="your-chat-id"
GEMINI_API_KEY="your-api-key"
RESEND_API_KEY="re_your_resend_api_key"
ADMIN_EMAIL="sultanalamdev@gmail.com"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

## Next Steps

1. **Check your `.env` file** - Make sure you have at least Telegram OR Resend configured
2. **Test the form** - Go to `/contact` and submit
3. **Check results** - Look for messages in Telegram and/or email
4. **Report back** - Let me know what happened:
   - Did you get a success message?
   - Did you receive Telegram notification?
   - Did you receive emails?
   - Any errors in the terminal?

---

**Note**: The form will work with just Telegram OR just Email. You don't need both configured, but having both gives you redundancy!

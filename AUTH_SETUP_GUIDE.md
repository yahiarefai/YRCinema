# CineVerse Authentication Pages Setup Guide

## Overview
This guide explains the three authentication pages created for your CineVerse movie booking web app:
1. **confirm-email.html** - Email confirmation success page (Static HTML)
2. **ForgotPassword.jsx** - Password reset request page (React Component)
3. **UpdatePassword.jsx** - Password update page (React Component)

---

## File Structure
```
src/
├── pages/
│   ├── ForgotPassword.jsx       # Forgot password page
│   └── UpdatePassword.jsx       # Update password page
├── services/
│   └── supabaseClient.js        # Supabase initialization
└── (other components)

(root)/
└── confirm-email.html           # Email confirmation success page
```

---

## 1. Static HTML Page: `confirm-email.html`

**Location:** Root directory (same level as index.html)

**Features:**
- Glassmorphism design with dark cinematic theme
- Success checkmark animation
- Responsive mobile-friendly layout
- Links to root `/` when "Continue to Home" is clicked
- Portfolio disclaimer banner at top
- Footer with copyright info

**Usage:**
- User lands here after confirming their email
- No additional setup needed - it's pure HTML with Tailwind CDN

---

## 2. React Component: `ForgotPassword.jsx`

**Location:** `src/pages/ForgotPassword.jsx`

**Features:**
- Email input field
- Integration with `supabase.auth.resetPasswordForEmail()`
- Redirect URL points to `https://yrcinema.com/update-password`
- Success confirmation message
- Error handling
- Loading states
- Link back to Sign In page

**Supabase Integration:**
```javascript
const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: 'https://yrcinema.com/update-password',
});
```

**How it works:**
1. User enters their email
2. Supabase sends a password reset link to that email
3. Email contains a special token
4. When user clicks link, they're redirected to UpdatePassword.jsx
5. UpdatePassword component uses that token to update password

**Router Setup:**
Add to your React Router configuration:
```javascript
import ForgotPassword from './pages/ForgotPassword';

<Route path="/forgot-password" element={<ForgotPassword />} />
```

---

## 3. React Component: `UpdatePassword.jsx`

**Location:** `src/pages/UpdatePassword.jsx`

**Features:**
- New password input field
- Confirm password input field
- Real-time password strength indicator
- Show/hide password toggle
- Password requirements checklist
- Integration with `supabase.auth.updateUser()`
- Success message and redirect to login

**Supabase Integration:**
```javascript
const { error } = await supabase.auth.updateUser({
  password: newPassword,
});
```

**How it works:**
1. User arrives after clicking reset link from email
2. Form validates password strength
3. User enters new password and confirmation
4. On submit, Supabase updates the user's password
5. Success message displays
6. User is redirected to `/signin` after 2 seconds

**Password Requirements:**
- Minimum 8 characters
- Uppercase letter
- Lowercase letter
- Number
- Special character

**Router Setup:**
Add to your React Router configuration:
```javascript
import UpdatePassword from './pages/UpdatePassword';

<Route path="/update-password" element={<UpdatePassword />} />
```

---

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @supabase/supabase-js react-router-dom
```

### 2. Environment Variables
Create a `.env` file in your project root:
```
VITE_SUPABASE_URL=https://ectftbenssqjnjbjiati.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjdGZ0YmVuc3Nxam5qYmppYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzE0ODIsImV4cCI6MjA5NDk0NzQ4Mn0.2kWHuS41qV5Hi4Mfid9kn5bD_4u-MyqTvA5Q1I0DExA
```

### 3. Update Supabase Email Configuration
In your Supabase dashboard:
1. Go to **Authentication → Email Templates**
2. Edit the **Reset Password** template
3. Ensure the reset link redirect URL is set to `https://yrcinema.com/update-password`

### 4. Add Routes to Router
```javascript
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ... other routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 5. Link from Sign In Page
Add a "Forgot Password?" link in your Sign In page:
```javascript
<a href="/forgot-password" className="text-emerald-400 hover:text-emerald-300">
  Forgot Password?
</a>
```

---

## Design Specifications

### Color Palette
- **Background:** Deep dark (#050505 to #1a1a24)
- **Primary Accent:** Emerald/Green (#10b981)
- **Glass Effect:** RGBA dark with 15px blur
- **Text:** White (#ffffff), Gray (#9ca3af)

### Typography
- **Headings:** font-black, gradient text
- **Body:** text-sm to text-base, tracking-wide

### Effects
- **Glassmorphism:** backdrop-filter blur, semi-transparent background
- **Animations:** Smooth transitions, scale effects on buttons
- **Shadows:** Shadow-2xl for depth

---

## Password Reset Flow Diagram

```
User on Sign In Page
         ↓
    Click "Forgot Password?"
         ↓
    → /forgot-password (ForgotPassword.jsx)
         ↓
    User enters email & clicks "Send Reset Link"
         ↓
    Supabase sends email with reset token
         ↓
    User clicks link in email
    (redirects to https://yrcinema.com/update-password?token=...)
         ↓
    → /update-password (UpdatePassword.jsx)
         ↓
    User enters new password
         ↓
    supabase.auth.updateUser({ password })
         ↓
    Success message
         ↓
    Redirect to /signin (after 2 seconds)
         ↓
    User logs in with new password ✓
```

---

## Troubleshooting

### Email not being sent?
- Check Supabase Email Configuration
- Verify email templates are set up correctly
- Check spam folder

### "Invalid token" error on UpdatePassword?
- Ensure the redirect URL matches exactly: `https://yrcinema.com/update-password`
- Token expires after 24 hours - user must click link quickly

### Password update not working?
- Ensure password meets all requirements
- Check browser console for error messages
- Verify Supabase API key has correct permissions

---

## Security Notes

✅ **What's implemented:**
- Password strength validation
- Secure Supabase authentication
- HTTPS required (change domain in code)
- Token-based reset flow
- No passwords stored in localStorage

⚠️ **Important:**
- Replace `https://yrcinema.com` with your actual domain
- Keep Supabase keys in environment variables
- Never commit `.env` file to version control
- Use HTTPS in production

---

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

---

**Author:** Yahia Rifai  
**Project:** CineVerse - Movie Booking Web App  
**Status:** Ready for Production  
**Last Updated:** June 2026

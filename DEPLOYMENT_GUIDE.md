# 🚀 SHEF LMS - Production Deployment Guide

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Firebase Configuration](#firebase-configuration)
4. [Frontend Deployment](#frontend-deployment)
5. [Backend Deployment](#backend-deployment)
6. [Post-Deployment](#post-deployment)
7. [Monitoring & Maintenance](#monitoring--maintenance)

---

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] All features tested locally
- [ ] No console errors in browser
- [ ] All API endpoints tested
- [ ] Responsive design verified on all devices
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge)
- [ ] Security audit completed
- [ ] Environment variables documented
- [ ] Database backup created

### Documentation
- [ ] README.md updated
- [ ] API documentation complete
- [ ] User guides finalized
- [ ] Deployment procedures documented
- [ ] Rollback procedures defined

### Performance
- [ ] Image optimization completed
- [ ] Code minification enabled
- [ ] Lazy loading implemented where appropriate
- [ ] Bundle size optimized
- [ ] Database queries optimized

---

## 🔧 Environment Setup

### 1. Firebase Project Setup

#### Create Firebase Project
```bash
# 1. Go to https://console.firebase.google.com
# 2. Click "Add Project"
# 3. Name: "shef-lms-production"
# 4. Enable Google Analytics (optional)
# 5. Create project
```

#### Enable Firestore
```bash
# 1. In Firebase Console, go to "Firestore Database"
# 2. Click "Create database"
# 3. Select Production mode
# 4. Choose location (us-central1 or nearest)
# 5. Click "Enable"
```

#### Set Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                   (request.auth.uid == userId || 
                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // Courses, Modules, Lessons - Public read, Admin write
    match /{collection}/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

#### Enable Firebase Authentication
```bash
# 1. Go to "Authentication" in Firebase Console
# 2. Click "Get Started"
# 3. Enable "Email/Password" provider
# 4. Save
```

### 2. Get Firebase Configuration

```bash
# 1. In Firebase Console, go to Project Settings (gear icon)
# 2. Scroll to "Your apps"
# 3. Click "Web" icon (</>)
# 4. Register app: "SHEF LMS Web"
# 5. Copy the config object
```

Example config:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "shef-lms.firebaseapp.com",
  projectId: "shef-lms-production",
  storageBucket: "shef-lms-production.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### 3. Generate Firebase Admin SDK Key

```bash
# 1. Go to Project Settings → Service Accounts
# 2. Click "Generate new private key"
# 3. Save the JSON file securely (DO NOT commit to Git!)
# 4. Extract values for backend .env file
```

---

## 📝 Frontend Deployment

### Option 1: Vercel (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Prepare Frontend
```bash
cd frontend

# Create production environment file
cp .env.example .env.production

# Edit .env.production with your Firebase config
# REACT_APP_FIREBASE_API_KEY=your_key
# REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
# ... etc
```

#### 3. Build for Production
```bash
npm run build
```

#### 4. Deploy to Vercel
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts:
# - Set project name: shef-lms
# - Set framework: Create React App
# - Override build command: (leave default)
# - Add environment variables from .env.production
```

#### 5. Configure Vercel Settings
```bash
# In Vercel Dashboard:
# 1. Go to Settings → Environment Variables
# 2. Add all REACT_APP_* variables
# 3. Save
# 4. Redeploy if needed
```

### Option 2: Netlify

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Build and Deploy
```bash
cd frontend

# Build
npm run build

# Deploy
netlify deploy --prod --dir=build

# Follow authentication prompts
# Select or create new site
```

#### 3. Configure Redirects
Create `frontend/public/_redirects`:
```
/*    /index.html   200
```

### Option 3: Firebase Hosting

#### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### 2. Initialize Firebase
```bash
cd frontend

firebase login
firebase init hosting

# Select:
# - Use existing project
# - Public directory: build
# - Single-page app: Yes
# - Automatic builds: No
```

#### 3. Build and Deploy
```bash
npm run build
firebase deploy --only hosting
```

---

## 🔧 Backend Deployment

### Option 1: Heroku

#### 1. Install Heroku CLI
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

#### 2. Prepare Backend
```bash
cd backend

# Ensure package.json has start script
# "start": "node server.js"

# Create Procfile
echo "web: node server.js" > Procfile
```

#### 3. Deploy
```bash
# Login
heroku login

# Create app
heroku create shef-lms-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set FIREBASE_PROJECT_ID=your_project_id
heroku config:set FIREBASE_PRIVATE_KEY="your_private_key"
heroku config:set FIREBASE_CLIENT_EMAIL=your_client_email
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set ALLOWED_ORIGINS=https://your-frontend-url.vercel.app

# Deploy
git push heroku main

# Check logs
heroku logs --tail
```

### Option 2: Railway

#### 1. Install Railway CLI
```bash
npm install -g @railway/cli
```

#### 2. Deploy
```bash
cd backend

# Login
railway login

# Initialize
railway init

# Set environment variables in Railway dashboard
# Then deploy
railway up
```

### Option 3: Digital Ocean App Platform

#### 1. Create app.yaml
```yaml
name: shef-lms-backend
services:
- name: api
  github:
    repo: your-username/shef-lms
    branch: main
    deploy_on_push: true
  source_dir: /backend
  run_command: node server.js
  envs:
  - key: NODE_ENV
    value: production
  - key: PORT
    value: "8080"
  # Add other environment variables in DO dashboard
  http_port: 8080
  instance_count: 1
  instance_size_slug: basic-xxs
```

#### 2. Deploy via Dashboard
```bash
# 1. Go to https://cloud.digitalocean.com/apps
# 2. Create App
# 3. Connect GitHub repository
# 4. Configure using app.yaml
# 5. Add environment variables
# 6. Deploy
```

---

## 🔗 Connecting Frontend to Backend

### Update Frontend API URL

#### In `.env.production`:
```bash
REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

#### In `frontend/src/services/api.js` (if exists):
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

### Update Backend CORS

#### In `backend/server.js`:
```javascript
const cors = require('cors');

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
```

---

## ✅ Post-Deployment

### 1. Testing Checklist

- [ ] Homepage loads correctly
- [ ] Login functionality works
- [ ] Admin can create/edit/delete items
- [ ] Students can view courses
- [ ] Live class links work
- [ ] Analytics dashboard displays correctly
- [ ] Toast notifications appear
- [ ] Mobile responsive design works
- [ ] All images load properly
- [ ] Forms validate correctly

### 2. Create Admin Account

```bash
# Method 1: Via Admin Panel (if you have initial access)
# 1. Login with default admin
# 2. Create new admin user
# 3. Delete default admin

# Method 2: Via Firestore Console
# 1. Go to Firestore Database
# 2. Add document to 'users' collection
# 3. Set fields:
#    - email: admin@shef.com
#    - role: admin
#    - name: Super Admin
#    - status: active
#    - password: (hashed with bcrypt)
```

### 3. Initial Data Setup

Add sample data:
1. At least 1 course
2. At least 3 modules
3. At least 10 lessons
4. At least 3 projects
5. At least 5 jobs
6. At least 2 mentors

### 4. DNS Configuration

If using custom domain:

#### For Vercel:
```bash
# 1. Go to Vercel Dashboard → Settings → Domains
# 2. Add your domain: shef-lms.com
# 3. Follow DNS configuration instructions
# 4. Add CNAME record pointing to Vercel
```

#### For Netlify:
```bash
# 1. Go to Site Settings → Domain Management
# 2. Add custom domain
# 3. Configure DNS with your provider
```

### 5. SSL Certificate

Most platforms (Vercel, Netlify, Heroku) automatically provision SSL certificates. Verify:
```bash
# Check if site loads with https://
# No security warnings in browser
# SSL Labs test: https://www.ssllabs.com/ssltest/
```

---

## 📊 Monitoring & Maintenance

### 1. Error Tracking

#### Option 1: Sentry

```bash
# Install
npm install @sentry/react @sentry/tracing

# Initialize in frontend/src/index.js
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your_sentry_dsn",
  environment: "production",
  tracesSampleRate: 1.0,
});
```

#### Option 2: LogRocket

```bash
npm install logrocket
```

### 2. Analytics

#### Google Analytics 4

```javascript
// In frontend/public/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Uptime Monitoring

Use services like:
- **UptimeRobot** - https://uptimerobot.com
- **Pingdom** - https://www.pingdom.com
- **Freshping** - https://www.freshworks.com/website-monitoring

### 4. Performance Monitoring

#### Lighthouse CI

```bash
npm install -g @lhci/cli

# Run audit
lhci autorun --config=lighthouserc.json
```

Create `lighthouserc.json`:
```json
{
  "ci": {
    "collect": {
      "url": ["https://your-site.com"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

### 5. Backup Strategy

#### Firestore Backups

```bash
# Manual backup (requires gcloud CLI)
gcloud firestore export gs://your-backup-bucket/backups/$(date +%Y%m%d)

# Automated backups: Use Firebase Extensions
# 1. Go to Firebase Console → Extensions
# 2. Install "Firestore Backup"
# 3. Configure schedule (daily recommended)
```

### 6. Update Procedures

#### Rolling Updates

```bash
# 1. Test changes locally
# 2. Deploy to staging environment first
# 3. Run smoke tests
# 4. Deploy to production
# 5. Monitor for errors
# 6. Rollback if needed

# Vercel rollback
vercel rollback [deployment-url]

# Heroku rollback
heroku releases:rollback
```

---

## 🔐 Security Best Practices

### 1. Environment Variables

✅ **DO:**
- Use environment variables for all secrets
- Never commit .env files to Git
- Use different values for dev/staging/prod
- Rotate secrets regularly

❌ **DON'T:**
- Hardcode API keys
- Share credentials in chat/email
- Use same secrets across environments

### 2. Authentication

✅ **DO:**
- Enforce strong passwords (12+ characters)
- Implement rate limiting on login
- Use HTTPS everywhere
- Set secure cookie flags
- Implement session timeouts

### 3. Database Security

✅ **DO:**
- Use Firestore Security Rules
- Validate all inputs
- Sanitize user data
- Use prepared statements
- Regular security audits

### 4. API Security

✅ **DO:**
- Validate JWT tokens
- Implement CORS properly
- Rate limit API endpoints
- Log suspicious activity
- Use API versioning

---

## 📞 Support & Resources

### Deployment Platforms
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Heroku:** https://devcenter.heroku.com
- **Railway:** https://docs.railway.app
- **Digital Ocean:** https://docs.digitalocean.com

### Firebase
- **Documentation:** https://firebase.google.com/docs
- **Console:** https://console.firebase.google.com
- **Status:** https://status.firebase.google.com

### Monitoring
- **Sentry:** https://docs.sentry.io
- **Google Analytics:** https://analytics.google.com

---

## 🎉 Deployment Complete!

Your SHEF LMS is now live in production! 🚀

**Next Steps:**
1. ✅ Share URL with stakeholders
2. ✅ Train admin users
3. ✅ Onboard first students
4. ✅ Monitor analytics and errors
5. ✅ Gather user feedback
6. ✅ Plan next features

**Live URLs:**
- Frontend: `https://your-frontend-url.vercel.app`
- Backend API: `https://your-backend-url.herokuapp.com`
- Admin Panel: `https://your-frontend-url.vercel.app/admin`

---

**Version:** 1.0.0  
**Last Updated:** November 14, 2025  
**© 2025 SHEF LMS. All rights reserved.**

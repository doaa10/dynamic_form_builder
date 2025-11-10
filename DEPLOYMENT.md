# 🚀 Deployment Guide: GitHub Actions + Vercel

Complete guide to deploy this Next.js app automatically to Vercel using GitHub Actions.

---

## 📖 Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Setup Steps](#setup-steps)
4. [How It Works](#how-it-works)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview


## 🔧 Setup Steps

### **Step 1: Install Vercel CLI**

Open terminal and run:
```bash
npm install -g vercel
```

**Check installation:**
```bash
vercel --version
```

---

### **Step 2: Login to Vercel**

```bash
vercel login
```

- Opens browser for authentication
- Login with your GitHub account (recommended)
- Returns to terminal when done

**Success message:** `"Congratulations! You are now signed in."`

---

### **Step 3: Link Project to Vercel**

Navigate to project directory:
```bash
cd C:\Projects\dynamic_form_builder
```

Run link command:
```bash
vercel link
```

**Answer the prompts:**
```
? Set up project? → YES
? Which scope? → Select your account
? Link to existing project? → NO (first time)
? Project name? → dynamic-form-builder
? Directory location? → ./ (press Enter)
? Modify settings? → NO
```

**Result:** Creates `.vercel` folder with project IDs

---

### **Step 4: Get Your Vercel IDs**

**Windows (PowerShell):**
```powershell
Get-Content .vercel/project.json
```

**Mac/Linux:**
```bash
cat .vercel/project.json
```

**Output example:**
```json
{
  "projectId": "prj_xxx...",
  "orgId": "team_xxx..."
}
```

**📋 Copy these values!**

---

### **Step 5: Create Vercel Token**

1. Visit: https://vercel.com/account/tokens
2. Click **"Create Token"**
3. Configure:
   - **Token Name:** `GitHub Actions Deploy`
   - **Scope:** Select your account
   - **Expiration:** No Expiration (or choose a date)
4. Click **"Create Token"**
5. **⚠️ COPY THE TOKEN NOW** (you won't see it again!)

---

### **Step 6: Add Secrets to GitHub**

1. Go to your repository on GitHub
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**

**Add these 3 secrets:**

#### Secret 1: Vercel Token
```
Name: VERCEL_TOKEN
Value: [Paste your token from Step 5]
```

#### Secret 2: Organization ID
```
Name: VERCEL_ORG_ID
Value: [Paste orgId from Step 4]
```

#### Secret 3: Project ID
```
Name: VERCEL_PROJECT_ID
Value: [Paste projectId from Step 4]
```

**Verification:** You should see all 3 secrets listed with `••••••••`

---

### **Step 7: Verify Workflow File**

Check that `.github/workflows/vercel-deploy.yml` exists and contains:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - dev
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

### **Step 8: Deploy!**

Push your code:
```bash
git add .
git commit -m "Setup automated deployment"
git push origin dev
```

---

## 🎬 How It Works

### **Deployment Flow**

```
┌─────────────────────────────────────────────────────┐
│  1. You write code locally                          │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│  2. git push origin dev                             │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│  3. GitHub receives code                            │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│  4. GitHub Actions triggers workflow                │
│     - Checkout code                                 │
│     - Setup Node.js                                 │
│     - Install dependencies (npm ci)                 │
│     - Deploy to Vercel                              │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│  5. Vercel builds and deploys app                   │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│  6. App is live! 🎉                                 │
│     https://your-app.vercel.app                     │
└─────────────────────────────────────────────────────┘
```

### **Branch Strategy**

| Branch | Deployment Type | URL Type |
|--------|----------------|----------|
| `dev` | Preview | `https://your-app-git-dev-username.vercel.app` |
| `master` | Production | `https://your-app.vercel.app` |

---

## 👀 Monitoring Deployments

### **GitHub Actions Tab**
1. Go to: `https://github.com/doaa10/dynamic_form_builder/actions`
2. See all workflow runs
3. Click on any run to see detailed logs

**Status Indicators:**
- 🟡 Yellow dot = Running
- ✅ Green check = Success
- ❌ Red X = Failed

### **Vercel Dashboard**
1. Go to: https://vercel.com/dashboard
2. See all deployments
3. Click on deployment for details

---

## 🐛 Troubleshooting

### **Issue: Deployment Failed**

**Check 1: Secrets**
- Go to: Settings → Secrets → Actions
- Verify all 3 secrets exist
- Re-create if needed

**Check 2: Build Locally**
```bash
npm run build
```
If it fails locally, fix errors first.

**Check 3: Logs**
- GitHub: Actions tab → Click failed run
- Read error messages carefully

---

### **Issue: "Context access might be invalid"**

**Solution:** This warning is normal if secrets aren't set yet.
- Add secrets in GitHub Settings
- Re-run the workflow

---

### **Issue: Wrong Branch Deployed**

**Solution:** 
- Check workflow file: `on.push.branches`
- Must include your branch name
- Push to correct branch (`dev` or `master`)

---

### **Issue: Vercel Token Expired**

**Solution:**
1. Create new token at: https://vercel.com/account/tokens
2. Update `VERCEL_TOKEN` secret in GitHub
3. Re-run deployment

---

## 📚 Useful Commands

### **Local Deployment (Manual)**
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### **Check Project Info**
```bash
# Show linked project
vercel ls

# Show project settings
vercel inspect
```

### **Remove Link**
```bash
vercel unlink
```

---

## 🔐 Security Best Practices

✅ **DO:**
- Use GitHub Secrets for tokens (never commit them!)
- Set token expiration dates
- Use specific scopes for tokens
- Rotate tokens periodically

❌ **DON'T:**
- Commit `.vercel` folder (it's in `.gitignore`)
- Share tokens publicly
- Use same token for multiple projects
- Store tokens in code

---

## 📊 Workflow Breakdown

### **What Each Step Does:**

```yaml
# 1. Checkout Code
- uses: actions/checkout@v4
```
Downloads your repository code to GitHub's runner

```yaml
# 2. Setup Node.js
- uses: actions/setup-node@v4
  with:
    node-version: '20'
```
Installs Node.js v20 for building the app

```yaml
# 3. Install Dependencies
- run: npm ci
```
Installs all packages from `package-lock.json` (faster than `npm install`)

```yaml
# 4. Deploy to Vercel
- uses: amondnet/vercel-action@v25
```
Uses a pre-built action to deploy to Vercel

---

## 🎓 Key Concepts

### **GitHub Actions**
- **Workflow:** The `.yml` file that defines automation
- **Job:** A set of steps that run on the same runner
- **Step:** Individual task (checkout code, run command, etc.)
- **Runner:** Virtual machine where jobs run
- **Secrets:** Encrypted environment variables

### **Vercel Deployments**
- **Preview:** Temporary URL for testing (branches)
- **Production:** Main live URL (master branch)
- **Immutable:** Each deployment has unique URL
- **Atomic:** Deploy all or nothing (no partial deploys)

---



### **Commands Cheat Sheet**
```bash
# Setup
npm install -g vercel
vercel login
vercel link

# Deploy manually
vercel --prod

# Check status
vercel ls

# View logs
vercel logs [deployment-url]
```

---

## 🎉 Success Checklist

- [ ] Vercel CLI installed
- [ ] Logged into Vercel
- [ ] Project linked (`vercel link`)
- [ ] Got project IDs from `.vercel/project.json`
- [ ] Created Vercel token
- [ ] Added 3 secrets to GitHub (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
- [ ] Workflow file exists at `.github/workflows/vercel-deploy.yml`
- [ ] Pushed code to `dev` or `master` branch
- [ ] Deployment successful (green check in Actions tab)
- [ ] App is live on Vercel!

---


---

**Last Updated:** November 10, 2025
**Project:** Dynamic Form Builder
**Author:** Doaa

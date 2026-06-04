# Deploy to Vercel (secrets without committing `.env`)

Your local `.env` file is **gitignored** and must **never** be pushed to GitHub.  
On Vercel, you add the **same variable names** in the dashboard.

## 1. Push code to GitHub

From `JDInfra_website-main`:

```bash
git init
git add .
git commit -m "JD Infra website with enquiry backend"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Confirm `.env` is **not** in the commit (`git status` should not list `.env`).

## 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**
2. Import your GitHub repository
3. Root directory: `JDInfra_website-main` (if the repo root is the parent folder, set this in Vercel)
4. Framework: auto-detected or **Other**
5. Build Command: `npm run build` (from [`vercel.json`](vercel.json))
6. Install Command: `npm install`

## 3. Add environment variables (required)

**Project → Settings → Environment Variables**

Add each row below. Copy **values** from your local `.env` (same names, same values).

| Name | Environments | Notes |
|------|----------------|-------|
| `MONGODB_URI` | Production, Preview | Full Atlas connection string with real password |
| `MONGODB_DB_NAME` | Production, Preview | e.g. `jdinfra` |
| `MONGODB_COLLECTION` | Production, Preview | e.g. `enquiries` |
| `SMTP_HOST` | Production, Preview | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | Production, Preview | `587` |
| `SMTP_SECURE` | Production, Preview | `false` |
| `SMTP_USER` | Production, Preview | `jdinfradeveloper@gmail.com` |
| `SMTP_PASS` | Production, Preview | Gmail **App Password** only |
| `SMTP_FROM` | Production, Preview | `JD Infra Website <jdinfradeveloper@gmail.com>` |
| `CLIENT_EMAIL` | Production, Preview | `jdinfradeveloper@gmail.com` |

**Tips:**

- Do not wrap values in extra quotes unless your value contains spaces (Vercel usually handles `SMTP_FROM` fine as plain text).
- Mark secrets (`MONGODB_URI`, `SMTP_PASS`) as **Sensitive** in Vercel if offered.
- After adding variables, click **Redeploy** on the latest deployment.

## 4. MongoDB Atlas for production

In Atlas → **Network Access**, allow Vercel:

- Add `0.0.0.0/0` (demo), or
- Use Vercel’s IP ranges / serverless-friendly access for production later.

## 5. Verify live site

1. Open your Vercel URL → `/contact`
2. Submit a test enquiry
3. Check Atlas → `jdinfra` → `enquiries`
4. Check `jdinfradeveloper@gmail.com` inbox/spam

## 6. Local vs Vercel

| | Local | Vercel |
|---|--------|--------|
| Secrets file | `.env` (on your PC) | Dashboard env vars |
| In Git? | **No** (`.gitignore`) | **No** |
| Template | `.env.example` | Same names as table above |

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Form fails on live site | All 10 env vars set on Vercel + redeploy |
| Works locally, not on Vercel | Atlas Network Access; env vars only on Production |
| No email | `SMTP_PASS` = App Password; 2FA on Gmail |
| Build fails | Run `npm run build` locally; fix errors first |

See also [`BACKEND_SETUP.md`](BACKEND_SETUP.md) for Gmail App Password and Atlas setup.

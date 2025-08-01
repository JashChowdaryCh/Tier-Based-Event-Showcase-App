# 🎉 Tier-Based Event Showcase App

A fully functional tier-based event platform built with **Next.js 15**, **Tailwind CSS**, **Supabase**, and **Clerk** for authentication.

## 🚀 Live Demo

🔗 [View Deployed App](https://tier-based-event-showcase-app.vercel.app/)

After signing in, go to 👉 [`/events`](https://tier-based-event-showcase-app.vercel.app/events) to view the tier-based events.

## 📂 Features

- ✨ Auth with Clerk – Sign up & login flow
- 🏷️ Tier system – Free, Silver, Gold, Platinum
- 🔐 Tier-based access to events
- 🖼️ Event cards with images, dates & descriptions
- ⬆️ On-demand tier upgrade system
- ☁️ Supabase as the backend event store

---

## 🧑‍💻 Demo User Credentials

You can sign up with any email to test. To simulate different tiers, use one of these:

| Tier     | Email (sign up with)       | Initial Tier |
|----------|----------------------------|---------------|
| Free     | freeuser@example.com       | free          |
| Silver   | silveruser@example.com     | silver        |
| Gold     | golduser@example.com       | gold          |
| Platinum | platinumuser@example.com   | platinum      |

🔧 After signup, click one of the **Upgrade** buttons to simulate changing tiers.

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/JashChowdaryCh/Tier-Based-Event-Showcase-App.git
cd Tier-Based-Event-Showcase-App
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Environment Variables
Create a .env.local file and add your Supabase and Clerk credentials:
``` bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
### 4. Run Locally
```bash
npm run dev
```
App will be live at http://localhost:3000

### 🧾 Tech Stack

 - Frontend: Next.js 15, Tailwind CSS

 - Auth: Clerk.dev

 - Database: Supabase

- Deployment: Vercel

### 📦 Folder Structure (Simplified)
```bash
├── src
│   ├── app
│   │   ├── page.tsx           # Home page with Clerk auth
│   │   └── events/page.tsx    # Tier-based event list
│   │   └── api/upgrade-tier   # API route to upgrade tier
├── utils
│   └── supabase/client.ts     # Supabase client config
├── public                     # Assets
├── tailwind.config.js
├── next.config.js
└── ...
```

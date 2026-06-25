# YG WEB STUDIO

> **Modern Websites for Growing Businesses** — a premium, fully-responsive portfolio site for **Yash Gohel / YG Web Studio**.

Built with **React 19 + Vite + Tailwind CSS + Framer Motion**. Vercel-ready. SEO-optimised.

![YG Web Studio](public/logo.png)

---

## ✨ Features

- 🎨 Premium luxury dark + gold design (inspired by the YG Web Studio business card)
- 🎬 Smooth Framer Motion animations across every section
- 📱 Fully responsive — mobile, tablet, laptop, desktop
- 🧲 Animated gold particles + mouse spotlight background
- 🪟 Glassmorphism cards, gold accents and shimmer text
- 🚀 Lazy-loaded images, schema.org markup, OG + Twitter cards
- 📈 Animated counters for stats (`react-countup`)
- 🎠 Testimonials carousel with `SwiperJS`
- 📩 Contact form ready for **FormSubmit** (no backend needed)
- 💬 Floating WhatsApp / Call / Back-to-Top buttons
- 🔍 SEO: `robots.txt`, `sitemap.xml`, meta tags, JSON-LD
- 🗂️ Editable JSON data files for Portfolio / Services / FAQ / Testimonials

---

## 🛠️ Tech Stack

| Layer | Tech |
| --- | --- |
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Carousel | Swiper JS |
| Counters | React CountUp |
| Scroll | React Intersection Observer |
| Routing | React Router DOM |
| Deployment | Vercel |

---

## 📁 Folder Structure

```
yg-web-studio/
├── public/
│   ├── logo.png              ← YG logo (place yours here)
│   ├── business-card.png     ← reference business card
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           ← Hero, About, Services, Portfolio…
│   ├── data/                 ← projects.json, services.json, faqs.json…
│   ├── hooks/                ← useMouseSpotlight.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

> Or `yarn install` if you prefer Yarn.

### 2. Run locally

```bash
npm run dev
```

The site opens at **http://localhost:5173**.

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## 📝 Editing Content

All editable content lives inside `src/data/`:

| File | What it controls |
| --- | --- |
| `projects.json` | Portfolio cards (title, category, image, demo URL, tags) |
| `services.json` | 9 service cards |
| `features.json` | \"Why Choose Us\" cards |
| `testimonials.json` | Client testimonials |
| `faqs.json` | FAQ accordion |

To add a new portfolio project, just open `src/data/projects.json` and append:

```json
{
  \"id\": \"p4\",
  \"title\": \"Your Project\",
  \"category\": \"Business Website\",
  \"image\": \"/portfolio/your-project.png\",
  \"demoUrl\": \"https://your-site.com\",
  \"githubUrl\": \"https://github.com/yashgohel/your-repo\",
  \"tags\": [\"React\", \"Tailwind\"],
  \"description\": \"Short description shown on the card.\"
}
```

Put project screenshots inside `public/portfolio/` and reference them as `/portfolio/your-image.png`.

---

## 📧 Wiring the Contact Form (FormSubmit — no backend!)

The contact form already posts to:

```
https://formsubmit.co/hello.ygwebstudio@gmail.com
```

(see `src/components/Contact.jsx` → `FORM_ENDPOINT`)

**One-time activation:**

1. Deploy the site (or run locally) and submit the contact form once with any test data.
2. FormSubmit will email `hello.ygwebstudio@gmail.com` with a **confirmation link**.
3. Click the link — done. From now on every submission lands directly in your inbox.

To change the receiving email, edit `FORM_ENDPOINT` in `src/components/Contact.jsx`.

> 💡 Want spam protection? Open a free [FormSubmit](https://formsubmit.co) account and use the hashed endpoint instead of the plain email.

---

## 🌍 Deploy to Vercel

### Option A — One-click via GitHub

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import Project** → pick the repo.
3. Vercel auto-detects Vite. Click **Deploy**. Done.

### Option B — CLI

```bash
npm i -g vercel
vercel
```

The included `vercel.json` already handles SPA rewrites so deep links work.

---

## 🎨 Design System

| Token | Value |
| --- | --- |
| Background | `#071824` |
| Secondary | `#0E2A36` |
| Gold | `#D4AF37` |
| White | `#FFFFFF` |
| Gray | `#CFCFCF` |
| Heading font | Poppins |
| Body font | Manrope |
| Accent script | Dancing Script (for \"Let's Grow Together!\") |

These are all defined in `tailwind.config.js` and `src/index.css`.

---

## 📞 Contact

- **Yash Gohel** — Business Website Specialist
- 📞 +91 9409447069
- 📧 hello.ygwebstudio@gmail.com
- 🌐 [ygwebstudio.vercel.app](https://ygwebstudio.vercel.app)
- 📍 Pune, Maharashtra, India

---

© 2026 YG WEB STUDIO. All Rights Reserved.
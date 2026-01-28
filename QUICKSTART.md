# Blackboard Studio - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your site will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

The production-ready site will be in the `dist` folder.

---

## 📂 What's Included

✅ **5 Complete Pages**
- Home (Hero, Features, Testimonials, CTA)
- Services (All service offerings)
- Features (Product features showcase)
- About (Mission, Vision, Values)
- Contact (Form with validation)

✅ **Responsive Navigation**
- Desktop menu
- Mobile hamburger menu
- Smooth transitions

✅ **Modern Design**
- Professional education-focused aesthetic
- Tailwind CSS utility classes
- Custom color scheme
- Beautiful typography (DM Sans + Sora)

✅ **Smooth Animations**
- Framer Motion integration
- Subtle entrance animations
- Hover effects
- Page transitions

✅ **Production Ready**
- SEO-friendly structure
- Optimized performance
- Mobile-first responsive
- Cross-browser compatible

---

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Update Content
Edit files in `src/pages/`:
- `Home.jsx` - Homepage content
- `Services.jsx` - Services information
- `Features.jsx` - Feature descriptions
- `About.jsx` - About page content
- `Contact.jsx` - Contact details

### Update Branding
- Replace company name in all pages
- Update contact information
- Change logo (Navbar.jsx and Footer.jsx)
- Replace images with your own

---

## 📱 Test on Mobile

```bash
npm run dev -- --host
```

Access from your phone using your computer's IP address.

---

## 🚢 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Any Static Host
```bash
npm run build
# Upload 'dist' folder to your host
```

---

## 📞 Need Help?

- 📖 Read: `README.md` for full documentation
- 🚀 Deploy: `DEPLOYMENT.md` for detailed deployment guide
- 📧 Email: hello@blackboardstudio.in

---

## ✅ Before Deploying

- [ ] Replace all contact information
- [ ] Add real images
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Update meta tags
- [ ] Add analytics

---

**Built for Schools | Production Ready | Easy to Deploy**

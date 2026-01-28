# Blackboard Studio - Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts. Vercel will automatically detect Vite and configure everything.

**Advantages:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Advantages:**
- Simple drag-and-drop deployment
- Free tier with custom domains
- Automatic HTTPS
- Form handling built-in

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: DigitalOcean App Platform

1. Push code to GitHub
2. Connect GitHub repo to DigitalOcean App Platform
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy automatically

### Option 5: Traditional Web Hosting (cPanel, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist` folder to your web server's public directory (usually `public_html` or `www`)

3. Ensure your server is configured to serve single-page applications:
   - All routes should redirect to `index.html`
   - Example `.htaccess` for Apache:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Post-Deployment Checklist

### Essential
- [ ] Update all contact information (email, phone)
- [ ] Replace placeholder images with real school website screenshots
- [ ] Test all pages on mobile and desktop
- [ ] Verify all links work correctly
- [ ] Test contact form submission
- [ ] Add Google Analytics tracking code

### SEO
- [ ] Add favicon (already included)
- [ ] Create and add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Search Console
- [ ] Add Open Graph meta tags for social sharing
- [ ] Verify meta descriptions on all pages

### Performance
- [ ] Compress images (use tools like TinyPNG)
- [ ] Enable gzip compression on server
- [ ] Set up CDN for static assets
- [ ] Test with Google PageSpeed Insights
- [ ] Optimize Lighthouse scores

### Security
- [ ] Enable HTTPS (SSL certificate)
- [ ] Set up security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Regular dependency updates

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### DNS Configuration:
For most providers, add these records:
```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: [Your hosting provider's domain]
```

## Contact Form Backend

The contact form currently logs to console. For production:

### Option 1: Formspree
```javascript
// In Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Option 2: Netlify Forms
Add `netlify` attribute to form tag:
```jsx
<form onSubmit={handleSubmit} netlify>
```

### Option 3: Custom Backend
Set up your own API endpoint and update the form submission handler.

## Environment Variables

Create `.env` file for sensitive data:
```env
VITE_FORMSPREE_ID=your_form_id
VITE_GA_TRACKING_ID=your_tracking_id
VITE_API_URL=your_api_url
```

Access in code:
```javascript
const formId = import.meta.env.VITE_FORMSPREE_ID;
```

## Support

For deployment issues or questions:
- Email: hello@blackboardstudio.in
- Phone: +91 98765 43210

## Troubleshooting

**Issue: Routes don't work after deployment**
- Solution: Configure your hosting to redirect all routes to index.html

**Issue: Images not loading**
- Solution: Check that images are in the public folder or properly imported

**Issue: Build fails**
- Solution: Check Node.js version (requires 14+), clear node_modules and reinstall

**Issue: Slow loading**
- Solution: Optimize images, enable caching, use CDN

## Updates and Maintenance

To update content:
1. Make changes in the appropriate page files
2. Test locally with `npm run dev`
3. Build: `npm run build`
4. Deploy using your chosen method

For package updates:
```bash
npm update
npm outdated  # Check for outdated packages
```

---

Built with ❤️ for educational institutions across India.

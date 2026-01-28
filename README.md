# Blackboard Studio

Modern, production-ready website for Blackboard Studio - a startup that designs and develops websites for schools and educational institutions.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with React and Tailwind CSS
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO-Friendly**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized for speed and performance
- **Easy Navigation**: React Router for seamless page transitions

## 📦 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
blackboard-studio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Indigo/Blue shades (professional, trustworthy)
- **Accent**: Amber/Yellow shades (warmth, optimism)
- **Neutral**: Slate grays (clean, modern)

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: DM Sans (content)
- **Mono Font**: JetBrains Mono (code/technical)

### Components
- Reusable button styles (primary, secondary, outline)
- Card components with hover effects
- Form inputs with focus states
- Responsive navigation with mobile menu

## 📄 Pages

1. **Home** - Hero section, features, testimonials, CTA
2. **Services** - Detailed service offerings with descriptions
3. **Features** - Product features with benefits
4. **About** - Company mission, vision, and values
5. **Contact** - Contact form with validation

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Other Platforms
Build the project and deploy the `dist` folder to any static hosting service.

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any environment-specific configuration:

```env
# Example
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=hello@blackboardstudio.in
```

### Customization
- Update colors in `tailwind.config.js`
- Modify animations in `src/index.css`
- Replace placeholder images with actual school website screenshots
- Update contact information in components

## 📝 Content Updates

To update content:
1. Navigate to the relevant page in `src/pages/`
2. Modify text, images, or data arrays
3. Save and the development server will hot-reload

## 🎯 Production Checklist

- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Add Google Analytics
- [ ] Set up form submission backend
- [ ] Add favicon and meta images
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Add sitemap.xml
- [ ] Configure robots.txt
- [ ] Test on multiple devices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

This is a production website for Blackboard Studio. For changes or updates, please contact the development team.

## 📄 License

© 2024 Blackboard Studio. All rights reserved.

## 📞 Support

For questions or support:
- Email: hello@blackboardstudio.in
- Phone: +91 98765 43210
- Location: Jaipur, Rajasthan, India

# Packsi Landing Page

A modern, responsive landing page for Packsi - a platform connecting travelers with parcel delivery opportunities to earn extra income.

## 🌟 Features

- **Full Viewport Design**: No scrolling required, everything fits within the viewport
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Modern Animations**: Floating planes, clouds, and interactive hover effects
- **Accessibility Compliant**: Semantic HTML, proper contrast, and ARIA labels
- **Fast Loading**: Optimized images with Next.js Image component and lazy loading
- **Single CTA**: Direct Telegram channel integration

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Next.js Image** - Optimized image loading and performance

## 📁 Project Structure

```
PacksiLanding/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO meta tags
│   │   └── page.tsx            # Main landing page component
│   ├── images/                 # Image assets
│   │   ├── airplane.png
│   │   ├── bussiness.png
│   │   ├── pexels-konevi-3789871.jpg
│   │   └── travelerPerson.png
│   └── styles/
│       └── globals.css         # Global styles and Tailwind directives
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🛠️ Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The landing page is fully responsive and tested across:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Design Features

- **Gradient Background**: Sky-blue gradient representing travel and freedom
- **Floating Animations**: Subtle animations for planes and clouds
- **Interactive Elements**: Hover effects on the CTA button
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Visual Hierarchy**: Clear content structure with semantic HTML

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords, and author information
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **JSON-LD**: Structured data for search engines
- **Canonical URLs**: Proper URL canonicalization
- **Image Optimization**: Alt text and optimized loading
- **Mobile-Friendly**: Responsive design with proper viewport meta tag

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 📞 Contact & CTA

The landing page includes a single call-to-action button that directs users to the Packsi Telegram channel. Update the Telegram link in `src/app/page.tsx`:

```typescript
const handleTelegramClick = () => {
  window.open('https://t.me/your_actual_channel', '_blank', 'noopener,noreferrer')
}
```

## 🎯 Performance

- **Fast Loading**: Optimized images and minimal JavaScript
- **Lazy Loading**: Images load as needed
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Next.js Optimization**: Built-in performance optimizations

## 📄 License

This project is created for Packsi platform. All rights reserved.

---

**Packsi** - Connecting travelers worldwide, one parcel at a time. 🌍✈️📦
# Devasthanam - Next.js Website

A modern, responsive website for Devasthanam built with Next.js 14, featuring premium marble temple and pooja room showcases.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd devasthanam
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Static Export (for GitHub Pages, Netlify, etc.)
```bash
npm run build
npm run export
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `out`

### Deploy to GitHub Pages
1. Update `next.config.js` with your repository name
2. Run: `npm run build && npm run export`
3. Deploy the `out` folder to GitHub Pages

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS3 (Global Styles)
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel, Netlify, GitHub Pages

## 📁 Project Structure

```
devasthanam/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
```

## 🎨 Features

### Core Features
- **Server-Side Rendering (SSR)** - Better SEO and performance
- **Static Site Generation (SSG)** - Fast loading times
- **Image Optimization** - Automatic image optimization
- **TypeScript** - Type safety and better development experience
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### Pages Included
- **Homepage** - Hero, pricing, testimonials, contact form
- **About Us** - Company story, mission, team information
- **Contact** - Comprehensive contact form and information
- **Projects** - Portfolio showcase (ready to implement)
- **Services** - Service offerings (ready to implement)

### Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Links, contact info, locations
- **Forms** - Contact and consultation forms
- **Image Gallery** - Project showcases
- **Testimonials** - Customer reviews slider

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Next.js Config
The `next.config.js` is configured for:
- Static export capability
- Image optimization
- Asset prefix for deployment
- Base path configuration

## 📱 Responsive Design

- **Desktop**: 1200px+ (Optimal experience)
- **Tablet**: 768px - 1199px (Adapted layout)
- **Mobile**: 320px - 767px (Mobile-first design)

## 🎯 SEO Features

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - Ready for schema markup
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine directives

## 🚀 Performance Optimizations

- **Next.js Image Component** - Automatic optimization
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages
- **Font Optimization** - Google Fonts optimization
- **CSS Optimization** - Minified and optimized CSS

## 📊 Analytics & Monitoring

Ready to integrate:
- Google Analytics 4
- Google Search Console
- Hotjar or similar heatmap tools
- Performance monitoring

## 🔒 Security Features

- **Content Security Policy** - Ready to implement
- **HTTPS Enforcement** - Automatic with most hosts
- **Form Validation** - Client and server-side
- **XSS Protection** - Built-in Next.js security

## 🛠️ Development

### Adding New Pages
```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx
```

### Adding Components
```bash
# Create new component
touch components/NewComponent.tsx
```

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using CSS modules
- Responsive design with CSS Grid and Flexbox

## 📈 Performance Metrics

Target metrics:
- **Lighthouse Score**: 90+ (all categories)
- **Core Web Vitals**: Green scores
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔄 Updates & Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Security audit
npm audit

# Build check
npm run build
```

### Content Updates
- Update content in page components
- Add new images to `public` folder
- Update metadata in page files

## 📞 Support

For technical support or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Review deployment guides for your chosen platform
- Contact development team for custom modifications

## 📄 License

This project is created for Devasthanam. All rights reserved.

---

**Built with ❤️ using Next.js 14 - Modern, Fast, and SEO-Optimized**

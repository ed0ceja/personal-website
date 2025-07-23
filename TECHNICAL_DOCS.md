# 🔧 Technical Documentation - Personal Website

> **Advanced setup guide and technical specifications for developers**

---

## 🏗️ Architecture Overview

### **Technology Stack**
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Typography**: Google Fonts (Playfair Display, Inter, Fredoka One)
- **Maps**: Google Maps JavaScript API
- **Server**: Python HTTP Server (development)
- **Deployment**: GitHub Pages (production)

### **Design Patterns**
- **Mobile-First Responsive Design**
- **Progressive Enhancement**
- **Semantic HTML Structure**
- **BEM CSS Methodology** (partially implemented)
- **Modular JavaScript Architecture**

---

## 📁 Detailed File Structure

```
Personal Website/
├── .git/                    # Git version control
├── .DS_Store               # macOS system file
├── index.html              # Main entry point
├── README.md               # User-friendly documentation
├── SETUP_GUIDE.md          # Basic setup instructions
├── TECHNICAL_DOCS.md       # This file - technical specs
│
├── pages/                  # Application pages
│   ├── about.html         # Personal information & bio
│   ├── media.html         # Books, shows, entertainment
│   ├── photography.html   # Photo gallery & equipment
│   ├── places.html        # Interactive travel map
│   └── places-no-map.html # Static travel page (fallback)
│
├── images/                # Static media assets
│   ├── .DS_Store         # macOS system file
│   ├── eddy_sunset.jpeg  # Hero image (231KB, optimized)
│   ├── eddy-photo.jpg    # Profile photo (3.7MB, needs optimization)
│   ├── blog/             # Blog post images (empty, future use)
│   ├── media/            # Book covers, show posters
│   │   ├── .DS_Store
│   │   ├── Les Miserables.png (336KB)
│   │   └── 3 Body Problem.png (1.1MB)
│   ├── photography/      # Photography portfolio
│   │   └── sample1.jpg
│   ├── places/           # Travel destination photos
│   └── projects/         # Project screenshots (future use)
│
├── styles/               # CSS stylesheets
│   ├── main.css         # Core styles, layout, theme
│   └── pages.css        # Page-specific styles
│
└── scripts/             # JavaScript modules
    ├── main.js         # Core functionality, utilities
    ├── photography.js  # Gallery interactions
    └── places.js       # Google Maps integration
```

---

## 🎨 CSS Architecture

### **Design System Variables**
```css
:root {
  /* Color Palette - Cuban Sunset Theme */
  --bg-primary: #0a0a0a;          /* Deep black background */
  --bg-secondary: #1a1a1a;        /* Secondary dark */
  --text-primary: #ffffff;         /* Pure white text */
  --text-secondary: #cccccc;       /* Light gray text */
  --text-muted: #888888;           /* Muted gray */
  --accent-orange: #ff6b35;        /* Sunset orange */
  --accent-warm: #ffa500;          /* Warm orange */
  --border-subtle: #333333;        /* Subtle borders */
  --border-focus: #555555;         /* Focus states */
  
  /* Typography Scale */
  --font-size-xs: 0.75rem;        /* 12px */
  --font-size-sm: 0.875rem;       /* 14px */
  --font-size-base: 1rem;         /* 16px */
  --font-size-lg: 1.125rem;       /* 18px */
  --font-size-xl: 1.25rem;        /* 20px */
  --font-size-2xl: 1.5rem;        /* 24px */
  --font-size-3xl: 1.875rem;      /* 30px */
  --font-size-4xl: 2.25rem;       /* 36px */
  
  /* Spacing Scale */
  --space-xs: 0.25rem;            /* 4px */
  --space-sm: 0.5rem;             /* 8px */
  --space-md: 1rem;               /* 16px */
  --space-lg: 1.5rem;             /* 24px */
  --space-xl: 2rem;               /* 32px */
  --space-2xl: 3rem;              /* 48px */
  --space-3xl: 4rem;              /* 64px */
}
```

### **Typography Hierarchy**
```css
/* Font Families */
.font-display {
  font-family: 'Playfair Display', serif;
  /* Used for: Page titles, headings, elegant text */
}

.font-body {
  font-family: 'Inter', sans-serif;
  /* Used for: Body text, navigation, UI elements */
}

.font-comic {
  font-family: 'Fredoka One', cursive;
  /* Used for: Speech bubbles, playful elements */
}
```

### **Layout Components**

#### **Grid System**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}
```

#### **Responsive Breakpoints**
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 🗺️ Google Maps Integration

### **API Configuration**
```javascript
// File: scripts/places.js
const GOOGLE_MAPS_CONFIG = {
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  center: { lat: 40.7128, lng: -74.0060 }, // New York City default
  zoom: 2,
  styles: [
    // Custom dark theme map styling
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#1a1a1a"}]
    }
    // ... additional styling rules
  ]
}
```

### **Places Data Structure**
```javascript
const places = [
  {
    id: 'unique-place-id',
    name: 'Location Name',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: 'Brief description of the place',
    images: [
      'images/places/location1.jpg',
      'images/places/location2.jpg'
    ],
    visitDate: '2023-06-15',
    highlights: ['Highlight 1', 'Highlight 2'],
    category: 'city' | 'nature' | 'cultural' | 'adventure'
  }
  // ... more places
];
```

### **Map Initialization**
```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: GOOGLE_MAPS_CONFIG.center,
    zoom: GOOGLE_MAPS_CONFIG.zoom,
    styles: GOOGLE_MAPS_CONFIG.styles,
    disableDefaultUI: true,
    gestureHandling: 'cooperative'
  });
  
  places.forEach(place => {
    const marker = new google.maps.Marker({
      position: place.coordinates,
      map: map,
      title: place.name,
      icon: {
        url: 'custom-marker-icon.svg',
        scaledSize: new google.maps.Size(40, 40)
      }
    });
    
    const infoWindow = createInfoWindow(place);
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });
}
```

---

## 📸 Photography Gallery System

### **Image Optimization Requirements**
```javascript
const IMAGE_SPECS = {
  photography: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 85,
    format: 'JPEG',
    progressive: true
  },
  thumbnails: {
    maxWidth: 400,
    maxHeight: 300,
    quality: 75,
    format: 'JPEG'
  },
  hero: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 90,
    format: 'JPEG'
  }
};
```

### **Gallery Implementation**
```javascript
// File: scripts/photography.js
class PhotoGallery {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      lazyLoad: true,
      lightbox: true,
      columns: 3,
      gap: 16,
      ...options
    };
    this.init();
  }
  
  init() {
    this.createGrid();
    this.bindEvents();
    if (this.options.lazyLoad) {
      this.initLazyLoading();
    }
  }
  
  createGrid() {
    this.container.style.display = 'grid';
    this.container.style.gridTemplateColumns = 
      `repeat(${this.options.columns}, 1fr)`;
    this.container.style.gap = `${this.options.gap}px`;
  }
  
  // ... additional methods
}
```

---

## 📱 Media Integration Specifications

### **Book/Show Data Schema**
```javascript
const mediaItem = {
  id: 'unique-media-id',
  title: 'Media Title',
  type: 'book' | 'movie' | 'tv-show' | 'documentary',
  status: 'reading' | 'watching' | 'completed' | 'paused',
  cover: 'images/media/cover.jpg',
  author: 'Author Name',
  rating: 4.5, // 1-5 scale
  startDate: '2023-06-01',
  completedDate: '2023-06-15',
  review: 'Optional review text',
  genres: ['Fiction', 'Science Fiction'],
  externalLinks: {
    amazon: 'https://amazon.com/...',
    netflix: 'https://netflix.com/...',
    goodreads: 'https://goodreads.com/...'
  },
  notes: ['Note 1', 'Note 2']
};
```

### **Future API Integrations**

#### **Instagram Basic Display API**
```javascript
const INSTAGRAM_CONFIG = {
  clientId: 'your-instagram-app-id',
  clientSecret: 'your-instagram-app-secret',
  redirectUri: 'https://yourwebsite.com/auth/instagram',
  scopes: ['user_profile', 'user_media']
};

async function fetchInstagramPosts() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
  );
  return response.json();
}
```

#### **Goodreads API Alternative**
```javascript
// Since Goodreads API is deprecated, use Open Library API
async function fetchBookData(isbn) {
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
  );
  return response.json();
}
```

---

## 🚀 Performance Optimization

### **Critical Rendering Path**
```html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* ... */ }
  .header { /* ... */ }
</style>

<!-- Preload important resources -->
<link rel="preload" href="styles/main.css" as="style">
<link rel="preload" href="images/eddy_sunset.jpeg" as="image">

<!-- Async load non-critical resources -->
<link rel="stylesheet" href="styles/pages.css" media="print" onload="this.media='all'">
```

### **Image Optimization Strategy**
```javascript
// Lazy loading implementation
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

### **Bundle Analysis**
```bash
# Analyze current file sizes
du -sh images/*
du -sh styles/*
du -sh scripts/*

# Expected sizes:
# images/eddy-photo.jpg: 3.7MB (NEEDS OPTIMIZATION)
# images/eddy_sunset.jpeg: 231KB (OPTIMIZED)
# styles/main.css: ~15KB
# scripts/*.js: ~10KB total
```

---

## 🔒 Security Considerations

### **API Key Security**
```javascript
// ❌ DON'T expose API keys in client-side code
const API_KEY = 'your-secret-key';

// ✅ DO use environment variables or restricted keys
const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// ✅ DO restrict API keys to specific domains
// Google Cloud Console → APIs & Services → Credentials
// Add restrictions: yourwebsite.com, localhost:8000
```

### **Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.instagram.com;
">
```

---

## 🧪 Testing Strategy

### **Browser Testing Matrix**
```javascript
const BROWSER_SUPPORT = {
  desktop: {
    chrome: '>=90',
    firefox: '>=88',
    safari: '>=14',
    edge: '>=90'
  },
  mobile: {
    ios_safari: '>=14',
    chrome_android: '>=90',
    samsung_internet: '>=14'
  }
};
```

### **Performance Metrics**
```javascript
// Core Web Vitals targets
const PERFORMANCE_TARGETS = {
  LCP: '< 2.5s',      // Largest Contentful Paint
  FID: '< 100ms',     // First Input Delay
  CLS: '< 0.1',       // Cumulative Layout Shift
  FCP: '< 1.8s',      // First Contentful Paint
  TTI: '< 3.8s'       // Time to Interactive
};
```

---

## 📊 Analytics & Monitoring

### **Google Analytics 4 Setup**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### **Custom Event Tracking**
```javascript
// Track photo gallery interactions
function trackPhotoView(photoId) {
  gtag('event', 'photo_view', {
    event_category: 'engagement',
    event_label: photoId,
    value: 1
  });
}

// Track external link clicks
function trackExternalLink(url, linkType) {
  gtag('event', 'click', {
    event_category: 'external_link',
    event_label: url,
    link_type: linkType
  });
}
```

---

## 🔄 Deployment Pipeline

### **Development Workflow**
```bash
# 1. Local development
python3 -m http.server 8000

# 2. Version control
git add .
git commit -m "feat: add new feature"
git push origin main

# 3. GitHub Pages auto-deploy
# Automatically deploys from main branch
```

### **Production Checklist**
- [ ] Optimize all images (< 500KB each)
- [ ] Minify CSS and JavaScript
- [ ] Add proper meta tags for SEO
- [ ] Configure custom domain (if applicable)
- [ ] Test all external links
- [ ] Verify Google Maps functionality
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test performance metrics

---

## 🔧 Troubleshooting

### **Common Issues**

#### **Google Maps Not Loading**
```javascript
// Check for API key issues
function handleMapError() {
  console.error('Google Maps failed to load');
  document.getElementById('map').innerHTML = 
    '<p>Map temporarily unavailable. <a href="pages/places-no-map.html">View places list</a></p>';
}

window.gm_authFailure = handleMapError;
```

#### **Image Loading Issues**
```javascript
// Fallback for missing images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.src = 'images/placeholder.jpg';
    this.alt = 'Image not available';
  });
});
```

#### **Performance Issues**
```bash
# Check file sizes
ls -lah images/
# Optimize large images
# Consider using WebP format for better compression
```

---

## 📚 Additional Resources

### **Documentation**
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org/)

### **Tools**
- **Image Optimization**: TinyPNG, ImageOptim
- **Performance Testing**: Lighthouse, WebPageTest
- **Code Validation**: W3C Validator, CSS Validator
- **Browser Testing**: BrowserStack, LambdaTest

---

*Technical documentation maintained by Eddy Oceja - Last updated: July 2025* 🔧 
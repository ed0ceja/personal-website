# 🌅 Eddy Oceja's Personal Website

> *A Cuban-inspired sunset-themed personal website with a comic book aesthetic*

## 🚀 Quick Start

```bash
# Clone and navigate to the project
cd "Personal Website"

# Run locally (Python 3 required)
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

---

## 📋 Current Features

### ✅ **COMPLETED**

#### 🏠 **Homepage**
- Hero section with comic-style photo presentation
- Cuban sunset theme throughout
- Speech bubble with personal message: *"I'm Eddy - sunsets and ideas keep me going!"*
- Social media navigation (LinkedIn, GitHub, Instagram, Twitter, Substack)
- Responsive footer navigation

#### 👤 **About Page** (`/pages/about.html`)
- Personal story and background
- Interests section (sports, books, comedy, philosophy, family)
- Skills and technologies showcase
- Personal philosophy and values

#### 📚 **Media Page** (`/pages/media.html`)
- "Currently Consuming" section
- Book and show tracking with cover images
- Netflix integration links
- Visual grid layout for media items
- Currently features:
  - Les Misérables 
  - 3 Body Problem

#### 🗺️ **Places Page** (`/pages/places.html`)
- Interactive Google Maps integration
- Travel destinations showcase
- Photo galleries for each location
- Map-based navigation
- Alternative non-map version (`places-no-map.html`)

#### 📸 **Photography Page** (`/pages/photography.html`) 
- Image gallery system
- Equipment showcase
- Photo categorization
- Responsive grid layout

#### 🎨 **Design System**
- Cuban-inspired sunset color palette
- Comic book aesthetic elements
- Custom typography (Playfair Display + Inter + Fredoka One)
- Responsive mobile-first design
- Consistent navigation patterns

---

## 🔧 Current Setup

### **File Structure**
```
Personal Website/
├── index.html              # Main homepage
├── pages/                  # All site pages
│   ├── about.html         # ✅ Personal story & interests
│   ├── media.html         # ✅ Books, shows, content
│   ├── places.html        # ✅ Travel map & photos
│   ├── photography.html   # ✅ Photo gallery
│   └── places-no-map.html # ✅ Alternative places view
├── images/                # Media assets
│   ├── eddy_sunset.jpeg   # ✅ Main hero photo
│   ├── eddy-photo.jpg     # ✅ Additional photos
│   ├── media/            # ✅ Book/show covers
│   ├── photography/      # 📸 Photo gallery images
│   ├── places/          # 🗺️ Travel photos
│   └── projects/        # 💼 Project screenshots
├── styles/               # CSS styling
│   ├── main.css         # ✅ Core styles & theme
│   └── pages.css        # ✅ Page-specific styles
└── scripts/             # JavaScript functionality
    ├── main.js          # ✅ Core functionality
    ├── places.js        # ✅ Google Maps integration
    └── photography.js   # ✅ Gallery interactions
```

### **Social Media Integration**
- **LinkedIn**: [linkedin.com/in/ed0ceja](https://linkedin.com/in/ed0ceja)
- **GitHub**: [github.com/ed0ceja](https://github.com/ed0ceja)  
- **Instagram**: [instagram.com/ed0ceja](https://instagram.com/ed0ceja)
- **Twitter**: [twitter.com/ed0ceja](https://twitter.com/ed0ceja)
- **Substack**: [ed0ceja.substack.com](https://ed0ceja.substack.com)

---

## 📋 TODO & Roadmap

### 🚧 **IN PROGRESS**

#### 📝 **Blog System**
- [ ] Create blog landing page
- [ ] Blog post template system
- [ ] Category organization
- [ ] RSS feed integration
- [ ] Substack cross-posting automation

#### 💼 **Portfolio Section**  
- [ ] Project showcase gallery
- [ ] Case study templates
- [ ] Technology stack displays
- [ ] GitHub integration
- [ ] Live demo links

### 🔮 **FUTURE FEATURES**

#### 📱 **Enhanced Integrations**
- [ ] Instagram API for automatic photo feed
- [ ] Goodreads API for reading lists
- [ ] Spotify API for music preferences
- [ ] GitHub API for project activity

#### 🎯 **Content Expansion**
- [ ] Travel blog with detailed stories
- [ ] Photography categories (street, nature, portraits)
- [ ] Book reviews and recommendations
- [ ] Technical tutorials and guides
- [ ] Personal growth reflections

#### 🔧 **Technical Improvements**
- [ ] PWA capabilities (offline access)
- [ ] Search functionality
- [ ] Comment system for blog
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization

#### 🎨 **Design Enhancements**
- [ ] Dark/light theme toggle
- [ ] Animation improvements
- [ ] Mobile app feel
- [ ] Advanced comic book elements
- [ ] Interactive timeline

---

## 🛠️ Development

### **Adding New Content**

#### **Adding a New Book/Show**
1. Add cover image to `images/media/`
2. Update `pages/media.html` with new item
3. Include external links (Netflix, Amazon, etc.)

#### **Adding Travel Destinations**
1. Add photos to `images/places/`
2. Update `scripts/places.js` with coordinates
3. Test map functionality

#### **Adding Photography**
1. Add images to `images/photography/`
2. Update `pages/photography.html` gallery
3. Optimize image sizes (1200x800px recommended)

### **Customization**

#### **Colors** (`styles/main.css`)
```css
:root {
  --primary-bg: #0a0a0a;      /* Dark background */
  --text-color: #ffffff;       /* White text */
  --accent-color: #888;        /* Gray accents */
  --border-color: #333;        /* Border gray */
  --sunset-orange: #ff6b35;    /* Cuban sunset */
}
```

#### **Typography**
- **Headers**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)  
- **Accent**: Fredoka One (playful comic style)

---

## 📚 Documentation

- **Setup Guide**: See `SETUP_GUIDE.md` for technical details
- **API Configuration**: Google Maps API key setup
- **Deployment**: GitHub Pages instructions
- **Content Guidelines**: Writing and image standards

---

## 🎯 Personal Touches

### **Design Philosophy**
- **Cuban Inspiration**: Warm sunset colors and relaxed vibes
- **Comic Aesthetic**: Speech bubbles and illustrated elements
- **Minimalist Layout**: Clean, focused content presentation
- **Mobile-First**: Responsive design for all devices

### **Content Strategy**
- **Authentic Voice**: Personal stories and genuine interests
- **Visual Storytelling**: Photo-driven narratives
- **Community Focus**: Social engagement and sharing
- **Continuous Growth**: Regular updates and new content

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Run locally** with Python HTTP server
3. **Customize content** in each page
4. **Add your photos** to appropriate directories
5. **Update social links** in `index.html`
6. **Configure Google Maps** API (see SETUP_GUIDE.md)
7. **Deploy** to GitHub Pages

---

*Built with ❤️ by Eddy Oceja - Where sunsets meet code* 🌅 
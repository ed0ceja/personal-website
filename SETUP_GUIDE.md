# Personal Website Setup Guide

## 🗺️ Google Maps API Setup

### Step 1: Get Your Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Create credentials (API key)
5. Restrict the API key to your domain for security

### Step 2: Add Your API Key
Replace `YOUR_GOOGLE_MAPS_API_KEY` in `pages/places.html` with your actual API key:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap">
```

### Step 3: Customize Your Places
Edit `scripts/places.js` to add your actual travel destinations. Update the `places` array with your real locations.

## 📸 Image Setup

### Directory Structure
```
images/
├── blog/          # Blog post images
├── photography/   # Your photography gallery
├── places/        # Location photos
└── projects/      # Project screenshots
```

### Image Requirements
- **Photography**: 1200x800px recommended
- **Places**: 800x600px recommended  
- **Projects**: 1000x600px recommended
- **Blog**: 800x400px recommended

## 🎨 Content Personalization

### About Page (`pages/about.html`)
- Update your personal story
- Add your actual skills and technologies
- Customize the introduction text

### Blog Page (`pages/blog.html`)
- Replace `https://camilonova.substack.com` with your Substack URL
- Update featured posts with your actual content
- Customize newsletter signup form

### Portfolio Page (`pages/portfolio.html`)
- Add your actual projects
- Update GitHub and live demo links
- Customize skills and technologies

### Photography Page (`pages/photography.html`)
- Add your actual photos to the gallery
- Update photo descriptions and locations
- Customize equipment section

## 🔗 Social Media Links

Update the following in `index.html`:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Instagram: `https://instagram.com/yourusername`
- Twitter: `https://twitter.com/yourusername`
- Email: `hello@yourdomain.com`

## 📱 Instagram Integration (Optional)

For automatic Instagram feed integration, you'll need:
1. Instagram Basic Display API access
2. Access token for your Instagram account
3. JavaScript code to fetch and display recent posts

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🔧 Advanced Customizations

### Color Scheme
Customize colors in `styles/main.css`:
- Primary background: `#0a0a0a`
- Text color: `#ffffff`
- Accent color: `#888`
- Border color: `#333`

### Typography
Current fonts:
- Headers: 'Playfair Display' (serif)
- Body: 'Inter' (sans-serif)

## 📝 Content Ideas

### About Page
- Your coding journey
- What drives you
- Personal interests
- Career goals

### Blog Topics
- Technical tutorials
- Travel experiences
- Personal growth
- Industry insights

### Photography Categories
- Travel photography
- Street photography
- Nature photography
- Portrait photography

## 🎯 Next Steps

1. ✅ Set up Google Maps API key
2. ✅ Create image directories
3. 📝 Write your personal story
4. 📸 Add your photos
5. 🔗 Update social media links
6. 🚀 Deploy to GitHub Pages 
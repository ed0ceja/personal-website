# 🌐 Custom Domain Setup Guide - oceja.net

> **Step-by-step guide to connect your personal domain to GitHub Pages**

---

## 🚀 Quick Overview

You're setting up `oceja.net` to host your personal website using GitHub Pages. This guide will walk you through:

1. ✅ **CNAME Configuration** (Already completed)
2. 🔧 **DNS Configuration** with your domain registrar
3. ⚙️ **GitHub Pages Setup**
4. 🔒 **HTTPS/SSL Configuration**
5. ✅ **Testing & Verification**

---

## 📋 Prerequisites

- [x] Domain purchased: `oceja.net` 
- [x] GitHub repository with your website
- [x] CNAME file created in repository root
- [ ] Access to domain registrar's DNS settings

---

## 🔧 Step 1: DNS Configuration

### **Find Your Domain Registrar**
First, identify where you purchased `oceja.net`. Common registrars include:
- **Namecheap**
- **GoDaddy** 
- **Google Domains**
- **Cloudflare**
- **Domain.com**

### **DNS Records to Add**

#### **Option A: Using CNAME (Recommended for subdomains)**
If you want to use `www.oceja.net`:
```
Type: CNAME
Name: www
Value: [your-github-username].github.io
TTL: 3600 (or Auto)
```

#### **Option B: Using A Records (For apex domain)**
For `oceja.net` directly, add these A records:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank) 
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

#### **Option C: Both (Recommended)**
Set up both apex and www subdomain:
- Add all 4 A records above for `oceja.net`
- Add CNAME record for `www.oceja.net`

### **Common DNS Settings by Registrar**

#### **Namecheap**
1. Login to Namecheap account
2. Go to Domain List → Manage
3. Advanced DNS → Add New Record
4. Add the records above

#### **GoDaddy**
1. Login to GoDaddy account  
2. My Products → DNS
3. Add records in DNS Management

#### **Cloudflare**
1. Login to Cloudflare
2. Select your domain
3. DNS → Records → Add record

---

## ⚙️ Step 2: GitHub Pages Configuration

### **Enable GitHub Pages**
1. Go to your repository on GitHub
2. Settings → Pages (in left sidebar)
3. Source: Deploy from a branch
4. Branch: `main` (or `master`)
5. Folder: `/ (root)`

### **Configure Custom Domain**
1. In GitHub Pages settings
2. Custom domain: Enter `oceja.net`
3. Save (this will commit the CNAME file)

### **Repository Settings**
```bash
# Your repository should be public for GitHub Pages
# Repository name can be anything (doesn't need to be username.github.io)
```

---

## 🔒 Step 3: HTTPS/SSL Setup

### **Enable HTTPS**
1. In GitHub Pages settings
2. Check ✅ "Enforce HTTPS"
3. Wait for SSL certificate provisioning (can take 24 hours)

### **Certificate Verification**
GitHub automatically provides SSL certificates via Let's Encrypt once:
- DNS is properly configured
- Domain ownership is verified
- 24-48 hours have passed

---

## 🧪 Step 4: Testing & Verification

### **DNS Propagation Check**
```bash
# Check if DNS has propagated
nslookup oceja.net
dig oceja.net

# Should return GitHub Pages IP addresses
```

### **Online Tools**
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://whatsmydns.net/)

### **Test Your Site**
Once DNS propagates (can take 24-48 hours):
- Visit `https://oceja.net`
- Verify all pages work
- Check mobile responsiveness
- Test all navigation links

---

## 🎯 Expected Timeline

| Step | Time Required |
|------|---------------|
| CNAME file creation | ✅ Completed |
| DNS configuration | 5-10 minutes |
| DNS propagation | 1-48 hours |
| SSL certificate | 1-24 hours |
| **Total setup time** | **1-48 hours** |

---

## 🔧 Troubleshooting

### **Common Issues**

#### **DNS Not Propagating**
```bash
# Check current DNS settings
nslookup oceja.net 8.8.8.8
```
- Wait longer (up to 48 hours)
- Verify records are correct
- Try different DNS servers

#### **SSL Certificate Issues**
- Ensure DNS is fully propagated first
- GitHub Pages requires valid DNS before issuing SSL
- Check "Enforce HTTPS" is enabled

#### **404 Error on Custom Domain**
- Verify CNAME file contains `oceja.net`
- Check GitHub Pages source branch is correct
- Ensure index.html is in repository root

#### **Mixed Content Warnings**
Update any HTTP links to HTTPS:
```html
<!-- ❌ Don't use -->
<script src="http://example.com/script.js"></script>

<!-- ✅ Use instead -->
<script src="https://example.com/script.js"></script>
```

---

## 📱 Post-Setup Tasks

### **Update Social Media Links**
Update your website URL in:
- [ ] LinkedIn profile
- [ ] Twitter bio  
- [ ] Instagram bio
- [ ] GitHub profile
- [ ] Email signatures

### **SEO & Analytics**
```html
<!-- Add to all pages -->
<link rel="canonical" href="https://oceja.net/">
<meta property="og:url" content="https://oceja.net/">
```

### **Update Documentation**
- [ ] Update README.md with new domain
- [ ] Update SETUP_GUIDE.md
- [ ] Add domain info to TECHNICAL_DOCS.md

---

## 🚀 Advanced Configuration

### **Email Setup (Optional)**
Set up professional email `hello@oceja.net`:
- **Google Workspace** (paid)
- **Cloudflare Email Routing** (free)
- **ProtonMail** (custom domain)

### **Subdomain Options**
Consider future subdomains:
- `blog.oceja.net` - for blog
- `photos.oceja.net` - for photography
- `api.oceja.net` - for future API

### **Performance Optimization**
- Use Cloudflare for CDN (optional)
- Enable compression
- Optimize images for faster loading

---

## 📞 Domain Registrar Quick Links

### **Namecheap**
- DNS Management: [Domain List → Manage → Advanced DNS](https://ap.www.namecheap.com/domains/list/)

### **GoDaddy**  
- DNS Management: [My Products → DNS](https://dcc.godaddy.com/control/portfolio/)

### **Google Domains**
- DNS Settings: [domains.google.com](https://domains.google.com/)

### **Cloudflare**
- DNS Records: [dash.cloudflare.com](https://dash.cloudflare.com/)

---

## ✅ Checklist

- [x] CNAME file created (`oceja.net`)
- [ ] DNS A records configured (4 GitHub IPs)
- [ ] DNS CNAME record for www (optional)
- [ ] GitHub Pages custom domain set
- [ ] HTTPS enforcement enabled
- [ ] DNS propagation verified
- [ ] SSL certificate active
- [ ] All pages accessible via `oceja.net`
- [ ] Social media links updated
- [ ] Documentation updated

---

## 🎉 Success!

Once complete, your website will be live at:
- **Primary**: https://oceja.net
- **Alternative**: https://www.oceja.net (if configured)

Your Cuban sunset-themed personal website will be professionally hosted on your own domain! 🌅

---

*Domain setup guide for Eddy Oceja - Last updated: July 2025* 🌐 
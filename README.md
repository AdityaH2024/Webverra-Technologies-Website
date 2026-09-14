# Webverra Technologies — Official Multi-Page Business Website

Production-ready, ultra-fast, responsive, SEO-optimized, and conversion-focused multi-page website for **Webverra Technologies**, built faithfully against the approved Google Stitch visual design system (*Studio Editorial & Engineering*).

---

## 1. Project Overview & Architecture

```
Webverra Technologies Website/
├── index.html                               # Home / Primary conversion page
├── services.html                            # Services overview
├── website-development.html                 # Service: Website Development (Primary Focus)
├── ecommerce.html                           # Service: E-commerce Development
├── whatsapp-automation.html                 # Service: WhatsApp Automation (Honest Coming Soon)
├── app-development.html                     # Service: App Development (Honest Expanding)
├── work.html                                # Portfolio / Case Studies with Category Filters
├── maitri-foods.html                        # Case Study Detail: Maitri Foods
├── shiv-caterers.html                       # Case Study Detail: Shiv Caterers
├── mugdha-caterers.html                     # Case Study Detail: Mugdha Caterers
├── durga-caterers.html                      # Case Study Detail: Durga Caterers
├── about.html                               # About Webverra Technologies
├── contact.html                             # Project Discovery & Consultation Page
├── pricing.html                             # Transparent Investment & Scope Factors
├── privacy-policy.html                      # Standalone Privacy Policy
├── terms-and-conditions.html                # Standalone Terms & Conditions
├── refund-cancellation.html                 # Standalone Refund & Cancellation Policy
├── shipping-delivery.html                   # Standalone Digital Service Delivery Policy
├── 404.html                                 # Custom Branded 404 Error Page
├── css/
│   ├── style.css                            # Design tokens, typography, grid, components
│   ├── responsive.css                       # Breakpoint overrides (320px to 1440px+)
│   └── animations.css                       # Micro-interactions & reduced-motion support
├── js/
│   ├── main.js                              # Global interactions & portfolio filters
│   ├── navigation.js                        # Accessible mobile drawer & sticky header
│   ├── forms.js                             # Form validation, submit states & feedback
│   └── projects.js                          # Centralized project configuration data store
├── assets/
│   └── brand/
│       ├── webverra-icon.svg                # Header network logo
│       ├── webverra-full.svg                # Footer brand mark
│       └── webverra-favicon.svg             # Favicon SVG
├── robots.txt                               # Search engine crawling rules
├── sitemap.xml                              # XML sitemap with all 19 valid routes
└── README.md                                # Documentation & operational guide
```

---

## 2. How to Run Locally

Because the codebase is built with clean vanilla HTML5, CSS3, and JavaScript, it does not require any build steps or npm installations to preview.

### Option A: Python Built-in Server
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

### Option B: Node / npx serve
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 3. How to Update Client & Project Links

All portfolio projects are centralized in [`js/projects.js`](js/projects.js).

To update live demo URLs or case study details:
1. Open [`js/projects.js`](js/projects.js).
2. Locate the project entry (e.g. `maitri-foods`, `shiv-caterers`).
3. Replace `"DEMO_LINK_HERE"` with the live production URL:
   ```javascript
   {
     id: "maitri-foods",
     title: "Maitri Foods",
     liveUrl: "https://maitrifoods.com", // Updated live link
     ...
   }
   ```
4. Also update the corresponding link in the project detail HTML file (`maitri-foods.html`).

---

## 4. How to Update Business & Contact Information

Before public production launch, perform a global search & replace for the following placeholders:

| Placeholder | Description | Example Replacement |
|---|---|---|
| `BUSINESS_EMAIL` | Official contact email | `contact@webverra.com` |
| `BUSINESS_PHONE` | Direct business phone | `+91 98765 43210` |
| `BUSINESS_ADDRESS` | Operational physical location | `Plot 42, Tech Park, Pune, MH 411057` |
| `WHATSAPP_NUMBER` | Official WhatsApp number (in international format without `+` or spaces) | `919876543210` |
| `PRICE` | Starting baseline pricing | `₹24,999` / `$499` |

---

## 5. How to Insert the Future WhatsApp Automation Video

When the WhatsApp Automation demonstration recording is ready:
1. Prepare the video in **WebM** (preferred) and **MP4 / H.264** (fallback) formats.
2. Place the video files in `assets/video/` and a poster image in `assets/images/`.
3. Open `whatsapp-automation.html` and locate the `<div class="browser-viewport">` section in the **Future Video Showcase** section.
4. Replace the placeholder div with the optimized HTML5 video player:
   ```html
   <video controls playsinline preload="metadata" poster="assets/images/whatsapp-demo-poster.webp" style="width:100%; height:100%; object-fit:cover;">
     <source src="assets/video/whatsapp-automation-demo.webm" type="video/webm">
     <source src="assets/video/whatsapp-automation-demo.mp4" type="video/mp4">
     Your browser does not support HTML5 video.
   </video>
   ```

---

## 6. Contact Form Backend Integration

The contact form in [`js/forms.js`](js/forms.js) includes client-side validation and state management.

To wire it to an email API or serverless backend:
1. Connect to an endpoint such as Formspree, Resend, SendGrid, or AWS Lambda / Cloudflare Worker.
2. Replace the simulated network call in `js/forms.js` with:
   ```javascript
   const response = await fetch("https://api.webverra.com/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   if (!response.ok) throw new Error("Submission failed");
   ```
3. Store any secret API keys strictly in serverless environment variables — **never in frontend code**.

---

## 7. Deployment Instructions

### Vercel / Netlify / Cloudflare Pages
1. Connect your Git repository.
2. Set Build Command to **None** (or leave empty).
3. Set Publish/Output Directory to root (`./`).
4. Click **Deploy**.

### GitHub Pages
1. Go to repository **Settings > Pages**.
2. Select Source: `Deploy from a branch` (e.g. `main / root`).
3. Save.

---

## 8. Standards & Quality Compliance

- **Zero Fake Claims**: No fake testimonials, fake stats, fake revenue, or fake certifications.
- **Accessibility**: Semantic HTML5 landmarks, visible focus states, ARIA attributes, and `prefers-reduced-motion` support.
- **SEO & Performance**: Unique titles and meta descriptions per route, JSON-LD Schema markup, canonical links, Open Graph tags, XML Sitemap, and robots.txt.

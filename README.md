# Gemify - Product Showcase Website

A modern, responsive website designed to showcase your DIY electronics, development kits, and personalized or commercial electronic products. Built with clean HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Product Showcase**: Beautiful product cards for DIY kits, development boards, and commercial products
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Fixed header with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Animations**: Subtle animations and hover effects

## File Structure

```
Gemify_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Update Product Information

Edit the product cards in `index.html` to showcase your actual DIY kits, development boards, or commercial products:

```html
<div class="product-card">
    <div class="product-image">
        <i class="fas fa-robot"></i>  <!-- Change icon or use product image -->
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>     <!-- Change product name -->
        <p>Your product description</p> <!-- Change description -->
        <div class="product-features">
            <span>Feature 1</span>     <!-- Change features -->
            <span>Feature 2</span>
            <span>Feature 3</span>
        </div>
        <div class="product-price">$99.99</div> <!-- Change price if needed -->
    </div>
</div>
```

### 2. Add Product Images

Replace the Font Awesome icons with actual product images for your kits or boards:

```html
<div class="product-image">
    <img src="path/to/your/product-image.jpg" alt="Product Name">
</div>
```

Then update the CSS for `.product-image` in `styles.css`:

```css
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}
```

### 3. Update Contact Information

Edit the contact details in `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your-email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>Your Phone Number</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your Location</span>
</div>
```

### 4. Customize Colors

The website uses a blue color scheme. To change colors, update these CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--primary-light: #3b82f6;
--text-dark: #1e293b;
--text-light: #64748b;
--background-light: #f8fafc;
```

### 5. Update About Section

Edit the about section in `index.html` to tell your story as a DIY electronics designer, kit developer, or product creator:

```html
<div class="about-text">
    <h2>About Your Brand</h2>
    <p>Your story and mission: DIY electronics, custom development kits, or commercial product design...</p>
    <p>More details about your work, your approach to personalized or market-ready electronics...</p>
    <div class="about-stats">
        <div class="stat">
            <h3>50+</h3>
            <p>Kits & Products Developed</p>
        </div>
        <!-- Add more stats -->
    </div>
</div>
```

### 6. Social Media Links

Update the social media links in the footer:

```html
<div class="social-links">
    <a href="https://github.com/yourusername"><i class="fab fa-github"></i></a>
    <a href="https://youtube.com/yourchannel"><i class="fab fa-youtube"></i></a>
    <a href="https://instagram.com/yourprofile"><i class="fab fa-instagram"></i></a>
    <a href="https://twitter.com/yourhandle"><i class="fab fa-twitter"></i></a>
</div>
```

## Adding More Products

To add more products, copy the product card structure and paste it in the products grid. You can showcase DIY kits, dev boards, or commercial electronics:

```html
<div class="product-card">
    <div class="product-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="product-info">
        <h3>New Product</h3>
        <p>Product description</p>
        <div class="product-features">
            <span>Feature 1</span>
            <span>Feature 2</span>
            <span>Feature 3</span>
        </div>
        <div class="product-price">$Price</div>
    </div>
</div>
```

## Font Awesome Icons

The website uses Font Awesome icons. You can find more icons at [Font Awesome](https://fontawesome.com/icons) and replace the existing ones.

Common icon classes used:
- `fa-robot` - For robots/automation
- `fa-lightbulb` - For lighting products
- `fa-gamepad` - For gaming devices
- `fa-microchip` - For development boards/kits
- `fa-thermometer-half` - For sensors/monitoring
- `fa-satellite-dish` - For communication devices

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use compressed images (WebP format recommended)
2. **Minimize HTTP Requests**: Combine CSS and JS files for production
3. **Use CDN**: The website already uses CDN for Font Awesome and Google Fonts

## Deployment

To deploy your website:

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop your folder to Netlify
3. **Vercel**: Connect your GitHub repository to Vercel
4. **Traditional Hosting**: Upload files to your web server

## Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Formspree**: Add your Formspree endpoint
2. **Netlify Forms**: Add `netlify` attribute to the form
3. **Custom Backend**: Set up your own form processing

Example with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

## Support

If you need help customizing the website:

1. Check the HTML comments for guidance
2. Review the CSS classes for styling options
3. Test changes in a browser's developer tools
4. Validate your HTML and CSS

## License

This template is free to use and modify for your personal or commercial projects.

---

**Happy Building DIY Electronics!** 🚀 

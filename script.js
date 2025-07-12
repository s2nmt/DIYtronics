// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-placeholder');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style); 

// Product details data
const productArticles = {
    micromourse: {
        title: 'Micromourse',
        content: `
            <h2>Micromourse</h2>
            <p><strong>Micromourse</strong> is a compact and fast micromouse robot designed for maze solving competitions. It features a high-speed line following system, a precise sensor array, and fully customizable firmware for advanced users.</p>
            <ul>
                <li>High-speed line following with PID control</li>
                <li>Infrared sensor array for accurate wall detection</li>
                <li>STM32/Arduino compatible firmware</li>
                <li>Lightweight, modular chassis</li>
                <li>Rechargeable LiPo battery</li>
            </ul>
            <p>Perfect for students, hobbyists, and anyone interested in robotics competitions.</p>
        `
    },
    'rfid-nfc': {
        title: 'RFID & NFC Reader - IoT Device',
        content: `
            <h2>RFID & NFC Reader - IoT Device</h2>
            <p>This IoT device allows you to read RFID and NFC tags for smart access, automation, and asset tracking. It supports both RFID and NFC standards, and can be easily integrated into your smart home or industrial projects.</p>
            <ul>
                <li>Supports 13.56MHz RFID & NFC cards/tags</li>
                <li>WiFi connectivity for cloud integration</li>
                <li>REST API and MQTT support</li>
                <li>Compact, easy to install</li>
            </ul>
            <p>Great for smart door locks, attendance systems, and IoT automation.</p>
        `
    },
    'translate-mini': {
        title: 'App Translate Mini (Android)',
        content: `
            <h2>App Translate Mini (Android)</h2>
            <p><strong>App Translate Mini</strong> is a lightweight Android application for instant translation. It supports multiple languages, voice input, and works offline for your convenience.</p>
            <ul>
                <li>Instant translation between 50+ languages</li>
                <li>Voice input and output</li>
                <li>Offline translation support</li>
                <li>Minimal, user-friendly interface</li>
            </ul>
            <p>Ideal for travelers, students, and anyone needing quick translations on the go.</p>
        `
    },
    'desk-clock': {
        title: 'Smart Desk Clock',
        content: `
            <h2>Smart Desk Clock</h2>
            <p>This smart desk clock displays both the time and real-time weather information. It features a clear digital display, customizable alarms, and wireless weather updates.</p>
            <ul>
                <li>Large digital clock display</li>
                <li>Weather updates via WiFi</li>
                <li>Multiple alarm settings</li>
                <li>Modern, minimalist design</li>
            </ul>
            <p>Perfect for your workspace, bedside, or living room.</p>
        `
    },
    'game-console': {
        title: 'Handheld Game Console',
        content: `
            <h2>Handheld Game Console</h2>
            <p>This portable game console lets you enjoy classic games anywhere. It features a color display, built-in rechargeable battery, and a library of retro games.</p>
            <ul>
                <li>Preloaded with 500+ classic games</li>
                <li>2.8" color LCD screen</li>
                <li>Rechargeable battery (USB-C)</li>
                <li>Lightweight, pocket-sized</li>
            </ul>
            <p>Great for retro gaming fans and kids alike!</p>
        `
    }
};


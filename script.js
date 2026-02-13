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
            showNotification(translations[currentLanguage]['contact.form.error.required'], 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification(translations[currentLanguage]['contact.form.error.email'], 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = translations[currentLanguage]['contact.form.sending'];
        submitButton.disabled = true;
        
        setTimeout(() => {
            showNotification(translations[currentLanguage]['contact.form.success'], 'success');
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

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
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

// Language System
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.blog': 'Blog',
        
        // Hero Section
        'hero.title': 'Gemify Technology',
        'hero.subtitle': 'Discover modern technology devices and AIoT systems, professionally customized for each customer with precision.',
        'hero.cta': 'View Products',
        
        // Products Section
        'products.title': 'Featured Products',
        'products.micromouse.title': 'Micromouse',
        'products.micromouse.desc': 'A compact and fast micromouse robot for maze solving competitions.',
        'products.micromouse.feature1': 'High-speed line following',
        'products.micromouse.feature2': 'Precise sensor array',
        'products.micromouse.feature3': 'Customizable firmware',
        'products.micromouse.price': '$109.99',
        'products.micromouse.oldprice': '$129.99',
        'products.rfid.title': 'RFID & NFC Reader - IoT Device',
        'products.rfid.desc': 'An IoT device for reading RFID and NFC tags, perfect for smart access and automation.',
        'products.rfid.feature1': 'Supports RFID & NFC',
        'products.rfid.feature2': 'WiFi connectivity',
        'products.rfid.feature3': 'Easy integration',
        'products.rfid.price': '$38.99',
        'products.rfid.oldprice': '$49.99',
        'products.translate.title': 'Bilingual Book Reader  (Android)',
        'products.translate.desc': 'A bilingual book-reading app that helps users read and understand books in two languages.',
        'products.translate.feature1': 'Multiple languages',
        'products.translate.feature2': 'Voice input',
        'products.translate.feature3': 'Offline support',
        'products.translate.price': 'FREE',
        'products.translate.oldprice': '$4.99',
        'products.clock.title': 'Smart Desk Clock',
        'products.clock.desc': 'A smart desk clock that displays both time and real-time weather information.',
        'products.clock.feature1': 'Digital clock',
        'products.clock.feature2': 'Weather updates',
        'products.clock.feature3': 'Alarm function',
        'products.clock.price': '$9.99',
        'products.clock.oldprice': '$19.99',
        'products.console.title': 'Handheld Game Console',
        'products.console.desc': 'A portable game console for retro gaming fun anywhere.',
        'products.console.feature1': 'Built-in classic games',
        'products.console.feature2': 'Rechargeable battery',
        'products.console.feature3': 'Color display',
        'products.console.price': '$37.99',
        'products.console.oldprice': '$49.99',
        'products.details': 'Details',
        'products.buy': 'Buy Now',
        
        // About Section
        'about.title': 'About Gemify',
        'about.desc1': 'We are passionate about creating modern technology products from hardware to software that combine functionality with customer-specific design. Each product is custom-designed and tested to ensure the highest quality.',
        'about.desc2': 'From simple applications to complex AIoT systems, modern design that is easy to understand, easy to use, and expandable.',
        'about.stats.products': 'Products Created',
        'about.stats.support': 'Support',
        
        // Services Section
        'services.title': 'Our Services',
        'services.hardware.title': 'Hardware Development',
        'services.hardware.desc': 'Outsource hardware design and firmware development services for custom electronic devices and IoT solutions.',
        'services.software.title': 'IoT Software Design',
        'services.software.desc': 'Outsource IoT software solutions including app, website, and server development.',
        'services.products.title': 'Technology Products & IoT Platforms',
        'services.products.desc': 'Providing technology products and IoT platforms for your business needs.',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Let\'s Build Something Amazing',
        'contact.desc': 'Interested in a custom project or have questions about my products? I\'d love to hear from you!',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Thank you! Your message has been sent successfully.',
        'contact.form.error.required': 'Please fill in all required fields.',
        'contact.form.error.email': 'Please enter a valid email address.',
        
        // Footer
        'footer.tagline': 'Gemify Technology – Let\'s Build Something Amazing',
        'footer.quicklinks': 'Quick Links',
        'footer.follow': 'Follow Me',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2025 Gemify. All rights reserved.',
        
        // Language Switcher
        'lang.en': 'English',
        'lang.vi': 'Tiếng Việt'
    },
    vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.products': 'Sản phẩm',
        'nav.about': 'Giới thiệu',
        'nav.services': 'Dịch vụ',
        'nav.blog': 'Bài viết',
        
        // Hero Section
        'hero.title': 'Gemify Technology',
        'hero.subtitle': 'Khám phá các thiết bị công nghệ, hệ thống AIoT hiện đại được thiết kế chuyên môn hóa đối với từng khách hàng với độ tỉ mỉ, chính xác cao.',
        'hero.cta': 'Xem sản phẩm',
        
        // Products Section
        'products.title': 'Sản phẩm nổi bật',
        'products.micromouse.title': 'Micromouse',
        'products.micromouse.desc': 'Robot micromouse nhỏ gọn và nhanh chóng cho các cuộc thi giải mê cung.',
        'products.micromouse.feature1': 'Theo dõi đường cao tốc',
        'products.micromouse.feature2': 'Mảng cảm biến chính xác',
        'products.micromouse.feature3': 'Firmware tùy chỉnh',
        'products.micromouse.price': '2.999.000₫',
        'products.micromouse.oldprice': '3.499.000₫',
        'products.rfid.title': 'Máy đọc RFID & NFC - Thiết bị IoT',
        'products.rfid.desc': 'Thiết bị IoT để đọc thẻ RFID và NFC, hoàn hảo cho truy cập thông minh và tự động hóa.',
        'products.rfid.feature1': 'Hỗ trợ RFID & NFC',
        'products.rfid.feature2': 'Kết nối WiFi',
        'products.rfid.feature3': 'Tích hợp dễ dàng',
        'products.rfid.price': '899.000₫',
        'products.rfid.oldprice': '1.200.000₫',
        'products.translate.title': 'Ứng dụng Dịch thuật Mini (Android)',
        'products.translate.desc': 'Ứng dụng Android nhẹ cho dịch thuật tức thì khi di chuyển.',
        'products.translate.feature1': 'Nhiều ngôn ngữ',
        'products.translate.feature2': 'Nhập liệu bằng giọng nói',
        'products.translate.feature3': 'Hỗ trợ ngoại tuyến',
        'products.translate.price': 'FREE',
        'products.translate.oldprice': '49.000₫',
        'products.clock.title': 'Đồng hồ bàn thông minh',
        'products.clock.desc': 'Đồng hồ bàn thông minh hiển thị cả thời gian và thông tin thời tiết theo thời gian thực.',
        'products.clock.feature1': 'Đồng hồ kỹ thuật số',
        'products.clock.feature2': 'Cập nhật thời tiết',
        'products.clock.feature3': 'Chức năng báo thức',
        'products.clock.price': '259.000₫',
        'products.clock.oldprice': '399.000₫',
        'products.console.title': 'Máy chơi game cầm tay',
        'products.console.desc': 'Máy chơi game di động cho niềm vui chơi game retro ở mọi nơi.',
        'products.console.feature1': 'Game cổ điển tích hợp',
        'products.console.feature2': 'Pin sạc',
        'products.console.feature3': 'Màn hình màu',
        'products.console.price': '799.000₫',
        'products.console.oldprice': '1.100.000₫',
        'products.details': 'Chi tiết',
        'products.buy': 'Mua ngay',
        
        // About Section
        'about.title': 'Giới thiệu Gemify',
        'about.desc1': 'Chúng tôi đam mê tạo ra các sản phẩm công nghệ từ phần cứng đến phần mềm hiện đại kết hợp chức năng với thiết kế cụ thể hóa từng khách hàng. Mỗi sản phẩm được thiết kế riêng và kiểm tra để đảm bảo chất lượng cao nhất.',
        'about.desc2': 'Từ các ứng dụng đơn giản đến hệ thống AIoT phức tạp, thiết kế hiện đại dễ hiểu dễ sử dụng và mở rộng.',
        'about.stats.products': 'Sản phẩm đã tạo',
        'about.stats.support': 'Hỗ trợ',
        
        // Services Section
        'services.title': 'Các dịch vụ chúng tôi cung cấp',
        'services.hardware.title': 'Phát triển phần cứng',
        'services.hardware.desc': 'Thiết kế phần cứng và phát triển firmware cho các thiết bị điện tử tùy chỉnh và giải pháp IoT.',
        'services.software.title': 'Thiết kế phần mềm IoT',
        'services.software.desc': 'Giải pháp thiết kế, phát triển phần mềm IoT bao gồm app, website và server,..',
        'services.products.title': 'Sản phẩm công nghệ & Platform IoT',
        'services.products.desc': 'Cung cấp các sản phẩm công nghệ và các platform IoT cho nhu cầu của bạn.',
        
        // Contact Section
        'contact.title': 'Liên hệ',
        'contact.subtitle': 'Hãy cùng xây dựng điều gì đó tuyệt vời',
        'contact.desc': 'Quan tâm đến một dự án tùy chỉnh hoặc có câu hỏi về sản phẩm của tôi? Tôi rất muốn nghe từ bạn!',
        'contact.form.name': 'Tên của bạn',
        'contact.form.email': 'Email của bạn',
        'contact.form.subject': 'Chủ đề',
        'contact.form.message': 'Tin nhắn của bạn',
        'contact.form.send': 'Gửi tin nhắn',
        'contact.form.sending': 'Đang gửi...',
        'contact.form.success': 'Cảm ơn! Tin nhắn của bạn đã được gửi thành công.',
        'contact.form.error.required': 'Vui lòng điền vào tất cả các trường bắt buộc.',
        'contact.form.error.email': 'Vui lòng nhập địa chỉ email hợp lệ.',
        
        // Footer
        'footer.tagline': 'Gemify Technology – Hãy cùng xây dựng điều gì đó tuyệt vời',
        'footer.quicklinks': 'Liên kết nhanh',
        'footer.follow': 'Theo dõi tôi',
        'footer.contact': 'Liên hệ',
        'footer.copyright': '© 2025 Gemify. Tất cả quyền được bảo lưu.',
        
        // Language Switcher
        'lang.en': 'English',
        'lang.vi': 'Tiếng Việt'
    }
};

// Current language (default to Vietnamese)
let currentLanguage = localStorage.getItem('language') || 'vi';

// Language switcher functionality
function createLanguageSwitcher() {
    const navContainer = document.querySelector('.nav-container');
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <button class="lang-btn" data-lang="vi">
            <img src="img/flagVN.png" alt="VN Flag" class="flag-icon" style="height: 20px; vertical-align: middle; margin-right: 4px;">
            <span class="lang-text">VI</span>
        </button>
        <button class="lang-btn" data-lang="en">
            <span class="flag"><i class="fas fa-globe"></i></span>
            <span class="lang-text">EN</span>
        </button>
    `;
    // Insert before hamburger menu
    const hamburger = document.querySelector('.hamburger');
    navContainer.insertBefore(languageSwitcher, hamburger);
    // Add event listeners
    languageSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
    // Set initial active state
    const activeBtn = languageSwitcher.querySelector(`[data-lang="${currentLanguage}"]`);
    if (activeBtn) {
        languageSwitcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    // Update button content based on current language
    updateLanguageButtons();
}

function updateLanguageButtons() {
    const languageSwitcher = document.querySelector('.language-switcher');
    if (!languageSwitcher) return;
    const enBtn = languageSwitcher.querySelector('[data-lang="en"]');
    const viBtn = languageSwitcher.querySelector('[data-lang="vi"]');
    if (viBtn) {
        viBtn.innerHTML = `
            <img src="img/flagVN.png" alt="VN Flag" class="flag-icon" style="height: 20px; vertical-align: middle; margin-right: 4px;">
            <span class="lang-text">VI</span>
        `;
    }
    if (enBtn) {
        enBtn.innerHTML = `
            <span class="flag"><i class="fas fa-globe"></i></span>
            <span class="lang-text">EN</span>
        `;
    }
}

// Switch language function
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update page title
    document.title = lang === 'vi' ? 'Gemify - Technology' : 'Gemify - Technology';
    
    // Update active state of language buttons
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = languageSwitcher.querySelector(`[data-lang="${lang}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}

// Initialize language system
function initLanguageSystem() {
    createLanguageSwitcher();
    switchLanguage(currentLanguage);
}

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

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Nếu click vào nút mua thì không chuyển trang
        if (e.target.closest('.buy-btn')) return;
        
        // Tìm link trong product card
        const linkElement = card.querySelector('.product-image-link');
        if (linkElement && linkElement.href) {
            window.location.href = linkElement.href;
        }
    });
});


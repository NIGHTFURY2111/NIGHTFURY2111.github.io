// Theme management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Navigation management
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleActiveLink();
        this.handleMobileMenu();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Add background to navbar on scroll
        if (scrollY > 50) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        }

        // Highlight active section
        this.highlightActiveSection();
    }

    highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    handleActiveLink() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                this.navMenu.classList.remove('active');
                this.hamburger.classList.remove('active');
            });
        });
    }

    handleMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.hamburger.classList.remove('active');
            }
        });
    }
}

// Scroll animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.createObserver();
        this.observeElements();
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
    }

    observeElements() {
        const elements = document.querySelectorAll(
            '.skill-category, .project-card, .highlight-card, .gamejam-item, .about-text, .contact-info, .contact-form'
        );
        
        elements.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// Contact form handling
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Note: This is currently a demo - messages are not actually sent
            await this.simulateFormSubmission(data);
            this.showNotification('Demo: Message would be sent successfully! Currently this form is not connected to a backend service. To make it functional, connect to EmailJS, Netlify Forms, or a custom API.', 'info');
            this.form.reset();
        } catch (error) {
            this.showNotification('Demo: Form submission failed (this is just a demo).', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async simulateFormSubmission(data) {
        // This is a demo function - replace with actual form submission
        // Options for real implementation:
        // 1. EmailJS: https://www.emailjs.com/ (Free, sends to your email)
        // 2. Netlify Forms: https://docs.netlify.com/forms/setup/ (Free with Netlify hosting)
        // 3. Formspree: https://formspree.io/ (Free tier available)
        // 4. Custom backend API with email service
        
        console.log('Form data (demo):', data);
        console.log('To make this functional, implement one of the above services');
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });

        // Remove after delay
        setTimeout(() => {
            this.hideNotification(notification);
        }, 8000);
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }
}

// Typing animation for hero section
class TypingAnimation {
    constructor() {
        this.taglineElement = document.querySelector('.hero-tagline');
        this.originalText = '"Building interactive experiences through code, creativity, and collaboration."';
        this.init();
    }

    init() {
        if (this.taglineElement) {
            this.startTyping();
        }
    }

    async startTyping() {
        // Wait for page load
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.taglineElement.textContent = '';
        
        for (let i = 0; i < this.originalText.length; i++) {
            this.taglineElement.textContent += this.originalText[i];
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
}

// Performance optimizations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.optimizeScrolling();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    optimizeScrolling() {
        let ticking = false;

        function updateScrollElements() {
            // Update scroll-dependent elements here
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }
}

// Utility functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = Utils.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionality
    new ThemeManager();
    new Navigation();
    new ScrollAnimations();
    new TypingAnimation();
    new PerformanceOptimizer();

    // Add loading animation to page
    document.body.classList.add('loaded');

    // Handle external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add analytics tracking here if needed
            console.log('External link clicked:', link.href);
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                Utils.smoothScrollTo(targetElement);
            }
        });
    });

    // Add copy email functionality
    const emailElements = document.querySelectorAll('[href^="mailto:"]');
    emailElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const email = element.textContent || element.getAttribute('href').replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('Email copied to clipboard!');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Email copied to clipboard!');
            }
        });
    });

    // Simple toast notification function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-medium);
            z-index: 10000;
            transform: translateY(100px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Handle resume download tracking
    const resumeButtons = document.querySelectorAll('a[download]');
    resumeButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Resume downloaded');
            // Add analytics tracking here
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Toggle theme with Ctrl/Cmd + Shift + T
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            document.getElementById('themeToggle').click();
        }
    });

    // Mobile touch support for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        let touchStartTime;
        
        card.addEventListener('touchstart', () => {
            touchStartTime = Date.now();
            card.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', () => {
            const touchDuration = Date.now() - touchStartTime;
            // If it's a quick tap (not a scroll), toggle the active state
            if (touchDuration < 200) {
                card.classList.toggle('mobile-hover');
            }
            card.classList.remove('touch-active');
        });
        
        card.addEventListener('touchcancel', () => {
            card.classList.remove('touch-active');
        });
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Add CSS for notifications and loading states
const additionalStyles = `
    .notification {
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--bg-primary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-heavy);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border-left: 4px solid var(--primary-color);
        max-width: 400px;
        border: 1px solid var(--border-color);
    }
    
    .notification.success {
        border-left-color: #10b981;
    }
    
    .notification.error {
        border-left-color: #ef4444;
    }
    
    .notification.info {
        border-left-color: var(--accent-color);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification i {
        font-size: 1.25rem;
        flex-shrink: 0;
    }
    
    .notification.success i {
        color: #10b981;
    }
    
    .notification.error i {
        color: #ef4444;
    }
    
    .notification.info i {
        color: var(--accent-color);
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        flex-shrink: 0;
    }
    
    .notification-close:hover {
        color: var(--text-primary);
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .nav-menu.active {
        display: flex;
        position: fixed;
        top: 4rem;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        flex-direction: column;
        padding: 2rem;
        box-shadow: var(--shadow-medium);
        z-index: 999;
        border-bottom: 1px solid var(--border-color);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .notification {
            left: 1rem;
            right: 1rem;
            top: 1rem;
            max-width: none;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

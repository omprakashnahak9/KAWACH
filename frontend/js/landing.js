// Import WebGL Background
import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js'

// Landing Page Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize WebGL Background
    const canvas = document.getElementById('webgl-canvas');
    if (canvas) {
        const bg = Grid1Background(canvas);
        
        // Customize the grid colors to match the Defence Green theme
        if (bg && bg.grid) {
            // Set initial colors that match the Defence Green theme
            bg.grid.setColors([0x556B2F, 0x445622, 0x1a1b1e]);
            
            // Set lighting to complement the Defence Green theme
            if (bg.grid.light1) {
                bg.grid.light1.color.set(0x556B2F);
                bg.grid.light1.intensity = 300;
            }
            if (bg.grid.light2) {
                bg.grid.light2.color.set(0x6B8E23);
                bg.grid.light2.intensity = 150;
            }
            
            // Optional: Add subtle color animation with Defence Green variations
            setInterval(() => {
                if (bg.grid && bg.grid.light1 && bg.grid.light2) {
                    const defenceGreenVariations = [0x556B2F, 0x6B8E23, 0x445622];
                    const randomGreen = defenceGreenVariations[Math.floor(Math.random() * defenceGreenVariations.length)];
                    bg.grid.light1.color.set(randomGreen);
                    bg.grid.light1.intensity = 250 + Math.random() * 100;
                    bg.grid.light2.intensity = 100 + Math.random() * 100;
                }
            }, 5000); // Change every 5 seconds
        }
    }
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        function updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            
            scrollProgress.style.width = Math.min(scrollPercentage, 100) + '%';
        }

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial call
    }

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        function updateNavbarBackground() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(32, 33, 35, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(32, 33, 35, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }

        window.addEventListener('scroll', updateNavbarBackground);
        updateNavbarBackground(); // Initial call
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animatedElements = [
        { selector: '.hero-content', animation: 'fade-in' },
        { selector: '.hero-visual', animation: 'slide-in-right' },
        { selector: '.feature-card', animation: 'fade-in' },
        { selector: '.security-text', animation: 'slide-in-left' },
        { selector: '.security-visual', animation: 'slide-in-right' },
        { selector: '.step', animation: 'scale-in' },
        { selector: '.cta-content', animation: 'fade-in' }
    ];

    animatedElements.forEach(({ selector, animation }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add(animation);
            // Add staggered delay for multiple elements
            if (elements.length > 1) {
                element.style.transitionDelay = `${index * 0.1}s`;
            }
            observer.observe(element);
        });
    });

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }

        window.addEventListener('scroll', updateParallax);
    }

    // Counter Animation for Stats (if you want to add numbers)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Feature Card Hover Effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button Click Effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Typing Effect for Hero Title (Optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow-lg);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    function toggleScrollToTop() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }

    window.addEventListener('scroll', toggleScrollToTop);

    // Lazy Loading for Images (if you add images later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        updateScrollProgress();
        updateNavbarBackground();
        updateParallax();
        toggleScrollToTop();
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // Keyboard Navigation Support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Focus management for accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    function trapFocus(element) {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Initialize focus trap for mobile menu when active
    if (navMenu) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (navMenu.classList.contains('active')) {
                        trapFocus(navMenu);
                    }
                }
            });
        });
        
        observer.observe(navMenu, { attributes: true });
    }

    console.log('KAWACH C2C Landing Page initialized successfully! 🚀');
});
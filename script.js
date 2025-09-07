// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const consultationForm = document.getElementById('consultationForm');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (!formObject.fullName || !formObject.email || !formObject.city || !formObject.userType) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message (in a real application, you would send this to a server)
            alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
            
            // Reset form
            this.reset();
        });
    }
});

// Testimonials Slider (Simple Auto-rotate)
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 1) {
        // Hide all testimonials except the first one initially
        testimonialCards.forEach((card, index) => {
            if (index !== 0) {
                card.style.opacity = '0.5';
                card.style.transform = 'scale(0.95)';
            }
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            // Reset current testimonial
            testimonialCards[currentTestimonial].style.opacity = '0.5';
            testimonialCards[currentTestimonial].style.transform = 'scale(0.95)';
            
            // Move to next testimonial
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            // Highlight new testimonial
            testimonialCards[currentTestimonial].style.opacity = '1';
            testimonialCards[currentTestimonial].style.transform = 'scale(1)';
        }, 5000);
    }
});

// Scroll Animation for Elements
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.pricing-card, .temple-card, .step, .testimonial-card, .project-card');
    
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Counter Animation for Stats
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    const animateCounter = (element, target) => {
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number with + suffix
            if (target >= 1000) {
                element.textContent = Math.floor(current / 100) * 100 + '+';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    };
    
    // Intersection Observer for stats section
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItems = entry.target.querySelectorAll('.stat-item h3');
                
                statItems.forEach(item => {
                    const text = item.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    
                    if (number) {
                        item.textContent = '0+';
                        animateCounter(item, number);
                    }
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Navbar Background Change on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Pricing Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Search Functionality (for future implementation)
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length > 2) {
                // In a real application, this would make an API call
                // For now, we'll just show a placeholder
                searchResults.innerHTML = '<p>Search functionality coming soon...</p>';
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error Handling for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/f0f0f0/666?text=Image+Not+Available';
        });
    });
});

// Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Debounce function for scroll events
    function debounce(func, wait) {
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
    
    // Optimized scroll handler
    const optimizedScrollHandler = debounce(function() {
        // Any scroll-based animations or updates go here
    }, 16); // ~60fps
    
    window.addEventListener('scroll', optimizedScrollHandler);
});

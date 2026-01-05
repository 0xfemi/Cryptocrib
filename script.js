// Animated words rotation with typewriter effect (like moonrepublic.io)
const words = ['Crypto trading', 'NFTs', 'Web3', 'Defi'];
let currentWordIndex = 0;
let isDeleting = false;
let currentText = '';
let typeSpeed = 100;
let deleteSpeed = 50;
let pauseTime = 2000;

function typeWriter() {
    const animatedWordElement = document.querySelector('.animated-words .word-active');
    if (!animatedWordElement) return;
    
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        // Delete characters
        currentText = currentWord.substring(0, currentText.length - 1);
        animatedWordElement.textContent = currentText;
        
        if (currentText === '') {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeSpeed = 100; // Reset typing speed
        } else {
            setTimeout(typeWriter, deleteSpeed);
            return;
        }
    } else {
        // Type characters
        currentText = currentWord.substring(0, currentText.length + 1);
        animatedWordElement.textContent = currentText;
        
        if (currentText === currentWord) {
            // Word is complete, pause before deleting
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
            return;
        }
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start word rotation after page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedWordElement = document.querySelector('.animated-words .word-active');
    if (animatedWordElement) {
        // Start typing the first word
        currentText = '';
        currentWordIndex = 0;
        isDeleting = false;
        typeWriter();
    }
    
    // Footer animation
    const footerWordElement = document.querySelector('.animated-words-footer .word-active-footer');
    if (footerWordElement) {
        let footerCurrentText = '';
        let footerCurrentWordIndex = 0;
        let footerIsDeleting = false;
        const footerTypeSpeed = 100;
        const footerDeleteSpeed = 50;
        const footerPauseTime = 2000;
        
        function footerTypeWriter() {
            if (!footerWordElement) return;
            
            const currentWord = words[footerCurrentWordIndex];
            
            if (footerIsDeleting) {
                // Delete characters
                footerCurrentText = currentWord.substring(0, footerCurrentText.length - 1);
                footerWordElement.textContent = footerCurrentText;
                
                if (footerCurrentText === '') {
                    footerIsDeleting = false;
                    footerCurrentWordIndex = (footerCurrentWordIndex + 1) % words.length;
                } else {
                    setTimeout(footerTypeWriter, footerDeleteSpeed);
                    return;
                }
            } else {
                // Type characters
                footerCurrentText = currentWord.substring(0, footerCurrentText.length + 1);
                footerWordElement.textContent = footerCurrentText;
                
                if (footerCurrentText === currentWord) {
                    // Word is complete, pause before deleting
                    footerIsDeleting = true;
                    setTimeout(footerTypeWriter, footerPauseTime);
                    return;
                }
            }
            
            setTimeout(footerTypeWriter, footerTypeSpeed);
        }
        
        // Start footer typing animation
        footerCurrentText = '';
        footerCurrentWordIndex = 0;
        footerIsDeleting = false;
        footerTypeWriter();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
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
    const animateElements = document.querySelectorAll('.benefit-card, .step-card, .crypto-item, .faq-item, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = [
    {
        text: '"Cryptix makes crypto trading effortless. Fast transactions, low fees, and a sleek interface—exactly what I needed."',
        name: 'Alex M.',
        role: 'Blockchain Analyst at NovaChain'
    },
    {
        text: '"The security features give me complete peace of mind. I can trade with confidence knowing my assets are protected."',
        name: 'Sarah K.',
        role: 'Crypto Investor'
    },
    {
        text: '"Best platform I\'ve used. The interface is intuitive and transactions are lightning fast. Highly recommend!"',
        name: 'Michael T.',
        role: 'Day Trader'
    }
];

function updateTestimonial(index) {
    const testimonialCard = document.querySelector('.testimonial-card');
    const testimonialText = testimonialCard.querySelector('.testimonial-text');
    const authorName = testimonialCard.querySelector('.author-name');
    const authorRole = testimonialCard.querySelector('.author-role');
    const counter = testimonialCard.querySelector('.testimonial-counter');
    
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        testimonialText.textContent = testimonials[index].text;
        authorName.textContent = testimonials[index].name;
        authorRole.textContent = testimonials[index].role;
        counter.textContent = `${index + 1}/${testimonials.length}`;
        
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateY(0)';
    }, 300);
}

document.querySelector('.testimonial-btn.next')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

document.querySelector('.testimonial-btn.prev')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
}, 5000);

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            const content = faq.querySelector('.faq-content');
            if (content) {
                content.style.maxHeight = null;
            }
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            this.classList.add('active');
            // You can add content expansion here if needed
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(8, 7, 14, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.backgroundColor = 'rgba(8, 7, 14, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate crypto prices (simulate real-time updates)
function animateCryptoPrices() {
    const cryptoItems = document.querySelectorAll('.crypto-item');
    
    cryptoItems.forEach(item => {
        const changeElement = item.querySelector('.change');
        if (changeElement) {
            // Randomly update prices slightly
            const isPositive = Math.random() > 0.5;
            const change = (Math.random() * 2).toFixed(2);
            
            changeElement.textContent = `${isPositive ? '+' : '-'}%${change}`;
            changeElement.className = `change ${isPositive ? 'positive' : 'negative'}`;
            
            // Add pulse animation
            changeElement.style.animation = 'pulse 0.5s ease';
        }
    });
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Update prices every 5 seconds
setInterval(animateCryptoPrices, 5000);

// Button hover effects
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Stagger animation for crypto list
const cryptoList = document.querySelector('.crypto-list');
if (cryptoList) {
    const items = cryptoList.querySelectorAll('.crypto-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed for smaller screens)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    
    if (window.innerWidth <= 809) {
        menuToggle.style.display = 'block';
        document.querySelector('.nav-container').prepend(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Add smooth reveal animation for sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for revealed state
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(revealStyle);

// Cursor effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .crypto-item, .benefit-card, .step-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
        document.body.style.cursor = 'pointer';
    });
    
    el.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default';
    });
});

console.log('Cryptix website loaded successfully!');


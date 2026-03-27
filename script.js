/* ========================================
   Clevver — Permanent Encrypted Document Storage
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // Global Footer
    // ========================================
    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) {
        siteFooter.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <img src="https://get.clevver.org/786a334a9bc7509686ada1990b43777366ef28031a0944d296b3e9172fbb0cab.png" alt="Clevver" class="logo-img">
                    </a>
                    <p class="footer-tagline">Permanent encrypted storage for your AI work. Save once, access forever.</p>
                    <div class="footer-contact">
                        <a href="mailto:sales@clevver.org">sales@clevver.org</a>
                        <a href="tel:+1-855-335-7284">(855) 335-7284</a>
                        <a href="https://bsky.app/profile/clevver.org" target="_blank" rel="noopener noreferrer">Join us on Bluesky</a>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="index.html#solutions">Features</a></li>
                            <li><a href="index.html#security">Security</a></li>
                            <li><a href="index.html#compliance">Compliance</a></li>
                            <li><a href="index.html#pricing">Pricing</a></li>
                            <li><a href="index.html#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="history.html">History</a></li>
                            <li><a href="index.html#security">Security</a></li>
                            <li><a href="https://stats.uptimerobot.com/jBmX1iYk3l/" target="_blank" rel="noopener noreferrer">Status</a></li>
                            <li><a href="#" class="open-typeform">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="https://docs.getlynx.io/clevver/clevver-terms-of-service-agreement" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                            <li><a href="hipaa.html">HIPAA Notice</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="copyrightYear"></span> Deliverypath Wireless, LLC. All rights reserved.</p>
                <div class="footer-badges">
                    <span class="badge">AES-256 Encrypted</span>
                    <span class="badge">Permanent Storage</span>
                </div>
            </div>
        </div>
    </footer>`;
    }

    // ========================================
    // Dark Mode Toggle
    // ========================================
    document.querySelectorAll('.dark-mode-toggle').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    });

    // ========================================
    // Dynamic Copyright Year
    // ========================================
    document.getElementById('copyrightYear').textContent = new Date().getFullYear();

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            if (link.classList.contains('dark-mode-toggle')) return;
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Navigation Scroll Effect
    // ========================================
    const nav = document.getElementById('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // ========================================
    // Scroll Reveal Animations
    // ========================================
    const revealElements = document.querySelectorAll('.solution-card, .compliance-card, .testimonial-card, .pricing-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        revealObserver.observe(el);
    });
    
    // ========================================
    // Typeform Popup
    // ========================================
    const TYPEFORM_ID = 'm04KvmJl';

    function openTypeform() {
        if (window.tf) {
            window.tf.createPopup(TYPEFORM_ID, { size: 80 }).open();
        }
    }

    document.querySelectorAll('.open-typeform').forEach(btn => {
        btn.addEventListener('click', openTypeform);
    });
    
    // ========================================
    // FAQ Accordion
    // ========================================
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(openItem => {
                openItem.classList.remove('active');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                openItem.querySelector('.faq-answer').style.display = 'none';
            });

            // Open clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                answer.style.display = 'block';
            }
        });
    });

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%cClevver', 'font-size: 24px; font-weight: bold; color: #184389;');
    console.log('%cPermanent encrypted document storage for professionals.', 'font-size: 14px; color: #6b7280;');
    console.log('%c🔒 Store once. Access forever.', 'font-size: 12px; color: #059669;');
});

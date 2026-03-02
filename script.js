/* ========================================
   Clevver — Permanent Encrypted Document Storage
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
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
    // Cost Comparison Slider
    // ========================================
    const slider = document.getElementById('monthlySpend');
    if (slider) {
        const INFLATION_RATE = 0.03;
        const CLEVVER_PRICE = 99;

        const sliderValueEl = document.getElementById('sliderValue');
        const legacyMonthlyEl = document.getElementById('legacyMonthly');
        const legacyYear1El = document.getElementById('legacyYear1');
        const legacyYear5El = document.getElementById('legacyYear5');
        const legacyTotalEl = document.getElementById('legacyTotal');
        const clevverOnetimeEl = document.getElementById('clevverOnetime');
        const clevverYear1El = document.getElementById('clevverYear1');
        const clevverYear5El = document.getElementById('clevverYear5');
        const clevverTotalEl = document.getElementById('clevverTotal');
        const savingsAmountEl = document.getElementById('savingsAmount');

        function formatCurrency(n) {
            return '$' + Math.round(n).toLocaleString('en-US');
        }

        function calcLegacyCumulative(monthly, years) {
            var total = 0;
            for (var y = 0; y < years; y++) {
                total += 12 * monthly * Math.pow(1 + INFLATION_RATE, y);
            }
            return total;
        }

        function updateComparison() {
            var monthly = parseInt(slider.value, 10);
            sliderValueEl.textContent = monthly;

            var year1 = calcLegacyCumulative(monthly, 1);
            var year5 = calcLegacyCumulative(monthly, 5);
            var year10 = calcLegacyCumulative(monthly, 10);

            legacyMonthlyEl.textContent = '$' + monthly + '/mo';
            legacyYear1El.textContent = formatCurrency(year1);
            legacyYear5El.textContent = formatCurrency(year5);
            legacyTotalEl.textContent = formatCurrency(year10);

            clevverOnetimeEl.textContent = formatCurrency(CLEVVER_PRICE);
            clevverYear1El.textContent = formatCurrency(CLEVVER_PRICE);
            clevverYear5El.textContent = formatCurrency(CLEVVER_PRICE);
            clevverTotalEl.textContent = formatCurrency(CLEVVER_PRICE);

            var savings = year10 - CLEVVER_PRICE;
            savingsAmountEl.textContent = 'Save over ' + formatCurrency(savings);
        }

        slider.addEventListener('input', updateComparison);
        updateComparison();
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%cClevver', 'font-size: 24px; font-weight: bold; color: #184389;');
    console.log('%cPermanent encrypted document storage for professionals.', 'font-size: 14px; color: #6b7280;');
    console.log('%c🔒 Store once. Access forever.', 'font-size: 12px; color: #059669;');
});

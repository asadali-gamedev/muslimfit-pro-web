/**
 * MuslimFit Pro - Web Version
 * Single Page Interaction Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Navbar & Scroll Effects
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTopBtn = createBackToTop();
    const scrollProgress = createScrollProgress();

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Navbar transformation
        if (scrolled > 50) {
            navbar?.classList.add('py-2', 'shadow-xl', 'bg-white/95');
            navbar?.classList.remove('py-4', 'bg-white/80');
        } else {
            navbar?.classList.add('py-4', 'bg-white/80');
            navbar?.classList.remove('py-2', 'shadow-xl', 'bg-white/95');
        }

        // Back to top visibility
        if (scrolled > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }

        // Scroll progress
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrolled / windowHeight) * 100;
        scrollProgress.style.width = progress + '%';

        revealElements();
    });

    // ==========================================
    // Intersection Observer (Reveal on Scroll)
    // ==========================================
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal-on-scroll');
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible) el.classList.add('active');
        });
    };

    // Initial check
    setTimeout(revealElements, 100);

    // ==========================================
    // Mobile Menu
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    const toggleMobileMenu = (open) => {
        if (open) {
            mobileMenu?.classList.remove('hidden');
            setTimeout(() => mobileMenuContent?.classList.remove('translate-x-full'), 10);
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenuContent?.classList.add('translate-x-full');
            setTimeout(() => mobileMenu?.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    };

    mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(true));
    mobileMenuClose?.addEventListener('click', () => toggleMobileMenu(false));
    mobileMenuOverlay?.addEventListener('click', () => toggleMobileMenu(false));
    mobileLinks?.forEach(link => link.addEventListener('click', () => toggleMobileMenu(false)));

    // ==========================================
    // Utility Functions
    // ==========================================
    function createBackToTop() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.className = 'fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-main text-white shadow-2xl opacity-0 invisible transition-all duration-300 z-[1000] hover:-translate-y-2 flex items-center justify-center';
        document.body.appendChild(btn);
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        return btn;
    }

    function createScrollProgress() {
        const bar = document.createElement('div');
        bar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-main to-accent-gold z-[10000] transition-all duration-100';
        bar.style.width = '0%';
        document.body.appendChild(bar);
        return bar;
    }
});

// ==========================================
// Feature Filtering (Global for HTML access)
// ==========================================
window.filterFeatures = function (category) {
    const items = document.querySelectorAll('.bento-item');
    const pills = document.querySelectorAll('.category-pill');

    pills.forEach(pill => {
        pill.classList.remove('active', 'bg-primary-main', 'text-white');
        if (pill.innerText.toLowerCase() === category || (category === 'all' && pill.innerText.toLowerCase() === 'all')) {
            pill.classList.add('active', 'bg-primary-main', 'text-white');
        }
    });

    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-cat') === category) {
            item.style.display = 'flex';
            setTimeout(() => item.classList.add('active'), 50);
        } else {
            item.style.display = 'none';
        }
    });
};

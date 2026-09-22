// ============================================
// MAIN — INITIALIZATION
// ============================================

(function () {
    'use strict';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax for hero orb (desktop only)
    const orb = document.querySelector('.orb');
    if (orb && window.matchMedia('(min-width: 1024px)').matches) {
        let rafId = null;
        document.addEventListener('mousemove', (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;
                orb.style.transform = `translate(${x}px, ${y}px)`;
                rafId = null;
            });
        }, { passive: true });
    }

    // Case study sidebar nav
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    if (sidebarLinks.length) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const offset = 120;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });

                    sidebarLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });

        const sections = document.querySelectorAll('.case-study-section');
        if (sections.length) {
            window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY + 150;
                sections.forEach(section => {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    const id = section.getAttribute('id');
                    const link = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
                    if (link) {
                        if (scrollPos >= top && scrollPos < bottom) {
                            sidebarLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    }
                });
            }, { passive: true });
        }
    }

    // Native lazy load
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img:not([loading])').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }

    // Console signature
    console.log(
        '%ckeenwiix',
        'font-family: "Alex Brush", cursive; font-size: 32px; color: #F5F5F5; padding: 8px;'
    );
    console.log(
        '%cCrafted with purpose.',
        'font-family: Inter, sans-serif; font-size: 12px; color: #A0A0A0;'
    );

})();
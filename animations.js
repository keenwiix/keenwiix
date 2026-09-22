// ============================================
// ANIMATIONS
// ============================================

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animateOnScroll = (elements, animationClass = 'animate') => {
        if (!elements.length) return;

        if (!('IntersectionObserver' in window)) {
            elements.forEach(el => el.classList.add(animationClass));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    };

    const animatableSelectors = [
        '.timeline-item',
        '.expertise-card',
        '.work-item',
        '.step',
        '.solution-item',
        '.result-item',
        '.method-item'
    ];

    document.querySelectorAll(animatableSelectors.join(',')).forEach((el, index) => {
        const delay = (index % 4) * 0.1;
        el.style.transitionDelay = `${delay}s`;
    });

    animateOnScroll(document.querySelectorAll(animatableSelectors.join(',')));

    window.animateOnScroll = animateOnScroll;
})();
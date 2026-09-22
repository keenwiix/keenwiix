(function () {
    'use strict';

    // Subtle reveal of cards
    const cards = document.querySelectorAll('.pf-info-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + i * 80);
    });

    console.log('%cPortfolio Website', 'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;');
    console.log('%cConcept project by keenwiix', 'font-family: Inter; font-size: 11px; color: #A0A0A0;');
})();
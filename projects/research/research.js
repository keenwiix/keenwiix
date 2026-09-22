(function () {
    'use strict';

    // Fade in insights
    const insights = document.querySelectorAll('.rs-insight');
    insights.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + i * 100);
    });

    console.log('%cUX Research Study', 'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;');
    console.log('%cConcept project by keenwiix', 'font-family: Inter; font-size: 11px; color: #A0A0A0;');
})();
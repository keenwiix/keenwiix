(function () {
    'use strict';

    // Copy color hex on click
    document.querySelectorAll('.color-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const code = card.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    const original = code.textContent;
                    code.textContent = 'Copied!';
                    setTimeout(() => { code.textContent = original; }, 1000);
                });
            }
        });
    });

    console.log('%cDesign System', 'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;');
    console.log('%cConcept project by keenwiix', 'font-family: Inter; font-size: 11px; color: #A0A0A0;');
})();
// ============================================
// DIGITAL BANKING PLATFORM — INTERACTIONS
// ============================================

(function () {
    'use strict';

    // Animate chart bars on load
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        const targetHeight = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = targetHeight;
        }, 100 + index * 60);
    });

    // Animate goal progress bars
    const goalFills = document.querySelectorAll('.goal-progress-fill');
    goalFills.forEach((fill, index) => {
        const targetWidth = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 400 + index * 150);
    });

    // Bottom nav toggle
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Action buttons feedback
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });

    // Console signature
    console.log(
        '%cDigital Banking Platform',
        'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;'
    );
    console.log(
        '%cConcept project by keenwiix',
        'font-family: Inter; font-size: 11px; color: #A0A0A0;'
    );

})();
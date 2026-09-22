// ============================================
// HEALTH & WELLNESS APP — INTERACTIONS
// ============================================

(function () {
    'use strict';

    // Animate activity rings
    const activityRing = document.querySelector('.activity-ring');
    if (activityRing) {
        setTimeout(() => {
            activityRing.classList.add('animate');
        }, 300);
    }

    // Mood buttons
    const moodBtns = document.querySelectorAll('.mood-btn');
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Bottom nav
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Play button feedback
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const icon = playBtn.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
    }

    // Console signature
    console.log(
        '%cHealth & Wellness App',
        'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;'
    );
    console.log(
        '%cConcept project by keenwiix',
        'font-family: Inter; font-size: 11px; color: #A0A0A0;'
    );

})();
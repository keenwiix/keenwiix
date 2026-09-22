(function () {
    'use strict';

    // Color selection
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Size selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Thumbnail selection
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Add to cart feedback
    const addBtn = document.querySelector('.add-cart-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const originalHTML = addBtn.innerHTML;
            addBtn.innerHTML = '<i class="fas fa-check"></i><span>Added!</span>';
            addBtn.style.background = '#22C55E';
            setTimeout(() => {
                addBtn.innerHTML = originalHTML;
                addBtn.style.background = '';
            }, 1500);
        });
    }

    // Wishlist toggle
    const wishBtn = document.querySelector('.wishlist-btn');
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
            const icon = wishBtn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    }

    console.log('%cE-Commerce Platform', 'font-family: Space Grotesk; font-size: 18px; color: #F5F5F5;');
    console.log('%cConcept project by keenwiix', 'font-family: Inter; font-size: 11px; color: #A0A0A0;');
})();
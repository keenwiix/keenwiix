// ============================================
// CONTACT — FORM REMOVED (только Telegram)
// ============================================
// На странице contact.html больше нет формы.
// Оставлена только кнопка "Написать в Telegram".
// Этот файл оставлен на случай возврата формы в будущем.

(function () {
    'use strict';

    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
    if (!form || !statusDiv) return;

    const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-primary');
        const originalHTML = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

        statusDiv.className = 'form-status';
        statusDiv.textContent = '';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        if (data.botcheck) {
            statusDiv.className = 'form-status success';
            statusDiv.textContent = 'Message sent ✓';
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            return;
        }

        if (!data.name || !data.email || !data.message) {
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'Please fill in all required fields.';
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'Please enter a valid email address.';
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            return;
        }

        try {
            if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
                throw new Error('Access key not configured');
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    ...data
                })
            });

            const result = await response.json();

            if (result.success) {
                statusDiv.className = 'form-status success';
                statusDiv.textContent = 'Message sent ✓';
                form.reset();
            } else {
                throw new Error(result.message || 'Failed to send');
            }
        } catch (error) {
            console.error('Form error:', error);
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'Something went wrong. Please try again.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;

            setTimeout(() => {
                statusDiv.style.display = 'none';
                statusDiv.className = 'form-status';
            }, 6000);
        }
    });
})();
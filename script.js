document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const passwordOverlay = document.getElementById('password-overlay');
    const sitePassword = document.getElementById('site-password');
    const submitPassword = document.getElementById('submit-password');

    body.classList.add('password-protected');

    submitPassword.addEventListener('click', checkPassword);
    sitePassword.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    function checkPassword() {
        if (sitePassword.value === '205666') {
            passwordOverlay.style.display = 'none';
            body.classList.remove('password-protected');
        } else {
            alert('Incorrect password. Please try again.');
            sitePassword.value = '';
        }
    }
});

// Your existing JavaScript code follows here

document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    if (password.value !== passwordConfirm.value) {
        alert('Passwords do not match. Please try again.');
        password.value = '';
        passwordConfirm.value = '';
        password.focus();
        event.preventDefault();
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    const codeInput = document.getElementById('code');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (codeInput.value === 'DEMO-TEST-001') {
            alert('Вы успешно вошли!');
        } else {
            alert('Неверный код.');
        }
    });
});

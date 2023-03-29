document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#signin-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const submitButton = document.querySelector('.submit');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Perform your sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    });
});

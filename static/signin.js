document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#signin-form');
    const userTypeInput = document.getElementById('user-type');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const submitButton = document.querySelector('.submit');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const userType = userTypeInput.value;
        

        const loginFormData = {
            userType: userType,
            email: email,
            password: password,
        }

        // Perform your sign-in logic here
        console.log('Login Form Data:', loginFormData);
    });
});

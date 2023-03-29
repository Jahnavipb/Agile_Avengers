document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
const input = document.querySelector('input');
const submit = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

const enteredOtp = input.value.trim();

// This is where you would check if the entered OTP matches the one sent to the user's email.
// Since the verification logic may involve server-side code, you may need to modify this according to your implementation.
if (isOtpValid(enteredOtp)) {
    // Show success message
    alert('Email verified successfully!');
}
else {
    // Show error message  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
    //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
    alert('Invalid OTP. Please try again.');
}
});

function isOtpValid(enteredOtp) {
    // Replace this function with your server-side verification logic.
    // For now, I am using a simple validation to demonstrate the functionality.
    const sentOtp = sessionStorage.getItem('sentOtp');
    return enteredOtp === sentOtp;
}
});
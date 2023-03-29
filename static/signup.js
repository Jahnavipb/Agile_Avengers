import sgMail from '@sendgrid/mail';
let YOUR_SENDGRID_API_KEY = "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";
sgMail.setApiKey(YOUR_SENDGRID_API_KEY);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
  const submit = document.querySelector('button[type="submit"]');
  submit.disabled = true; // Disable the submit button initially

  const inputInteracted = {};

  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      inputInteracted[e.target.name] = true;
      validateInput(input);
      checkFormValidity();
    });

    input.addEventListener('blur', (e) => {
      if (inputInteracted[e.target.name]) {
        validateInput(input);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fullName, email, phoneNumber, address, password, retypePassword;

    inputs.forEach(input => {
      if (input.name === 'full_name') fullName = input.value.trim();
      if (input.name === 'email') email = input.value.trim();
      if (input.name === 'phone_number') phoneNumber = input.value.trim();
      if (input.name === 'address') address = input.value.trim();
      if (input.name === 'password') password = input.value.trim();
      if (input.name === 'retype_password') retypePassword = input.value.trim();
    });

    console.log(fullName, email, phoneNumber, address, password, retypePassword);

    const otp = generateOTP();
    sendVerificationEmail(email, otp)
      .then(() => {
        sessionStorage.setItem('sentOtp', otp.toString()); // Save the OTP to sessionStorage
        window.location.href = 'verify.html';
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        checkFormValidity();
      });
  });

  function validateInput(input) {
    const inputType = input.getAttribute('type');
    const value = input.value.trim();

    let isValid = false;
    let errorMessage = '';

    if (inputType === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      errorMessage = 'Please enter a valid email address';
    } else if (inputType === 'tel') {
      isValid = /^\d{10}$/.test(value);
      errorMessage = 'Please enter a valid phone number';
    } else if (inputType === 'password') {
      isValid = value !== '';
      errorMessage = 'Please enter a password';
    } else {
      isValid = value !== '';
      errorMessage = `Please enter ${input.name === 'full_name' ? 'your full name' : 'your address'}`;
    }

    if (isValid) {
      input.classList.remove('invalid');
      input.nextElementSibling.style.display = 'none';
    } else if (inputInteracted[input.name]) {
      input.classList.add('invalid');
      input.nextElementSibling.style.display = 'inline';
      input.nextElementSibling.textContent = errorMessage;
    }

    return isValid;
  }

  function checkFormValidity() {
    let isFormValid = true;
    let passwordsMatch = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }

      if (input.name === 'password' || input.name === 'retype_password') {
        const passwordInput = document.querySelector('input[name="password"]');
        const retypePasswordInput = document.querySelector('input[name="retype_password"]');

        if (passwordInput.value.trim() !== retypePasswordInput.value.trim()) {
          passwordsMatch = false;
          retypePasswordInput.classList.add('invalid');
          retypePasswordInput.nextElementSibling.style.display = 'inline';
          retypePasswordInput.nextElementSibling.textContent = "Passwords don't match";
        } else {
          retypePasswordInput.classList.remove('invalid');
          retypePasswordInput.nextElementSibling.style.display = 'none';
        }
      }
    });

    submit.disabled = !(isFormValid && passwordsMatch);
  }

  async function sendVerificationEmail(email, otp) {
    const msg = {
      to: email,
      from: 'sbhanda7@stevens.edu', // Replace with your verified sender email
      subject: 'Email Verification',
      text: `Your verification code is: ${otp}`,
      html: `<strong>Your verification code is: ${otp}</strong>`,
    };

    return sgMail.send(msg);
  }

  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
  }

});


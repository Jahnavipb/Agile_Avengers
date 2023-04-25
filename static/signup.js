//const configRoutes = require('./routes');
// const mongoCollections = require('../config/mongoCollections');
// const signup = mongoCollections.signup;
// const {ObjectId} = require('mongodb');
const signup = require('../data/signupData');

const form = document.getElementById("signup-form");
const userType = document.getElementById('user-type').value;
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retype-password");
const nameInput = document.getElementById('name');

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = emailRegex.test(email.value);
  email.classList.toggle("is-invalid", !valid);
  return valid;
}

function validatePhone() {
  const phoneRegex = /^\d{10}$/;
  const valid = phoneRegex.test(phone.value);
  phone.classList.toggle("is-invalid", !valid);
  return valid;
}

function validatePasswordsMatch() {
  const valid = password.value === retypePassword.value;
  retypePassword.classList.toggle("is-invalid", !valid);
  return valid;
}

email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
password.addEventListener("input", validatePasswordsMatch);
retypePassword.addEventListener("input", validatePasswordsMatch);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const emailIsValid = validateEmail();
  const phoneIsValid = validatePhone();
  const passwordsMatch = validatePasswordsMatch();

  if (emailIsValid && phoneIsValid && passwordsMatch) {
    //const insertInfo = bookDemoCollection.insertOne(newDemo);
    const user = await signup.createUser(userType, nameInput, email, password, phone);
    
    console.log("Form submitted");
    console.log(user);

  }
  //event.target.submit();
});

const submitButton = document.getElementById("submit-button");

function updateSubmitButtonState() {
  const emailIsValid = !email.classList.contains("is-invalid");
  const phoneIsValid = !phone.classList.contains("is-invalid");
  const passwordsMatch = !retypePassword.classList.contains("is-invalid");

  submitButton.disabled = !(emailIsValid && phoneIsValid && passwordsMatch);
}

email.addEventListener("input", () => {
  validateEmail();
  updateSubmitButtonState();
});

phone.addEventListener("input", () => {
  validatePhone();
  updateSubmitButtonState();
});

password.addEventListener("input", () => {
  validatePasswordsMatch();
  updateSubmitButtonState();
});

retypePassword.addEventListener("input", () => {
  validatePasswordsMatch();
  updateSubmitButtonState();
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Form submitted");
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect form field values
  const formData = {
    userType: userType,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    password: document.getElementById("password").value,
  };

 


   // Send the form data to the server using AJAX
//    var xhr = new XMLHttpRequest();
//    xhr.open('POST', '/signup');
//    xhr.setRequestHeader('Content-Type', 'application/json');
//    xhr.onload = function() {
//        if (xhr.status === 200) {
//            alert('Account created successfully!');
//            window.location.href = '/dashboard';
//        } else {
//            alert('Error creating account. Please try again later.');
//        }
//    };
//    xhr.send(JSON.stringify(formData));
// });

  // Log the form data
  // console.log("Form submitted with the following data:", formData);
});


const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const contactNumberInput = document.querySelector('#contact-number');
  const addressInput = document.querySelector('#address');
  const scheduleDateInput = document.querySelector('#schedule-date');
  const scheduleTimeInput = document.querySelector('#schedule-time');

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    contactNumber: contactNumberInput.value,
    address: addressInput.value,
    scheduleDate: scheduleDateInput.value,
    scheduleTime: scheduleTimeInput.value
  };

  console.log(data);

  // add code here to send data to a server, if needed
});

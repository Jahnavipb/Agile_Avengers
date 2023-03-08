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

  

  this.showSuccessMessage();

  // add code here to send data to a server, if needed
});
function showSuccessMessage() {
  // Display success message
  console.log("Success");
  alert("success!");
  let res = true;
  
  // if(!data){
  //   res = false;
  // }
  // if(!data.name){
  //   res = false;
  // }if(!data.address){
  //   res = false;
  // }
  // if(!data.email){
  //   res = false;
  // }
  // if(!data.contactNumber){
  //   res = false;
  // }
  // if(!data.scheduleDate){
  //   res = false;
  // }
  // if(!data.scheduleTime){
  //   res = false;
  // }
  // if(res===false){
  //   alert("Error: Please insert all the field values of the form!")
  // }else {
  //   alert("Success!");
  // }
}

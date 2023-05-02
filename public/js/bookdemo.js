let bookDemoForm = document.getElementById('bookdemo-form');

if(bookDemoForm){

    bookDemoForm.addEventListener('submit', function(event) {
        console.log("BookDemoForm js file is triggered!");
        event.preventDefault();
        
        let nameInput = document.getElementById('nameInput');
        let emailAddressInput = document.getElementById('emailAddressInput');
        let phoneNumberInput = document.getElementById('phoneNumberInput');
        let addressInput = document.getElementById('addressInput');
        let scheduledateInput = document.getElementById('scheduledateInput');
        let scheduleTimeInput = document.getElementById('scheduleTimeInput');
      
        const data = {
          name: nameInput.value,
          email: emailAddressInput.value,
          contactNumber: phoneNumberInput.value,
          address: addressInput.value,
          scheduleDate: scheduledateInput.value,
          scheduleTime: scheduleTimeInput.value
        };
      
      
      
        console.log(data);

        
      
        event.target.submit();
        
      
        //showSuccessMessage();
      
        // add code here to send data to a server, if needed
      });
}





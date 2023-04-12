document.addEventListener('DOMContentLoaded', () => {
    const agreementBtn = document.getElementById('send-agreement');
    const requirementsBtn = document.getElementById('send-requirements');
  
    agreementBtn.addEventListener('click', () => {
      sendAgreement();
    });
  
    requirementsBtn.addEventListener('click', () => {
      sendRequirements();
    });
  });
  
  function sendAgreement() {
    // code for sending the customized agreement to the client
    alert('Sending customized agreement...');
  }
  
  function sendRequirements() {
    // code for sending requirements to the Operations team
    alert('Sending requirements to the Operations team...');
  }
  
document.addEventListener('DOMContentLoaded', () => {

    // Customer chat functionality
    const customerSendButton = document.getElementById('customer-send-button');
    customerSendButton.addEventListener('click', () => {
      const messageInput = document.getElementById('customer-message-input');
      const messageList = document.getElementById('customer-message-list');
      const message = messageInput.value;
  
      if (message !== "") {
        messageList.insertAdjacentHTML('beforeend', `<li class='customer-message'>${message}</li>`);
        messageInput.value = "";
      }
    });
  
    // Sales chat functionality
    const salesSendButton = document.getElementById('sales-send-button');
    salesSendButton.addEventListener('click', () => {
      const messageInput = document.getElementById('sales-message-input');
      const messageList = document.getElementById('sales-message-list');
      const message = messageInput.value;
  
      if (message !== "") {
        messageList.insertAdjacentHTML('beforeend', `<li class='sales-message'>${message}</li>`);
        messageInput.value = "";
      }
    });
  
  });
  
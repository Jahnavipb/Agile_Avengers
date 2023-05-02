function showContent(id) {
    const contents = document.getElementsByClassName("content");
  
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
  
    document.getElementById(id).style.display = "block";
  }
  
  // Initialize the page with the salesperson content displayed
  showContent("salesperson");
  
  function calculateTotalCost() {
    const checkboxes = document.querySelectorAll('#priceForm .form-check-input');
    let totalCost = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        totalCost += parseInt(checkbox.value);
      }
    });
    document.getElementById('total-cost').innerText = totalCost;
  }
  
  document.querySelectorAll('#priceForm .form-check-input').forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotalCost);
  });
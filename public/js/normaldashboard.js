

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

  document.getElementById('priceForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const form = event.target;
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const options = ["solar-panel", "solar-water-pump", "solar-water-heater", "solar-battery-storage", "solar-inverter", "solar-panel-maintenance"];

    const checkedOptions = []
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        checkedOptions.push({
          name: checkbox.id,
          id: options.indexOf(checkbox.id),
          price: checkbox.value
        });
      }
    }

    let solarSelectionData = {
      
      checkedOptions: checkedOptions,
      aggrement: false
    }

    console.log(checkedOptions);
    event.target.submit();



    // Perform any action with the checkedOptions array
    // For example, log the array to the console
    
  });

  
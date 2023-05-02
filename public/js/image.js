function uploadImage() {
    // function to uplad image
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];
    const status = document.getElementById("status");
  
    if (!file) {
      status.textContent = "Error: No file selected.";
      return;
    }
  
    if (!file.type.startsWith("image/")) {
      status.textContent = "Error: Please upload an image file.";
      fileInput.value = "";
      return;
    }
  
    // Code for uploading the image would go here
    // ...
    // ...
  
    status.textContent = "Image uploaded successfully!";
  }
  

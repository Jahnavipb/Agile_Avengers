document.getElementById("priceForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch("/upload", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();
  alert(result);
});

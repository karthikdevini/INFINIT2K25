document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("codethonForm");
  const successMessage = document.getElementById("codethonSuccessMessage");

  // Initially hide the success message
  successMessage.style.display = "none";

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdlwRxAyh7Ys4_46BmeWq4lA9Q8yNaBYDXyJp0O1AY2kXKtcw/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        successMessage.style.display = "block";
        form.reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});
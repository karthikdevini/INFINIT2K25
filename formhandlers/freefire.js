document.addEventListener("DOMContentLoaded", function () {
  const freefireForm = document.getElementById("freefireForm");
  const freefireSuccessMessage = document.getElementById("successMessage");

  // Initially hide the success message
  freefireSuccessMessage.style.display = "none";

  freefireForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(freefireForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScAri79AeRzPqK5ijbBqEhy98pPdxdqrtJ-8e8TX3wJouUzJA/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        freefireSuccessMessage.style.display = "block";
        freefireForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          freefireSuccessMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

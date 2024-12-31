document.addEventListener("DOMContentLoaded", function () {
  const techxpoForm = document.getElementById("techxpoForm");
  const techxpoSuccessMessage = document.getElementById("techxpoSuccessMessage");

  // Initially hide the success message
  techxpoSuccessMessage.style.display = "none";

  techxpoForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(techxpoForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfW0FRWYNU1A8NKCjpLi4df8LBrCLcQE-mx26Fw7Az0fQL8Jw/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        techxpoSuccessMessage.style.display = "block";
        techxpoForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

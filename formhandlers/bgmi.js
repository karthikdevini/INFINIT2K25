document.addEventListener("DOMContentLoaded", function () {
  const bgmiForm = document.getElementById("bgmiForm");
  const BGMISuccessMessage = document.getElementById("BGMISuccessMessage");

  // Initially hide the success message
  BGMISuccessMessage.style.display = "none";

  bgmiForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(bgmiForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScBuo4e1nccFPI0B0yVqadz9MQIGe0hCmu3Q01sRyx1y6X3Lg/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        BGMISuccessMessage.style.display = "block";
        bgmiForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          BGMISuccessMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

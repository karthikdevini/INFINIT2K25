document.addEventListener("DOMContentLoaded", function () {
  const treasureHuntForm = document.getElementById("treasureHuntForm");
  const treasureHuntSuccessMessage = document.createElement("div");
  treasureHuntSuccessMessage.classList.add("alert", "alert-success");
  treasureHuntSuccessMessage.innerText = "Registration successfully done!";

  // Initially hide the success message
  treasureHuntSuccessMessage.style.display = "none";
  treasureHuntForm.appendChild(treasureHuntSuccessMessage);

  treasureHuntForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(treasureHuntForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfNJH3uBeTBaXEfBGlZbygzSoEszlrkKATC392Km7ZvvPu83A/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        treasureHuntSuccessMessage.style.display = "block";
        treasureHuntForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          treasureHuntSuccessMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

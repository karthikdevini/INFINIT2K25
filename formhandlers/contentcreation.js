document.addEventListener("DOMContentLoaded", function () {
  const contentCreationForm = document.getElementById("contentCreationForm");
  const contentCreationSuccessMessage = document.createElement("div");
  contentCreationSuccessMessage.classList.add("alert", "alert-success");
  contentCreationSuccessMessage.innerText = "Registration successfully done!";

  // Initially hide the success message
  contentCreationSuccessMessage.style.display = "none";
  contentCreationForm.appendChild(contentCreationSuccessMessage);

  contentCreationForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(contentCreationForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfZFw2VqerHbRKFK_8VC2j744lkuxFTS9glifEVNupC4W6qaQ/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        contentCreationSuccessMessage.style.display = "block";
        contentCreationForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          contentCreationSuccessMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

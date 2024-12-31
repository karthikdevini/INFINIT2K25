document.addEventListener("DOMContentLoaded", function () {
  const artExhibitionForm = document.getElementById("artExhibitionForm");
  const artExhibitionSuccessMessage = document.createElement("div");
  artExhibitionSuccessMessage.classList.add("alert", "alert-success");
  artExhibitionSuccessMessage.innerText = "Registration successfully done!";

  // Initially hide the success message
  artExhibitionSuccessMessage.style.display = "none";
  artExhibitionForm.appendChild(artExhibitionSuccessMessage);

  artExhibitionForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(artExhibitionForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSf6x6GQaRXKIQCGIt3oEImNNSSJVa_M6ykv2kay-I2Zr_EfRw/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        artExhibitionSuccessMessage.style.display = "block";
        artExhibitionForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          artExhibitionSuccessMessage.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

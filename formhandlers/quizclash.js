document.addEventListener("DOMContentLoaded", function () {
  const quizclashForm = document.getElementById("quizclashForm");
  const quizclashSuccessMessage = document.getElementById("quizclashSuccessMessage");

  // Initially hide the success message
  quizclashSuccessMessage.style.display = "none";

  quizclashForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(quizclashForm);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSeWf4Ozp1M68dosHkom5Kii9KWzfkhfPt3YNzjAa6eCzpTVAA/formResponse";

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Prevent CORS errors
    })
      .then(() => {
        // Show success message and reset form
        quizclashSuccessMessage.style.display = "block";
        quizclashForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
});

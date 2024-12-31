// Set the date we're counting down to
const countdownDate = new Date("Mar 12, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Calculate progress bar width based on time remaining
  const progress = (1 - (distance / (countdownDate - new Date().getTime()))) * 100;
  document.getElementById("countdown-progress").style.width = `${progress}%`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown-timer").innerHTML = "Event Started!";
  }
}, 1000);

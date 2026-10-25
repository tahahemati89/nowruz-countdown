// Elements
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Target Date
const targetDate = new Date("2027-03-21T00:00:00");

// Update Countdown
const updateCountdown = () => {
  const now = new Date();
  const difference = targetDate - now;

  // Convert to seconds
  const totalSeconds = Math.floor(difference / 1000);
  const remainingSeconds = totalSeconds % 60;

  // Convert to minutes
  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingMinutes = totalMinutes % 60;

  // Convert to Hours
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingHours = totalHours % 24;

  // Convert to Days
  const totalDays = Math.floor(totalHours / 24);

  ////////////// Update HTML ///////////////
  seconds.textContent = remainingSeconds.toString().padStart(2, "0");
  minutes.textContent = remainingMinutes.toString().padStart(2, "0");
  hours.textContent = remainingHours.toString().padStart(2, "0");
  days.textContent = totalDays.toString().padStart(2, "0");
};
updateCountdown();
setInterval(() => {
  updateCountdown();
}, 1000);

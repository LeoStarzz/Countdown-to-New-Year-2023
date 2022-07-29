const days = document.querySelector('.days-left');
const hours = document.querySelector('.hours-left');
const minutes = document.querySelector('.minutes-left');
const seconds = document.querySelector('.seconds-left');

function tick() {
  const remainingTime = new Date('1 January 2023') - new Date();
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  days.innerHTML = remainingDays;
  hours.innerHTML = remainingHours;
  minutes.innerHTML = remainingMinutes;
  seconds.innerHTML = remainingSeconds;
}

document.addEventListener('DOMContentLoaded', () => setInterval(tick, 1000));

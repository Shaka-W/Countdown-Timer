let days = document.querySelector('.countdown__days');
let hours = document.querySelector('.countdown__hours');
let minutes = document.querySelector('.countdown__minutes');
let seconds = document.querySelector('.countdown__seconds');
let newYearsCountdown = new Date('Jan 1, 2022 00:00:00').getTime();

function countDown() {
  setInterval(() => {
    let today = new Date().getTime();
    let timeLeft = newYearsCountdown - today;

    let getDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let getHours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let getMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let getSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.textContent = getDays;
    hours.textContent = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSeconds;
  }, 1000);
}

window.addEventListener('load', countDown);

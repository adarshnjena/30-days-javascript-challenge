/* Select DOM Elements */
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const form = document.querySelector('#custom');

/* Timer Function */
function timer(seconds) {
  /* Clear Interval */
  clearInterval(countdown);

  /* Now Time and Then Time */
  const now = Date.now();
  const then = now + seconds * 1000;

  /* Call Display End Time and Provide Then */
  displayEndTime(then);

  /* SetInterval */
  countdown = setInterval(() => {
    /* Seconds Left */
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    /* Clear Interval and Return Function When there are no Seconds */
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    /* Call Display Timer and Provide Seconds Left */
    displayTimer(secondsLeft);
  }, 1000);
}

/* Display Timer Function */
function displayTimer(totalRemainingSeconds) {
  /* Total Remainding Seconds */
  let seconds = totalRemainingSeconds;

  /* Days and Remaining Seconds */
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;

  /* Hours and Remaining Seconds */
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  /* Minutes and Remaining Seconds */
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  /* Display Variable */
  const display = `${days < 10 ? 0 : ''}${days}:
  ${hours < 10 ? 0 : ''}${hours}:
  ${minutes < 10 ? 0 : ''}${minutes}:
  ${seconds < 10 ? 0 : ''}${seconds}`;

  /* Timer Display */
  timerDisplay.textContent = display;
}

/* Display End Time Function */
function displayEndTime(endTime) {
  /* Get End Time */
  const end = new Date(endTime).toLocaleTimeString();
  /* End Time Display */
  endTimeDisplay.textContent = `Be back at ${end}`;
}

/* Start Timer Function */
function startTimer(e) {
  const seconds = this.dataset.time;
  /* Call Timer and Provide Seconds */
  timer(seconds);
}

/* Get Days From User */
function getDaysFromUser(e) {
  /* Prevent Default Behaviour */
  e.preventDefault();

  const days = +this.querySelector('input').value.trim();
  const seconds = days * 86400;
  /* Call Timer and Provide Seconds */
  timer(seconds);

  /* Reset Input */
  this.reset();
}

/* Event Listeners */
buttons.forEach((button) => button.addEventListener('click', startTimer));
form.addEventListener('submit', getDaysFromUser);

/* Init Default Timer */
timer(7200); // 2 hours

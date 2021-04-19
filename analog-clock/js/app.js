// Selectors
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Set Time function
function setTime() {
  const time = new Date();

  // Set Second Hand
  const second = time.getSeconds();
  const secondsDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  // Set Minute Hand
  const min = time.getMinutes();
  const minutesDegree = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;

  // Set Hour Hand
  const hour = time.getHours();
  const hoursDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

// Set interval
setInterval(setTime, 1000);

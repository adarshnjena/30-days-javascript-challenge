// Select Element
const timeNodes = [...document.querySelectorAll('[data-time]')];

// Get Total Seconds Func
const totalSeconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, second) => total + second);

// Get Total Seconds
let seconds = totalSeconds;

// Get Hours and Remaining Second
const hours = Math.floor(seconds / 3600);
seconds %= 3600;

// Get Minutes and Remaining Second
const mins = Math.floor(seconds / 60);
seconds %= 60;

console.log(hours, mins, seconds);

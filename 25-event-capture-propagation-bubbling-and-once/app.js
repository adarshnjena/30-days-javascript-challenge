/* Stop Propagation and Capture */
const divs = document.querySelectorAll('div');

function logText(e) {
  e.stopPropagation(); // stop bubbling!
  console.log(this);
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: false,
  })
);

/* Once */
const button = document.querySelector('button');

button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: true,
  }
);

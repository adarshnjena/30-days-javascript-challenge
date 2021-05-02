/* Select Element */
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

/* Spread */
const walk = 20; // 20px

/* Function */
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0px rgba(0,0,0,0.3)`;
}

/* Event Listener */
hero.addEventListener('mousemove', shadow);

/* Select DOM Elements */
const nav = document.querySelector('.top');
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');

/* Funtions */
function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  /* Set Background Position, Width, Height */
  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

/* Event Listeners */
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);

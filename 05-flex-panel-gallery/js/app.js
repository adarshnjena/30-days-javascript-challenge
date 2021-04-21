// Select all panel
const panels = document.querySelectorAll('.panel');

// Open function
function open() {
  this.classList.toggle('open');
}

// Open Active function
function openActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Open
panels.forEach((panel) => {
  panel.addEventListener('click', open);
});

// Open Active
panels.forEach((panel) => {
  panel.addEventListener('transitionend', openActive);
});

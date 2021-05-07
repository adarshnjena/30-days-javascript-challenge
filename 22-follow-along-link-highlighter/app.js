/* Select Element */
const links = document.querySelectorAll('a');

/* Create Element */
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

/* Higlight Link Function */
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  /* Set Highlight Position */
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

/* Event Listener */
links.forEach((link) => link.addEventListener('mouseenter', highlightLink));

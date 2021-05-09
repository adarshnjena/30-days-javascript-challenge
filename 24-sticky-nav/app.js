/* Seect DOM Element */
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

/* Fixed Nav */
function fixednav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0 + 'px';
  }
}

/* Event Listener */
window.addEventListener('scroll', fixednav);

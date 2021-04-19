// play sound and add "playing" class on key function
function playSounds(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();

  key.classList.add('playing');
}

// remove "playing" class after transition end function
function removeTransition(e) {
  this.classList.remove('playing');
}

// remove "playing" class after transition end
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});

// play sound and add "playing" class on key
window.addEventListener('keydown', playSounds);

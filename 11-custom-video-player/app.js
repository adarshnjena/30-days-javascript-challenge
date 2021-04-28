// Select All Element
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('input[type="range"]');
const skips = player.querySelectorAll('[data-skip]');

// Functions

// Handle Toggle Play Function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Handle Toggle Icon Function
function toggleIcon() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Handle Range(Volume/Speed) Function
function handleRange() {
  video[this.name] = this.value;
}

// Handle Skip Function
function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle Progress Bar Real Time
function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Scrub Function
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event Listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgressBar);

video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);

ranges.forEach((range) => range.addEventListener('change', handleRange));
ranges.forEach((range) => range.addEventListener('mousemove', handleRange));

skips.forEach((skip) => skip.addEventListener('click', handleSkip));

// Check Mousedown
let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemmove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

// Default Current Time
video.currentTime = 1;

const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  bar.style.height = `${Math.round(percent * 100)}%`;

  const min = 0.4;
  const max = 4;
  const playBackRate = (percent * (max - min) + min).toFixed(2);

  video.playbackRate = playBackRate;
  bar.textContent = playBackRate + 'x';
});

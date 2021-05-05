/* Select Elements */
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const video = document.querySelector('.player');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

/* Get Video Function */
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((userMedia) => {
      video.srcObject = userMedia;
      video.play();
    })
    .catch((err) => console.log(err));
}

/* Paint to Canvar  (Every 16ms) */
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  /* (Every 16ms) */
  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

/* Take Photo */
function takePhoto() {
  /* Sound */
  snap.currentTime = 0;
  snap.play();

  /* Get Image Source */
  const imageSrc = canvas.toDataURL('image/png');

  /* Show Image On HTML */
  const link = document.createElement('a');
  link.href = imageSrc;
  link.setAttribute('download', 'handsome');
  link.innerHTML = /* html */ ` 
  <img src="${imageSrc}" alt="Handsome">
  `;

  strip.insertBefore(link, strip.firstChild);
}

/* Call and Event Listener */
getVideo();
video.addEventListener('canplay', paintToCanvas);

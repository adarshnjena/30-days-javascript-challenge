const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#212121';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let isDrawing = false;
let lastX, lastY;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  // Start From
  ctx.moveTo(lastX, lastY);
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // Go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mouseup', () => (isDrawing = false));

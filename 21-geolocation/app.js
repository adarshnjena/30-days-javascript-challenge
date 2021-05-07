const arrow = document.getElementById('arrow');
const speed = document.getElementById('speed-value');

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    speed.textContent = data.coords.speed;
  },
  (err) => console.error(err)
);

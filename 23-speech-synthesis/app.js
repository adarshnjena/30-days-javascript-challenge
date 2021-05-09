/* Select DOM Element */
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

/* Populate Voices */
function populateVoices() {
  voices = this.getVoices();

  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`
    )
    .join();
}

/* Set Voice */
function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle(true);
}

/* Set Option */
function setOption() {
  msg[this.name] = this.value;
  toggle(true);
}

/* Toggle Speak */
function toggle(speakOver = true) {
  speechSynthesis.cancel();
  if (speakOver) {
    speechSynthesis.speak(msg);
  }
}

/* Event Listeners */
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

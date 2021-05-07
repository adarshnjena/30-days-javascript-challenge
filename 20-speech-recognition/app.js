const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognation = new SpeechRecognition();
recognation.lang = 'bn-BD';
recognation.interimResults = true;

function handleResults(e) {
  const transcript = e.results[0][0].transcript;

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
}

recognation.addEventListener('result', handleResults);
recognation.addEventListener('end', recognation.start);
recognation.start();

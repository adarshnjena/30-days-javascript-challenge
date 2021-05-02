/* Bands Name */
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

/* RegExp */
function strip(bandName) {
  return bandName.replace(/^a |an |the/i, '').trim();
}

/* Sorted Bands */
const sortedBands = bands.sort((a, b) =>
  strip(a) > strip(b) ? 1 : strip(b) > strip(a) ? -1 : 0
);

/* Select Bands Element */
const bandUl = document.querySelector('#bands');

/* Display HTML */
bandUl.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');

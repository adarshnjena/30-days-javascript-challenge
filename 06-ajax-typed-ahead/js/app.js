// Selectors
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// API URL
const URL =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Blank Cities Array
let cities = [];

// Fetch Data From API
fetch(URL)
  .then((response) => response.json())
  .then((data) => (cities = data))
  .catch((e) => console.log(e));

// Find Matches Function
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return (
      place.city.match(regex) ||
      place.state.match(regex) ||
      place.population.match(regex)
    );
  });
}

// Number With Commas Function
function numberWithCommas(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Display Matched Function
function displayMatches() {
  const matchedArr = findMatches(this.value.trim(), cities);
  const html = matchedArr
    .map((place) => {
      const regex = new RegExp(this.value.trim(), 'gi');

      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value.trim()}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value.trim()}</span>`
      );
      const population = place.population.replace(
        regex,
        `<span class="hl">${this.value.trim()}</span>`
      );

      return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(population)}</span>
    </li>
    `;
    })
    .join('');

  // Suggestions InnerHTML
  suggestions.innerHTML = this.value.trim()
    ? html
    : `
    <li>Filter For A City</li>
    <li>Or A State</li>
    `;
}

// Add Event Listener
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

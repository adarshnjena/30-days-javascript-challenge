// Some data we can work with

const inventors = [
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    birthYear: 1879,
    deathYear: 1955,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    birthYear: 1643,
    deathYear: 1727,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Galileo',
    lastName: 'Galilei',
    birthYear: 1564,
    deathYear: 1642,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Marie',
    lastName: 'Curie',
    birthYear: 1867,
    deathYear: 1934,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Johannes',
    lastName: 'Kepler',
    birthYear: 1571,
    deathYear: 1630,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Nicolaus',
    lastName: 'Copernicus',
    birthYear: 1473,
    deathYear: 1543,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Max',
    lastName: 'Planck',
    birthYear: 1858,
    deathYear: 1947,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Katherine',
    lastName: 'Blodgett',
    birthYear: 1898,
    deathYear: 1979,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    deathYear: 1852,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Sarah E.',
    lastName: 'Goode',
    birthYear: 1855,
    deathYear: 1905,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Lise',
    lastName: 'Meitner',
    birthYear: 1878,
    deathYear: 1968,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
  {
    firstName: 'Hanna',
    lastName: 'Hammarström',
    birthYear: 1829,
    deathYear: 1909,
    aliveYear: function () {
      return this.deathYear - this.birthYear;
    },
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500 = inventors.filter(
  (inventor) => inventor.birthYear >= 1500 && inventor.birthYear <= 1599
);

console.table(bornIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(
  (inventor) => `${inventor.firstName} ${inventor.lastName}`
);

console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirthDate = inventors.sort((a, b) =>
  a.birthYear > b.birthYear ? 1 : -1
);
console.table(sortByBirthDate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const allTheInvertorsLiveTogether = inventors.reduce((prev, current) => {
  return prev + current.aliveYear();
}, 0);

console.log(allTheInvertorsLiveTogether);

// 5. Sort the inventors by years lived
const sortByAliveYear = inventors.sort((a, b) => {
  return a.aliveYear() > b.aliveYear() ? -1 : 1;
});

console.table(sortByAliveYear);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const links = document.querySelectorAll('.mw-category a');
// const de = [...links]
//   .map((link) => link.textContent)
//   .filter((val) => val.includes('de'));
// console.log(de);

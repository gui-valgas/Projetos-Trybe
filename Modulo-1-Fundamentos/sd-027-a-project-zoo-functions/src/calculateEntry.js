const data = require('../data/zoo_data');

// const { age } = pessoas; PQ NAO FUNCIONA GAL??
// console.log(age)
function countEntrants(entrants) {
  let numberOfChild = 0;
  let numberOfAdult = 0;
  let numberOfSenior = 0;
  const objectEntrants = {};
  entrants.forEach((person) => {
    if (person.age < 18) numberOfChild += 1;
    if (person.age >= 18 && person.age < 50) numberOfAdult += 1;
    if (person.age >= 50) numberOfSenior += 1;
  });

  objectEntrants.child = numberOfChild;
  objectEntrants.adult = numberOfAdult;
  objectEntrants.senior = numberOfSenior;

  return objectEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { prices } = data;
  const { child, adult, senior } = countEntrants(entrants);

  const total = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);

  return total;
}

module.exports = { calculateEntry, countEntrants };

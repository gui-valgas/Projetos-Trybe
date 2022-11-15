const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(ids) {
  const firstAnimal = employees.find(({ id }) => id === ids).responsibleFor[0];
  const animalResidents = species.find(({ id }) => id === firstAnimal).residents;
  const oldestAnimal = animalResidents.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc));
  return Object.values(oldestAnimal);
}
module.exports = getOldestFromFirstSpecies;

const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species.find((animals) => animals.name === animal);
  return residents.every((obj) => obj.age >= age);
}
module.exports = getAnimalsOlderThan;

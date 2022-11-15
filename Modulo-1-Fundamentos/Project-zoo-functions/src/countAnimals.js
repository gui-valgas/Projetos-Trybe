const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const object = {};
    species.forEach(({ residents, name }) => {
      object[name] = residents.length;
    });
    return object;
  }
  const foundSpecie = species.find((spc) => spc.name === animal.specie);
  if (animal.sex) {
    return foundSpecie.residents.filter((spc) => spc.sex === animal.sex).length;
  }
  return foundSpecie.residents.length;
}

module.exports = countAnimals;

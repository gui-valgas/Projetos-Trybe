const data = require('../data/zoo_data');

// Retorna lista de animais por regiões:
const locations = () => {
  const regions = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach(({ name, location }) => regions[location].push(name));
  return regions;
};

// Lista nomes dos animais por espécie, e se necessário ordena:
const speciesName = (options) => {
  const animalSpecies = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((currentSpecies) => {
    const mapAnimal = currentSpecies.residents.map((resident) => resident.name);
    if (options.sorted) mapAnimal.sort();
    animalSpecies[currentSpecies.location].push({ [currentSpecies.name]: mapAnimal });
  });
  return animalSpecies;
};

// Retorna animais filtrados por sexo e se necessário ordena:
const filteredGenres = (options) => {
  const filteredByGenre = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((currentSpecies) => {
    const animalGenres = currentSpecies.residents.filter((animal) => animal.sex === options.sex);
    const mapAnimal = animalGenres.map((resident) => resident.name);
    if (options.sorted) mapAnimal.sort();
    filteredByGenre[currentSpecies.location].push({ [currentSpecies.name]: mapAnimal });
  });
  return filteredByGenre;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return locations();
  let result = speciesName(options);
  if (options.sex) result = filteredGenres(options);
  return result;
}

module.exports = getAnimalMap;

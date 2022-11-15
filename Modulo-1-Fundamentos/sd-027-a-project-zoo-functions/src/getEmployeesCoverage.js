const data = require('../data/zoo_data');

const { employees, species } = data;

const result = employees.map((employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animalId) => species
      .find((specie) => specie.id === animalId).name),
    locations: responsibleFor.map((animalId) => species
      .find((specie) => specie.id === animalId).location),
  };
});

function getEmployeesCoverage(employer) {
  if (!employer) return result;

  const getEmployee = result.find(({ fullName, id }) => fullName
    .includes(Object.values(employer)) || id.includes(Object.values(employer)));

  if (!getEmployee) {
    throw new Error('Informações inválidas');
  }

  return getEmployee;
}

module.exports = getEmployeesCoverage;

const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const empregados = employees
      .filter(({ managers }) => managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
    return empregados;
  }
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };

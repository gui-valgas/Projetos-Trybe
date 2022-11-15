const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) return {};
  return employees
    .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
}

module.exports = getEmployeeByName;

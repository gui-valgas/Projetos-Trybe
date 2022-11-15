const data = require('../data/zoo_data');

const { species } = data; // desestruturando horas e species

// Filter dos animais por dias
const checkAnimalDays = (day) => {
  const filterDays = species.filter((animal) => animal.availability.includes(day));
  return filterDays.map((animal) => animal.name);
};

// Check dos animais e dias:

const checkIsValidAnimal = (scheduleTarget) => species
  .some((animal) => animal.name === scheduleTarget);

const checkIsValidDay = (scheduleTarget) => Object.keys(data.hours)
  .some((day) => day === scheduleTarget);

const getItineraryList = (hours) => Object.entries(hours).reduce((acc, [weekDay, schedule]) => ({
  ...acc,
  [weekDay]: weekDay === 'Monday'
    ? { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
    : {
      officeHour: `Open from ${schedule.open}am until ${schedule.close}pm`,
      exhibition: checkAnimalDays(weekDay),
    },
}), {});

// Função getSchedule:

function getSchedule(scheduleTarget) {
  const itineraryList = getItineraryList(data.hours);

  const someAnimal = checkIsValidAnimal(scheduleTarget);

  const someDay = checkIsValidDay(scheduleTarget);

  if (!scheduleTarget) return itineraryList;

  if (someAnimal) return species.find((animal) => animal.name === scheduleTarget).availability;

  if (someDay) return { [scheduleTarget]: itineraryList[scheduleTarget] };

  return itineraryList;
}

module.exports = getSchedule;

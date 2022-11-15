const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  test('Testa o retorno ao passar parametros válidos, em um dia e hora que o zoológico esteja aberto', () => {
    expect(getOpeningHours('Friday', '11:00-AM')).toBe('The zoo is open');
  });

  test('Testa o retorno ao passar parametros válidos, em um dia e hora que o zoológico esteja fechado', () => {
    expect(getOpeningHours('Monday', '01:10-PM')).toBe('The zoo is closed');
  });

  test('Testa erro em caso das horas no parametro do horário não ser no formato indicado (12:MM-AM/PM)', () => {
    expect(() => getOpeningHours('Tuesday', 'doze:00-PM')).toThrow('The hour should represent a number');
  });

  test('Testa erro em caso dos minutos no parametro do horário não ser no formato indicado (HH:00-AM/PM)', () => {
    expect(() => getOpeningHours('Friday', '12:zero-AM')).toThrow('The minutes should represent a number');
  });

  test('Testa erro em caso da abreviação no parametro do horário não ser válida (12:00:AM ou 12:00:PM)', () => {
    expect(() => getOpeningHours('Saturday', '12:00:MG')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('Testa erro em caso da hora passada for menor que 0 ou maior que 12', () => {
    expect(() => getOpeningHours('Wednesday', '15:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  test('Testa erro em caso dos minutos passados forem menor que 0 ou maior que 59', () => {
    expect(() => getOpeningHours('Friday', '12:90-PM')).toThrow('The minutes must be between 0 and 59');
  });

  test('Testa erro em caso do parametro dia não ser uma string válida', () => {
    expect(() => getOpeningHours('domingo')).toThrow('The day must be valid. Example: Monday');
  });

  test('Testa retorno da função ao ser chamada sem parâmetros', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });
});

const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  test('Testa se handleElephants retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Testa retorno de handlerElephants com parametro que não seja uma string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Testa retorno ao passar parametro de uma chave inexistente', () => {
    expect(handlerElephants('um')).toBeNull();
  });

  test('Testa se ao passar o parametro count retorna um numero com a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Testa se retorna um array com a relação de dias em que é possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  test('Testa se a função retorna um number com a média das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('Testa se a função retorna os nomes dos elefantes residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});

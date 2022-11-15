// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3        
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado;
}

// Desafio 4
function concatName(arrayStrings) {
  let resultado = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Outra forma de resolução:

/*
let totalEmpates;
let totalVitorias;
let pontuacaoFinal = 0;

for (let index = 0; index <= wins; index += 1) {
  totalVitorias = index * 3
}
for (let index = 0; index <= ties; index += 1) {
  totalEmpates = index * 1
}
pontuacaoFinal = totalEmpates + totalVitorias
return pontuacaoFinal
*/

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum < array[index]) {
      maiorNum = array[index];
      contador = 0;
    }

    if (maiorNum === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1);
  let posicaoCat2 = Math.abs(mouse - cat2);

  if (posicaoCat1 < posicaoCat2) {
    return 'cat1';
  } else if (posicaoCat2 < posicaoCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 == 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 == 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado
}

// Desafio 9
function encode(string) {
  let codifica = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      codifica += '1';
    } else if (string[index] === 'e') {
      codifica += '2';
    } else if (string[index] === 'i') {
      codifica += '3';
    } else if (string[index] === 'o') {
      codifica += '4';
    } else if (string[index] === 'u') {
      codifica += '5';
    } else {
      codifica += string[index]
    };
  }
  return codifica;
}

function decode(string) {
  let decodifica = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decodifica += 'a';
    } else if (string[index] === '2') {
      decodifica += 'e';
    } else if (string[index] === '3') {
      decodifica += 'i';
    } else if (string[index] === '4') {
      decodifica += 'o';
    } else if (string[index] === '5') {
      decodifica += 'u';
    } else {
      decodifica += string[index];
    };
  }
  return decodifica;
}

// Desafio 10
function techList(array, nome) {
  let object = [];
  array = array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < array.length; index += 1) {
    object.push({ tech: array[index], name: nome });
  }
  return object;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

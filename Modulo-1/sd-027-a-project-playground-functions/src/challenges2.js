// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  let telefone = '(';
  if (arrayNumeros.length > 11 || arrayNumeros.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] < 0 || arrayNumeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numeroAtual = arrayNumeros[index];
    let repeticaoNum = 0;
    for (let index2 = 0; index2 < arrayNumeros.length; index2 += 1) {
      if (numeroAtual === arrayNumeros[index2]) {
        repeticaoNum += 1;
      }
      if (repeticaoNum >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (index === 1) {
      telefone += arrayNumeros[index] + ') ';
    } else if (index === 6) {
      telefone += arrayNumeros[index] + '-';
    } else {
      telefone += arrayNumeros[index];
    }
  }
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linha1 = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
  let linha2 = (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA));
  let linha3 = (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA));

  return linha1 && linha2 && linha3;
}

// Desafio 13
function hydrate(string) {
  let stringSplit = string.split(' ');

  let drinks = 0;

  for (let index = 0; index < stringSplit.length; index += 1) {
    let parsedNum = parseInt(stringSplit[index]);

    if (parsedNum) {
      drinks += parsedNum;
    }
  }

  if (drinks === 1) {
    drinks += ' copo de água';
  } else {
    drinks += ' copos de água';
  }

  return drinks;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

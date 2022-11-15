// Variáveis globais
const pixelBoardDivs = '#pixel-board>.linha>.pixel';
const buttonID = '#button-container';
const buttonCont = 'button-container';

// Cria titulo
function criaTitulo() {
  const titulo = document.querySelector('#title');
  titulo.innerHTML = 'Paleta de Cores';
}
criaTitulo();

// gera cores aleatórias
function geraCores() {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);
  const corRandom = `rgb(${r}, ${g}, ${b})`;

  return corRandom;
}

// Cria os containers das 4 cores
function criaPaletaDeCores() {
  const paletaPai = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.style.width = '40px';
    criaDiv.style.height = '40px';
    criaDiv.style.border = '1px solid black';
    criaDiv.style.display = 'inline-block';
    criaDiv.className = 'color';
    paletaPai.appendChild(criaDiv);

    if (index === 0) {
      criaDiv.style.backgroundColor = 'black';
      criaDiv.className = 'color selected';
    } else {
      criaDiv.style.backgroundColor = geraCores();
    }
  }
}
criaPaletaDeCores();

// Botao de cores aleatórias
function botaoRandom(textoBotao) {
  const buttonContainer = document.querySelector(buttonID);
  const randonColorButton = document.createElement('button');
  randonColorButton.id = 'button-random-color';
  randonColorButton.innerHTML = textoBotao;
  buttonContainer.appendChild(randonColorButton);
  const cores = document.querySelectorAll('.color');
  randonColorButton.addEventListener('click', () => {
    const coresBackground = [];
    for (let index = 0; index < cores.length; index += 1) {
      if (index === 0) {
        cores[index].style.backgroundColor = 'black';
      } else {
        cores[index].style.backgroundColor = geraCores();
      }
      coresBackground.push(cores[index].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(coresBackground));
  });
}
botaoRandom('Cores aleatórias');

// Cria quadrado de pixels 5x5
function criaBoard(tamanho) {
  const pixelsContainer = document.querySelector('#pixel-board');

  for (let index = 0; index < tamanho; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'linha';
    pixelsContainer.appendChild(linha);
    for (let index2 = 0; index2 < tamanho; index2 += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      linha.appendChild(pixels);
    }
  }
}
criaBoard(5);

// Seleciona as cores
function selecionaCor() {
  const paletaDeCores = document.getElementById('color-palette');
  const cores = document.querySelectorAll('.color');

  paletaDeCores.addEventListener('click', (event) => {
    const element = event.target;
    if (element.className === 'color') {
      for (let index = 0; index < cores.length; index += 1) {
        cores[index].className = 'color';
        element.className = 'color selected';
      }
    } else if (element.className === 'selected color') {
      element.className = 'color';
    }
  });
}
selecionaCor();

// pinta os pixels
function pintarPixels() {
  const pixels = document.getElementById('pixel-board');

  pixels.addEventListener('click', (event) => {
    const element = event.target;
    const corSelecionada = document.querySelector('.selected');
    const cor = corSelecionada.style.backgroundColor;

    if (element.className === 'pixel') {
      element.style.backgroundColor = cor;
    }
    // localStorage
    const board = document.querySelectorAll(pixelBoardDivs);
    const pixelColors = [];
    for (let index = 0; index < board.length; index += 1) {
      pixelColors.push(board[index].style.backgroundColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(pixelColors));
  });
}
pintarPixels();

// Limpa o board
function clearBoard() {
  const buttonContainer = document.getElementById(buttonCont);
  const clearButton = document.createElement('button');
  clearButton.id = 'clear-board';
  clearButton.innerHTML = 'Limpar';

  buttonContainer.appendChild(clearButton);

  clearButton.addEventListener('click', () => {
    const board = document.querySelectorAll(pixelBoardDivs);
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

function createInput() {
  const buttonContainer = document.getElementById(buttonCont);
  const input = document.createElement('input');
  input.placeholder = 'insira um numero de 5 a 25';
  input.type = 'number';
  input.min = '1';
  input.id = 'board-size';
  buttonContainer.appendChild(input);
}
createInput();

function removeBoard() {
  const linhas = document.querySelectorAll('.linha');

  for (let index = 0; index < linhas.length; index += 1) {
    linhas[index].remove();
  }
}

function createInputButton() {
  const buttonContainer = document.getElementById(buttonCont);
  const inputButton = document.createElement('button');
  inputButton.innerHTML = 'VQV';
  inputButton.style.fontFamily = 'Permanent Marker';
  inputButton.id = 'generate-board';

  buttonContainer.appendChild(inputButton);
}
createInputButton();

// TASK 14 tentativa
function boardSizeInput() {
  const buttonInput = document.querySelector('#generate-board');

  buttonInput.addEventListener('click', () => {
    const input = document.querySelector('#board-size');
    if (!input.value) {
      alert('Board Inválido!');
    } else if (input.value < 5) {
      removeBoard();
      criaBoard(5);
    } else if (input.value > 50) {
      removeBoard();
      criaBoard(50);
    } else {
      removeBoard();
      criaBoard(input.value);
    }
    localStorage.setItem('boardSize', JSON.stringify(input.value));
  });
}
boardSizeInput();

// LocalStorage
function getColorPalette() {
  const paletaDeCores = JSON.parse(localStorage.getItem('colorPalette'));
  if (paletaDeCores) {
    const backgroundColor = document.querySelectorAll('.color');
    for (let index = 0; index < backgroundColor.length; index += 1) {
      backgroundColor[index].style.backgroundColor = paletaDeCores[index];
    }
  }
}

function getBoardColors() {
  const pixelColors = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixelColors) {
    const board = document.querySelectorAll(pixelBoardDivs);
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = pixelColors[index];
    }
  }
}

function boardSizeStorage() {
  const boardSize = JSON.parse(localStorage.getItem('boardSize'));

  if (boardSize !== null) {
    removeBoard();
    criaBoard(boardSize);
    getBoardColors();
  } else {
    boardSizeInput();
    getBoardColors();
  }
}

function webStorage() {
  getBoardColors();
  getColorPalette();
  boardSizeStorage();
}
webStorage();

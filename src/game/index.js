// class Square {
//   constructor(value, index, boardSize) {
//     // должен быть способ определения, на какой строке/столбце
//     // находится ячейка и есть ли по соседству пустая, чтобы её передвинуть
//     this.value = value;

//     if (value) {
//       this.elem = this.renderNumSquare();
//     } else {
//       this.elem = this.renderEmptySquare();
//     }
    
//     this.squareSize = this.calcSquareSizes(boardSize) + 'px';

//     this.initStyles();
//   }

//   calcSquareSizes(boardSize) {
//     let boardMin = document.documentElement.clientWidth < document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;

//     return boardMin * 80 / 100 / boardSize - 5;
//   }

//   renderNumSquare() {
//     let elem = document.createElement('div');
//     elem.classList.add('square');
//     elem.appendChild(document.createTextNode(`${this.value}`));

//     return elem;
//   }

//   renderEmptySquare() {
//     let elem = document.createElement('div');
//     elem.classList.add('square');
//     elem.classList.add('square--empty');

//     return elem;
//   }

//   initStyles() {
//     // this.elem.style.top = this.top;
//     // this.elem.style.left = this.left;
//     this.elem.style.width = this.squareSize;
//     this.elem.style.height = this.squareSize;
//   }
// }

// createBoard() {
//   let board = document.createElement('div');
//   board.classList.add('board');

//   for (let i = 0, j = 0; i < this.size**2; i++) {
//     let square = new Square(this.puzzle[i], i, this.size);
//     board.appendChild(square.elem);

//     this.squares.push(square);
//   }

//   board.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
//   board.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
  
//   return board;
// }
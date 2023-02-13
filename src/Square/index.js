import "./style.scss";

class Square {
  constructor(value, index, boardSize) {
    this.value = value;

    if (value) {
      this.elem = this.renderNumSquare();
    } else {
      this.elem = this.renderEmptySquare();
    }
    
    // this.top = `${(index % boardSize)/ boardSize * 100}%`;
    // this.left = `${Math.floor(index / boardSize)/ boardSize * 100}%`;
    this.squareSize = this.calcSquareSizes(boardSize) + 'px';

    this.initStyles();
  }

  calcSquareSizes(boardSize) {
    let boardMin = document.documentElement.clientWidth < document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;

    return boardMin * 80 / 100 / boardSize - 5;
  }

  renderNumSquare() {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.appendChild(document.createTextNode(`${this.value}`));

    return elem;
  }

  renderEmptySquare() {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.classList.add('square--empty');

    return elem;
  }

  initStyles() {
    // this.elem.style.top = this.top;
    // this.elem.style.left = this.left;
    this.elem.style.width = this.squareSize;
    this.elem.style.height = this.squareSize;
  }
}

export default Square;
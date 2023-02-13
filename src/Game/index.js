import "./style.scss";
import Square from "../Square";

class Game {
  constructor(size = 4) {
    this.size = size;
    this.steps = 0;
    this.timer = 0;
    this.squares = new Array();
    this.puzzle = this.generatePuzzle();
    this.puzzleBoard = this.renderGame();

  }

  generatePuzzle() {
    let arr = [];

    for (let i = 0; i < this.size ** 2; i++) {
      arr.push(i);
    }
    arr.sort((a, b) => (Math.random() * 1.5  - 1 ));
    // check isSolved
    return arr;
  }

  renderGame() {
    let container = document.createElement('div');
    container.classList.add('container');

    container.appendChild(this.createBoard());
    container.appendChild(this.createStats());
    return container;
  }

  createStats() {
    let stats = document.createElement('div');
  
    stats.classList.add("stats");
    
    let timer = document.createElement('div');
    timer.classList.add('timer');
    stats.appendChild(timer);
  
    let steps = document.createElement('span');
    let stepsText = document.createTextNode("Steps:");
    steps.appendChild(stepsText);
    steps.classList.add('steps');
    stats.appendChild(steps);
  
    return stats;
  }

  createBoard() {
    let board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0, j = 0; i < this.size**2; i++) {
      let square = new Square(this.puzzle[i], i, this.size);
      board.appendChild(square.elem);

      this.squares.push(square);
    }

    board.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    
    return board;
  }

}

export default Game;
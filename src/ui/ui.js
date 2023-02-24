export class Ui {
  constructor() {


    this.renderGameBoard(); // 

  }

  renderGameBoard() {
    // let container = document.createElement('div');
    // container.classList.add('container');

    // container.appendChild(this.createBoard());
    // container.appendChild(this.createStats());
    // return container;

    this.canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    
    this.canvas.width = 300;
    
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



}


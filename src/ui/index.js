import './style.scss';
import UI from './ui';
import Button from './button';

export default function createUI() {
  let ui = new UI();

  // maybe delete method?
  ui.addElement(ui.view == "table" ? createHeaderMenu() : createBurgerMenu());
  ui.addElement(createStats());
  ui.addElement(createGameBoard());
}

function createHeaderMenu() {
  let menu = document.createElement('header');
  menu.classList.add('menu');

  let buttonNewGame = new Button("New Game", () => {
    //remove current game and create new
    console.log("buttonNewGame");
  });
  
  let buttonSaveGame = new Button("Save", () => {
    //save the game
    console.log("buttonSaveGame");
  })

  let buttonShowRating = new Button("Rating", () => {
    //show popup with ratings
    console.log("buttonShowRating");
  })

  let buttonTimerControl = new Button("Start", () => {
    // toggle to "stop" when game starts
    // or do "stop" button inactive before game start?3
    console.log("buttonTimerControl");
  })

  menu.append(buttonNewGame.element);
  menu.append(buttonSaveGame.element);
  menu.append(buttonShowRating.element);
  menu.append(buttonTimerControl.element);

  return menu;
}

function createStats() {
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

function createGameBoard() {
  let container = document.createElement('div');
  container.classList.add('container');

  let canvas = document.createElement('canvas');
  canvas.width = 300; // i need to calculate size for adaptive version
  canvas.height = 300;

  container.style.width = canvas.width + "px";
  container.append(canvas);

  let ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(230, 210, 220)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return container;
}
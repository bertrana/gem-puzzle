import './style.scss';
import UI from './ui';
import Button from './button';
import createGameBoard from '../game';

export default function createUI() {
  let ui = new UI();

  // maybe delete method "addElement"?
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
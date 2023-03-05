import Game from "./game";
import { generateArrayOfNumbers } from "../utils/utils"

export default function createGameBoard() {
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

  container.append(createSizeForm());
  console.log("container after apppend");
  console.log(container);
  loadLastGame();

  return container;
}

function createSizeForm() {
  let startSize = 3;
  let maxSize = 6;

  let form = document.createElement('form');
  form.name = "form__size";
  
  for (let i = startSize; i < maxSize; i++) {
    let radio = document.createElement('input');
    if (i === startSize) {
      radio.checked = true;
    }
    radio.type = 'radio';
    radio.value = i + 'x' + i;
    radio.name = 'size';
    form.append(radio);
  }

  console.log("i create form:");
  console.log(form);

  return form;
}


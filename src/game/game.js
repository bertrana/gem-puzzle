import { generateArrayOfNumbers } from "../utils/utils";

export default class Game {
  constructor() {
    if (this.isLastGameExist()) {
      this.data = this.loadLastGame(); //?
    } else {
      this.size = 3; //global variable?
      this.data = generateArrayOfNumbers(this.size);
    }
  }

  renderGame(ctx, canvasWidth) {
    let rectSize = canvasWidth / (this.size + 1);
    let gap = rectSize / (this.size - 1);
    let x = 0;
    let y = 0;
    ctx.font = rectSize / 2 + "px serif";

    //maybe change array to double size?
    for (let i = 0; i < this.data.length; i++) {
      x = (i % this.size) * (rectSize + gap);
      y = Math.floor(i / this.size) * (rectSize + gap);
      ctx.fillStyle = "yellow";
      ctx.fillRect(x, y, rectSize, rectSize);
      ctx.fillStyle = "black";
      ctx.fillText("" + i, x + Math.floor(rectSize/3), y + Math.floor(rectSize * 3/4), rectSize); 
    }
  }
  
  checkGameSize() {
    let form = document.forms[0];
    console.log(document.forms);

    if (!form) {
      return 3;
    }
    
    for (let radio of form.elements["size"]) {
      console.log("radio from CheckGameSize");
      console.log(radio);
    }
  }

  isLastGameExist() {
    //check localStorage
    return false;
  }
  
  loadLastGame() {
    //need to load game from localStorage
  }
}
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

  handleEvent(evt) {
    switch (evt.type) {
      // case "mouseenter":
      //   this.onHoveredElement(evt);
      //   break ;
      // case "mouseleave":
      //   this.onUnhoveredElement(evt);
      //   break ;
      case "mousemove":
        this.onHoveredElement(evt);
    }
  }

  onHoveredElement(evt) {
    for (let i = 0; i < this.data.length; i++) {
      if (evt.offsetX < (i % this.size) * (this.rectSize)) {
        console.log(i);
      } 
    }
  }

  renderGame(ctx, canvasWidth) {
    this.rectSize = canvasWidth / (this.size + 1);
    let gap = this.rectSize / this.size;
    let x = 0;
    let y = 0;
    ctx.font = this.rectSize / 2 + "px serif";

    //maybe change array to double size?
    for (let i = 0; i < this.data.length; i++) {
      x = (i % this.size) * (this.rectSize + gap) + gap / 2;
      y = Math.floor(i / this.size) * (this.rectSize + gap) + gap / 2;
      ctx.fillStyle = "yellow";
      ctx.fillRect(x, y, this.rectSize, this.rectSize);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("" + i, x + Math.floor(this.rectSize/3), y + Math.floor(this.rectSize * 3/4), this.rectSize); 
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
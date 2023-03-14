import { generateArrayOfNumbers } from "../utils/utils";

export default class Game {
  constructor() {
    
  }

  startNewGame() {
    let size = this.checkGameSize();
    let newArray = generateArrayOfNumbers(size);
  
  
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
  
  loadLastGame() {
    this.startNewGame();
  }
}
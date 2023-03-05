import { generateArrayOfNumbers } from "../utils/utils";

export default class Game {
  constructor() {
    
  }

  startNewGame() {
    let size = checkGameSize();
    let newArray = generateArrayOfNumbers(size);
  
  
  }
  
  checkGameSize() {
    let form = document.forms[0];
    console.log(form);
    
    for (let radio of form.elements["size"]) {
      console.log("radio from CheckGameSize");
      console.log(radio);
    }
  }
  
  loadLastGame() {
    startNewGame();
  }
}
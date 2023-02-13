import createMenu from "./Menu";
import Game from "./Game";

document.body.appendChild(createMenu());

let game = new Game();
document.body.appendChild(game.puzzleBoard);
console.log(game.puzzleBoard);

export default class Button {
  constructor (text, callback) {
    this.element = document.createElement('button');
    this.element.classList.add(`button`);
  
    let buttonText = document.createTextNode(text);
    this.element.appendChild(buttonText);

    this.element.addEventListener('click', callback);
  }
}
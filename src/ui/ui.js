export default class UI { //can I change it to object?
  constructor() {
    this.clientHeight = document.body.clientHeight;
    this.clientWidth = document.body.clientWidth;

    this.view = this.clientWidth > this.clientHeight ? "table" : "mobile";
    
    this.element = document.createElement('div');
    this.element.classList.add('ui');
    document.body.append(this.element);

  }

  addElement(newElement) {
    this.element.append(newElement);
  }
}


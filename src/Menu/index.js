import './style.scss';

function createButton(button_type) {
  let button = document.createElement('button');
  button.classList.add(`button`);
  button.classList.add(`button__${button_type}`);

  let buttonText = document.createTextNode(button_type);
  button.appendChild(buttonText);
  return button;
}


function createMenu() {
  let menu = document.createElement('section');

  menu.classList.add("menu");
  menu.appendChild(createButton("start"));
  menu.appendChild(createButton("result"));
  
  return menu;
}

export default createMenu;
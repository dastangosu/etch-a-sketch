//Nodes
const sketchpad = document.querySelector('#sketchpad');
const setTheSize = document.querySelector('#set-size');
const colorChoice = document.querySelector('#colorChoice');
const eraserButton = document.querySelector('#eraser-mode');
const clearButton = document.querySelector('#clear-mode');
const colorMode = document.querySelector('#color-mode');



function addSquares(size) {
  for (let i = 0; i < (size * size); i++) {
    const square = document.createElement('div');
    square.style.width = 500 / size + 'px';
    square.style.height = 500 / size + 'px';
    // square.style.border = '1px solid'
    square.classList.add('square');
    sketchpad.appendChild(square);
  }
}

function removeSquares() {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    sketchpad.removeChild(squares[i]);
  }
}


//Check if mouse down is being hold
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function addColor(e) {
  if ((mouseDown && e.type === "mouseover") || e.type === "mousedown") {
    e.target.style.backgroundColor = colorChoice.value;
  }
}
function createGrid(size) {
  eraserButton.classList.remove('active');
  colorMode.classList.add('active');
  removeSquares();
  addSquares(size);
  setTheSize.textContent = "Set the size (Current: " + size + "x" 
  + size + ")"
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", addColor)
    squares[i].addEventListener("mousedown", addColor);
  }
}

setTheSize.addEventListener('click', function (e) {
  let size = prompt("Please input the size of a sketchpad:");
  if(size===null) {
    return;
  }
  createGrid(size);
})
function removeColor(e) {
  if ((mouseDown && e.type === "mouseover") || e.type === "mousedown") {
    e.target.style.backgroundColor = "#ffffff";
  }
}
clearButton.addEventListener('click', function(e) {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#ffffff";
  }
})
eraserButton.addEventListener('click',function(e) {
  colorMode.classList.remove('active');
  e.target.classList.add('active');
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", removeColor)
    squares[i].addEventListener("mousedown", removeColor);
  }
})
colorMode.addEventListener('click',function(e) {
  eraserButton.classList.remove('active');
  e.target.classList.add('active');
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener("mouseover", removeColor);
    squares[i].removeEventListener("mousedown", removeColor);

    squares[i].addEventListener("mouseover", addColor);
    squares[i].addEventListener("mousedown", addColor);
  }
})

window.onload = () => {
  createGrid(20);
  colorMode.classList.add('active');
};


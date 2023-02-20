//Nodes
const sketchpad = document.querySelector('#sketchpad');
const button = document.querySelector('#button');


function addSquares(size) {
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.style.width = 500 / size + 'px';
        square.style.height = 500 / size + 'px';
        // square.style.border = '1px solid'
        square.classList.add('square');
        sketchpad.appendChild(square);
    }
}

function removeSquares() {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        sketchpad.removeChild(squares[i]);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
button.addEventListener('click', function () {
    let size = prompt("Please input the size of a sketchpad:");
    removeSquares();
    addSquares(size);
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function (e) {
            if(mouseDown) {
                e.target.style.backgroundColor = 'green';
            }
            
        })

        squares[i].addEventListener("mousedown", function (e) {
            e.target.style.backgroundColor = 'green';
        });

    }
})



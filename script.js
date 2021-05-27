
if (document.getElementById("squaresChoice").value) {
    squares = document.getElementById("squaresChoice").value;}
else {
    squares = "16";
}

function gridGenerate(squares) {
    if (document.getElementById("squaresChoice").value) {
        squares = document.getElementById("squaresChoice").value;}
    else {
        squares = "16";
    }
    let gridContainer = document.querySelector("#gridContainer");
    let gridWidth = gridContainer.offsetWidth;
    let gridHeight = gridContainer.offsetHeight;
    let squareWidth = (gridWidth / squares);
    let squareHeight = (gridHeight / squares);
    for (let i = 0; i < squares**2; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridContainer.appendChild(gridSquare);
        gridSquare.style.width = squareWidth;
        gridSquare.style.height = squareHeight;
    }
}

let currentSquare = document.getElementById("gridContainer");

function paintMethod(choice) {
    currentSquare.addEventListener("mouseover", choice);
}

const paintButton = document.querySelector('#paint');
paintButton.addEventListener('click', () => {
    paintMethod(paintSquare);
});

function paintSquare(e) {
    e.target.style.backgroundColor = "#333";
}

const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', () => {
    paintMethod(random);
});

function random(e) {
    let colourElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
 'B', 'C', 'D', 'E', 'F'];
    let currentColour = ['#'];
        for (i = 0; i < 6; i++) {
        num = colourElements[Math.floor(Math.random() * 16)];
        currentColour.push(num);
    }
    currentColour = (currentColour.join(""));
    e.target.style.backgroundColor = currentColour;
}

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', () => {
    paintMethod(erase);
});

function erase(e) {
    e.target.style.backgroundColor = '#FFF'; 
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    resetGrid();
});

function resetGrid() {
    let currentGrid = document.getElementById("gridContainer");
    while (currentGrid.firstChild) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    gridGenerate(squares);
    paintMethod(paint);
}

// this is still in progress, will incrementally darken a square with each pass of the mouse
function shadeSquare() {
    let shades = ["hsl(0, 0%, 100%", "hsl(0, 0%, 90%", "hsl(0, 0%, 80%", "hsl(0, 0%, 70%", 
    "hsl(0, 0%, 60%", "hsl(0, 0%, 50%", "hsl(0, 0%, 40%", "hsl(0, 0%, 30%", 
    "hsl(0, 0%, 20%", "hsl(0, 0%, 10%", "hsl(0, 0%, 0%"];
    let currentShade = this.getAttribute('backgroundColor');
    console.log(currentShade);
}

gridGenerate();

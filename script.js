// All grid generators/handlers for individual squares:
function gridGenerate(squares) {
    checkGridChange();
    let gridContainer = document.querySelector("#gridContainer");
    let gridWidth = gridContainer.offsetWidth;
    let gridHeight = gridContainer.offsetHeight;
    let squareWidth = (gridWidth / squares);
    let squareHeight = (gridHeight / squares);
    for (let i = 0; i < squares**2; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.width = squareWidth;
        gridSquare.style.height = squareHeight;
        gridContainer.appendChild(gridSquare);
    }
}

function checkGridChange() {
    if (document.getElementById("squaresChoice").value) {
        (document.getElementById("squaresChoice").value) > 100 ? alert("Choose a value of 100 or less, please!")
        : squares = document.getElementById("squaresChoice").value;}
    else {
        squares = "25";
    }
    return squares;
}

let currentSquare = document.getElementById("gridContainer");

function paintMethod(choice) {
    clearListeners();
    currentSquare.addEventListener("mouseover", choice);
}

function clearListeners() {
    currentSquare.removeEventListener("mouseover", shadeSquare);
    currentSquare.removeEventListener("mouseover", paintGrey);
    currentSquare.removeEventListener("mouseover", random);
    currentSquare.removeEventListener("mouseover", erase);
}

// All paint-style functions and button actions:
function paintGrey(e) {
    e.target.style.backgroundColor = "#333";
}

function shadeSquare(e) {
    let newShade;
    let currentShade = getComputedStyle(e.target).backgroundColor;
    let rgbArr = currentShade.split(/[\s,\()]+/);
    if (rgbArr[0] === 'rgba') {
        let newAlpha = parseFloat(rgbArr[4]) + 0.1;
        newShade = 'rgba(' + rgbArr[1] + ', ' + rgbArr[2] + ', ' + rgbArr[3] + ', ' + newAlpha + ')';
        }
    else {
        newShade = 'rgba(0, 0, 0, 0.1)'
    }
    e.target.style.backgroundColor = newShade;
}

function random(e) {
    let colourElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let currentColour = ['#'];
        for (i = 0; i < 6; i++) {
        num = colourElements[Math.floor(Math.random() * 16)];
        currentColour.push(num);
    }
    e.target.style.backgroundColor = (currentColour.join(""));
}

function erase(e) {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
}

function resetGrid() {
    let currentGrid = document.getElementById("gridContainer");
    while (currentGrid.firstChild) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    checkGridChange();
    gridGenerate(squares);
}

// Buttons for changing paint styles and making grid choices:
const shadeButton = document.querySelector('#shadeSquare');
shadeButton.addEventListener('click', () => {
    paintMethod(shadeSquare);
});
const greyButton = document.querySelector('#paintGrey');
greyButton.addEventListener('click', () => {
    paintMethod(paintGrey);
});
const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', () => {
    paintMethod(random);
});
const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', () => {
    paintMethod(erase);
});
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

// Default grid and paint method on first page load:
gridGenerate(25);
paintMethod(paintGrey);


// TO DO:
// * Implement incremental shading function when painting
// * Final styling tweaks
// * Refactor/consolidate code

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
        squares = document.getElementById("squaresChoice").value;}
    else {
        squares = "25";
    }
    return squares;
}

let currentSquare = document.getElementById("gridContainer");

// Removes existing event listener and sets new user choice when button for new painting style is clicked
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


// function to check if current square colour is already in rgba mode, increase alpha if it is, otherwise
// set to white with 0.1 Alpha as a default state
function shadeSquare(e) {
    let alpha;
    let newShade;
    let currentShade = getComputedStyle(this).backgroundColor;
    rgbArr = currentShade.split(/[\s,\()]+/);
    if (rgbArr[0] == 'rbga') {
        alpha = rgbArr[4] + 0.1;
        newShade = 'rgba(' + rgbArr[1] + ', ' + rgbArr[2] + ', ' + rgbArr[3] + ', ' + alpha + ')';
            }
    else {
        newShade = 'rgba(0, 0, 0, 0.1)'
    }
    e.target.style.backgroundColor = newShade;
}
// ^^this is still in progress, will incrementally darken squares with each pass of the mouse

function paintGrey(e) {
    e.target.style.backgroundColor = "#333";
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

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let currentGrid = document.getElementById("gridContainer");
    while (currentGrid.firstChild) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    checkGridChange();
    gridGenerate(squares);
}

gridGenerate(25);

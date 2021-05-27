function gridGenerate(squares) {
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

function paintSquare(e) {
    e.target.style.backgroundColor = rainbow();
}

let currentSquare = document.getElementById("gridContainer");
currentSquare.addEventListener("mouseover", paintSquare);

function rainbow() {
    let colourElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
 'B', 'C', 'D', 'E', 'F'];
    let currentColour = ['#'];
        for (i = 0; i < 6; i++) {
        num = colourElements[Math.floor(Math.random() * 16)];
        currentColour.push(num);
    }
    return(currentColour.join(""));
}

function shadeSquare() {
    let shades = ["hsl(0, 0%, 100%", "hsl(0, 0%, 90%", "hsl(0, 0%, 80%", "hsl(0, 0%, 70%", 
    "hsl(0, 0%, 60%", "hsl(0, 0%, 50%", "hsl(0, 0%, 40%", "hsl(0, 0%, 30%", 
    "hsl(0, 0%, 20%", "hsl(0, 0%, 10%", "hsl(0, 0%, 0%"];
}

gridGenerate(32);

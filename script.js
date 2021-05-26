function gridGenerate(squares) {
    let gridContainer = document.querySelector("#gridContainer");
//    let gridWidth = gridContainer.offsetWidth;
//    let squareWidth = (gridWidth / squares);
//    let squareHeight = (gridHeight / squares);
    for (let i = 0; i < squares**2; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridContainer.appendChild(gridSquare);
//        gridSquare.style.width = squareWidth;
//        gridSquare.style.height = squareHeight;
    }
}

function paintSquare(e) {
    e.target.style.backgroundColor = "#666";
}

let currentSquare = document.getElementById("gridContainer");
currentSquare.addEventListener("mouseover", paintSquare);

function shadeSquare() {
    let shades = ["hsl(0, 0%, 100%", "hsl(0, 0%, 90%", "hsl(0, 0%, 80%", "hsl(0, 0%, 70%", 
    "hsl(0, 0%, 60%", "hsl(0, 0%, 50%", "hsl(0, 0%, 40%", "hsl(0, 0%, 30%", 
    "hsl(0, 0%, 20%", "hsl(0, 0%, 10%", "hsl(0, 0%, 0%"];
}

gridGenerate(16);

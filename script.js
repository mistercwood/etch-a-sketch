

function gridGenerate(squares) {
    let gridContainer = document.querySelector('.gridContainer');
//    let gridWidth = gridContainer.offsetWidth;
//    let squareWidth = (gridWidth / squares);
//    let squareHeight = (gridHeight / squares);
    for (let i = 0; i < squares**2; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridContainer.appendChild(gridSquare);
//        gridSquare.style.width = squareWidth;
//        gridSquare.style.height = squareHeight;
    }
}

gridGenerate(16);

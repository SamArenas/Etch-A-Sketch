// The button to adjust dimensions
// the table itself
// the button to clear the grid
let btnDimension = document.querySelector('.adjust');
let table = document.querySelector('.container');
let btnClear = document.querySelector('.clear');

//loads cells in the 2D drawing grid
let loadCells = (num) => {
    changeDimensionHeading(num);

    for (i = 0; i < num; i++) {
        let row = document.createElement("div");
        for (j = 0; j < num; j++) {
            let cell = document.createElement("div");
            cell.style.borderWidth = "0";
            addCellColorChanger(cell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
};

//changes text content of size class h3
let changeDimensionHeading = (num) => {
    let size = document.querySelector('.size');
    size.textContent = num + "x" + num;
}

//deletes all cells in the 2D drawing grid
let removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//eventlistener that allows cell to change color when hovered over
let addCellColorChanger = (cell) => {
    cell.addEventListener("mouseenter", () => {
        if (cell.style.backgroundColor == "") {
            let r = getRandomInt(0, 256);
            let g = getRandomInt(0, 256);
            let b = getRandomInt(0, 256);
            cell.style.backgroundColor = "rgb( " + r + ", " + g + ", " + b + ")";
        }
    });
};

//random number generator from 0 to 255 
let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

//event listener when amount of cells is changed via clicking the adjust button
btnDimension.addEventListener('click', () => {
    newDimension = prompt("Enter the dimension of the Grid", "16");
    if (newDimension > 0 && newDimension < 101) {
        removeAllChildren(table);
        loadCells(newDimension);
    }
    else if (newDimension < 0 || newDimension > 100) {
        alert("Please enter a dimension value between 0 and 100");
    }
});

// event listener when clear button is clicked
btnClear.addEventListener('click', () => {
    let cells = document.querySelectorAll(".container div div");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
});

//initial call to load a 16x16 grid in the drawing board
window.onload = loadCells(16);

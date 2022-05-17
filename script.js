let dimension = document.querySelector('.adjust');
let table = document.querySelector('.container');

let loadCells = (num) =>{
    for(i = 0; i<num; i++){
        let row = document.createElement("div");
        for(j = 0; j<num; j++){
            let square = document.createElement("div");
            row.appendChild(square);
        }
        table.appendChild(row);
    }
};

let removeAllChildren = (parent) =>{
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

dimension.addEventListener('click', (e) =>{
    let val = document.querySelector('.newDimension').value;
    if(val>0 && val<101){
        removeAllChildren(table);
        loadCells(val);
    }
});

window.onload = loadCells(6);

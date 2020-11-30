// HTML Elements
let rowNumber = document.getElementById('rowCounter');
let columnNumber = document.getElementById('columnCounter');
let btnSubmit = document.getElementById('btnSubmit');

// For appending content
let TableContainer = document.getElementById('content');

// Function to Display
function Result(){
    let rowT = rowNumber.value;
    let columnT = columnNumber.value;

    let table = document.getElementById("table");
    let tbody = document.getElementById("tbody");
    

    for(let i = 0; i < rowT; i++){
        let row = tbody.insertRow(i);
        for(let j = 0; j < columnT; j++){
            let cell = row.insertCell(j);
            cell.textContent = `row${i} col${j}`;
        }
 
    }
    
    
    TableContainer.innerHTML = '';
  
    TableContainer.appendChild(table);
    
}
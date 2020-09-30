let myBody = document.querySelector("body");
console.log(myBody);

let mainDiv = document.createElement("div");
myBody.prepend(mainDiv);
mainDiv.setAttribute("id", "content");

let myInput = document.createElement("input");
mainDiv.appendChild(myInput);
myInput.setAttribute("id", "inputNumber");

let ligne = document.createElement("hr");
mainDiv.appendChild(ligne);
ligne.setAttribute("id", "ligne");

// Créer row et cols pour les buttons

let myDivRow = document.createElement("div");
mainDiv.appendChild(myDivRow);
myDivRow.setAttribute("id", "gridContainer");

for (let i = 1; i <= 16; i++) {
    let gridItem = document.createElement("button");
    gridItem.setAttribute("class", "grid-item");
    myDivRow.appendChild(gridItem);
    gridItem.innerText = i;
    if (i == 4) {
        gridItem.innerText = "+";
        gridItem.style.backgroundColor = "#0579FB";
        gridItem.style.color = "white";
    } else if (i == 5) {
        gridItem.innerText = "4";
    } else if (i == 6) {
        gridItem.innerText = "5";
    } else if (i == 7) {
        gridItem.innerText = "6";
    } else if (i == 9) {
        gridItem.innerText = "7";
    } else if (i == 10) {
        gridItem.innerText = "8";
    } else if (i == 11) {
        gridItem.innerText = "9";
    } else if (i == 8) {
        gridItem.innerText = "-";
        gridItem.style.backgroundColor = "#0579FB";
        gridItem.style.color = "white";
    } else if (i == 12) {
        gridItem.innerText = "*";
        gridItem.style.backgroundColor = "#0579FB";
        gridItem.style.color = "white";
    } else if (i == 16) {
        gridItem.innerText = "/";
        gridItem.style.backgroundColor = "#0579FB";
        gridItem.style.color = "white";
    } else if (i == 13) {
        gridItem.innerText = "C";
        gridItem.style.backgroundColor = "#DD4A46";
        gridItem.style.color = "white";
    } else if (i == 15) {
        gridItem.innerText = "=";
        gridItem.style.backgroundColor = "#40A745";
        gridItem.style.color = "white";
    } else if (i == 14) {
        gridItem.innerText = "0";
    }
}
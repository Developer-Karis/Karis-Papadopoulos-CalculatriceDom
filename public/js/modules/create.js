let myBody = document.querySelector("body");
console.log(myBody);

let mainDiv = document.createElement("div");
myBody.prepend(mainDiv);
mainDiv.setAttribute("id", "content");

export let myInput = document.createElement("input");
mainDiv.appendChild(myInput);
myInput.setAttribute("id", "inputNumber");

let ligne = document.createElement("hr");
mainDiv.appendChild(ligne);
ligne.setAttribute("id", "ligne");

// Créer row et cols pour les buttons

export let myDivRow = document.createElement("div");
mainDiv.appendChild(myDivRow);
myDivRow.setAttribute("id", "gridContainer");

let tab = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    "C", "0", "=", "/"
];

let gridItem;
for (let i = 0; i < tab.length; i++) {
    gridItem = document.createElement("button");
    gridItem.setAttribute("class", "grid-item");
    myDivRow.appendChild(gridItem);
    gridItem.innerText = tab[i];
}
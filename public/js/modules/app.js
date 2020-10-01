import { myInput, myDivRow, myBody } from './create.js';

myInput.setAttribute("type", "number");

// Ne pas copier coller un lien sur l'input
myInput.setAttribute("onpaste", "return false");
// Ne pas avoir le symbole e, symbole point dans l'input
myInput.setAttribute("onkeydown", `return event.keyCode !== 69 && event.keyCode !== 110`);

let arr = Array.from(myDivRow.children);

let tabOp = ["+", "-", "*", "/"];
let firstNumber;
let result;
let para;

// Gérer les buttons du clavier lorsqu'on clique dessus

arr.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText == parseInt(e.target.innerText)) {
            myInput.value += e.target.innerText;
        } else if (e.target.innerText == "=") {
            if (para.includes("+")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) + parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("-")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) - parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("*")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) * parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("/")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) / parseInt(myInput.value);
                myInput.value = result;
            }
        } else if (e.target.innerText == "C") {
            myInput.value = "";
        } else {
            tabOp.forEach(element => {
                if (e.target.innerText.includes(element)) {
                    firstNumber = myInput.value;
                    para = myInput.value + element;
                    myInput.value = "";
                }
            });
        }
    })
});

// Gérer les touches du clavier

let clavier = (e) => {
    if (e.key >= 0 && e.key <= 9) {
        myInput.value += e.key;
    } else if (e.key == "C") {
        myInput.value = "";
    } else if (e.key == "=" || e.key == "Enter") {
        if (para.includes("+")) {
            para = myInput.value + "=";
            result = parseInt(firstNumber) + parseInt(myInput.value);
            myInput.value = result;
        } else if (para.includes("-")) {
            para = myInput.value + "=";
            result = parseInt(firstNumber) - parseInt(myInput.value);
            myInput.value = result;
        } else if (para.includes("*")) {
            para = myInput.value + "=";
            result = parseInt(firstNumber) * parseInt(myInput.value);
            myInput.value = result;
        } else if (para.includes("/")) {
            para = myInput.value + "=";
            result = parseInt(firstNumber) / parseInt(myInput.value);
            myInput.value = result;
        }
    } else {
        tabOp.forEach(element => {
            if (e.key.includes(element)) {
                firstNumber = myInput.value;
                para = myInput.value + element;
                myInput.value = "";
            }
        });
    }
}

// Je rajoute un événement lorsqu'on clique sur une touche du clavier
myBody.addEventListener("keypress", clavier);

// Quand je clique sur un input avec l'événement focus
myInput.addEventListener("focus", () => {
    // Supprime l'événement précedant
    myBody.removeEventListener("keypress", clavier);
    // Réactive l'événement sans rajouter des nombres
    myBody.addEventListener("keypress", (e) => {
        if (e.key == "C") {
            myInput.value = "";
        } else if (e.key == "=" || e.key == "Enter") {
            if (para.includes("+")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) + parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("-")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) - parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("*")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) * parseInt(myInput.value);
                myInput.value = result;
            } else if (para.includes("/")) {
                para = myInput.value + "=";
                result = parseInt(firstNumber) / parseInt(myInput.value);
                myInput.value = result;
            }
        } else {
            tabOp.forEach(element => {
                if (e.key.includes(element)) {
                    firstNumber = myInput.value;
                    para = myInput.value + element;
                    console.log(para);
                    myInput.value = "";
                }
            });
        }
    });
});

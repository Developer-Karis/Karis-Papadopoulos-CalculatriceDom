import { myInput, myDivRow } from './create.js';

myInput.setAttribute("type", "number");

let arr = Array.from(myDivRow.children);

let firstNumber;
let secondNumber;
let result;

arr.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText == parseInt(e.target.innerText)) {
            myInput.value += e.target.innerText;
        } else if (e.target.innerText == "+") {
            firstNumber = myInput.value;
            console.log(firstNumber);
            myInput.value = myInput.value.slice(myInput.value.length);
            secondNumber = myInput.value;
            result = parseInt(firstNumber) + parseInt(secondNumber);
        } else if (e.target.innerText == "-") {
            myInput.value = myInput.value.slice(myInput.value.length);
            result = parseInt(firstNumber) - parseInt(secondNumber);
        } else if (e.target.innerText == "*") {
            myInput.value = myInput.value.slice(myInput.value.length);
            result = parseInt(firstNumber) * parseInt(secondNumber);
        } else if (e.target.innerText == "/") {
            myInput.value = myInput.value.slice(myInput.value.length);
            result = parseInt(firstNumber) / parseInt(secondNumber);
        } else if (e.target.innerText == "=") {
            myInput.value = result;
        } else if (e.target.innerText == "C") {
            myInput.value = myInput.value.slice(0, myInput.value.length - 1);
        }
    })
});

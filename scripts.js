function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    return operator(a, b);
}

function clearDisplay() {
    return display.textContent = 0;
}

let numberA = 0;
let numberB = 0;
let operator = '';

let display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        if (operator = '') {
            numberA += numberButton.textContent;
        } else {
            numberB += numberButton.textContent;
        }
        display.textContent += numberButton.textContent;
    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        display.textContent += operatorButton.textContent;
        operator = operatorButton.textContent;
        console.log(operatorButton.id)
    })
})

const enterButton = document.querySelector("#enter");
enterButton.addEventListener("click", () => {
    display.textContent = operate(numberA, operator, numberB);
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearDisplay();
})
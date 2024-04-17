function clearDisplay() {
    display.textContent = 0;
}

function clearVariables() {
    numberA = '';
    numberB = '';
    operator = '';
}

const mathFunctions = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b},
}

let numberA = '';
let numberB = '';
let operator = '';

let display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === '') {
            if (display.textContent === '0') {
                numberA = button.textContent;
                display.textContent = button.textContent;
            } else {
                numberA += button.textContent;
                display.textContent += button.textContent;
            }
        } else {
            numberB += button.textContent;
            display.textContent += button.textContent;
        }
    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        if (button.id === "add") {operator = mathFunctions.add};
        if (button.id === "subtract") {operator = mathFunctions.subtract};
        if (button.id === "multiply") {operator = mathFunctions.multiply};
        if (button.id === "divide") {operator = mathFunctions.divide};
    })
})

const enterButton = document.querySelector("#enter");
enterButton.addEventListener("click", () => {
    display.textContent = operator(+numberA, +numberB);
    numberA = operator(+numberA, +numberB);
    numberB = 0;
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearDisplay();
    clearVariables();
})

const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.border = 'solid black 2px';
        button.style.fontSize = 'medium';
    })
    button.addEventListener("mouseup", () => {
        button.style.border = 'solid grey 2px';
        button.style.fontSize = 'small';
    })
})
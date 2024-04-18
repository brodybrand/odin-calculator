function clear() {
    numberA = '';
    numberB = '';
    operator = '';
    display.textContent = '0'
}

const mathFunctions = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b},
}

const divideByZeroMessage = "nope";

let numberA = '';
let numberB = '';
let operator = '';
const maxInts = 11;

let display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent.length <= maxInts) {
            // create or add to first number, given operation hasn't been decided
            if (operator === '') {
                // numberA hasn't been crafted yet, initialize it to first number selection
                // removing holder '0'.
                if (display.textContent === '0' || display.textContent == divideByZeroMessage) {
                    numberA = button.textContent;
                    display.textContent = button.textContent;
                // concat additional numbers to numberA
                } else {
                    numberA += button.textContent;
                    display.textContent += button.textContent;
                }
            } else {
                numberB += button.textContent;
                display.textContent += button.textContent
            }
        }
    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        if (operator === '' || display.textContent === divideByZeroMessage) {
            if (button.id === "add") {operator = mathFunctions.add};
            if (button.id === "subtract") {operator = mathFunctions.subtract};
            if (button.id === "multiply") {operator = mathFunctions.multiply};
            if (button.id === "divide") {operator = mathFunctions.divide};
        } else {
            // Operator button acts as eval/enter button if numbers and operator
            // already selected.

            // prevent operation on divide by zero or any Infinity results
            if (operator(+numberA, +numberB) == Infinity) {
                clear();
                display.textContent = divideByZeroMessage;
            }
            // Float if necessary, else display whole number
            else if (operator(+numberA, +numberB) % 1 != 0) {
                display.textContent = operator(+numberA, +numberB).toFixed(2) + button.textContent;
                numberA = operator(+numberA, +numberB).toFixed(2);
            } else {
                display.textContent = operator(+numberA, +numberB) + button.textContent;
                numberA = operator(+numberA, +numberB);
            }
            numberB = 0;
            if (button.id === "add") {operator = mathFunctions.add};
            if (button.id === "subtract") {operator = mathFunctions.subtract};
            if (button.id === "multiply") {operator = mathFunctions.multiply};
            if (button.id === "divide") {operator = mathFunctions.divide};
        }
    })
})

const enterButton = document.querySelector("#enter");
enterButton.addEventListener("click", () => {
    if (operator(+numberA, +numberB) == Infinity) {
        clear();
        display.textContent = divideByZeroMessage;
    }
    else if (operator(+numberA, +numberB) % 1 != 0) {
        display.textContent = operator(+numberA, +numberB).toFixed(2);
        numberA = operator(+numberA, +numberB).toFixed(2);
    } else {
        display.textContent = operator(+numberA, +numberB);
        numberA = operator(+numberA, +numberB);
    }
    numberB = 0;
    operator = '';
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clear();
})

// button "click" visual effect
const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.border = 'solid black 2px';
        button.style.fontSize = 'medium';
    })
    button.addEventListener("mouseup", () => {
        button.style.border = 'solid lightgrey 2px';
        button.style.fontSize = 'small';
    })
})


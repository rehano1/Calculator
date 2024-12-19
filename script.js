// get the input elements by all the buttons
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');






// variables for the input
let firstNum = '';
let secondNum = '';
let operator = '';
// flag to check if operator has been clicked
let isOperatorClicked = false;  

// basic arithemaic functions 
function add (a, b)  {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0 || a === 0) {
        return "I'll die doing this";
    }
    return a / b;   
}

// to call basic function

function operate (operator,num1, num2) {
    switch (operator) {
        case "+" :
            return add(num1, num2);
        case "-" :
            return subtract(num1, num2);
        case "*" : 
            return multiply(num1, num2);
        case "/" : 
            return divide(num1, num2);
        default: 
            return "Error: invalid operator";
        
    }
}



// Store and display the value

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        
        // Handle Clear
        if (value == 'C') {
            firstNum = '';
            secondNum = '';
            operator = '';
            display.value = "0"
            isOperatorClicked = false;
            return;
        }
        // handle equals
        if (value == '=') {
            if(firstNum && operator && secondNum) {
                const result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
                display.value = result;
                // Reset after calculation
                firstNum = result.toString();
                secondNum = '';
                operator = '';
                isOperatorClicked = false;
            }
            return;
        }

    // handle operators
    if (["+", "-", "*", "/"].includes(value)) {
        if (firstNum && !isOperatorClicked) {
            operator = value;
            isOperatorClicked = true;
            display.value = value;
        }
        return;
    }
    // handle operator inputs 
    if (!isOperatorClicked) {
        firstNum += value;
        display.value = firstNum;
    } else {
        secondNum += value;
        display.value = secondNum;
    }   
    });
});



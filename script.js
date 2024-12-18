// get the input elements by all the buttons
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');


console.log('yesy')
buttons.addEventListener('click', function(event) {
    debugger
});



// variables for the input
let firstNumber = '';
let secondNumber = '';
let operator = '';


function operate ()  {
    if (operator === '+'){
        display
    }
}


// basic functions 
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
        return "Error division by zero is not allowed";
    }
    return a / b;   
}
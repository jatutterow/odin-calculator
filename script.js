//Jonathan Tutterow
//Web Calculator
//script.js
//Created: 1/20/22 (ish)
//Updated: 1/28/22

let display = document.querySelector('#output')
let storedValue = 0;
let displayValue = 0;
let storedOperator = null;
setDisplay('0');

numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( (button) => {
    button.addEventListener('click', numberButtonClicked);
});

operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach( (button) =>{
    button.addEventListener('click', operatorButtonClicked);
});

clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearButtonClicked);

equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equalsButtonClicked);

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(operator, a, b){
    return operator(a, b);
};

function numberButtonClicked(e){
    let numClicked = e.target.attributes.id.value;
    console.log(numClicked);
    appendDisplay(numClicked);
};

function operatorButtonClicked(e){
    let operatorClicked = e.target.attributes.id.value;
    console.log(operatorClicked);

    storedOperator = operatorClicked;
    storedValue = displayValue;
    setDisplay('0');
};

function equalsButtonClicked(e){
    console.log(e.target.attributes.id.value);
    let a = Number(storedValue);
    let b = Number(displayValue);
    let calcValue = 0;
    if(storedOperator === 'add'){
        calcValue = add(a, b);
    }
    else if(storedOperator === 'subtract'){
        calcValue = subtract(a, b);
    }
    else if(storedOperator === 'multiply'){
        calcValue = multiply(a, b);
    }
    else if(storedOperator === 'divide'){
        calcValue = divide(a, b);
    }
    setDisplay(calcValue);
};

function clearButtonClicked(e){
    console.log(e.target.attributes.id.value);
    setDisplay('0');
};

function appendDisplay(input){
    if(displayValue == 0){
        displayValue = "";
    }
    displayValue = displayValue + input 
    display.textContent = displayValue;
}

function setDisplay(input){
    displayValue = input;
    display.textContent = displayValue;
}
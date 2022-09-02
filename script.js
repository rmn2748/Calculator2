const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

const numberBtn = document.querySelectorAll('.number-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('.equal');
const ac = document.querySelector('.ac');

numberBtn.forEach(button => button.addEventListener('click', changeDisplayValue));
operatorBtn.forEach(button => button.addEventListener('click', clickOperator));
equalBtn.addEventListener('click', operate);
ac.addEventListener('click', clear)

function clear() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    updateDisplay();
}

function clickOperator(e) {
    if (calculator.waitingForSecondOperand === true) {
    calculator.operator = e.target.textContent;
    calculator.firstOperand = calculator.displayValue;
    calculator.displayValue = '0';
    }
    else if (calculator.waitingForSecondOperand === false) {
        operate();
        calculator.operator = e.target.textContent;
        calculator.firstOperand = calculator.displayValue;
        calculator.displayValue = '0';
    }
}

function changeDisplayValue(e) {
    let number = (e.target.textContent);
    calculator.displayValue === '0' ? calculator.displayValue = number : calculator.displayValue += number;
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent= calculator.displayValue;
}

function operate() {
    switch (calculator.operator) {
        case '+':
            console.log('its a +')
            calculator.displayValue = add(calculator.displayValue, calculator.firstOperand);
            break;
        case '-':
            calculator.displayValue = substract(calculator.displayValue, calculator.firstOperand);
            break;
        case 'X':
            calculator.displayValue = multiply(calculator.displayValue, calculator.firstOperand);
            break;
        case '/':
            calculator.displayValue = divide(calculator.firstOperand, calculator.displayValue);
            break;
    }
    updateDisplay();
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function substract(a, b) {
    return parseInt(a) - parseInt(b)
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b)
}

function divide(a, b) {
    if(b==0) { 
        alert('Division by 0 impossible!');
        updateDisplay();
        return '0';
    }
    else {return parseInt(a) / parseInt(b);}

}
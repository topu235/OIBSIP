let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput === '') {
        operator = op;
    } else {
        if (previousInput !== '') {
            calculateResult();
        }
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    display.textContent = result;
    currentInput = result;
    operator = '';
    previousInput = '';
}    
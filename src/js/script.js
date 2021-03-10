const calculator = (() => {
  const operate = (firstOperator, secondOperator, operator) => {
    switch (operator) {
      case '+':
        return firstOperator + secondOperator;
      case '-':
        return firstOperator - secondOperator;
      case '*':
        return firstOperator / secondOperator;
      case '/':
        return firstOperator / secondOperator;
      default:
        return 'error, not valid operator';
    }
  };
  return {
    operate,
  };
})();

const uiDOMManipulation = (() => {
  const keysDataSet = {
    numberKeysDataSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '?'],
    operatorKeysDataSet: ['DEL', 'AC', '+', '-', '*', '/', 'ANS', '='],
    specialKeyDataSet: ['DEL', 'AC', 'ANS', '='],
  };
  const calculatorKeyClasses = {
    calculatorKey: 'calculator__key',
    calculatorNumberKey: 'calculator__number-key',
    calculatorOperatorKey: 'calculator__operator-key',
    calculatorSpecialKey: 'calculator__special-key',
  };

  let display = [];
  function getDisplayValue() {
    return (display.length !== 0) ? +display.join('') : display;
  }
  const calculatorScreen = document.querySelector('.calculator__screen');
  let operationResult;
  let previousResult;
  let storedOperator;

  function isSpecialKeyActions(keyValue, specificClass) {
    if (specificClass === calculatorKeyClasses.calculatorSpecialKey) {
      switch (keyValue) {
        case 'AC':
          storedOperator = undefined;
          display = [];
          operationResult = [];
          break;
        case 'DEL':
          break;

        case 'ANS':
          break;

        case '=':
          break;

        default:
          break;
      }
    }
  }
  function isNumberKeyActions(keyValue, specificClass) {
    if (specificClass === calculatorKeyClasses.calculatorNumberKey) {
      display.push(keyValue);
    }
  }
  function operationsIfValidToDoOperations(keyValue) {
    if (storedOperator !== undefined) {
      operationResult = calculator.operate(previousResult, getDisplayValue(), storedOperator);
      display = [operationResult];
      storedOperator = undefined;
    }
  }
  function saveOperatorValue(keyValue) {
    storedOperator = keyValue;
    previousResult = getDisplayValue();
    display = [];
  }

  function updateScreen() {
    calculatorScreen.textContent = getDisplayValue();
  }

  const determineActionOnDisplay = (keyValue, specificClass) => {
    isSpecialKeyActions(keyValue, specificClass);
    isNumberKeyActions(keyValue, specificClass);
    operationsIfValidToDoOperations(keyValue, specificClass);
    operationsIfValidToDoOperations(keyValue);
    saveOperatorValue(keyValue);
    updateScreen();
  };

  const createCalculatorKeys = () => {
    function typeKey(e) {
      const { keyValue } = e.srcElement.dataset;
      const specificClass = e.srcElement.classList[e.srcElement.classList.length - 1];
      determineActionOnDisplay(keyValue, specificClass);
    }
    function setSpecialCharClass(newElement, newElementDataSet, i) {
      if (keysDataSet.specialKeyDataSet.some((textValue) => textValue === newElementDataSet[i])) {
        newElement.classList.add('calculator__special-key');
      }
    }
    function createKeyLayout(targetElementClass, newElementClass, newElementDataSet) {
      const targetElement = document.querySelector(targetElementClass);
      for (let i = 0; i < newElementDataSet.length; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add(...newElementClass);
        newElement.setAttribute('data-key-value', newElementDataSet[i]);
        if (newElementClass[1] === calculatorKeyClasses.calculatorOperatorKey) {
          setSpecialCharClass(newElement, newElementDataSet, i);
        }
        newElement.textContent = newElementDataSet[i];
        targetElement.appendChild(newElement);
        newElement.addEventListener('click', typeKey);
      }
    }

    // TODO what to add on the last symbol?

    createKeyLayout('.calculator__number-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorNumberKey], keysDataSet.numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorOperatorKey], keysDataSet.operatorKeysDataSet);
  };

  return {
    createCalculatorKeys,
  };
})();

const main = (() => {
  const init = () => {
    uiDOMManipulation.createCalculatorKeys();
  };
  return {
    init,
  };
})();

main.init();

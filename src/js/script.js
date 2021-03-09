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
  let display = [];
  function getDisplayValue() {
    return (display.length !== 0) ? +display.join('') : display;
  }
  let operationResult;
  let previousResult;
  let storedOperator;
  const calculatorScreen = document.querySelector('.calculator__screen');
  const numberKeysDataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '?'];
  const operatorKeysDataSet = ['DEL', 'AC', '+', '-', '*', '/', 'ANS', '='];
  const calculatorKeyClasses = {
    calculatorKey: 'calculator__key',
    calculatorNumberKey: 'calculator__number-key',
    calculatorOperatorKey: 'calculator__operator-key',
    calculatorSpecialKey: 'calculator__special-key',
  };
  const calculatorOperatorClass = 'calculator__operator-key';
  function isSpecialCharActions(keyValue) {
  }
  function isANumberKeyDataSet(keyValue) {

  }
  function isValidToDoOperation(keyValue) {
    return this.storedOperator !== undefined;
  }
  function cleanStoredOperator(keyValue) {
    this.storedOperator = undefined;
  }
  function storeOperatorAction(keyValue) {
    storedOperator = keyValue;
    previousResult = getDisplayValue();
    display = [];
  }

  const determineActionOnDisplay = (keyValue) => {
    if (keyValue === 'AC') {
      storedOperator = undefined;
      display = [];
      operationResult = [];
    } else if (numberKeysDataSet.some((value) => value.toString() === keyValue)) {
      display.push(keyValue);
    } else if (storedOperator !== undefined) {
      operationResult = calculator.operate(previousResult, getDisplayValue(), storedOperator);
      display = [operationResult];
      storedOperator = undefined;
    } else {
      storedOperator = keyValue;
      previousResult = getDisplayValue();
      display = [];
    }
    if (keyValue === 'DEL') {
      // todo del, ans and ac scenario
    }
    calculatorScreen.textContent = getDisplayValue();
  };
  function typeKey(e) {
    const { keyValue } = e.srcElement.dataset;
    determineActionOnDisplay(keyValue);
  }
  const createCalculatorKeys = () => {
    function setSpecialCharClass(newElement, newElementDataSet, i) {
      if (['DEL', 'AC', 'ANS', '='].some((textValue) => textValue === newElementDataSet[i])) {
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

    createKeyLayout('.calculator__number-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorNumberKey], numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorOperatorKey], operatorKeysDataSet);
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

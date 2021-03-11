const calculator = (() => {
  function replaceAnsOnTerm(term, previousOperationResult) {
    return term.reduce((total, num) => {
      if (num === 'Ans') {
        const replacedAnsNum = previousOperationResult;
        return total * replacedAnsNum;
      }
      return total + num;
    });
  }

  const operate = (firstTerm, secondTerm, operator, previousOperationResult) => {
    const firstTermClean = +replaceAnsOnTerm(firstTerm, previousOperationResult);
    const secondTermClean = +replaceAnsOnTerm(secondTerm, previousOperationResult);
    switch (operator) {
      case '+':
        return firstTermClean + secondTermClean;
      case '-':
        return firstTermClean - secondTermClean;
      case '*':
        return firstTermClean * secondTermClean;
      case '/':
        return firstTermClean / secondTermClean;
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
    specialKeyDataSet: ['DEL', 'AC', 'ANS'],
  };
  const calculatorKeyClasses = {
    calculatorKey: 'calculator__key',
    calculatorNumberKey: 'calculator__number-key',
    calculatorOperatorKey: 'calculator__operator-key',
    calculatorSpecialKey: 'calculator__special-key',
  };

  let display = [];
  function getDisplayValue() {
    return (display.length !== 0) ? display.join('') : display;
  }
  const calculatorScreen = document.querySelector('.calculator__screen');
  let operationResult;
  let previousTerm;
  let previousOperationResult = 0;
  let previousActionWasAnOperation = false;
  let storedOperator;
  let actionAlreadyMade;

  const possibleCalculatorActions = {
    cleanDisplayIfPreviousActionWasOperation() {
      if (previousActionWasAnOperation) {
        display = [];
        operationResult = [];
        previousActionWasAnOperation = false;
      }
    },
    isSpecialKeyActions(keyValue, specificClass) {
      if (specificClass === calculatorKeyClasses.calculatorSpecialKey && !actionAlreadyMade) {
        switch (keyValue) {
          case 'AC':
            storedOperator = undefined;
            display = [];
            operationResult = [];
            break;
          case 'DEL':
            if (display.length > 0) {
              display.pop();
            } else {
              // TODO add display = "I'm empty inside :(";
            }
            break;

          case 'ANS':
            // TODO if ans is undefined add a "hey but I still haven't even done an operation!"
            display.push('Ans');
            break;

          case '=':

            break;

          default:
            break;
        }
        actionAlreadyMade = true;
      }
    },
    isNumberKeyActions(keyValue, specificClass) {
      if (specificClass === calculatorKeyClasses.calculatorNumberKey && !actionAlreadyMade) {
        display.push(keyValue);
        actionAlreadyMade = true;
      }
    },
    operationsIfValidToDoOperations() {
      if (storedOperator !== undefined && !actionAlreadyMade) {
        operationResult = calculator.operate(
          previousTerm,
          display,
          storedOperator,
          previousOperationResult,
        );
        display = [operationResult];
        previousOperationResult = operationResult;
        previousActionWasAnOperation = true;
        storedOperator = undefined;
        actionAlreadyMade = true;
      }
    },
    saveOperatorValue(keyValue) {
      if (!actionAlreadyMade) {
        storedOperator = keyValue;
        previousTerm = display;
        display = [];
        actionAlreadyMade = true;
      }
    },
  };

  function updateScreen() {
    calculatorScreen.textContent = getDisplayValue();
  }

  const determineActionOnDisplay = (keyValue, specificClass) => {
    actionAlreadyMade = false;
    possibleCalculatorActions.cleanDisplayIfPreviousActionWasOperation();
    possibleCalculatorActions.isSpecialKeyActions(keyValue, specificClass);
    possibleCalculatorActions.isNumberKeyActions(keyValue, specificClass);
    possibleCalculatorActions.operationsIfValidToDoOperations();
    possibleCalculatorActions.saveOperatorValue(keyValue);
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

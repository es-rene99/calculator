/* eslint-disable spaced-comment */
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
    debugger;
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
    specialKeyDataSet: ['DEL', 'AC', 'ANS', '='],
  };
  //#region
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
  let isActionOnDisplayAlreadyMade;
  let isReadyForOperation;

  const possibleCalculatorActions = {
    cleanDisplayIfPreviousActionWasOperation() {
      if (previousActionWasAnOperation && !isReadyForOperation) {
        display = [];
        operationResult = [];
        previousActionWasAnOperation = false;
      }
    },
    isSpecialKeyActions(keyValue, specificClass) {
      if (specificClass === calculatorKeyClasses.calculatorSpecialKey && !isActionOnDisplayAlreadyMade) {
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
            return;

          default:
            break;
        }
        isActionOnDisplayAlreadyMade = true;
      }
    },
    isNumberKeyActions(keyValue, specificClass) {
      if (specificClass === calculatorKeyClasses.calculatorNumberKey && !isActionOnDisplayAlreadyMade) {
        display.push(keyValue);
        isActionOnDisplayAlreadyMade = true;
      }
    },
    operationsIfValidToDoOperations() {
      // TODO did not work, is doing operations when it shouldn't
      if (storedOperator !== undefined && isReadyForOperation && !previousActionWasAnOperation) {
        debugger;
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
        isReadyForOperation = false;
        isActionOnDisplayAlreadyMade = true;
      }
    },
    saveOperatorValue(keyValue, specificClass) {
      if (!isActionOnDisplayAlreadyMade
        && specificClass === calculatorKeyClasses.calculatorOperatorKey) {
        storedOperator = keyValue;
        if (previousTerm !== undefined) {
          isReadyForOperation = true;
        } else {
          previousTerm = display;
          display = [];
        }
        isActionOnDisplayAlreadyMade = true;
      }
    },
  };

  function updateScreen() {
    calculatorScreen.textContent = getDisplayValue();
  }

  const determineActionOnDisplay = (keyValue, specificClass) => {
    isActionOnDisplayAlreadyMade = false;
    possibleCalculatorActions.saveOperatorValue(keyValue, specificClass);
    possibleCalculatorActions.cleanDisplayIfPreviousActionWasOperation();
    possibleCalculatorActions.isSpecialKeyActions(keyValue, specificClass);
    possibleCalculatorActions.isNumberKeyActions(keyValue, specificClass);
    possibleCalculatorActions.operationsIfValidToDoOperations();
    updateScreen();
  };
  //#endregion

  const createCalculatorKeys = () => {
    function typeKey(e) {
      let keyValue;
      let specificClass;
      if (e.key !== undefined) {
        if (keysDataSet.numberKeysDataSet.some((number) => e.key === number.toString())) {
          specificClass = calculatorKeyClasses.calculatorNumberKey;
        } else if (keysDataSet.operatorKeysDataSet.some((operator) => e.key === operator)) {
          specificClass = calculatorKeyClasses.calculatorOperatorKey;
          if (keysDataSet.specialKeyDataSet.some((operator) => e.key === operator)) {
            specificClass = calculatorKeyClasses.calculatorSpecialKey;
          }
        }
        if (specificClass !== undefined) {
          keyValue = e.key;
        } else {
          return;
        }
      } else {
        keyValue = e.srcElement.dataset.keyValue;
        specificClass = e.srcElement.classList[e.srcElement.classList.length - 1];
      }
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
        const newElementValue = newElementDataSet[i];
        const newElement = document.createElement('div');
        newElement.classList.add(...newElementClass);
        newElement.setAttribute('data-key-value', newElementDataSet[i]);
        if (newElementClass[1] === calculatorKeyClasses.calculatorOperatorKey) {
          setSpecialCharClass(newElement, newElementDataSet, i);
        }
        newElement.textContent = newElementValue;
        targetElement.appendChild(newElement);
        newElement.addEventListener('click', typeKey);
      }
    }
    createKeyLayout('.calculator__number-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorNumberKey], keysDataSet.numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', [calculatorKeyClasses.calculatorKey, calculatorKeyClasses.calculatorOperatorKey], keysDataSet.operatorKeysDataSet);
    // * Keyboard support
    window.addEventListener('keydown', typeKey);
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

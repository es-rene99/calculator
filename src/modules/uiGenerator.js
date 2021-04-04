import operate from './operate';
import { keyClasses, keyDataSets } from './calculator-keys';

const uiGenerator = (() => {
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
  let consecutiveStoredOperator;
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
      if (specificClass === keyClasses.calculatorSpecialKey
        && !isActionOnDisplayAlreadyMade) {
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
            isReadyForOperation = true;
            break;

          default:
            break;
        }

        isActionOnDisplayAlreadyMade = true;
      }
    },
    isNumberKeyActions(keyValue, specificClass) {
      if (specificClass === keyClasses.calculatorNumberKey && !isActionOnDisplayAlreadyMade) {
        display.push(keyValue);
        isActionOnDisplayAlreadyMade = true;
      }
    },
    operationsIfValidToDoOperations(keyValue) {
      if (storedOperator !== undefined && isReadyForOperation && !previousActionWasAnOperation) {
        operationResult = operate(
          previousTerm,
          display,
          storedOperator,
          previousOperationResult,
        );
        display = [operationResult];
        previousOperationResult = operationResult;
        previousActionWasAnOperation = true;

        if (keyValue === '=') {
          storedOperator = undefined;
          previousTerm = undefined;
        } else {
          previousTerm = [operationResult];
        }
        if (consecutiveStoredOperator !== undefined && storedOperator !== undefined) {
          storedOperator = consecutiveStoredOperator;
        }
        isReadyForOperation = false;
        isActionOnDisplayAlreadyMade = true;
      }
    },
    saveOperatorValue(keyValue, specificClass) {
      if (!isActionOnDisplayAlreadyMade
        && specificClass === keyClasses.calculatorOperatorKey) {
        if (storedOperator !== undefined) {
          consecutiveStoredOperator = keyValue;
        } else {
          storedOperator = keyValue;
        }
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
    possibleCalculatorActions.operationsIfValidToDoOperations(keyValue);
    updateScreen();
  };
  // #endregion

  const createCalculatorKeys = () => {
    function typeKey(e) {
      let keyValue;
      let specificClass;
      if (e.key !== undefined) {
        console.log(e.key);
        // TODO need to do more tests for backspace
        let keyToEvaluate = e.key;
        if (e.key === 'Backspace') {
          keyToEvaluate = 'DEL';
        }
        if (keyDataSets.numberKeysDataSet.some((number) => keyToEvaluate === number.toString())) {
          specificClass = keyClasses.calculatorNumberKey;
        } else if (keyDataSets.operatorKeysDataSet.some((operator) => keyToEvaluate === operator)) {
          specificClass = keyClasses.calculatorOperatorKey;
          if (keyDataSets.specialKeyDataSet.some((operator) => keyToEvaluate === operator)) {
            specificClass = keyClasses.calculatorSpecialKey;
          }
        }
        if (specificClass !== undefined) {
          keyValue = keyToEvaluate;
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
      if (keyDataSets.specialKeyDataSet.some((textValue) => textValue === newElementDataSet[i])) {
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
        if (newElementClass[1] === keyClasses.calculatorOperatorKey) {
          setSpecialCharClass(newElement, newElementDataSet, i);
        }
        newElement.textContent = newElementValue;
        targetElement.appendChild(newElement);
        newElement.addEventListener('click', typeKey);
      }
    }
    createKeyLayout('.calculator__number-keys', [keyClasses.calculatorKey, keyClasses.calculatorNumberKey], keyDataSets.numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', [keyClasses.calculatorKey, keyClasses.calculatorOperatorKey], keyDataSets.operatorKeysDataSet);
    // * Keyboard support
    window.addEventListener('keydown', typeKey);
  };

  return {
    createCalculator: createCalculatorKeys,
  };
})();

export default uiGenerator;

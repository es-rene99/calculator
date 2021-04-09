import operate from './calc-operate';
import { keyClasses, keyDataSets } from './calc-keys-model';
import errorMsg from './calc-error-msg-model';
import isEmpty from './isEmpty-snippet';

// TODO need to separate logic handler and display UI.

let display = [];
function getDisplayValue() {
  return (display.length !== 0) ? display.join('') : display;
}
let operationResult;
let previousTerm;
let previousOperationResult = 0;
let previousActionWasAnOperation = false;
let storedOperator;
let consecutiveStoredOperator;
let isActionOnDisplayAlreadyMade;
let isReadyForOperation;
let shouldAnErrorMsgDisplay;
const calculatorScreen = document.querySelector('.calculator__screen');

function updateScreen() {
  calculatorScreen.innerHTML = getDisplayValue();
}

function cleanScreen() {
  if (!shouldAnErrorMsgDisplay) {
    display = [];
  }
  operationResult = [];
  previousTerm = undefined;
  storedOperator = undefined;
  consecutiveStoredOperator = undefined;
  previousActionWasAnOperation = false;
  isReadyForOperation = false;
}

function displayErrorMsg(errorMsgProp) {
  shouldAnErrorMsgDisplay = true;
  display = errorMsgProp;
  cleanScreen();
}

const possibleCalculatorActions = {
  cleanDisplayIfPreviousActionWasOperation(keyValue) {
    if (previousActionWasAnOperation && !isReadyForOperation && keyValue !== '=') {
      display = [];
      operationResult = [];
      previousActionWasAnOperation = false;
    }
  },
  isSpecialKeyActions(keyValue, specificClass) {
    function isDisplayEmpty() {
      return display.length === 0;
    }
    if (specificClass === keyClasses.calculatorSpecialKey
      && !isActionOnDisplayAlreadyMade) {
      switch (keyValue) {
        case 'AC':
          cleanScreen();
          break;
        case 'DEL':
          if (!isDisplayEmpty()) {
            display.pop();
          } else if (!isEmpty(previousTerm)) {
            return; // * continue if the user has stored something on the previous term
          } else {
            displayErrorMsg(errorMsg.emptyEqualOrDelete);
          }
          break;

        case 'ANS':
          display.push('Ans');
          break;

        case '=':
          if (isDisplayEmpty()) {
            if (!isEmpty(storedOperator)) {
              displayErrorMsg(errorMsg.default);
            } else {
              displayErrorMsg(errorMsg.emptyEqualOrDelete);
            }
          } else if (isEmpty(storedOperator)) {
            return; // * Return the value on display
          } else {
            isReadyForOperation = true;
          }
          break;
        // * Best scenario
        case '?':
          return;
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
    function evaluateIfTermIsZero(term) {
      const termSummation = term.reduce((total, number) => total + +number, 0);
      return (termSummation === 0);
    }

    if (storedOperator !== undefined && isReadyForOperation && !previousActionWasAnOperation) {
      if (evaluateIfTermIsZero(previousTerm) && evaluateIfTermIsZero(previousTerm) && storedOperator === '/') {
        displayErrorMsg(errorMsg.divisionByZero);
      } else {
        operationResult = operate(
          previousTerm,
          display,
          storedOperator,
          previousOperationResult,
        );
        if (Number.isNaN(operationResult) || operationResult === Infinity) {
          displayErrorMsg(errorMsg.default);
        } else {
          display = [operationResult];
        }
      }

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

const determineActionOnDisplay = (keyValue, specificClass) => {
  if (keyValue !== '?') {
    isActionOnDisplayAlreadyMade = false;
    if (shouldAnErrorMsgDisplay) {
      display = [];
      updateScreen();
      shouldAnErrorMsgDisplay = false;
    }
    possibleCalculatorActions.saveOperatorValue(keyValue, specificClass);
    possibleCalculatorActions.cleanDisplayIfPreviousActionWasOperation(keyValue);
    possibleCalculatorActions.isSpecialKeyActions(keyValue, specificClass);
    possibleCalculatorActions.isNumberKeyActions(keyValue, specificClass);
    possibleCalculatorActions.operationsIfValidToDoOperations(keyValue);
    updateScreen();
  }
};

function determineIfKeyIsSupportedByKeyboard(key, isButtonReleased) {
  if (key !== undefined) {
    let keyValue = key;
    let specificClass;
    if (key === 'Backspace') {
      keyValue = 'DEL';
    }
    if (keyDataSets.numberKeysDataSet.some((number) => keyValue === number.toString())) {
      specificClass = keyClasses.calculatorNumberKey;
    } else if (keyDataSets.operatorKeysDataSet.some((operator) => keyValue === operator)) {
      specificClass = keyClasses.calculatorOperatorKey;
      if (keyDataSets.specialKeyDataSet.some((operator) => keyValue === operator)) {
        specificClass = keyClasses.calculatorSpecialKey;
      }
    }
    if (specificClass !== undefined) {
      const calcKeys = Array.from(document.querySelectorAll('.calculator__key'));
      const keyToPress = calcKeys.find((calcKey) => keyValue === calcKey.innerText);
      if (isButtonReleased) {
        keyToPress.classList.remove('calculator__key--pressed');
      } else {
        keyToPress.classList.add('calculator__key--pressed');
      }
      return { keyValue, specificClass };
    }
  }
  return false;
}

function typeKey(e) {
  let keyValue;
  let specificClass;
  const keyBoardValidValues = determineIfKeyIsSupportedByKeyboard(e.key, false);
  if (keyBoardValidValues) {
    keyValue = keyBoardValidValues.keyValue;
    specificClass = keyBoardValidValues.specificClass;
  } else {
    keyValue = e.srcElement.dataset.keyValue;
    specificClass = e.srcElement.classList[e.srcElement.classList.length - 1];
  }
  determineActionOnDisplay(keyValue, specificClass);
}

export { typeKey, getDisplayValue, determineIfKeyIsSupportedByKeyboard };

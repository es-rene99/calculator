import operate from './calc-operate';
import { keyClasses, keyDataSets } from './calc-keys-model';
import errorMsg from './calc-error-msg-model';

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

const possibleCalculatorActions = {
  cleanDisplayIfPreviousActionWasOperation() {
    if (previousActionWasAnOperation && !isReadyForOperation) {
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
          storedOperator = undefined;
          display = [];
          operationResult = [];
          break;
        case 'DEL':
          if (!isDisplayEmpty()) {
            display.pop();
          } else {
            display = errorMsg.emptyEqualOrDelete;
            shouldAnErrorMsgDisplay = true;
          }
          break;

        case 'ANS':
          display.push('Ans');
          break;

        case '=':
          if (isDisplayEmpty()) {
            display = errorMsg.emptyEqualOrDelete;
            shouldAnErrorMsgDisplay = true;
          } else if (storedOperator === '') {
            return;
          } else {
            isReadyForOperation = true;
          }

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

const determineActionOnDisplay = (keyValue, specificClass) => {
  isActionOnDisplayAlreadyMade = false;
  if (shouldAnErrorMsgDisplay) {
    display = [];
    updateScreen();
    shouldAnErrorMsgDisplay = false;
  }
  possibleCalculatorActions.saveOperatorValue(keyValue, specificClass);
  possibleCalculatorActions.cleanDisplayIfPreviousActionWasOperation();
  possibleCalculatorActions.isSpecialKeyActions(keyValue, specificClass);
  possibleCalculatorActions.isNumberKeyActions(keyValue, specificClass);
  possibleCalculatorActions.operationsIfValidToDoOperations(keyValue);
  updateScreen();
};

function typeKey(e) {
  let keyValue;
  let specificClass;
  if (e.key !== undefined) {
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

export { typeKey, getDisplayValue };

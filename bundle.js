/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_uiGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/uiGenerator */ "./src/modules/uiGenerator.js");

_modules_uiGenerator__WEBPACK_IMPORTED_MODULE_0__["default"].createCalculator();

/***/ }),

/***/ "./src/modules/calculator-keys.js":
/*!****************************************!*\
  !*** ./src/modules/calculator-keys.js ***!
  \****************************************/
/*! exports provided: keyDataSets, keyClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDataSets", function() { return keyDataSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyClasses", function() { return keyClasses; });
const keyDataSets = {
  numberKeysDataSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '?'],
  operatorKeysDataSet: ['DEL', 'AC', '+', '-', '*', '/', 'ANS', '='],
  specialKeyDataSet: ['DEL', 'AC', 'ANS', '=']
};
const keyClasses = {
  calculatorKey: 'calculator__key',
  calculatorNumberKey: 'calculator__number-key',
  calculatorOperatorKey: 'calculator__operator-key',
  calculatorSpecialKey: 'calculator__special-key'
};


/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    operate
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/modules/uiGenerator.js":
/*!************************************!*\
  !*** ./src/modules/uiGenerator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ "./src/modules/calculator.js");
/* harmony import */ var _calculator_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator-keys */ "./src/modules/calculator-keys.js");



const uiGenerator = (() => {
  let display = [];

  function getDisplayValue() {
    return display.length !== 0 ? display.join('') : display;
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
      if (specificClass === _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorSpecialKey && !isActionOnDisplayAlreadyMade) {
        switch (keyValue) {
          case 'AC':
            storedOperator = undefined;
            display = [];
            operationResult = [];
            break;

          case 'DEL':
            if (display.length > 0) {
              display.pop();
            } else {// TODO add display = "I'm empty inside :(";
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
      if (specificClass === _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey && !isActionOnDisplayAlreadyMade) {
        display.push(keyValue);
        isActionOnDisplayAlreadyMade = true;
      }
    },

    operationsIfValidToDoOperations(keyValue) {
      if (storedOperator !== undefined && isReadyForOperation && !previousActionWasAnOperation) {
        operationResult = _calculator__WEBPACK_IMPORTED_MODULE_0__["default"].operate(previousTerm, display, storedOperator, previousOperationResult);
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
      if (!isActionOnDisplayAlreadyMade && specificClass === _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey) {
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
    }

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
  }; // #endregion


  const createCalculatorKeys = () => {
    function typeKey(e) {
      let keyValue;
      let specificClass;

      if (e.key !== undefined) {
        console.log(e.key); // TODO need to do more tests for backspace

        let keyToEvaluate = e.key;

        if (e.key === 'Backspace') {
          keyToEvaluate = 'DEL';
        }

        if (_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].numberKeysDataSet.some(number => keyToEvaluate === number.toString())) {
          specificClass = _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey;
        } else if (_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].operatorKeysDataSet.some(operator => keyToEvaluate === operator)) {
          specificClass = _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey;

          if (_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].specialKeyDataSet.some(operator => keyToEvaluate === operator)) {
            specificClass = _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorSpecialKey;
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
      if (_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].specialKeyDataSet.some(textValue => textValue === newElementDataSet[i])) {
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

        if (newElementClass[1] === _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey) {
          setSpecialCharClass(newElement, newElementDataSet, i);
        }

        newElement.textContent = newElementValue;
        targetElement.appendChild(newElement);
        newElement.addEventListener('click', typeKey);
      }
    }

    createKeyLayout('.calculator__number-keys', [_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorKey, _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey], _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', [_calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorKey, _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey], _calculator_keys__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].operatorKeysDataSet); // * Keyboard support

    window.addEventListener('keydown', typeKey);
  };

  return {
    createCalculator: createCalculatorKeys
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (uiGenerator);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
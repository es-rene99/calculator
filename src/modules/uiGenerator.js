import { typeKey } from './calc-keys-controller';
import { keyClasses, keyDataSets } from './calc-keys-model';

export default function createCalculatorKeys() {
  function setSpecialCharClass(newElement, newElementDataSet, i) {
    if (keyDataSets.specialKeyDataSet.some((textValue) => textValue === newElementDataSet[i])) {
      newElement.classList.add('calculator__special-key');
    }
  }

  function removePressedKeyStyle(e) {
    // TODO refactor into function since is also used on typekey
    let keyValue;
    let specificClass;

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
      // TODO refactor this logic to uiGenerator
      const calcKeys = Array.from(document.querySelectorAll('.calculator__key'));
      const keyToPress = calcKeys.find((calcKey) => keyValue === calcKey.innerText);
      keyToPress.classList.remove('calculator__key--pressed');
    }
  }

  function createKeyLayout(targetElementClass, newElementClass, newElementDataSet) {
    const targetElement = document.querySelector(targetElementClass);

    for (let i = 0; i < newElementDataSet.length; i++) {
      const newElementValue = newElementDataSet[i];
      if (newElementValue === '?') {
        const newElement = document.createElement('a');
        newElement.classList.add(...newElementClass, 'calculator__mysterious-key');
        newElement.setAttribute('data-key-value', newElementDataSet[i]);
        newElement.textContent = newElementValue;
        newElement.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        newElement.setAttribute('target', '_blank');
        targetElement.appendChild(newElement);
      } else {
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

      // * Click behavior
    }
  }

  createKeyLayout('.calculator__number-keys', [keyClasses.calculatorKey, keyClasses.calculatorNumberKey], keyDataSets.numberKeysDataSet);
  createKeyLayout('.calculator__operator-keys', [keyClasses.calculatorKey, keyClasses.calculatorOperatorKey], keyDataSets.operatorKeysDataSet);

  // * Keyboard support behavior
  window.addEventListener('keydown', typeKey);
  window.addEventListener('keyup', removePressedKeyStyle);
}

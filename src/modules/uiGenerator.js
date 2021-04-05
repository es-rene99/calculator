import { typeKey } from './calc-keys-controller';
import { keyClasses, keyDataSets } from './calc-keys-model';

export default function createCalculatorKeys() {
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

      // * Click behavior
      newElement.addEventListener('click', typeKey);
    }
  }

  createKeyLayout('.calculator__number-keys', [keyClasses.calculatorKey, keyClasses.calculatorNumberKey], keyDataSets.numberKeysDataSet);
  createKeyLayout('.calculator__operator-keys', [keyClasses.calculatorKey, keyClasses.calculatorOperatorKey], keyDataSets.operatorKeysDataSet);

  // * Keyboard support behavior
  window.addEventListener('keydown', typeKey);
}

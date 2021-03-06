import { typeKey, determineIfKeyIsSupportedByKeyboard } from './calc-keys-controller';
import { keyClasses, keyDataSets } from './calc-keys-model';

export default function createCalculatorKeys() {
  function setSpecialCharClass(newElement, newElementDataSet, i) {
    if (keyDataSets.specialKeyDataSet.some((textValue) => textValue === newElementDataSet[i])) {
      newElement.classList.add('calculator__special-key');
    }
  }

  function removePressedKeyStyle(e) {
    determineIfKeyIsSupportedByKeyboard(e.key, true);
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

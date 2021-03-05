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
  const createCalculatorKeys = () => {
    function createKeyLayout(targetElementClass, newElementClass, newElementDataSet) {
      const targetElement = document.querySelector(targetElementClass);
      for (let i = 0; i < newElementDataSet.length; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add(newElementClass);
        newElement.textContent = newElementDataSet[i];
        targetElement.appendChild(newElement);
      }
    }
    const numberKeysDataSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '='];
    const operatorKeysDataSet = ['+', '-', '*', '/'];
    createKeyLayout('.calculator__number-keys', 'calculator__number-key', numberKeysDataSet);
    createKeyLayout('.calculator__operator-keys', 'calculator__operator-key', operatorKeysDataSet);
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

// * Reference from previous grid project

// function createBoard() {
//   for (let i = 0; i < squareNumber; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     boardElement.appendChild(square);
//   }
//   gridSquares = document.querySelectorAll('.square');
//   gridSquares.forEach((square) => {
//     square.addEventListener('mouseover', setColorizedSquare);
// TODO possible mobile solution with Jquery
// if (window.matchMedia('(min-width: 900px)')) {

// // TODO remove and leave only for desktop for now...
//   square.addEventListener('mouseover', setColorizedSquare);
// }
// else {
//   debugger;
//   $('.square').on('tap', setColorizedSquare);
// }
//   });
// }

// const defaultSquarePerSide = 16;
// let squareNumber;
// let gridSquares;
// const sizeOfGrid = `${82}vw`;

// const squarePerSideElement = document.querySelector('#squarePerSize');
// const change = document.querySelector('#change-size');

import replaceAns from './replaceAns';

function operate(firstTerm, secondTerm, operator, previousOperationResult) {
  const firstTermClean = +replaceAns(firstTerm, previousOperationResult);
  const secondTermClean = +replaceAns(secondTerm, previousOperationResult);
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
}
export default operate;

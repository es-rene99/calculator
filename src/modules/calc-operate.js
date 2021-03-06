function replaceAns(term, previousOperationResult) {
  const result = term.reduce((total, num) => {
    if (num === 'Ans') {
      const replacedAnsNum = previousOperationResult;
      if (total !== 0) {
        return total * replacedAnsNum;
      }

      return replacedAnsNum;
    }
    return total + num;
  }, 0);
  return result;
}

function roundResult(operationResult) {
  // * Found in:
  // * [https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary]
  return Math.round(operationResult * 100) / 100;
}

function operate(firstTerm, secondTerm, operator, previousOperationResult) {
  let operationResult;
  const firstTermClean = +replaceAns(firstTerm, previousOperationResult);
  const secondTermClean = +replaceAns(secondTerm, previousOperationResult);
  switch (operator) {
    case '+':
      operationResult = firstTermClean + secondTermClean;
      break;
    case '-':
      operationResult = firstTermClean - secondTermClean;
      break;
    case '*':
      operationResult = firstTermClean * secondTermClean;
      break;
    case '/':
      operationResult = firstTermClean / secondTermClean;
      break;
    default:
      operationResult = 'error, not valid operator';
  }
  operationResult = roundResult(operationResult);
  return operationResult;
}
export default operate;

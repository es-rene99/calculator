function replaceAns(term, previousOperationResult) {
  return term.reduce((total, num) => {
    if (num === 'Ans') {
      const replacedAnsNum = previousOperationResult;
      return total * replacedAnsNum;
    }
    return total + num;
  });
}

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

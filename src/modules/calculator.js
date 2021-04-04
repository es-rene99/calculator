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
    operate,
  };
})();

export default calculator;

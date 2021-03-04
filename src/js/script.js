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

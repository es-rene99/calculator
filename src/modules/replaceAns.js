export default function replaceAns(term, previousOperationResult) {
  return term.reduce((total, num) => {
    if (num === 'Ans') {
      const replacedAnsNum = previousOperationResult;
      return total * replacedAnsNum;
    }
    return total + num;
  });
}

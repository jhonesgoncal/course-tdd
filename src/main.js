module.exports = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  sub: function sub(num1, num2) {
    return num1 - num2;
  },
  div: function div(num1, num2) {
    return (num1 === 0 || num2 === 0) ? 'Nao e possivel divisao por zero!' : num1 / num2;
  },
  mult: function mult(num1, num2) {
    return num1 * num2;
  },
};

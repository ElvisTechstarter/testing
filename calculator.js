function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
module.exports.sub = sub;
module.exports.multiply = multiply;

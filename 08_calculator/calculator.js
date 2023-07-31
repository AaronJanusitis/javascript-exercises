const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(inputArray) {
	return inputArray.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(inputArray) {
  return inputArray.reduce( (a, b) => a * b);
};

const power = function(num1, num2) {
  let result = num1;
	for (let i = 1; i < num2; i++) {
    result = result * num1;
  }
  return result;
};

const factorial = function(num) {
  if (num == 0) return 1;
  let result = 1;
	for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

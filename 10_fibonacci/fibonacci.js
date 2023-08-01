const fibonacci = function(input) {
    if (input < 0) return "OOPS";
    if (count === 0) return 0;
    let sum = 0;
    let firstNum = 1;
    let secondNum = 0;
    for (let i = 1; i <= input; i++) {
        sum += firstNum;
        firstNum = secondNum;
        secondNum = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;

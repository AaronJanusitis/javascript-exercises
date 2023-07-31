const sumAll = function(num1, num2) {
    let sum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    else if (num1 < num2 && num1 >= 0 && num2 >= 0){
        for (let i = num1; i <= num2; i++) {
            sum = sum + i;
        }
        return sum;
    }
    else if (num2 < num1 && num1 >= 0 && num2 >= 0) {
        for (let i = num2; i <= num1; i++) {
            sum = sum + i;
            
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

const reverseString = function(input) {
    let returnString = '';
    inputArray = input.split('');
    for (i = inputArray.length - 1; i >= 0; i--) {
        returnString += inputArray[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;

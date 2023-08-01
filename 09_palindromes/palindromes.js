const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.replace(/\s/g, "");
    word = word.toLowerCase();

    if (word.length % 2 == 0) {
        const partOne = word.slice(0, word.length / 2);
        const partTwo = word.slice(word.length / 2, word.length);
        
        let splitString = partTwo.split("");
        let reverseArray = splitString.reverse();
        let partTwoFlipped = reverseArray.join("");

        if (partOne == partTwoFlipped) {
            return true;
        } 
        else {
            return false;
        }
    }
    else {
        const partOne = word.slice(0, word.length / 2);
        const partTwo = word.slice(word.length / 2 + 1, word.length);

        let splitString = partTwo.split("");
        let reverseArray = splitString.reverse();
        let partTwoFlipped = reverseArray.join("");

        if (partOne == partTwoFlipped) {
            return true;
        } 
        else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;

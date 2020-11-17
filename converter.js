var word = "CCVI 6 ";
var data = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function convert(value) {
    // check is user string is currect
    var word = checkIsRomeNumber(value);
    // check add or remove state
    var isAdd = 1;
    // sum for return
    var sum = 0;
    // current value
    var currentValue = 0;
    // previus value
    var previusValue = 0;
    for (var i = 0; i < word.length; i++) {
        currentValue = data[word[i]];
        // check not first letter
        if (i > 0) {
            // Check current value is small to previus value
            isAdd = checkIsAdd(previusValue, currentValue);
            console.log("isAdd:", isAdd);
        }
        else {
            isAdd = 1;
        }
        sum += isAdd * currentValue;
        sum = Math.abs(sum);
        // for next time
        previusValue = currentValue;
    }
    return sum;
}
function checkIsAdd(first, secont) {
    var diffLetter = first < secont;
    return diffLetter ? -1 : 1;
}
function checkIsRomeNumber(value) {
    var word = value.toUpperCase().trim();
    console.log("word lengt: ", word.length);
    var _loop_1 = function (i) {
        var currentLetter = word[i];
        var isRomeLetter = Object.keys(data).some(function (el) { return el === currentLetter; });
        if (!isRomeLetter) {
            throw new Error(currentLetter + " is not a rome letter.");
        }
    };
    for (var i = 0; i < word.length; i++) {
        _loop_1(i);
    }
    return word;
}
console.log(word, "=", convert(word));

var word = "CCVI5";
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
// check value is currect rome number
function checkIsRomeNumber(value) {
    var word = value.toUpperCase().trim();
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word[i];
        // let isRomeLetter = Object.keys(data).some((el) => el === currentLetter);
        var isRomeLetter = data[currentLetter];
        if (!isRomeLetter) {
            throw new Error(currentLetter + " is not a rome letter. letter index:" + i);
        }
    }
    return word;
}
console.log(word, "=", convert(word));

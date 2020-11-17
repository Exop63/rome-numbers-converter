"use strict";
exports.__esModule = true;
exports.RomeNumberConverter = void 0;
var RomeNumberConverter = /** @class */ (function () {
    function RomeNumberConverter() {
        this.ROME_NUMBERS = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };
    }
    /** Convert Rome Numbers to latin number.
     * @param value Rome number string
     * @returns Latin number
     */
    RomeNumberConverter.prototype.convert = function (value) {
        // check is user string is currect
        var word = this.checkIsRomeNumber(value);
        // check add or remove state
        var isAdd = 1;
        // sum for return
        var sum = 0;
        // current value
        var currentValue = 0;
        // previus value
        var previusValue = 0;
        var nextValue = 0;
        for (var i = 0; i < word.length; i++) {
            currentValue = this.getRomeNumber(word[i]);
            // Check current value is small to previus value
            isAdd = this.checkIsAdd(previusValue, currentValue);
            console.log("isAdd:", isAdd);
            if (isAdd > 0) {
                sum += currentValue;
            }
            else {
                sum += currentValue - 2 * previusValue;
            }
            // sum += isAdd * currentValue;
            sum = Math.abs(sum);
            // current value save for next time
            previusValue = currentValue;
        }
        return sum;
    };
    /** Convert Rome Numbers to latin number.
     * @param value Rome number string
     * @returns Latin number
     */
    RomeNumberConverter.prototype.convert2 = function (value) {
        // check is user string is currect
        var word = this.checkIsRomeNumber(value);
        // check add or remove state
        var isAdd = 1;
        // sum for return
        var sum = 0;
        var subSum = 0;
        // current value
        var currentValue = this.getRomeNumber(word[0]);
        var nextValue = 0;
        /** IIIX  */
        for (var i = 0; i < word.length; i++) {
            nextValue = this.getRomeNumber(word[i + 1]);
            // Check current value is small to previus value
            isAdd = this.checkIsAdd(currentValue, nextValue);
            console.log("isAdd:", isAdd);
            if (currentValue === nextValue) {
                subSum += currentValue;
            }
            else {
                sum += isAdd * (currentValue + subSum);
                subSum = 0;
            }
            // current value save for next time
            currentValue = nextValue;
        }
        return sum;
    };
    RomeNumberConverter.prototype.checkIsAdd = function (first, secont) {
        if (!(first && secont)) {
            return 1;
        }
        var diffLetter = first < secont;
        return diffLetter ? -1 : 1;
    };
    // check value is currect rome number
    RomeNumberConverter.prototype.checkIsRomeNumber = function (value) {
        if (!value) {
            return null;
        }
        var word = value.toUpperCase().trim();
        for (var i = 0; i < word.length; i++) {
            var currentLetter = word[i];
            // let isRomeLetter = Object.keys(data).some((el) => el === currentLetter);
            var isRomeLetter = this.ROME_NUMBERS[currentLetter];
            if (!isRomeLetter) {
                throw new Error(currentLetter + " is not a rome letter. letter index:" + i);
            }
        }
        return word;
    };
    /** get onw letter  rome number */
    RomeNumberConverter.prototype.getRomeNumber = function (value) {
        if (!value) {
            return null;
        }
        if (value.length > 1) {
            throw new Error("getRomeNumber work only one number");
        }
        var letter = this.checkIsRomeNumber(value);
        return this.ROME_NUMBERS[letter];
    };
    return RomeNumberConverter;
}());
exports.RomeNumberConverter = RomeNumberConverter;
var word = "MLXVI  ";
var converter = new RomeNumberConverter();
console.log(word, " = ", converter.convert2(word));

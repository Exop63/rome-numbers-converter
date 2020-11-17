const word: string = "CCVI";

const data: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function convert(value: string): number {
  // check is user string is currect
  let word = checkIsRomeNumber(value);
  // check add or remove state
  let isAdd: number = 1;
  // sum for return
  let sum: number = 0;

  // current value
  let currentValue: number = 0;
  // previus value
  let previusValue: number = 0;

  for (let i: number = 0; i < word.length; i++) {
    currentValue = data[word[i]];
    // check not first letter
    if (i > 0) {
      // Check current value is small to previus value
      isAdd = checkIsAdd(previusValue, currentValue);
      console.log("isAdd:", isAdd);
    } else {
      isAdd = 1;
    }

    sum += isAdd * currentValue;

    sum = Math.abs(sum);
    // for next time
    previusValue = currentValue;
  }
  return sum;
}
function checkIsAdd(first: number, secont: number): number {
  const diffLetter: boolean = first < secont;
  return diffLetter ? -1 : 1;
}

// check value is currect rome number
function checkIsRomeNumber(value: string) {
  let word: string = value.toUpperCase().trim();
  for (let i: number = 0; i < word.length; i++) {
    let currentLetter: string = word[i];
    // let isRomeLetter = Object.keys(data).some((el) => el === currentLetter);
    let isRomeLetter = data[currentLetter];

    if (!isRomeLetter) {
      throw new Error(
        currentLetter + " is not a rome letter. letter index:" + i
      );
    }
  }
  return word;
}
console.log(word, "=", convert(word));

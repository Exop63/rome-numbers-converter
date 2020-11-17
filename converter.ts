export class RomeNumberConverter {
  readonly ROME_NUMBERS: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  /** Convert Rome Numbers to latin number.
   * @param value Rome number string
   * @returns Latin number
   */
  convert(value: string): number {
    // check is user string is currect
    let word = this.checkIsRomeNumber(value);
    // check add or remove state
    let isAdd: number = 1;
    // sum for return
    let sum: number = 0;
    // for repeating
    let subSum: number = 0;

    // current value
    let currentValue: number = this.getRomeNumber(word[0]);

    let nextValue: number = 0;

    for (let i: number = 0; i < word.length; i++) {
      nextValue = this.getRomeNumber(word[i + 1]);

      // Check current value is small to previus value
      isAdd = this.checkIsAdd(currentValue, nextValue);
      console.log("isAdd:", isAdd);

      if (currentValue === nextValue) {
        subSum += currentValue;
      } else {
        sum += isAdd * (currentValue + subSum);
        subSum = 0;
      }
      // current value save for next time
      currentValue = nextValue;
    }
    return sum;
  }

  checkIsAdd(first: number, secont: number): number {
    if (!(first && secont)) {
      return 1;
    }
    const diffLetter: boolean = first < secont;
    return diffLetter ? -1 : 1;
  }

  // check value is currect rome number
  checkIsRomeNumber(value: string) {
    if (!value) {
      return null;
    }
    let word: string = value.toUpperCase().trim();
    for (let i: number = 0; i < word.length; i++) {
      let currentLetter: string = word[i];
      // let isRomeLetter = Object.keys(data).some((el) => el === currentLetter);
      let isRomeLetter = this.ROME_NUMBERS[currentLetter];

      if (!isRomeLetter) {
        throw new Error(
          currentLetter + " is not a rome letter. letter index:" + i
        );
      }
    }
    return word;
  }
  /** get onw letter  rome number */
  getRomeNumber(value: string) {
    if (!value) {
      return null;
    }
    if (value.length > 1) {
      throw new Error("getRomeNumber work only one number");
    }
    const letter = this.checkIsRomeNumber(value);
    return this.ROME_NUMBERS[letter];
  }
}

const word = "XII  ";
const converter = new RomeNumberConverter();
console.log(word, " = ", converter.convert(word));

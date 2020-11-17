

const data: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const word: string = "LXXVII";

let isAdd: number = 1;
let sum: number = 0;

for (let i: number = 0; i < word.length; i++) {
  
  if (i > 0) {
    if (data[word[i - 1]] < data[word[i]]) {
      isAdd = -1;
    } else {
      isAdd = 1;
    }
  } else {
    isAdd = 1;
  } 
  sum += isAdd * data[word[i]];
  sum = Math.abs(sum);
}
console.log(word, "=", sum);

function addNum(
  num1: number, // 1, 2.4, -1
  num2: number,
  showResult: boolean, // true, false
  phrase: string // 'Hi',"Hi",`Hi`
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const n1 = 5;
const n2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
addNum(n1, n2, printResult, resultPhrase);

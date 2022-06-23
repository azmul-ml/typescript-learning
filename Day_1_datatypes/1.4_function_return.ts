// function return types

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function printSum(num: number): void {
  console.log("Result: " + num);
}

printSum(sum(2, 3));
console.log(printSum(sum(2, 3)));

// function as types

let combineValues: (a: number, b: number) => number
combineValues = sum
// it'll create error because the function types are not same
// combineValues = printSum
console.log(combineValues(8,8));

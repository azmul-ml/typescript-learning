/**
 *
 * union types
 */

function combine(num1: number | string, num2: number | string) {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26)
console.log(combinedAges);
const combinedNames = combine('Labiba', 'Ibnat')
console.log(combinedNames);

/**
 *
 * Literal types
 */

// function combine(num1: number | string, num2: number | string, resultConvertion: 'as-number' | 'as-text') {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number" || resultConvertion === 'as-number') {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number')
// console.log(combinedAges);
// const combinedStringAges = combine('30', '26', 'as-number')
// console.log(combinedAges);

/**
 * type aliases
 */

// type Combinable = number | string;

// function combine(
//   num1: Combinable,
//   num2: Combinable,
//   resultConvertion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     resultConvertion === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);
// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedAges);
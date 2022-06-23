function add(num1, num2) {
  // we could've checked the types like this but the good news is typescript does this for us
  // if (typeof num1 !== "number" && typeof num2 !== "number") {
  //   throw new Error("Incorrect Input!");
  // } else {
  //   return num1 + num2;
  // }
  return num1 + num2;
}

console.log(add(2, "3"));

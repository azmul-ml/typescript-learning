# Introduction to TypeScript

## What is Typescript ?

A superset to javascript. What does that mean? A language building up on javascript, adds new features and advantages to javascript. It makes writing javascript code easier and more powerful. But it has one huge disadvantage, typescript can't be executed by javascript environments like the browser. Browsers can't execute typescript and for example node.js also can't execute typescript. `Typescript` is a programming language and also a tool. It's a powerful compiler which you run over your code to compile your typescript code to javascript. Typescript gives you a nicer syntax and an easier way of doing something and it'll compile that nicer, easier way to a complex javascript snippet which you had to write otherwise. It's not magic, of course it can't add something that is not possible in javascript. In addition typescript ofcourse does one important thing, which the name already implies, it adds types to the javascript language, which will actually give you as a developer an opportunity of identifying errors in your code earlier before your script runs.
## Why Typescript is needed ?
Let’s consider an example −

```javascript
function add(num1, num2) {
  return num1 + num2;
}

add(2, "3");
```

It's a simple javascript function that adds two numbers. But we're passing two strings when calling it, so it'll concatinate instead and it'll return 23 not 5. It's not a technical error, you won't have a runtime error but it's a logical error and this could lead your web application to complications. Of course we have mitigate strategies in javascript to solve these problems, we could add if check to add function or we could validate & sanitize user input.

```javascript
function add(num1, num2) {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    throw new Error("Incorrect Input!");
  } else {
    return num1 + num2;
  }
}
```
**Note:** Thankfully typescript does this for us.
## Difference between javascript types and typescript types

Javascript is dynamically typed which means it’s fine if we initially define a variable as string but later we assign type number to it. That’s why it have the typeof operator so that we can check the correct type at runtime if we have some code that depends on a certain type. Typescript one the other hand is statically typed which means we define the types of var, parameters during development. They don’t suddenly change during runtime. Javascript knows the concept of types.  But using that you can only know in runtime instead of development time, it allows us to fix bugs earlier and in addition javascript only knows about couple of types.

## Types
Typescript provides many types.Lets dive into these types which types javascript supports and how we work with these types, how we assign types, how we can have the benefit of using types and all that fun staff. Javascript also have some types but typescript offers more than that. You can also define your own type. Now lets start with some of the core types.

### number
Typescript has only one ```number``` type. All numbers, no differentiation between integer and floats.(1, 5.3, -10 all are considered as type number)

### string
All text values are these type.
### boolean
True false. Not truth/falsy values. In javascript we use 0 in if checks sometimes which is executed at runtime but that is not a data type.
Let's see an example -
```javascript
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
```
### object
Any javascript object is type object in typescript. Object types almost look like objects, but it doesn’t have key-value pairs, it has key-type pairs.
### enum
Let’s say Couple of identifiers or global constants you are working with but you want to give it a human readable label. For that you have enum type. Automatically enumerated global constant identifiers. Enums assign labels to numbers.
### tuple
For fixed length and fixed typed array we use tuples.
Let's see an example -
```javascript
enum Role { ADMIN, READ_ONLY_USER, AUTHOR }
const person: {
    name: string;
    age: number;
    hobbies: string[],
    project: [number, string],
    role: Role
} = {
    name: 'Labiba',
    age: 27,
    hobbies: ['sports', 'cooking'],
    project: [1, 'Tribe'],
    role: Role.ADMIN

}
```
### union
If we need to assign more than one type in parameters/ vars that’s where the union type works.
### literals
When you don’t only want to assign types to parameters or vars but also want to tightly type the return value then comes the literal types, means you want to forcefully convert the results.
### type aliases
While working with union types it can be cumbersome .You might want to create a new type which stores the union type. You can do that with another cool typescript feature of type aliases.
So now we have our reusable type aliase here. So if you want to reuse you own defined type where the same type setup is needed you can use type aliases there.
Let's see an example -
```javascript
type Combinable = number | string;
function combine(
  num1: Combinable,
  num2: Combinable,
  resultConvertion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}
```
For example, you can simplify this code:
```javascript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```
To this:
```javascript
type User = { name: string; age: number };
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```
### function & function return types
```javascript
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
let combineValues: (a: number, b: number) => number
combineValues = sum
```
### unknown
```javascript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

if(typeof userInput === 'string'){
    userName = userInput
}
```
### never
```javascript
function generateError (message: string, code: number): never {
    throw {message: message, errorCode: code}
}
```
### any
The any type is the most flexible type in typescript. Any kind of value is allowed, no specific assignment. Typescript will never yield at you if you set any. The any type makes sure that the typescript compiler can’t check anything.

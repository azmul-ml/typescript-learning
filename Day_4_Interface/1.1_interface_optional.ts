interface IPersonA { 
  name:string;
  age:number;
  address?: string;
  getSalary: (salary: number) => number;
} 

var personA:IPersonA = { 
  name: "Azmul Hossain",
  age:30, 
  getSalary: (salary: number) => salary
} 

console.log(personA.name) 
console.log(personA.age)
console.log(personA.address)
console.log(personA.getSalary(10))  

/* 
In the above example, the IPerson interface
includes two properties name, age and 
an optional property address
It also includes a method declaration getSalaray 
using an arrow function which includes one number
parameter and a number return type.
*/
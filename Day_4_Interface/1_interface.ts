interface IPerson { 
  name:string;
  age:number;
  getSalary: (salary: number) => number;
} 

var person:IPerson = { 
  name: "Azmul Hossain",
  age:30, 
  getSalary: (salary: number) => salary
} 

console.log(person.name) 
console.log(person.age)
console.log(person.getSalary(10))  

/* 
In the above example, the IPerson interface
includes two properties name and age. 
It also includes a method declaration getSalaray 
using an arrow function which includes one number
parameter and a number return type.
*/
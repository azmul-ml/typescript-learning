interface IPersonB { 
  name:string;
  age:number;
  address?: string;
  readonly phone: string;
  getSalary: (salary: number) => number;
} 

var personB:IPersonB = { 
  name: "Azmul Hossain",
  age:30, 
  phone: "+8801734240825",
  getSalary: (salary: number) => salary
} 

console.log(personB.name) 
console.log(personB.age)
console.log(personB.phone)
console.log(personB.getSalary(10))  

/* 
In the above example, the IPerson interface
includes two properties name, age, 
an optional property address and a 
readonly property phone
It also includes a method declaration getSalaray 
using an arrow function which includes one number
parameter and a number return type.
*/
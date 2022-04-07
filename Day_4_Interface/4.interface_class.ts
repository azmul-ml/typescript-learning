interface IEmployee {
  name: string;
  age: number;
  getSalary:() => number;
}

class Employee implements IEmployee { 
  name: string;
  age: number;
 

  constructor(name: string, age: number) { 
      this.age = age;
      this.name = name;
  }

  getSalary():number { 
      return 20000;
  }
}

let emp = new Employee("Azmul Hossain", 30);
console.log(emp.name)
console.log(emp.age)
console.log(emp.getSalary)
/* 
In the above example, the IEmployee interface is 
implemented in the Employee class using the the 
implement keyword. The implementing class should 
strictly define the properties and the function 
with the same name and data type. If the implementing 
class does not follow the structure, then the 
compiler will show an error.
*/

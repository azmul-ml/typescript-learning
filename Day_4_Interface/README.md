# TypeScript - Interfaces
```Interface``` is a structure that defines the contract in your application. Actually it defines the syntax that any entity(class/object) must follow.

```Interfaces``` define properties, methods, and events, which are the members of the interface.

Let’s consider an object −
```javascript
const person = { 
   name: "Azmul Hossain", // property
   age: 30, // property
   getSalary: (salary) => { return salary } // method
};
```

If we consider the signature of the object, it could be −
```javascript
{ 
   name:string, 
   age:number, 
   getSalary(number)=>number 
}
```
**Note:** To reuse the signature across objects we can define it as an ```interface```.

### How we declare an ```interface``` ?
An interface is defined with the keyword ```interface``` and it can include properties and method declarations using a function or an arrow function.

Syntax:
```javascript
interface interfaceName { 

}
```
Example:

```javascript
interface IPerson { 
  name:string;
  age:number;
  getSalary: (salary: number) => number;
} 
```
**Note:** Interfaces are not to be converted to JavaScript. It’s just part of TypeScript.

**See** ```1_interface.ts``` file for details

###### Optional Property
Sometimes, we may declare an ```interface``` with excess properties but may not expect all objects to define all the given interface properties. We can have optional properties, marked with a "?". In such cases, objects of the interface may or may not define these properties.

Example:

```javascript
interface IPerson { 
  name:string; 
  age:number;
  address?: string;
  getSalary: (salary: number) => number;
} 
```
**See** ```1.1_interface_optional.ts``` file for details
###### Readonly Property
TypeScript provides a way to mark a property as read only. This means that once a property is assigned a value, it cannot be changed!

Example:

```javascript
interface IPerson { 
  name:string; 
  age:number;
  address?: string;
  readonly phone: string;
  getSalary: (salary: number) => number;
} 
```
**See** ```1.2_interface_readonly.ts``` file for details
#### Interfaces and Arrays
```Interface``` can define both the kind of key an array uses and the type of entry it contains. Index can be of type string or type number.

**See** ```2.interface_array.ts``` file for details
#### Interfaces and Inheritance
An ```interface``` can be extended by other interfaces. In other words, an interface can inherit from other interface. Typescript allows an interface to inherit from multiple interfaces.

Use the extends keyword to implement inheritance among interfaces.

**See** ```3.interfaces_inheritance.ts``` file for details

#### Interfaces and Class
```interface``` can be implemented with a class using ```implements``` keyword

**Note** the implementing class can define extra properties and methods, but at least it must define all the members of an interface.

**See** ```4.interface_class.ts``` file for details








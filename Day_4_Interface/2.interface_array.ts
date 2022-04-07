// number index
interface names { 
  [index:number]:string 
} 
var list2:names = ["Azmul", 1 ,"Nazmul"] //Error. 1 is not type string  

// string index
interface ages { 
  [index:string]:number 
} 
var ages:ages; 

ages["Azmul"] = 30   // Ok 
ages[1] = "nine" // Error
ages["Nazmul"] = 31 

/*
Here i learn data type .
In js there are two types of datatype => primitive and Reference Data Types .
Primitive data type => Number, String , Boolean , undefined , null , BigInt , symbol .
Reference Data Types => Object , Array , function .
TypeofOperator = used to check the data type of a value .
*/

// Create a variable that stores a string.
let firstName = "Sujal" //this is string value 

// Create a variable that stores a number.
let number = 5 // // This is a number.

// Create a variable that stores a decimal number.
let decimalNumber = 3.4 //this is decimal number or float no 

// Create a variable that stores a boolean true.
let istrue = true // this is boolean value 

// Create a variable that stores a boolean false.
let isfalse = false // this is boolean value 

// Create a variable that stores null.
let userId = null  // null represents the intentional absence of a value.

// Create a variable that stores undefined.
let userNumber = undefined // undefined means a variable has been declared but no value has been assigned.
let a; // this varibale also store undefined value 

// Create a variable that stores a BigInt value.
let bigNumber = 134593n // here n is BigInt 

// Create a variable that stores a Symbol.
const mySymbol = Symbol(); 

// Print all the variables.
console.table([firstName,number,decimalNumber,istrue,isfalse,userId,userNumber,a,bigNumber,mySymbol])
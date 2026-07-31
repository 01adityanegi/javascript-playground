//here i check the type of values . 

// Check the data type of a string.
let name = "Priyanshu";


// Check the data type of a number.
let age = 21


// Check the data type of a decimal number.
let num = 3.3;


// Check the data type of a boolean.
let isTrue = true
let isFalse = false


// Check the data type of null.
let userId = null // typeof null returns "object" because of a historical bug in JavaScript.


// Check the data type of undefined.
let a = undefined


// Check the data type of a BigInt.
let bignumber = 2453485894n


// Check the data type of a Symbol.
const mysymbol = Symbol("Unique ID")


// Print all the results using console.log().
console.log(typeof name, typeof age, typeof num , typeof istrue,typeof isfalse,typeof userId,typeof a, typeof bignumber,typeof my_symbole)
// Print all the results using console.table().
console.table([typeof name, typeof age, typeof num , typeof istrue,typeof isfalse,typeof userId,typeof a, typeof bignumber,typeof my_symbole])
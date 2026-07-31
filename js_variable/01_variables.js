/*JavaScript has three ways to declare variables:
const, let, and var.
Prefer const by default. 
Use let only when the value needs to change.
Avoid var in modern JavaScript.

=> this is multiline comment */

// Create a variable named name and store your name.
let name = "Aditya" 

// Create a variable age and store your age.
let age = 21

// Create a variable city and store your city name.
let city = "Almora"

// Create a variable isStudent and store true.
let isStudent = true 

// Create a constant country and store "India".
let country = "India"

// Create two variables and store two numbers.
let number1 = 5
let number2 = 2

// Print all the variables.
console.log(name , age, city , isStudent, country, number1, number2) // console.log() prints multiple values on a single line.
console.table([ name,age,city,isStudent,country,number1,number2]) // console.table() displays data in a table format.

// Change the value of a let variable.
name = "Aadi"
console.log(name) // The name is change into Aadi . 
// Declare a variable without assigning a value.
let phoneNumber;
console.log(phoneNumber) // give the undefined because we create a variable but not give the value . 
// Assign a value later to the same variable.
phoneNumber = "990099001122"
console.log(phoneNumber) // the phoneNUmber print . 
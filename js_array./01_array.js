//Array - The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.


// Create an array of 5 numbers and print the array.

let num = new Array(23, 5, 1, 96 , 55)
console.log(num)

// Create an array of 5 fruits and print the first fruit.

let fruits = new Array("Apple" , "Mango" , "Orange" , "Dragon Fruit" , "Kiwi")
console.log(fruits[0])

// Create an array of 5 fruits and print the last fruit.

console.log(fruits.at(-1))

// Find the length of an array.

console.log(fruits.length)
console.log(num.length)

// Change the second element of an array.
fruits[1] = "Grape" // mango => Grape.
console.log(fruits)

// Add a new element at the end using push().


// Remove the last element using pop().


// Add a new element at the beginning using unshift().


// Remove the first element using shift().


// Print every element of an array using a for loop.
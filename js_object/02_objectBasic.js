// Print all keys of an object.
let student = {
    name : "Priyanshu",
    age : 22,
    branch : "Commerce",
    rollno : 2003543
}
console.log(Object.keys(student))

// Print all values of an object.
console.log(Object.values(student))

// Print all keys and values using a for...in loop.
for (let keys in student){
    console.log(`Keys : ${keys}`)
}

// Count the number of properties in an object.
const numberOfProperties = Object.keys(student).length
console.log(`The total properties in Object : ${numberOfProperties}`)

// Find the highest value in an object containing subject marks.


// Find the subject with the highest marks.


// Count how many subjects have marks greater than 80.


// Create a nested object containing a person's address and print the city.


// Modify a property inside a nested object.


// Add a new property inside a nested object.
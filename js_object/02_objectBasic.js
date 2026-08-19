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

// Create a product object and change its price and stock.
let product = {
    shope : [50, 100],
    noteBook : [100 , 5],
    mathBook : [500, 45],
    bag : [999, 2], 
    smartWatch : [4999, 5]
}
product.noteBook = [89 , 10]
console.log(Object.values(product))

// Add discount and category properties to a product object.
product.noteBook = [89 , 5 , "10%"]
console.log(product["noteBook"]);

// Check whether an object contains an email property using in.


// Create a movie object and change its rating.


// Create a mobile object and delete its color property.


// Create an object containing your name, age, college, and branch and print any three properties.



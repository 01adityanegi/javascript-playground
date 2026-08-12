// Create an array of numbers and use includes() to check whether 50 exists.
let numArray = [34, 64, 100, 70, 50 , 24]
console.log(numArray.includes(50))

// Find the position of a particular element using indexOf().
console.log(numArray.indexOf(64))//if the vale exist its give index no . 
console.log(numArray.indexOf(44))//if the vale not exist its give -1. 

// Reverse an array using reverse().
console.log(numArray.reverse())

// Sort an array of numbers in ascending order.
console.log(numArray.sort((a, b)=> a-b))

// Sort an array of numbers in descending order.
console.log(numArray.sort((a, b)=> b-a))

// Join all elements of an array into one string using join().
let numArraytwo = numArray
console.log(numArraytwo.join()) //change array into string . 

// Create a copy of an array using slice().
let numArrayThree = numArray.slice()
// Remove 2 elements from the middle using splice().
console.log(numArrayThree.splice(2,2))

// Add 2 new elements in the middle using splice().
let newArray = [4, 64, 3 ,35, 61 , 55 , 99]
newArray.splice(3, 0, 100, 200);
console.log(newArray);

// add the new element using splice 
// 3              → start at index 3
// 0              → delete 0 elements
// 100, 200       → add these 2 elements

// Replace an element using splice().
newArray.splice(5,1,500)
console.log(newArray);

// in splice replace . 
// newArray.splice(5,1,500)
//  index → position of the element you want to replace like 5
// 1 → delete one element 
// newValue → value you want to put there example 500 
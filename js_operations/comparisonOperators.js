// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)

// Compare your age with your friend's age.
let myAge = 21
let friendAge = 20
compareAge = myAge === friendAge //give the false because myAge is 21 and friend age is 20
console.log(compareAge)
compareAge = myAge == friendAge 
console.log(compareAge)
compareAge = myAge != friendAge // Returns true because 21 is greater than 20.
console.log(compareAge)
compareAge = myAge > friendAge // this is give true because my age grater then friend age
console.log(compareAge)
compareAge = myAge < friendAge // False because my age not less then friend age 
console.log(compareAge)
compareAge = myAge !== friendAge
console.log(compareAge)

// Compare "10" and 10 using ==.
let value = "10"
let value2 = 10
console.log(value == value2) //its give true . 

// Compare "10" and 10 using ===.
console.log(value === value2) //its give flase . 

// Check whether two passwords are equal.
let passOne = "Siyaram@11"
let passTwo = "Siyaram@11"
console.log("The pass are same : " , passOne === passTwo)

// Compare two product prices.
let productOne = 300
let productTwo = 199
console.log("The Product price are same : " , productOne === productTwo)

// Check if your marks are greater than the passing marks.
const passingMarks = 33
const myMarks = 34
console.log(myMarks > passingMarks)

// Compare two decimal numbers.
let firstDecimalNumber = 3.4
let secoundDecimalNumber = 3.43
console.log(firstDecimalNumber === secoundDecimalNumber)

// Compare two strings.
let firstString = "aadi"
let secoundString = "Aadi"
console.log(firstString === secoundString) // JavaScript string comparison is case-sensitive.

// Compare null and undefined using ==.
let valueNull = null
let valueTwo = undefined
console.log(valueNull == valueTwo) //its give true . 

// Compare null and undefined using ===.
console.log(valueNull === valueTwo) // its give false

/*
Learned:
- == compares values after type conversion.
- === compares both value and data type.
- != checks if values are not equal.
- !== checks both value and type.
- JavaScript string comparison is case-sensitive.
- null == undefined is true.
- null === undefined is false.
*/
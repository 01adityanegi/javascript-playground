// Create an arrow function that prints "Hello World".
const sayhello = () => console.log("Hello World")
sayhello()

// Create an arrow function that takes a name and prints "Hello, Karan".
 const greeting = () => {
    console.log("Hello,karan")
 }
greeting()

// Create an arrow function that takes two numbers and returns their sum.

const sumofnum = (num1 , num2 ) => {
    return num1 + num2
}
console.log(sumofnum(4 , 5))

// Create an arrow function that takes two numbers and returns their difference.

const difference = (num1 , num2) => {
    return (num1 - num2)
}
console.log(difference(8 , 5))

// Create an arrow function that takes two numbers and returns their product.

const product = (num1 , num2) => {
    return (num1 * num2)
}
console.log(product(4, 5))

// Create an arrow function that takes two numbers and returns their division.

const division = (num1 , num2) => {
    return (num2 / num1)
}
console.log(division(3 , 27))

// Create an arrow function that takes a number and returns its square.

const square = (num1) =>{
    return (num1 ** 2)
}
console.log(square(2))

// Create an arrow function that takes a number and returns its cube.

const cube = (num1) =>{
    return (num1 ** 3)
}
console.log(cube(2))

// Create an arrow function that takes a person's age and checks whether they are eligible to vote.

const agechecks =(age) =>{
    if (age >= 18){
        return "You are eligible for vote."
    }
    else{
        return "You are not elligible for vote."
    }
}
console.log(agechecks(26))

// Create an arrow function that takes a number and checks whether it is even or odd.
const numbercheck = (number) =>{
    if(number % 2 === 0){
        return "This is even number"
    }
    else{
        return "This is odd number"
    }
}
console.log(numbercheck(61))

//Create a function that prints "Hello World".
function greeting(){
    console.log("Hello World")
}
greeting()

// Create a function that takes a name as a parameter and prints the name.

function greaterUser(name){           // (name) This is parameter .
    console.log(`Hii ${name}`)
}
greaterUser("Himanshu") 
greaterUser("Gangadhar") //the is argument

// Create a function that takes two numbers and returns their sum.

function sumOfNum(num,numtwo){
        return num+numtwo               //the return is return the value in sumOfNum
}
console.log(`The sum of two numbers is : ${sumOfNum(5,15)}`)

// Create a function that takes two numbers and returns their difference.

function differenceOfNum(num,numtwo){
        return num-numtwo
}
console.log(`The difference of two numbers is : ${differenceOfNum(55,15)}`)

// Create a function that takes two numbers and returns their multiplication.

function multiplicationOfNum(num,numtwo){
        return num*numtwo
}
console.log(`The Multiplication of two numbers is : ${multiplicationOfNum(7,2)}`)

// Create a function that takes two numbers and returns their division.

function divisionOfNum(num,numtwo){
        let division = num/numtwo
        return division
}
console.log(`The Divison of two numbers is : ${divisionOfNum(98,2)}`)


// Create a function that takes a number and returns its square.

function square(num) { 
    return num ** 2; 
} 
console.log(`The square of numbers is : ${square(2)}`);

// Create a function that takes a number and returns its cube.

function cube(num){ 
    return  num**3
}
console.log(`The cube of  numbers is : ${cube(4)}`)

// Create a function that takes three numbers and returns their average.
function aveofnumber (num , numtwo , numthree){
        return (num+numtwo+numthree)/3
}
console.log(`The avg of three numbers is : ${aveofnumber(3,5,9)}`)
// Create a function that takes two numbers and returns the greater number.

function greaterNum(fNum, secNum) {
    if (fNum > secNum) {
        return fNum;
    } else {
        return secNum;
    }
}

console.log(greaterNum(2, 4));
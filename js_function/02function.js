// Create a function that takes an array and prints the array.

function valueArray(){
    let arr = [34,53,4,6,2,74]
    return arr
}
console.log(valueArray())

// Create a function that takes an array and returns its first element.

function arry(){
   let arr = [5,1,90,84,23]
    return arr[0]
}
console.log(`The first element of array => ${arry()}`)

// Create a function that takes an array and returns its last element.

function arrthree(){
   let arr = [25,41,90,84,55]
    return arr.at(-1)
}
console.log(`The Last element of array =>${arrthree()}`)


// Create a function that takes an array and returns the number of elements in it.

function numOfElements(){
   let arr = [5,6,3,7,2,1,67,32,78]
    return arr.length
}
console.log(`The number of elements is => ${numOfElements()}`)

// Create a function that takes an array of numbers and returns the sum of the numbers.

function arrsumofnum(){
   let arr = [5,1,2,3,4,6,7,8,9]
    let sum = 0 
    for (let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(`The Sum of elements is => ${arrsumofnum()}`)

// Create a function that takes an array of numbers and returns the largest number.

function lararrfind(){
   let arr = [3,6,2,4,8,1,5]
    let largest = arr[0]
    for (let i = 1 ; i< arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
    }   
  }
  return largest
}
console.log(`The Largest  elements in array is  => ${lararrfind()}`)

// Create a function that takes an array of numbers and returns the smallest number.

function smallestarrfind(){
   let arr = [3,6,2,4,8,1,5]
    let smallest = arr[0]
    for (let i = 1 ; i< arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i]
    }   
  }
  return smallest
}
console.log(`The Smallest elements in array is  => ${smallestarrfind()}`)


// Create a function that takes an array and a number, then checks whether that number exists in the array.

function checkNumArr(){
    arr =[1,2,3,4,5,6,7,8,9,10]
    return arr.includes(5)
}
console.log(checkNumArr())


// Create a function that takes an array and returns a new array containing only numbers greater than 50.



// Create a function that takes an array and returns a new array containing only even numbers.
// Find the sum of all numbers in an array.
// Example:
// let numbers = [10, 20, 30, 40, 50];
// Output:
// 150
let number = [10, 20 , 30 , 40 , 50 ];
let sum = 0 
for (let i = 0 ; i < number.length; i++ ){
        sum += number[i]
}
console.log(sum)

// Find the average of all numbers.
let avg = sum/5
console.log(avg)

// Find the largest number in an array without using Math.max().
let num = [34, 63, 70 , 55 , 5 , 34 , 22 , 9]
let largest = num[0]
for (let i = 1 ; i< num.length; i++){
    if(num[i]>largest){
        largest = num[i]
    }
}
console.log(largest)
// Find the smallest number in an array without using Math.min().

let smallest = num[0]
for (let i = 1 ; i< num.length; i++){
    if(num[i]<smallest){
        smallest = num[i]
    }
}
console.log(smallest)

// Count how many even numbers are in an array.
let evenOdd = [22, 56 , 2 ,4, 3 , 403 ,7 ,4 ,9 , 33 , 56 , 91 , 72 , 77 , 43 , 95]
let even = 0
for (let i = 0; i < evenOdd.length;i++){
    if(evenOdd[i]%2==0){
        even++
    }
}
console.log(even)
// Count how many odd numbers are in an array.
let odd = 0 
for (let i = 0 ; i< evenOdd.length; i++){
    if(evenOdd[i]%2 ==! 0 ){
        odd ++
    }
}
console.log(odd)

// Print only numbers greater than 50.


// Print only numbers smaller than 20.


// Count how many numbers are greater than 50.


// Create a new array containing the square of every number.
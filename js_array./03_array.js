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
let avg = sum / number.length;
console.log(avg);

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
let odd = 0;

for (let i = 0; i < evenOdd.length; i++) {
    if (evenOdd[i] % 2 !== 0) {
        odd++;
    }
}
console.log(odd);

// Print only numbers greater than 50.
let numArray = [45, 64, 34 ,31,56,89, 90 ,  23 ,399 , 589, 2 , 5783, 5, 455 ]
let countTwo = 0 
for (let i = 0; i<numArray.length; i++){
    if(numArray[i]>50){
        console.log(numArray[i])
        countTwo++
    }
}
console.log(`Total numbers greater than 50 => ${countTwo}`);

// Print only numbers smaller than 20.
let smallerNum = [3, 5, 64, 43 , 78 , 99 , 7 , 12 , 15 ]
let countThree = 0 
for (let i = 0 ; i<smallerNum.length; i++){
    if(smallerNum[i]<20){
        console.log(smallerNum[i])
        countThree++
    }
}
console.log(`Totel no whose smaller then 20 => ${countThree}`)



// Create a new array containing the square of every number.
let squareArray = [2, 3, 4, 5, 6, 7];
let squares = [];

for (let i = 0; i < squareArray.length; i++) {
    squares.push(squareArray[i] ** 2);
}

console.log(squares);

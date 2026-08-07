// Generate a random 4-digit OTP.

const minOTP4 = 1000;// Minimum 4-digit number.
const maxOTP4 = 9999;// Maximum 4-digit number.
const otp4 =
  Math.floor(Math.random() * (maxOTP4 - minOTP4 + 1)) + minOTP4;// Generate a random number between 1000 and 9999.
console.log(`4-Digit OTP: ${otp4}`);


// Generate a random 6-digit OTP.


const minOTP6 = 100000;// Minimum 6-digit number.
const maxOTP6 = 999999;// Maximum 6-digit number.
// Generate a random number between 100000 and 999999.
const otp6 =
  Math.floor(Math.random() * (maxOTP6 - minOTP6 + 1)) + minOTP6;

// Display the OTP.
console.log(`6-Digit OTP: ${otp6}`);



// Simulate rolling a dice.

const minDice = 1;
const maxDice = 6;
const dice =
  Math.floor(Math.random() * (maxDice - minDice + 1)) + minDice;
console.log(`Dice Number: ${dice}`);



// Simulate flipping a coin.

const coin = ["Heads", "Tails"];
const result = coin[Math.floor(Math.random() * coin.length)];// Generate a random array index.
console.log(`Coin Result: ${result}`);


// Generate a random RGB color.

const red = Math.floor(Math.random() * 256);// Generate a random Red value (0-255)
const green = Math.floor(Math.random() * 256);// Generate a random Green value (0-255).
const blue = Math.floor(Math.random() * 256);// Generate a random Blue value (0-255).
const rgbColor = `rgb(${red}, ${green}, ${blue})`;
console.log(`Random RGB Color: ${rgbColor}`);



// Generate a random HEX color.
const hexCharacters = "0123456789ABCDEF";// Store all hexadecimal characters.
let hexColor = "#";// Start the HEX color with #.
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexColor += hexCharacters[randomIndex];
}
console.log(`Random HEX Color: ${hexColor}`);


// Find the largest value in an array.

const numbers = [23, 44, 65, 22, 55, 21, 5, 55];
const largestNumber = Math.max(...numbers);// Spread the array and find the largest number..
console.log(`Largest Number: ${largestNumber}`);



// Find the smallest value in an array.
const smallestNumber = Math.min(...numbers);
console.log(`Smallest Number: ${smallestNumber}`);


// Calculate the area of a circle.


const radius = 4;// Radius of the circle.
const area = Math.PI * radius ** 2; // Formula: π × r²
console.log(`Area of Circle: ${area.toFixed(2)} square units`);



// Calculate the circumference of a circle.
const circumference = 2 * Math.PI * radius;// Formula: 2 × π × r
console.log(`Circumference of Circle: ${circumference.toFixed(2)} units`);

// Round a number to 2 decimal places.

const randomNumber = Math.random() * 100;

// Display the original number.
console.log(randomNumber);

// Round the number to 2 decimal places.
console.log(randomNumber.toFixed(2));//toFixed() returns a string.
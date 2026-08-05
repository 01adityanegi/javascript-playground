// JavaScript Number Methods


// Create a Number object.
const numValue = new Number(255);

// Convert the number into a string.
console.log(numValue.toString()); // "255"

// Since new Number() creates an object, typeof returns "object".
console.log(typeof numValue); // object

// If you create the number like this:
// const numValue = 255;
// Then typeof numValue will be "number".


// Convert the number into binary (base 2).
console.log(numValue.toString(2)); // 11111111

// Convert the number into octal (base 8).
console.log(numValue.toString(8)); // 377

// Convert the number into hexadecimal (base 16).
console.log(numValue.toString(16)); // ff


// Create a Number object with a decimal value.
const numDecimal = new Number(12.34567);

// Display the number with exactly 2 digits after the decimal point.
// toFixed() rounds the number if necessary.
console.log(numDecimal.toFixed(2)); // 12.35


// Create another decimal number.
const valueDecimal = new Number(8.1);

// toFixed() controls only the digits after the decimal point.
console.log(valueDecimal.toFixed(4)); // 8.1000

// toPrecision() controls the total number of significant digits
// (both before and after the decimal point).
console.log(valueDecimal.toPrecision(4)); // 8.100


// Create a number to demonstrate rounding.
const roundedNumber = new Number(99.9999);

// Round the number to 3 decimal places.
console.log(roundedNumber.toFixed(3)); // 100.000


// Create a number for exponential notation.
const exponentialNumber = new Number(12345);

// Convert the number into scientific (exponential) notation.
// The argument specifies the number of digits after the decimal point.
console.log(exponentialNumber.toExponential(3)); // 1.235e+4


// Create a very small decimal number.
const smallNumber = new Number(0.000456);

// Display the number in exponential notation
// with exactly 2 digits after the decimal point.
console.log(smallNumber.toExponential(2)); // 4.56e-4


// Create a number for precision formatting.
const preciseNumber = new Number(123.456789);

// Format the number using 4 significant digits.
// Significant digits include both the integer and decimal parts.
console.log(preciseNumber.toPrecision(4)); // 123.5
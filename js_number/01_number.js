//Here are the Number methods . 
// Convert the number 255 into a string.
const numValue = new Number(255)
console.log(numValue.toString())
console.log(typeof numValue) //here is the type of numValue is object . because we use the Number constructor. 
 
// Convert 255 into binary.
console.log(numValue.toString(2))
// Convert 255 into octal.
console.log(numValue.toString(8))
// Convert 255 into hexadecimal.
console.log(numValue.toString(16))

// Display 12.34567 with exactly 2 decimal places.
const numDecimal = new Number (12.34567)
console.log(numDecimal.toFixed(2))

// Display 8.1 with exactly 4 decimal places.
const valueDecimal = new Number(8.1)
console.log(valueDecimal.toFixed(4))//the toFixed method count the deciaml number only output using this - 8.1000
console.log(valueDecimal.toPrecision(4)) //the toPrecision count whole numebr the output using this - 8.100

// Round 99.9999 to 3 decimal places.
const NumValueDecimal = new Number(99.9999)
console.log(NumValueDecimal.toFixed(3))
// Convert 12345 into exponential notation.


// Convert 0.000456 into exponential notation with 2 decimal places.


// Format 123.456789 to 4 significant digits.
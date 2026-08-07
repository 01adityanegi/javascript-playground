// Format 9876.54321 to 6 significant digits.
const digitNumber = new Number(9876.54321)
console.log(digitNumber.toPrecision(6))

// Get the primitive value from new Number(500).
const value = new Number(500)
console.log(value)
console.log(value.valueOf())

// Verify that valueOf() returns a primitive number.
console.log(value.valueOf() === value)

// Display 1000000 with commas according to your locale.
const valueNum = new Number (1000000)
console.log(valueNum.toLocaleString())

// Display 123456789 in the Indian number format.
const valueNumSecound = new Number (123456789)
console.log(valueNumSecound.toLocaleString("en-IN"))

// Format 2500000.75 as US currency.
const usCurrency = new Number(2500000.75)
console.log(usCurrency.toLocaleString())

// Format 2500000.75 as Indian Rupees.
const indCurrency = new Number(2500000.75)
console.log(indCurrency.toLocaleString("en-IN"))

// Format 0.75 as a percentage.
const percentageCon = new Number (0.75)
console.log(`${percentageCon * 100 }%`)

// Display 12345.6789 with a maximum of 2 decimal places.
const decimalValue = new Number(12345.6789)
console.log(decimalValue.toFixed(2))

// Convert 1234.56789 into a string, round it to 2 decimal places, and display it with commas.
const valueConvert = new Number(1234.56789)
console.log(`${valueConvert.toString()} , ${valueConvert.toFixed(2)} , ${valueConvert.toLocaleString("en-IN")}`)

// Convert a decimal number into binary, octal, and hexadecimal.
const decimalNum = new Number (14.56)
console.log(decimalNum.toString(2))
console.log(decimalNum.toString(8))
console.log(decimalNum.toString(16))


// Display a bill amount in both Indian and US currency formats.
const billAmount = new Number(150000)
console.log(`In us currency :$ ${billAmount.toLocaleString()}`)
console.log(`In Indian Currency :${billAmount.toLocaleString("en-IN")}₹`)

// Create a Number object and print its string, primitive, fixed, and exponential values.
const valueThree = new Number (25)
console.log(valueThree.toString())
console.log(valueThree.valueOf())
console.log(valueThree.toFixed(1))
console.log(valueThree.toExponential(1))

// Compare the outputs of toFixed(), toPrecision(), and toExponential() using the same number.


// Create a program that demonstrates all major JavaScript Number methods on a single number.


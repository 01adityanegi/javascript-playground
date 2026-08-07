// Format the number using 6 significant digits.
const digitNumber = new Number(9876.54321);
console.log(digitNumber.toPrecision(6)); // 9876.54


// Create a Number object.
const value = new Number(500);

// Print the Number object.
console.log(value); // [Number: 500]

// valueOf() returns the primitive number stored inside the object.
console.log(value.valueOf()); // 500

// Verify that valueOf() returns a primitive number.
console.log(typeof value.valueOf()); // "number"


// Display the number using your system's default locale.
const valueNum = new Number(1000000);
console.log(valueNum.toLocaleString()); // Example: 1,000,000


// Display the number in the Indian numbering system.
const valueNumSecond = new Number(123456789);
console.log(valueNumSecond.toLocaleString("en-IN")); // 12,34,56,789


// Format the number as US currency.
const usCurrency = new Number(2500000.75);

console.log(
    usCurrency.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
); // $2,500,000.75


// Format the number as Indian currency.
const indCurrency = new Number(2500000.75);

console.log(
    indCurrency.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    })
); // ₹25,00,000.75


// Display the number as a percentage.
const percentageCon = new Number(0.75);

console.log(
    percentageCon.toLocaleString("en-US", {
        style: "percent",
    })
); // 75%


// Display the number with a maximum of 2 decimal places.
const decimalValue = new Number(12345.6789);

console.log(
    decimalValue.toLocaleString("en-US", {
        maximumFractionDigits: 2,
    })
); // 12,345.68


// Convert the number into a string,
// round it to 2 decimal places,
// and display it with commas.
const valueConvert = new Number(1234.56789);

console.log(valueConvert.toString()); // "1234.56789"
console.log(valueConvert.toFixed(2)); // 1234.57
console.log(valueConvert.toLocaleString("en-IN")); // 1,234.568


// Convert the decimal number into different number systems.
const decimalNum = new Number(14.56);

console.log(decimalNum.toString(2)); // Binary
console.log(decimalNum.toString(8)); // Octal
console.log(decimalNum.toString(16)); // Hexadecimal


// Display the bill amount as US and Indian currency.
const billAmount = new Number(150000);

console.log(
    billAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
);

console.log(
    billAmount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    })
);


// Demonstrate common Number methods.
const valueThree = new Number(25);

console.log(valueThree.toString()); // Convert to string
console.log(valueThree.valueOf()); // Primitive value
console.log(valueThree.toFixed(1)); // Fixed decimal places
console.log(valueThree.toExponential(1)); // Exponential notation


// Compare different formatting methods.
const valueNoFour = new Number(55);

console.log(valueNoFour.toFixed(4)); // Exactly 4 decimal places
console.log(valueNoFour.toPrecision(4)); // 4 significant digits
console.log(valueNoFour.toExponential(4)); // Scientific notation


// Demonstrate all major Number methods.
const oneForAllMethod = new Number(175);

console.log(oneForAllMethod.toString());
console.log(oneForAllMethod.valueOf());
console.log(oneForAllMethod.toFixed(2));
console.log(oneForAllMethod.toPrecision(2));
console.log(oneForAllMethod.toExponential(3));
console.log(oneForAllMethod.toLocaleString("en-IN"));

// Convert the number into different number systems.
console.log(oneForAllMethod.toString(2)); // Binary
console.log(oneForAllMethod.toString(8)); // Octal
console.log(oneForAllMethod.toString(16)); // Hexadecimal
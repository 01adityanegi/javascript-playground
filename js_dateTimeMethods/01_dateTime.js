// Date and Time Methods - 01

// Create a Date object that stores the current date and time.
let now = new Date();

console.log(now);


// Print the current year using getFullYear().
let currentYear = new Date();

console.log(`The Current Year is : ${currentYear.getFullYear()}`);


// Print the current month using getMonth().
// JavaScript months start from 0, so add 1.
let currentMonth = new Date();

console.log(`The Current Month is : ${currentMonth.getMonth() + 1}`);


// Print today's date using getDate().
let todayDate = new Date();

console.log(`Today's Date is : ${todayDate.getDate()}`);


// Print the current day of the week using getDay().
let currentDayofWeek = new Date();

console.log(`The Current Day of Week is : ${currentDayofWeek.getDay()}`);


// Print the current hour, minute, and second separately.
let currentHourMinuteSec = new Date();

console.log(
    `The Current Hour : ${currentHourMinuteSec.getHours()}, ` +
    `Minute : ${currentHourMinuteSec.getMinutes()} ` +
    `and Second : ${currentHourMinuteSec.getSeconds()}`
);


// Print the current date in this format:
// 09/08/2026

let day = String(todayDate.getDate()).padStart(2, "0");
let month = String(currentMonth.getMonth() + 1).padStart(2, "0");
let year = currentYear.getFullYear();

console.log(`${day}/${month}/${year}`);


// Print the current time in this format:
// 19:30:45

console.log(
    `${currentHourMinuteSec.getHours()}:` +
    `${currentHourMinuteSec.getMinutes()}:` +
    `${currentHourMinuteSec.getSeconds()}`
);


// Create a date for your birthday and print it.
let birthDate = new Date(2005, 4, 5);
console.log(`My Birthday is : ${birthDate.toDateString()}`);


// Create a date for:
// 15 August 2026
// and print it.

let specificDate = new Date(2026, 7, 15);

console.log(`The Date is : ${specificDate.toDateString()}`);
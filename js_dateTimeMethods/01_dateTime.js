//Date of Time methods - 01

// Create a Date object that stores the current date and time.
let now = new Date()
console.log(now)

// Print the current year using getFullYear().
let currentYear = new Date()
console.log(`The Current Year is : ${currentYear.getFullYear()}`)

// Print the current month using getMonth(). Also print the month as a normal number from 1–12.
let currentMonth = new Date()
console.log(`The Current month is : ${currentMonth.getMonth() + 1}`)

// Print today's date using getDate().
let todayDate = new Date()
console.log(`The Today date is : ${todayDate.getDate()}`)

// Print the current day of the week using getDay().
let currentDayofWeek = new Date()
console.log(`The Current week is ${currentDayofWeek.getDay()+1}`)

// Print the current hour, minute, and second separately.
let currentHourMinuteSec = new Date()
console.log(`The current hour : ${currentHourMinuteSec.getHours()}, minute : ${currentHourMinuteSec.getMinutes()} and second : ${currentHourMinuteSec.getSeconds()}`)

// Print the current date in this format:
// 09/08/2026


// Print the current time in this format:
// 19:30:45


// Create a date for your birthday and print it.


// Create a date for:
// 15 August 2026
// and print it.
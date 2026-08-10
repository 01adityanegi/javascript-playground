// Create a date and change its year to 2030 using setFullYear().
let year = new Date()
year.setFullYear(2030)
console.log(year.getFullYear())

// Create a date and change its month to December using setMonth().
let month = new Date()
month.setMonth(11) 
console.log(month.getMonth())

// Create a date and change its day to 25 using setDate().
let date = new Date()
date.setDate(25)
console.log(date.getDate())

// Create a date and change its hour to 10.
let hour = new Date()
hour.setHours(10)
console.log(hour.getHours())

// Create a date and change its minutes to 30.
let minutes = new Date()
minutes.setMinutes(30)
console.log(minutes.getMinutes())

// Create a date and change its seconds to 45.
let seconds  = new Date()
seconds.setSeconds(45)
console.log(seconds.getSeconds())

//Create a date for:
// 1 January 2025
// Then change it to:
// 15 August 2030

let fullYear = new Date(2025, 0, 1);
console.log(fullYear.toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }))
fullYear.setFullYear(2030, 7, 15);
console.log(
    fullYear.toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
);

// Create a date and print the result using:
// toString()
// toDateString()
// toTimeString()

let dateResult = new Date()
console.log(dateResult.toString())
console.log(dateResult.toDateString())
console.log(dateResult.toTimeString())

// Create a date and convert it into an ISO string using toISOString().
let isoDate = new Date()
console.log(isoDate.toISOString())

// Display today's date using toLocaleDateString("en-IN").
let isoLocalDate = new Date()
console.log(isoLocalDate.toLocaleDateString("en-IN"))
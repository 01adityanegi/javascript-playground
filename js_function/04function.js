// Create a function that takes the students array and returns the first student.

function student(){
    std =[
        { name: "Rahul", age: 20, marks: 80 },
        { name: "Aman", age: 21, marks: 65 },
        { name: "Rohit", age: 19, marks: 90 }
    ]
    return std[0]
}
console.log(student())

// Create a function that takes the students array and returns the last student.

function students(){
    std =[
        { name: "Rahul", age: 20, marks: 80 },
        { name: "Aman", age: 21, marks: 65 },
        { name: "Rohit", age: 19, marks: 90 },
        { name: "Mohit", age: 22, marks: 50 },
        { name: "Ayush", age: 20, marks: 60 },
    ]
    return std.at(-1)
}
console.log(students())

// Create a function that takes the students array and returns the name of the first student.

function studentsTwo(){
    std =[
        firststd = { name: "Rahul", age: 20, marks: 80 },
        secoundstd = { name: "Aman", age: 21, marks: 65 },
        thirdstd = { name: "Rohit", age: 19, marks: 90 },
        fourthstd = { name: "Mohit", age: 22, marks: 50 },
        fifthstd = { name: "Ayush", age: 20, marks: 60 },
    ]
    return firststd.name
}
console.log(`The name of first Student => ${studentsTwo()}`)

// Create a function that takes the students array and returns the marks of the second student.

function studentsThree(){
    std =[
        firststd = { name: "Rahul", age: 20, marks: 80 },
        secoundstd = { name: "Aman", age: 21, marks: 65 },
        thirdstd = { name: "Rohit", age: 19, marks: 90 },
        fourthstd = { name: "Mohit", age: 22, marks: 50 },
        fifthstd = { name: "Ayush", age: 20, marks: 60 },
    ]
    return secoundstd.marks
}
console.log(`The marks of secound Student => ${studentsThree()}`)


// Create a function that takes the students array and returns the student whose marks are highest.



// Create a function that takes the students array and returns the student whose marks are lowest.



// Create a function that takes the students array and returns the names of students who scored more than 70.



// Create a function that takes the students array and returns the average marks.



// Create a function that takes the students array and changes the marks of a particular student.



// Create a function that takes the students array and adds a new student.
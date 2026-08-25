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

function studentsfour() {
    //  Properly declare the array of objects using const
    const std = [
        { name: "Rahul", age: 20, marks: 80 },
        { name: "Aman", age: 21, marks: 65 },
        { name: "Rohit", age: 19, marks: 90 },
        { name: "Mohit", age: 22, marks: 50 },
        { name: "Ayush", age: 20, marks: 60 },
    ];
    
    //  Initialize the highest with the first student object
    let largestmarks = std[0]; 
    
    for (let i = 1; i < std.length; i++) {       
        if (std[i].marks > largestmarks.marks) { //  Compare the 'marks' property, not the whole object
            largestmarks = std[i];
        }   
    }
    return largestmarks;
}
const topStudent = studentsfour();
console.log(`The highest marks belong to ${topStudent.name} => ${topStudent.marks}`);

// Create a function that takes the students array and returns the student whose marks are lowest.

function studentsfive() {
    const std = [
        { name: "Rahul", age: 20, marks: 80 },
        { name: "Aman", age: 21, marks: 65 },
        { name: "Rohit", age: 19, marks: 90 },
        { name: "Mohit", age: 22, marks: 50 },
        { name: "Ayush", age: 20, marks: 60 },
    ];
    
    //  Initialize the highest with the first student object
    let lowestmarks = std[0]; 
    
    for (let i = 1; i < std.length; i++) {       
        if (std[i].marks < lowestmarks.marks) { 
            lowestmarks = std[i];
        }   
    }
    return lowestmarks;
}
const Student = studentsfive();
console.log(`The highest marks belong to ${Student.name} => ${Student.marks}`);


// Create a function that takes the students array and returns the names of students who scored more than 70.

function getTopStudents() {
    const students = [
        { name: "Sujal", Marks: 89 },
        { name: "Priyanshu", Marks: 79 },
        { name: "Kamal", Marks: 49 },
        { name: "Kunal", Marks: 69 },
        { name: "Raj", Marks: 99 }
    ];

    return students
        .filter(student => student.Marks > 70)
        .map(student => student.name);
}

const topStudents = getTopStudents();
console.log(`Students who scored more than 70: ${topStudents.join(', ')}`);

// Create a function that takes the students array and returns the average marks.
function getAverageMarksLoop(studentsArray) {
    if (studentsArray.length === 0) return 0;
    
    let totalMarks = 0;
    
    for (let i = 0; i < studentsArray.length; i++) {       
        totalMarks += studentsArray[i].Marks; 
    }
    
    return totalMarks / studentsArray.length;
}

const loopAverage = getAverageMarksLoop(students);
console.log(`The average marks are: ${loopAverage}`);


// Create a function that takes the students array and changes the marks of a particular student.

function getUpdatedStudentsList(studentsArray, studentName, newMarks) {
    return studentsArray.map(student => {
        if (student.name === studentName) {
            return { ...student, Marks: newMarks }; 
        }
        return student;
    });
}

// Create a function that takes the students array and adds a new student.
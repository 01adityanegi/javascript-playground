// Create a function that takes a student object and prints the student's name.

function stu(){
    student = {
        name : "Karan",
    }
    return student.name
}
console.log(`The student name is ${stu()}`)

// Create a function that takes a student object and prints the student's age.

function stuage(){
    studentage = {
        name : "Karan",
        age : 21
    }
    return studentage.age
}
console.log(`The student age is ${stuage()}`)

// Create a function that takes a student object and changes the student's age.

function stuagechange(){
    studentage = {
        name : "Karan",
        age : 21
    }
    studentage.age = 20
    return studentage.age
}
console.log(`The student age is ${stuagechange()}`)

// Create a function that takes a student object and changes the student's city.

function stuCity(){
    studentcity = {
        name : "Karan",
        age : 21,
        city : "Almora"
    }
    studentcity.city = "Dehradun"
    return studentcity.city
}
console.log(`The student city is ${stuCity()}`)

// Create a function that takes a student object and returns the student's marks.

function studentMark(){
    stuMark = {
        marks :{
            "hindi" : 88,
            "english" : 72,
            "math" : 90,
            "physics" : 85,
            "chemistry" : 23,
        }
    }
    return Object.values(stuMark["marks"])
}
console.log(`The marks of student is ${studentMark()}`)

// Create a function that takes a product object and returns its price.

function product(){
    productprice ={
        "shope" : 30
    }
    return (productprice["shope"])
}
console.log(`The Price of Product is :  ${product()}`)

// Create a function that takes a product object and increases its price by 100.



// Create a function that takes a person object and returns their name and age.



// Create a function that takes an object and returns the number of properties it has.



// Create a function that takes an object and changes the value of one of its properties.
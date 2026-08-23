// Create a function that takes a student object and prints the student's name.

function studentName(student) {
    return student.name;
}

let student = {
    name: "Karan",
    age: 21
};

console.log(`The student name is: ${studentName(student)}`);


// Create a function that takes a student object and prints the student's age.

function studentAge(student) {
    return student.age;
}

console.log(`The student age is: ${studentAge(student)}`);


// Create a function that takes a student object and changes the student's age.

function changeStudentAge(student) {
    student.age = 20;
    return student.age;
}

console.log(`The changed student age is: ${changeStudentAge(student)}`);


// Create a function that takes a student object and changes the student's city.

function changeStudentCity(student) {
    student.city = "Dehradun";
    return student.city;
}

console.log(`The student city is: ${changeStudentCity(student)}`);


// Create a function that takes a student object and returns the student's marks.

function studentMarks(student) {
    return student.marks;
}

let studentDetails = {
    name: "Karan",
    age: 21,
    marks: {
        hindi: 88,
        english: 72,
        math: 90,
        physics: 85,
        chemistry: 23
    }
};

console.log(`The student's marks are:`, studentMarks(studentDetails));


// Create a function that takes a product object and returns its price.

function productPrice(product) {
    return product.price;
}

let product = {
    name: "Shoes",
    price: 30
};

console.log(`The price of the product is: ${productPrice(product)}`);


// Create a function that takes a product object and increases its price by 100.

function increasePrice(product) {
    product.price += 100;
    return product.price;
}

console.log(`The new price of the product is: ${increasePrice(product)}`);


// Create a function that takes a person object and returns their name and age.

function personDetails(person) {
    return {
        name: person.name,
        age: person.age
    };
}

let person = {
    name: "Seedhe Maut",
    age: 27
};

console.log(`The person's details are:`, personDetails(person));


// Create a function that takes an object and returns the number of properties it has.

function numberOfProperties(object) {
    return Object.keys(object).length;
}

let user = {
    username: "Raga123",
    age: 32,
    city: "NCR",
    gender: "Male",
    email: "raga@example.com",
    mobileNumber: 9876543211
};

console.log(`The number of properties is: ${numberOfProperties(user)}`);


// Create a function that takes an object and changes the value of one of its properties.

function changeProperty(user) {
    user.email = "officialraga@example.com";
    return user.email;
}

console.log(`The changed email is: ${changeProperty(user)}`);
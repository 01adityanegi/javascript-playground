// Create a student object with a nested address object and print the city.
let student = {
    name : "Sujal",
    address :{
            state : "Himachal",
            city : "Almora",
            village :"Khola",
            
    },
    age : 22
}
console.log(student.address.city)

// Change the state inside a student's nested address object.

console.log(student.address.state)
student.address.state = "Uttarakhand"
console.log(`State name change into : ${student.address.state}`)

// Add a pincode property inside the nested address object.
student.address.pincode = 263623;
console.log(student.address.pincode);
console.log(Object.assign(student.address , { pincode: 263623 }))

// Delete the city property from a nested address object.

delete student.address.city
console.log(Object.entries(student))

// Create a nested company → employee → name object and print the employee's name.
let companyData ={
    company :{
        employee :{
            name : "Rahul"
    }
    }
}
console.log(companyData.company.employee.name)

// Create a user → contact → phone nested object and change the phone number.
let userData = {
    user : {
        contact : {
            phoneNo : 9876543210
        }
    }
}
userData.user.contact.phoneNo = 9987654321
console.log(userData.user.contact.phoneNo)
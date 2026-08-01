// type conversion 
score = "55"
console.log(typeof score) //the type of score is sting because it is in "" (double quots)
//now change into number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber) //the string change in to a number . this is type conversion . 


// Convert "100" into a number.

let val = "100"
console.log(val)
console.log(typeof (val))
let val_into_num = Number(val)
console.log(typeof val_into_num)

//Convert "3.14" into a number.
let val2 = "3.14"
console.log(val2)
console.log(typeof (val2))
let val_into_num2 = Number(val2)
console.log(typeof val_into_num2)

//Convert "25abc" into a number.
let val3 = "25abc"
console.log(val3)
console.log(typeof val3)
let val3_into_num = Number(val3)
console.log(typeof val3_into_num)
console.log(val3_into_num) // the string value change into number but the output come NaN (not a number).

//Convert 25 into a string.
let value = 25
console.log(typeof value)
let value_into_str = String(value)
console.log(typeof value_into_str)
console.log(value_into_str) // the output come 25 but the value change into sting . 

//Convert -99 into a string.
let value2 = -99
console.log(value2)
console.log(typeof value2)
let value2_into_str = String(value2)
console.log(value2_into_str)
console.log(typeof value2_into_str)

//Convert true into a number.

let booleanValue = true 
console.log(booleanValue)
console.log(typeof booleanValue)
let booleanValue_into_num = Number(booleanValue)
console.log(booleanValue_into_num)
console.log(typeof booleanValue_into_num) // the boolean true change into 1 as a number . 

//Convert 0 into a boolean.
let val4 = 0
console.log(val4)
console.log(typeof val4)
let val4_into_bool = Boolean(val4)
console.log(val4_into_bool)
console.log(typeof val4_into_bool) //the 0 change into flase . 

//Convert "Hello" into a boolean.

let word = "Hello"
console.log(word)
console.log(typeof word)

let word_into_bool = Boolean(word)
console.log(word_into_bool)
console.log(typeof word_into_bool)
//the word hello change into boolean 1 value 


//Convert " " into a boolean.
let space = ""
console.log(space)
console.log(typeof space)
let space_into_bool = Boolean(space)
console.log(space_into_bool)
console.log(typeof space_into_bool) //the vale of "" is false in boolean .

//Convert null into a number.
let value3 = null
console.log(value3)
console.log(typeof value3)

let value3_into_num = Number(value3)
console.log(value3_into_num)
console.log(typeof value3_into_num) //the null change into 0 as a number . 
let value3_into_bool = Boolean(value3)
console.log(value3_into_bool)
console.log(typeof value3_into_bool) //the null change into boolen is false . 
let value3_into_str = String(value3)
console.log(value3_into_str)
console.log(typeof value3_into_str)

// let value3_into_biN = BigInt(value3)
// console.log(value3_into_biN)
// console.log(typeof value3_into_biN)
//giving error 

//Convert undefined into a string.
let val_un = undefined
console.log(val_un)
console.log(typeof val_un) 

let value_into_string = String(val_un)
console.log(value_into_string)
console.log(typeof value_into_string) 
//change into number 
let value_into_number = Number(val_un)
console.log(value_into_number)
console.log(typeof value_into_number) // undefined => nan

let value_into_boolean = Boolean(val_un)
console.log(value_into_boolean)
console.log(typeof value_into_boolean)
//undefined => false

//Convert the BigInt into a string.

let bigNumber = 48403948n
console.log(bigNumber)
console.log(typeof bigNumber)

let bigNumber_change_str = String(bigNumber)
console.log(bigNumber_change_str)
console.log(typeof bigNumber_change_str)

let bigNumber_change_bool = Boolean(bigNumber)
console.log(bigNumber_change_bool)
console.log(typeof bigNumber_change_bool)
//BigInt => true


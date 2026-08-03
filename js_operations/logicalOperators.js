// ==========================================
// Logical Operators (&&, ||, !)
// Logical operators are used to combine or modify boolean values.
//
// && (AND) -> Returns true only if BOTH conditions are true.
// || (OR)  -> Returns true if AT LEAST ONE condition is true.
// ! (NOT)  -> Reverses a boolean value.
// ==========================================

// 1. Check if a user is logged in and email is verified.

const userLoggedIn = true;
const emailVerified = true;

console.log(userLoggedIn && emailVerified);
// Output: true
// && returns true only when both values are true.



// 2. Check if a student passed or has a grace mark.

const studentPassed = true;
const hasGraceMark = false;

console.log(studentPassed || hasGraceMark);
// Output: true
// || returns true because at least one condition is true.



// 3. Check if a website is online and the server is running.

const websiteOnline = false;
const serverRunning = true;

console.log(websiteOnline && serverRunning);
// Output: false
// Both conditions must be true for && to return true.



// 4. Check if a user is NOT an admin.

const isAdmin = false;

console.log(!isAdmin);
// Output: true
// ! reverses the boolean value.
// false becomes true.



// 5. Check if a person is eligible to vote and has an ID card.

const isEligibleToVote = true;
const hasIdCard = true;

console.log(isEligibleToVote && hasIdCard);
// Output: true
// Both conditions are true.



// 6. Check if either a mobile number or an email is provided.

const mobileNumberProvided = true;
const emailProvided = false;

console.log(mobileNumberProvided || emailProvided);
// Output: true
// At least one contact method is available.



// 7. Check if both username and password are entered.

const usernameEntered = true;
const passwordEntered = false;

console.log(usernameEntered && passwordEntered);
// Output: false
// Password has not been entered.



// 8. Check if a light is OFF using !.

const lightOn = false;

console.log(!lightOn);
// Output: true
// If the light is not ON, then it is OFF.



// 9. Check if both conditions are false.

const conditionOne = false;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
// Output: false
// false && false always returns false.



// 10. Check if at least one condition is true.

const firstCondition = true;
const secondCondition = false;

console.log(firstCondition || secondCondition);
// Output: true
// || returns true because one condition is true.



/*
==========================================
Summary
==========================================

&& (AND)
true  && true   -> true
true  && false  -> false
false && true   -> false
false && false  -> false

|| (OR)
true  || true   -> true
true  || false  -> true
false || true   -> true
false || false  -> false

! (NOT)
!true  -> false
!false -> true

Important Notes:
1. Use descriptive variable names.
2. Use const when the value does not change.
3. Avoid using 'this' as a boolean value.
4. && requires BOTH conditions to be true.
5. || requires AT LEAST ONE condition to be true.
6. ! reverses a boolean value.
*/
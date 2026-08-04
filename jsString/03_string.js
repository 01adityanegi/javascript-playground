// ============================================
// JavaScript String 
// ============================================

// Repeat the string "Hello " 5 times.
let word = "Hello ";
console.log(word.repeat(5));
// repeat(count) repeats the string the specified number of times.


// Convert "7" into "007" using padStart().
let value = "7";
console.log(value.padStart(3, "0"));
// padStart(targetLength, padString)
// Adds "0" at the beginning until the string length becomes 3.


// Convert "7" into "700" using padEnd().
console.log(value.padEnd(3, "0"));
// padEnd(targetLength, padString)
// Adds "0" at the end until the string length becomes 3.


// Check whether "OpenAI" contains "AI".
let aiCompany = "OpenAI GPT";
console.log(aiCompany.includes("AI"));
// includes(searchValue)
// Returns true if the specified text exists in the string, otherwise false.


// Extract "Developer" from "Frontend Developer".
let developer = "Frontend Developer";
console.log(developer.slice(9));
// slice(startIndex, endIndex)
// Extracts part of a string.
// "Developer" starts at index 9, so slice(9) returns everything from index 9 onward.


// Replace "blue" with "red" in "My car is blue".
let sentence = "My car is blue";
console.log(sentence.replace("blue", "red"));
// replace(oldValue, newValue)
// Replaces only the FIRST matching value.


// Split "I love JavaScript" into an array of words.
let sentenceIntoArray = "I love JavaScript";
console.log(sentenceIntoArray.split(" "));
// split(separator)
// Splits the string wherever it finds the separator.
// Here, it splits on spaces and returns an array.


// Count the number of characters in "OpenAI GPT".
console.log(aiCompany.length);
// length is a PROPERTY, not a method.
// It counts every character, including spaces.


// Print the second character of "Computer".
let wordTwo = "Computer";
console.log(wordTwo.at(1));
// at(index)
// Returns the character at the given index.
// Index 1 is the second character because indexing starts from 0.


// Print the second-last character of "Computer" using .at().
console.log(wordTwo.at(-2));
// Negative indexes start from the end.
// -1 = last character
// -2 = second-last character
// 1. Create a string variable named name and store your name in it. Print it.
let name = "Aadi"; // String variable
console.log(name);

// 2. Create a string "JavaScript" and print its length.
let langName = "JavaScript";
console.log(langName.length); // .length returns the total number of characters in the string.

// 3. Print the first character of "Programming".
let lang = "Programming";
console.log(lang[0]); // Strings use zero-based indexing, so index 0 is the first character.

// 4. Print the last character of "Programming".
console.log(lang[lang.length - 1]); // Best practice: always use length - 1 instead of a fixed index.

// 5. Convert "javascript" into uppercase.
console.log(langName.toUpperCase()); // Converts all characters to uppercase: "JAVASCRIPT"

// 6. Convert "JAVASCRIPT" into lowercase.
console.log(langName.toLowerCase()); // Converts all characters to lowercase: "javascript"

// 7. Remove extra spaces from " Hello World ".
let word = "  Hello World  ";

console.log(word);
console.log(word.trim()); // Removes whitespace from the beginning and end of the string.

// 8. Check whether "JavaScript" contains "Script".
console.log(langName.includes("Script")); // Returns true if "Script" exists in the string, otherwise false.

// 9. Check whether "JavaScript" starts with "Java".
console.log(langName.startsWith("Java")); // Returns true if the string starts with "Java".

// 10. Check whether "JavaScript" ends with "Script".
console.log(langName.endsWith("Script")); // Returns true if the string ends with "Script".
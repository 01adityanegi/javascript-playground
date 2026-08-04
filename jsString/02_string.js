// 11. Find the first index of "a" in "banana".
let fruitName = "banana";
console.log(fruitName.indexOf("a")); // 1

// 12. Find the last index of "a" in "banana".
console.log(fruitName.lastIndexOf("a")); // 5

// 13. Extract "Script" from "JavaScript".
let langName = "JavaScript";
console.log(langName.slice(4)); // "Script"

// 14. Extract "Java" from "JavaScript".
console.log(langName.slice(0, 4)); // "Java"

// 15. Replace "Java" with "Python" in "I love Java".
let myLanguage = "I love Java";
console.log(myLanguage.replace("Java", "Python")); // "I love Python"

// 16. Replace every "cat" with "dog" in "cat cat cat".
let sentence = "cat cat cat the cat have four legs, the cat have two eyes. cat cat cat";

console.log(sentence.replace("cat", "dog")); // Replaces only the first "cat"
console.log(sentence.replaceAll("cat", "dog")); // Replaces every "cat"

// 17. Split "apple,banana,mango" into an array.
const fruitsName = "apple,banana,mango";
console.log(fruitsName.split(",")); // ["apple", "banana", "mango"]

// 18. Join "Hello" and " World" into one string.
const firstWord = "Hello";
const secondWord = " World";

console.log(firstWord.concat(secondWord)); // "Hello World"

// 19. Print the character at index 5 in "JavaScript".
console.log(langName.charAt(5)); // "c"
// OR
console.log(langName[5]); // "c"

// 20. Print the last character of "JavaScript" using .at().
console.log(langName.at(-1)); // "t"
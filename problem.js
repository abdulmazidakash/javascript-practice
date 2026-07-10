// Problem 1: Swap Two Variables [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// let a = 5;
// let b = 10;

// // [a, b] = [b, a];

// let c = a;
// b = c;
// a = b;

// console.log(a, b);


// function swap(a, b){
//     [a, b] = [a, b];
//     return [a, b];
// };

// console.log(swap(1, 3))

// Problem 2: Check Even or Odd [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4 → Output: trueInput: 7 → Output: false
// Hint: Use the modulus (%) operator.

// let num = 4;

// if(num % 2 === 0){
//    console.log('true')
// }else{
//     console.log('false');
// };

// const checkEvenOrOdd = (n) =>{
//     if(n % 2 === 0){
//         return true;
//     }return false;
// };

// console.log(checkEvenOrOdd(4));
// console.log(checkEvenOrOdd(5));

// Problem 3: Find the Largest of Three Numbers [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5 → Output: 7
// Hint: Use Math.max() or if-else conditions.

// const largest = (a, b, c) =>{
//     return Math.max(a, b, c);
// };

// console.log(largest(3, 7, 5));

// let a= 5;
// let b = 10;

// let c = a;
// a= b;
// b=c;

// console.log(a, b);

// Problem 4: Celsius to Fahrenheit [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0 → Output: 32 Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32;

// const celsiusToFahrenheit = (celsius) =>{
//     const c = (celsius * 9/5) + 32;
//     return c;
// };

// console.log(celsiusToFahrenheit(0))

// const celsiusToFahrenheit = (celsius) =>{
//     return (celsius * 9/5) + 32;
// };

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));

// Problem 5: Check Positive, Negative or Zero [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of
// n.
// Example:
// Input: -5 → Output: 'negative'Input: 0
// → Output: 'zero'
// Hint: Use if-else if-else statements.

// const checkSign = (n) => {
//     // if(n > 0){
//     //     return "positive";
//     // }else if(n < 0){
//     //     return "negative";
//     // }else{
//     //     return "zero";
//     // }

//     return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
// };

// console.log(checkSign(10));
// console.log(checkSign(-4));
// console.log(checkSign(0));
// console.log(checkSign(-0))

// Problem 8: Check Palindrome [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and
// backwards.
// Example:
// Input: 'racecar' → Output: trueInput: 'hello'
// → Output: false
// Hint: Compare the string to its reverse.

// const isPalindrome = (str) =>{
//     const actual = str.toLowerCase();
//     return actual === str.split("").reverse().join("");
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));


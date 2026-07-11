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


// Problem 6: Reverse a String [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'
// → Output: 'olleh'Input: 'world'
// → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').


// const reverseString = (str) =>{
//     // return str.split("").reverse().join("");
//     const separateStr = str.split("");
//     const reverse = separateStr.reverse();
//     const joinStr = reverse.join("");
//     console.log(joinStr)
// };

// console.log(reverseString("hello"))

// Problem 7: Count Vowels in a String [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in
// a string.
// Example:
// Input: 'hello'
// → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

// const countVowels = (str) =>{
//     const count = str.toLowerCase().match(/[aeiou]/g);
//     // return count;
//     return count ? count.length : 0;
// };
// console.log(countVowels("str"))
// console.log(countVowels("hello"));
// console.log(countVowels("javascript"));

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


// Problem 9: Capitalize First Letter of Each Word [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world' → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

// const titleCase = (str) =>{
//     return str.split(" ").map(w=> w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
// };

// console.log(titleCase("hello world"));

// const titleCase = (str) =>{
//     const separateStr = str.split(" ");
//     const mapStr = separateStr.map(w => w.charAt().toUpperCase() + w.slice(1));
//     const joinStr = mapStr.join(" ");
//     console.log(joinStr);
// };

// console.log(titleCase("hello world"));

// Problem 10: Count Occurrences of a Character [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a
// string.
// Example:
// Input: 'banana', 'a' → Output: 3
// Hint: Use split(char).length - 1 or a loop

// const countChar = (str, char) =>{
//     const charStr = str.split(char).length - 1;
//     return charStr;
// };

// console.log(countChar("banana", "a"));

// const countChar = (str, char) =>{
//  let count = 0;

//  for(const currentLetter of str){
//     if(currentLetter === char){
//         count++;
//     }
//  }

//  return count;
// };

// const countChar = (str, char) =>{
//     const charStr = str.split(char);
//     const charLength = charStr.length -1;

//     console.log(charLength);
// }

// console.log(countChar("banana", "a"))


// Problem 9: Capitalize First Letter of Each Word [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world' → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

// const titleCase = (str) =>{
//     const capitalizesWord = str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
//     return capitalizesWord;
// };

// console.log(titleCase("hello world"));
// console.log(titleCase("bangladesh"));

// Problem 10: Count Occurrences of a Character [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a
// string.
// Example:
// Input: 'banana', 'a' → Output: 3
// Hint: Use split(char).length - 1 or a loop.

// const countChar = (str, char)=> {
//     const countCharacter = str.split(char).length - 1;
//     return countCharacter;
// };

// const countChar = (str, char) =>{
//     let count = 0;

//     for(const currentLetter of str){
//         console.log(`for loop: current letter: ${currentLetter}, string: ${str}`);
//         if(currentLetter === char){
//             console.log(`if else: current letter: ${currentLetter}, string: ${str}, current character: ${char}`);
//             count++;

//             console.log(`count: ${count}`);
//         }
//     };

//     return count;
// }


// console.log(countChar("banana", "a"));
// console.log(countChar("i love bangladesh", "a"));

// Problem 11: Find the Sum of an Array [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5] → Output: 15
// Hint: Use reduce() or a for loop.

// const sumArray = (arr) =>{
//     // const result = arr.reduce((acc, cur) => acc + cur, 0);
//     // return result;
//     let count = 0;

//     for(let num of arr){
//         console.log(`number: ${num} arr: ${arr}`)
//       count += num; 
//     }

//     return count;
// };

// console.log(sumArray([1, 2, 3, 4, 5]))


// Problem 12: Find Maximum Value in Array [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using
// Math.max().
// Example:
// Input: [3, 1, 7, 2, 9] → Output: 9
// Hint: Loop through and track the largest value found.

// const findMax = (arr) =>{
//     // const maximum = Math.max(...arr);
//     // return maximum;
//     let max = arr[0];

//     for(const num of arr){
//         // console.log(num)
//         if(num > max){
//             max = num;
//         }
//     };
// ``
//     return max;
// };

// console.log(findMax([3, 1, 7, 2, 9] ))

// Problem 13: Remove Duplicates from Array [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values
// removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4] → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().


// const removeDuplicates = (arr) => {
//     // const duplicate = [...new Set(arr)];
//     const uniqueArray = arr.filter((item, index)=>{
//         return arr.indexOf(item) === index;
//     });

//     return uniqueArray;


// };

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// Problem 28: Promise Chain [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then
// chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() =>
// console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

// const delay = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// };

// delay(1000)
//     .then(() => {
//         console.log('1 sec');
//         return delay(2000);
//     })
//     .then(() => {
//         console.log('2 sec')
//     });

// const delay = (ms) =>{
//     return new Promise((resolve)=>{
//         setTimeout(resolve, ms);
//     });
// };

// delay(1000)
//     .then(()=>{
//         console.log('1 sec');
//        return delay(2000);
//     })
//     .then(()=>{
//         console.log('2 sec');
//     })


// const delay = (ms) => {
//     return new Promise(res =>{
//         setTimeout(res, ms);
//     })
// };

// const delayTime = async()=>{
//     await delay(1000);
//     console.log('1 sec');


//     await delay(2000);
//     console.log('2 sec')
// };

// delayTime();

// setTimeout(() => {
//     console.log('3 sec delay')
// }, 3000);

// Problem 27: Merge Arrays with Spread [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them
// into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

// const mergeArrays = (...arrays)=>{
//     // return [...arrays.flat()];
//     const reduceArray = arrays.reduce((acc, cur) => acc.concat(cur), []);
//     return reduceArray;
// };

// console.log(mergeArrays([1,2], [3,4], [5]));

// Problem 26: Destructure and Rename [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming
// firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara',
// lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

// const user = {firstName:'Sara', lastName:'Khan', age:25};

// const {firstName: name, lastName, age} = user;

// console.log(name);
// console.log(lastName);
// console.log(age);

// Problem 29: Async/Await Fetch Simulation [Medium]
// Page 8 of 15JavaScript Problem Set
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a
// Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

// const getUserData = async(id) =>{
//     await new Promise((res)=>{
//        return setTimeout(res, 500)
//     });

//     return { id: id, name: "Test User"};
// };


// (async()=>{
//     console.log('fetching user data');
//     const user = await getUserData(1);
//     console.log(user)
// })();

// Problem 30: Optional Chaining & Nullish Coalescing [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value
// using optional chaining (?.) and provide a default using nullish coalescing (??).
// Example:
// const user = {profile: null};const city = user?.profile?.address?.city ??
// 'Unknown';// Output: 'Unknown'
// Hint: Chain ?. for each level; use ?? for the fallback.

// const getUserCity = (user) => {
//     return user?.profile?.address?.city ?? "Unknown";
// };

// const userA = { profile: null };
// console.log(getUserCity(userA));

// const userB = { profile: { name: "alice" } };
// console.log(getUserCity(userB));

// const userC = {
//     profile: {
//         address: { city: 'Dhaka' }
//     }
// };
// console.log(getUserCity(userC));

// const sumArray = (arr) =>{
//     return arr.reduce((acc, cur)=> acc + cur, 0);
// };

// console.log(sumArray([6, 3, 0, 0, 5, 3, 9]))


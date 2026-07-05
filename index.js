// // console.log('index js')
// let ans = Number(prompt('What is your age?'));

// if(isNaN(ans)){
//     console.log('wrong number')
// }else if(ans <= 18){
//     console.log('you can not vote')
// }else{
//     console.log('you can vote')
// }

// let amount = Number(prompt("what is the final amount ?"));

// let dis = 0;

// if (amount > 5000 && amount <= 7000) {
//     dis = 5;
// } else if (amount > 7001 && amount <= 9000) {
//     dis = 10;
// } else if (amount > 9000) {
//     dis = 15;
// };

// console.log(amount - Math.floor((amount * dis / 100)));


// const getRndomNumber = (min, max) =>{
//     return Math.floor(Math.random() * (max - min + 1)) + min;;
// }

// console.log(getRndomNumber(1, 6));

// const getNumber = (min, max) =>{
//     return Math.floor(Math.random() * (max-min + 1)) + min;
// };

// console.log(getNumber(11, 20))

// const friends = ['satyarth','akash', 'slhil', 'setyarth', 'satyam', 'sotyarth' ];

// console.log(friends.sort());

// const roll_Numbers = [1, 3,6, 8, 3, 4, 5, 6, 2];

// console.log(roll_Numbers.sort(function(a, b){
//     return b - a;
// }));

// const leafYear = year =>{
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         console.log(year + ' is a leaf year');
//     }else{
//         console.log(year + ' is not a leaf year');
//     }
// };

// leafYear(2026);
// leafYear(2028);
// leafYear(2024);
// leafYear(2020);
// leafYear(1900);
// leafYear(2000);

const vowels1 = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];

// const countVowels1 = str =>{
//     let count = 0;

//     letters = Array.from(str);

//     letters.forEach(letter =>{
//         if(vowels1.includes(letter)){
//             count ++;
//         }
//     });
//     return count;
// };


// console.log(countVowels1('I love Bangladesh'));

// const countVowels2 = str =>{
//     let count = 0;
//     letters = str.split('');

//     for(let i = 0; i < letters.length; i++){
//         if(vowels1.includes(letters[i])){
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countVowels2('I love Bangladesh'));

// const countVowels3 = str =>{
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels1.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countVowels3('I love Bangladesh'));


// const countVowels4 = str =>{
//     let count = 0;
//     letters = str.split('');

//     letters.forEach(letter =>{
//         if(vowels1.includes(letter)){
//             count++;
//         }
//     });

//     return count;
// };

// console.log(countVowels4('I love Bangladesh'));

//duplicates in array ========================

// const numbers = [1, 2, 2, 2,3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6];

// // const duplicates = numbers.filter(function(value, index, array) {
// //     return array.indexOf(value) !== index;
// // });

// // console.log(duplicates);
// const duplicates = [...new Set(numbers.filter((item, index)=> numbers.indexOf(item) !== index))];

// console.log(duplicates)

// const numbers = [1, 2, 2, 2,3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6];

// // const noDuplicates = [...new Set(numbers)];

// const noDuplicates = (array) =>{
//     const uniqueArray = [];

//     for(const number of array){
//         if(!uniqueArray.includes(number)){
//             uniqueArray.push(number);
//         }
//     };

//     return uniqueArray;
// }

// console.log(noDuplicates(numbers))

// const sentence1 = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// const matches = sentence1.match(/sumit/gi);
// // console.log(matches)
// const occurrences = matches ? matches.length : 0;
// // console.log(`The word "sumit" occurs ${occurrences} times in the sentence.`);

// let position = sentence1.search(/sumitS/i);
// // console.log(`The word "sumit" is found at position ${position} in the sentence.`);

// position = position >= 0 ? position : "not found";
// console.log(`The word "sumit" is found at position ${position} in the sentence.`);


// linear search

// const linearSearch = (array, value) =>{
//     let length = array.length;

//     for(let i = 0; i < length; i++){
//         if(array[i] === value){
//             return i;
//         }
//     };

//     return 'not found!';
// };

// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));


//longest word in a sentence

// const longestWord = names =>{
//     let longest = '';

//     for(const name of names){
//         // console.log(name)
//         if(name.length > longest.length){
//             longest = name;
//         }
//     }
//     return [longest, names.indexOf(longest), longest.length];
// };

//  console.log(longestWord(['Abdul Mazid Akash', 'Sumit Saha', 'learn With Sumit', 'Bangladesh', 'satyam', 'sotyarth']));

// const fizzBuzz = n =>{
//     for(let i = 1; i <= n; i++){
//         if(i % 15 === 0){
//             console.log('FizzBuzz');
//         }else if(i % 3 === 0){
//             console.log('Fizz');
//         }else if(i % 5 === 0){
//             console.log('Buzz');
//         }else{
//             console.log(i);
//         }
//     }
// };

// fizzBuzz(100);

// const mixedArr = [
//     "lws",
//     undefined,
//     "learn With Sumit",
//     false,
//     "",
//     "apple",
//     40,
//     "k",
//     true,
//     "Thanks all",
//     NaN
// ];

// const trueArray = mixedArr.filter(item => Boolean(item));
// const trueArray = mixedArr.filter(function(el){
//     if(el){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.table(trueArray);


// Object থেকে falsy value কিভাবে খুঁজে বের করে বাদ দিতে পারি ?
// const obj = {
//     a: "lws",
//     b: undefined,
//     c: "learn With Sumit",
//     d: false,
//     e: "",
//     f: "apple",
//     g: 40,
//     h: "k",
//     i: true,
//     j: "Thanks all",
//     k: NaN,
// };

// const truthyObject = function(obj) {
//     for(let i in obj){
//         if(!obj[i]) {
//             delete obj[i];
//         }
//     }
//     return obj;
// };

// const truthyObject = obj =>{
//     for(let key in obj){
//         if(!obj[key]){
//             delete obj[key];
//         }
//     }
//     return obj;
// }

// console.log(truthyObject(obj));

// const reverseString = (str) =>{
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("hello"));


// const reverseString = (str) =>{
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("Akash"));

// const reverseString = (str) =>{
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("Shakib"));

// const reverseString = (str) =>{
//     const individualString = str.split("");
//     const reverseIndividualString = individualString.reverse();
//     const joinString = reverseIndividualString.join("");

//     return joinString;
// };

// let reverse = "";

// for(let i = 0; i > )

// console.log(reverseString("Bangladesh"));

// const highestNumber = (arr) =>{
//     return Math.max(...arr);
// };


// console.log(highestNumber([2, 4,5, 6, 7]))

// const countVowels = (str) =>{
//     const m = str.toLowerCase().match(/[aeiou]/g);
//     return m ? m.length : 0;
// };

// console.log(countVowels('Bangladesh'));
// // console.log(countVowels('javascript')); // 3

// const countVowels = (str) =>{
//     const matchVowels = str.toLowerCase().match(/[aeiou]/g);
//     if(matchVowels){
//         return matchVowels.length;
//     }
//     return 0;
// };

// const countVowels = (str) =>{
//     const matchVowels = str.toLowerCase().match(/[aeiou]/g);
//     return matchVowels ? matchVowels.length : 0;
// }

// console.log(countVowels("xyz"))

// const isPalindrome = (str) =>{
//     const s = str.toLowerCase();
//     return s === s.split("").reverse().join("");
// };

// const isPalindrome = (str) =>{
//     const parameterString = str.toLowerCase();
//     const reverseString = str.split("").reverse().join("");

//     if(parameterString === reverseString){
//        return console.log("This is Palindrome")
//     }else{
//        return console.log("This is not palindrome");
//     }
// }

// const isPalindrome = (str) =>{
//     const parameterString = str.toLowerCase();
//     return parameterString === str.split("").reverse().join("");
// }
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("akash"))



// const fizzBuzz = (n) =>{
//     for(let i = 1; i <= n; i++){
//         if(i % 15 === 0){
//             console.log("fizzbuzz")
//         }else if(i % 3 === 0){
//             console.log("Fizz")
//         }else if(i % 5 === 0){
//             console.log("Buzz");
//         }else{
//             console.log(i)
//         }
//     }
// };

// fizzBuzz(20)

// const sumOfArray = (arr) =>{
//     return arr.reduce((acc, cur) => acc + cur, 0)
// };


// console.log(sumOfArray([1, 3, 4, 5]))

// const sumOfArray = (arr) =>{
//     return arr.reduce((acc, cur)=> acc + cur,0);
// };

// console.log(sumOfArray([3, 5, 3]))

// const removeDuplicate = (arr) =>{
//     return [...new Set(arr)]
// };


// console.log(removeDuplicate([1, 1,1, 3, 4, 4, 2, 5, 6]));

// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("Akash"));

// const removeDuplicate = (arr) =>{
//     return [...new Set(arr)];
// }

// console.log(removeDuplicate([1, 3, 3, 3, 1, 1, 2, 4, 5]))


// const flattenArray = (arr) =>{
//     return arr.flat();
// };

// console.log(flattenArray([13, 53, 23, [3,4], [43, 3]]))

// const capitalizeWords = (str) =>{
//     return str.split(" ")
//     .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// };

// console.log(capitalizeWords("i love bangladesh"))

// const capitalizeWords = (str) =>{
//     return str.split(" ")
//     .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// };

// console.log(capitalizeWords("i love bangladesh"));

// const fibonacci = (n) =>{
//     const fib = [0, 1];
    
//     for(let i = 2; i < n; i++){
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }

//     return fib.slice(0, n)
// };

// console.log(fibonacci(7))

// const fibonacci = (n) =>{
//     const fib = [0, 1];

//     for(let i = 2; i < n; i++){
//         fib.push(fib[i -1] + fib[i - 2]);
//     }
//     return fib.slice(0, n);
// };
// // console.log(fibonacci(5))
// // console.log(fibonacci(0))
// console.log(fibonacci(3))

// const capitalizeWords = (str) =>{
//     return str.split(" ")
//     .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// };

// console.log(capitalizeWords("i love bangladesh"))

// const reverseString = (str) =>{
//     return str.split(" ").reverse().join(" ");
// };

// console.log(reverseString("i love bangladesh"))

// const findMissing = (arr) =>{
//     const missingNumber = arr.length + 1;
//     const expected = (missingNumber * (missingNumber + 1)) / 2;
//     const actual = arr.reduce((a, b)=> a + b, 0);

//     return expected - actual;
// };


// console.log(findMissing([1, 2, 3, 4, 5, 7, 10]))

// Input: a = 5, b = 10Output: a = 10, b = 5

// let a = 5;
// let b = 10;

// let c = a;

// a = b;
// b = c;

// console.log(a, b)

// Input: 4 → Output: trueInput: 7 → Output: false

// const evenOrOdd = (n) =>{
//     if(n % 2 === 0){
//        return console.log(`${n} number is even`);
//     }
//     return console.log(`${n} number is odd`);
// };

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(7));

// const findMax = (...n) =>{
//     return Math.max(...n);
// };

// console.log(findMax(3, 7, 5))

// Input: 0
// → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

// const celciusToFahrenheit = (celcius) =>{
//     const fahrenheit = (celcius * 9/5) + 32;
//     return fahrenheit;
// };

// console.log(celciusToFahrenheit(0))
// console.log(celciusToFahrenheit(100));

// Input: 'hello'
// → Output: 'olleh'Input: 'world'
// → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

// const reverseString = (str) =>{
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("hello"));
// console.log(reverseString("world"));

// Example:
// Input: 'hello'
// → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

// const countVowels = (str) =>{
//     const count = str.toLowerCase().match(/[aeiou]/g);
//     return count ? count.length : 0;
// };

// console.log(countVowels("javascript"));
// console.log(countVowels("hello"));


// Example:
// Input: 'racecar' → Output: trueInput: 'hello'
// → Output: false
// Hint: Compare the string to its reverse.

// const isPalindrome = (str) =>{
//     const stringCase = str.toLowerCase();

//     // return stringCase === str.split("").reverse().join("");
//     if(stringCase === str.split("").reverse().join("")){
//         return true;
//     }
//     return false;
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome('hello'))

// Example:
// Input: 'hello world' → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

// const capitalizeWords = (str) =>{
//     return str.split(" ")
//     .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// };

// console.log(capitalizeWords("hello world"))

// Example:
// Input: [1, 2, 3, 4, 5] → Output: 15
// Hint: Use reduce() or a for loop.

// const sumOfArray = (n) =>{
//     return n.reduce((acc, cur)=> acc + cur, 0)
// };

// console.log(sumOfArray([2, 34, ,45]))
// console.log(sumOfArray([1, 3, 4]))

// Input: [3, 1, 7, 2, 9] → Output: 9
// Hint: Loop through and track the largest value found.

// const findMax = (n) =>{
//     return Math.max(...n);
// };

// console.log(findMax([3, 1, 7, 2, 9]))

// const findMax = (arr) =>{
//     let max = arr[0];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     };
//     return max;
// };

// console.log(findMax([3, 1, 7, 2, 9]))

// Input: [1, 2, 2, 3, 3, 4] → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

// const removeDuplicate = (arr) =>{
//     return [...new Set(arr)];
// };


// console.log(removeDuplicate([1, 2, 2, 3, 3, 4]))

// const removeDuplicate = (arr) =>{
//     return arr.filter((item, index)=>{
//         return arr.indexOf(item) === index;
//     })
// };

// console.log(removeDuplicate([1, 2, 2, 3, 3, 4]))

// Example:
// Input: [1, [2, 3], [4, 5]] → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

const flattenArray = (arr) =>{
    return arr.flat();
};

console.log(flattenArray([1, [2, 3], [4, 5]]))
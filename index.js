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

const sentence1 = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches = sentence1.match(/sumit/gi);
// console.log(matches)
const occurrences = matches ? matches.length : 0;
// console.log(`The word "sumit" occurs ${occurrences} times in the sentence.`);

let position = sentence1.search(/sumitS/i);
// console.log(`The word "sumit" is found at position ${position} in the sentence.`);

position = position >= 0 ? position : "not found";
console.log(`The word "sumit" is found at position ${position} in the sentence.`);


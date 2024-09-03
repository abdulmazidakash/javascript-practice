//for-fo.js
// const numbers = [12, 21, 12, 1233, 243];

// console.log(numbers);

// for (const num of numbers){
// 	console.log(num);
// }

// const fruits = ['banana', 'apple', 'pineapple', 'watermelon', 'jackfruit'];

// for (const fruit of fruits){
// 	// console.log(fruit);
// 	console.log('i want to eat', fruit);
// }

// -----------------------------------------
// while.js 
// const number = 7;
// if (number < 10) {
// 	console.log('choto ekta number paisi');
// }
// console.log('something  new is cooking');


// let num = 0;

// while ( num < 5) {
// 	console.log('loooping', num);
// 	// num  = num + 1;
// 	// num  += 1; 
// 	num++;
// }

// let num  = 1;
// let sum = 0;

// while (num <= 10){
// 	console.log(num);
// 	sum = sum + num;
// 	console.log('sum; ', sum);
// 	num++;
// }

// let num = 1;
// let sum = 0;

// while (num <=  5) {
// 	console.log(num);
// 	sum = sum + num;
// 	console.log('sum:  ', sum);
// 	num++;
// }

// even.js 
// let num = 1;
// while (num <= 10) {
// 	console.log(num);

// 	if (num % 2 ===  0){
// 		console.log('even num', num);
// 	}
// 	num++;
// }

// let num  = 10;
// while (num < 20) {
// 	console.log(num);

// 	if (num % 2 === 1){
// 		console.log('odd number', num);
// 	}
// 	num++;
// }

// let num = 11;
// let sum = 0;

// while (num < 50) {
// 	console.log(num);
// 	sum = sum + num;
// 	console.log('sum:', sum);
// 	num++;
// }

// let num = 50;
// let sum = 0;

// while ( num < 100) {
// 	console.log(num);
// 	sum = sum + num;
// 	console.log('sum:', sum);
// 	num++;
// }

// let num = 1;
// while ( num <= 10){
// 	console.log(num);
// 	num--;
// }

// for (let i = 1; i < 10; i += 2){
// 	console.log(i);
// }

// for (let i = 1; i < 100; i -= 3)  {
// 	console.log('odd number', i);
// }

// let sum = 0;
// for (let i = 11; i <= 20; i++) {
// 	sum = sum + i;
// 	// console.log(sum);
// }
// console.log('sum of numbers from 11 to 20 is', sum);

// for (let n = 10; n >= 0; n--) {
// 	console.log(n);
// }

// for (let i = 1; i <=  30; i++){
// 	if (i % 5 === 0){
// 		console.log(i);
// 	}
// }

// for (let i =  1; i <= 30; i++)  {
// 	if (i % 3  === 0 || i  % 5 === 0){
// 		console.log(i);
// 	}
// }


// for (let i =  1; i <= 30; i++)  {
// 	if (i % 3  === 0 && i  % 5 === 0){
// 		console.log(i);
// 	}
// }


// module 20 practice string and object ---------------------------------
// const country = 'bangladesh';
// const division = 'dhaka';
// const district = 'feni';
// const thana = 'sonagazi';

// const thana = new String ('akash');
// console.log(typeof thana);

// const numbers = [12, 22, 32, 42, 42, 53, 653, 53];
// console.log(numbers);
// numbers[1] = '44';
// console.log(numbers);

// const capital = 'dhaka';
// console.log(capital);
// capital[0] = 'F';

// console.log(capital);
// console.log(capital.length);
// console.log(capital.toUpperCase());
// console.log(capital.toLowerCase());
// console.log(capital.toLocaleLowerCase);
// console.log(capital[1]);
// console.log(capital.split('a'));

// const school = 'RAJ UK Uttara model school';

// console.log(school);

// const subject = 'Chemistry';
// const book = 'chemistry';

// if (subject.toLowerCase() === book.toLowerCase()) {
// 	console.log('i am reading book aibar porikkhai patai felmu');
// }
// else {
// 	console.log('hudai hudai prista ultai ar bat khawar jonno');
// }

// const drink = 'water';
// const liquid = '  water';

// if (drink.trim() === liquid.trim()) {
// 	console.log('pani er opor nam life');
// }
// else {
// 	console.log('somodrer pani khaite pari na');
// }

const name = 'akash';
const name1 = 'AKash';

if (name.toUpperCase() === name1.toUpperCase()) {
	console.log('My name is Akash');
}
else {
	console.log('My name is akash');
}



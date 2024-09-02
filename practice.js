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


for (let i =  1; i <= 30; i++)  {
	if (i % 3  === 0 && i  % 5 === 0){
		console.log(i);
	}
}
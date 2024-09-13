console.log('Akash');

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

// const name = 'akash';
// const name1 = 'AKash';

// if (name.toUpperCase() === name1.toUpperCase()) {
// 	console.log('My name is Akash');
// }
// else {
// 	console.log('My name is akash');
// }

// let name = 'Akash';
// let greeting = `Hello, ${name}!`;  // "Hello, Abdul!"

// console.log(greeting);

// let text = "Hello, world!";
// console.log(text.indexOf('Hello'));  // Output: 7

// const address = 'andorkilla';
// const part = address.slice(2,6);

// console.log(part);

// const sentence = 'I am a good and hardworking person';
// console.log(sentence.split('a'));

// const friendsStr = ['rahim,kahim,dahim,lahim,fahim,sahim'];
// const friends = friendsStr.split(',');
// console.log(friends);
// console.log(friendsStr.join('|'));

// const realFriend = [ 'rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
// console.log(realFriend.join());
// console.log(realFriend.join('|'));
// console.log(realFriend.join('-'));

// const first = 'Abid';
// const last = 'Navid';

// const fullName = first + last ;
// console.log(fullName);
// const fullName1 = first + ' ' + last;
// console.log(fullName1);
// const fullName2 = first.concat(' ').concat(last);
// console.log(fullName2);


//includes 
// console.log(last.includes('x'));

// const sentence = 'I am learning web deb.';


// let reverse = '';
// for (const letter of sentence) {
// 	// console.log(letter);
// 	reverse = letter + reverse;
// }
// console.log(reverse);

// const sentence = 'I am learning web dev ';

// let rev = '';
// for (let i = 0; i < sentence.length; i++) {

	// console.log(i);
	// console.log(sentence[i]);
// 	const letter = sentence[i];
// 	rev = letter + rev;
// }
// console.log(rev);

// const reversed = sentence.split('').reverse().join('');
// console.log(reversed);

// const word = 'I am Abdul Mazid Akash';

// let rev = '';
// for (const sentence of word) {
// 	rev = sentence+ rev;
	// console.log(word.length);
// }
// console.log(rev);

// const sentence =  'I am learning Web dev';

// let rev = '';

// for (let i = 0; i <= sentence.length; i++) {
// 	const word = sentence[i];
// 	rev = word + rev;
// }
// console.log(rev);

// const person = {
// 	name: 'Akash',
// 	profession:  'web dev',
// 	salary: 000,
// 	married: false,
// 	'fav places': ['bandorbon', 'saintmartin', 'kuakata']

// }

// console.log(person);
// person.salary = 30000;

// console.log(person);
// person['age'] = 26;
// person['fav places'] = ['maldives', 'bali', 'pataya'];
// console.log(person);

// ---------------------------------------------
// module 17---------------

// let car = 'red';
// console.log(car);

// car = 'green';
// console.log(car);

// let orangePrice = 40;
// let applePrice  = 40;

// console.log(orangePrice + applePrice);

// let num = 50 / 0;
// console.log(num);
// + = Addition 
// -  = substraction
// *  = Multiplication
// ** = Exponentiation
// / = Division 
// % = Modulus 

// let onionPrice = 40;
// let applePrice = 40;

// console.log(onionPrice % applePrice);

// let num = .1;
// let num1 = .2;
// let total = num+num1 ;

// console.log(total.toFixed(2));

// const a = 4 - 'hello';
// console.log(a);
// const b = 4 / 0;
// console.log(b);

// let x = '10';
// let num = Number(x);
// console.log(num);

// let x = '10.99';
// let num = parseInt(x);
// console.log(num);

// let x = '10.99';
// let num = parseFloat(x);
// console.log(num);

// const a = isNaN(9);
// console.log(a);

// const a = isNaN(4 - 'hello');
// console.log(a);

// module 18 ---------------------------------------
// ----------------------------------------

// console.log(isNaN(123));

// console.log(Number.MAX_VALUE);

// let age = 20;

// if (age > 18) {
// 	console.log('you can go mela');
// }
// else if (age > 13) {
// 	console.log('you can go some ride');
// }
// else{
// 	console.log('sorry, your request not accepted');
// }

// const salary = 25000;
// const isBCS = true;

// if (salary > 20000){
// 	console.log('su------patro');
// }else{
// 	console.log('onno patro khuji');
// }

// const price = 6000;

// if (price >= 5000) {
// 	// 10 % discount
// 	const discount = price * 10  / 100 ;
// 	const payAmount = price - discount;
// 	console.log(payAmount);
// }
// else if (price > 2500){
// 	//5 % discount
// 	const discount = price * 5 / 100;
// 	const payAmount = price - discount;
// 	console.log(payAmount);
// }
// else{
// 	console.log(price);
// }

// const age = 40;
// const isStudent = true;
// const price = 800;

// if (age < 10) {
// 	console.log('you can eat for free');
// }
// else if (isStudent) {
// 	//50 % discount 
// 	const discount = price * 50 / 100;
// 	const payAmount = price - discount;
// 	console.log(payAmount);
// }

// else{
// 	console.log(price);
// }

// const money = 20;
// if (money > 300) {
// 	console.log('bro you are rich!!!');
// }
// else{
// 	if(money > 100) {
// 		console.log('tui gorib o na boro lok o na');
// 	}
// 	else{
// 		if(money > 0){
// 			console.log('dosto tui kola kha.calcium bara');
// 		}
// 		else{
// 			console.log('tui amar bondo na');
// 		}
// 	}
// }

// const age =  12;
// if (age >= 18) {
// 	console.log('you can vote');
// }else{
// 	console.log('ghumai thako');
// }

// age >= 18 ? console.log('vote dio') : console.log('ghumai thako');

// let price = 500;
// const isLeader = true;

// if (isLeader  === true) {
// 	price = 0;
// }
// else {
// 	price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;

// if (isLeader === true)  {
// 	if (price > 1000) {
// 		price = price / 2 ;
// 	}
// 	else {
// 		price = 0;
// 	}
// }
// else {
// 	price = price + 1000;
// }

// price = 2000;
// price = isLeader === true ? 0 : price + 1000;
// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;

// console.log(price);

// let age = 18;
// let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote);

// const isLeader = true;
// if (isLeader) {
// 	console.log('leader ashce ! chair  charo');
// }else{
// 	console.log('vitore dukte divi na');
// }

// const isPassed = true;
// if (!isPassed){
// 	console.log('toke biya diya dimu');
// }else{
// 	console.log('tumi amader noyon er moni');
// }

// let age = 80; 
// let isStudent = true; 
// let price = 800; 


// if (age < 10) {
//   console.log('ticket free');
// } else if (isStudent) {
//   //50 % discount 
//  const discount = price * 50 / 100;
//  const payAmount = price - discount;
//  console.log(payAmount);

// } else if (age >= 60) {
//   //15 % discount 
//   const discount = price * 15 / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }


// let numbers = [12, 12, 243, 453, 53, 34];
// console.log(numbers);
// console.log(numbers[3]);

// const fourth = numbers[4];
// console.log(fourth);
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers.indexOf(243));

// let numbers = [12, 12, 243, 453, 53, 34];

// console.log(numbers);
// numbers.push(44);
// console.log(numbers);

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// friends.push('khailam');
// console.log(friends);

// const out1 = friends.pop();
// console.log(friends);
// const out2 = friends.pop();
// console.log(friends);
// console.log(out1, out2);


// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.unshift('ghumailam');
// console.log(friends);

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// console.log(friends.includes('balam'));

// if (friends.includes('salam')){
// 	console.log('party');
// }
// else {
// 	console.log('no food .we are fasting');
// }

// const numbers = [12, 23, 42, 53, 35, 35];

// console.log(numbers);

// for (const num  of numbers) {
// 	console.log(num);
// }

// const fruits = ['mango', 'apple', 'orange',  'banana', 'pineapple'];

// for (const fruit of fruits) {
// 	console.log(fruit);
// 	console.log('I want to eat');
// }

//loop-------------------------------
// const number = 7;
// if (number < 1){
// 	console.log('choto ekta number paisi');
// }
// else{
// 	console.log('something is new cooking');
// }

// while loop-----------------------
// const num = 0;
// while (num  < 5){
// 	// console.log('looooooping');
// }

// let num = 0;
// while(num < 5) {
// 	console.log('looooping', num);
// 	// num = num + 1;
// 	//num += 1;
// 	num++;
// }

// let num = 1;
// // let sum = 0;

// while (num <= 10) {
// 	console.log(num);
// 	// sum = sum + num;
// 	// console.log('sum:', sum);
// 	if (num % 2  === 0){
// 		console.log('even number', num);
// 	}

// 	num++;
// }

// for (let num = 0; num < 5; num++) {
// 	console.log(num);
// }

// for (let i = 1;  i <= 50; i+=2){
// 	console.log(i);
// }


// let sum = 0; 

// for (let i = 1; i  < 11; i++) {
// 	sum = sum + i;
// 	console.log(sum, i);

// }
// console.log('sum of numbers from 1 to 20 is ', sum);

// for (let i = 1; i <= 30; i++) {
// 	if (i % 5 === 0 && i % 3  === 0){
// 		console.log(i);
// 	}
// }

// let sum = 0;
// for (let i  = 1; i <= 20 ; i++) {
// 	if (i % 3 === 0) {
// 		console.log(i);
// 		sum = sum + i;
// 		console.log('sum:', sum);
// 	}
// }
// console.log('total of the numbers', sum);

// for (let i = 0; i < 15; i++) {
// 	console.log(i);
// 	if (i >= 10){
// 		break;
// 	}
// }
// let n = 54;
// while (n > 25) {
// 	console.log(n);
// 	if (n < 50){
// 		break;
// 	}
// 	n--;
// }

// for (let i = 1; i < 10; i++) {
// 	if (i % 2 === 1)  {
// 		continue;
// 	}
// 	console.log(i);
// }

// let n = 0;

// while (n < 50) {
// 	n++;
// 	if (n % 5 !==0){
// 		continue;
// 	}
// 	console.log(n);
// }

// let n =  0;

// do{
// 	console.log(n);
// 	n++;
// }
// while( n < 5)



//fundamental of function module - 21 practice start -----------------------
// function sum (x, y) {
// 	const result = x + y;
// 	return result;
// }

// const total =  sum (5, 4);
// console.log(total);

// function num (a, b) {
// 	const result = a + b;
// 	return result;
// }

// const total1 = num  (4, 5);
// console.log(total1);

// function fanOfKor() {
// 	console.log('bosa theke uthe dara');
// 	console.log('fan ta bondo kor');
// 	console.log('hand wash kor');
// 	console.log('jorina');
// }

// fanOfKor();

// function square (number) {
// 	console.log('value of the number is: ', number);
// 	const borgo = number * number * number ;
// 	console.log('value of the given square parameter is: ', borgo);
// }

// square(4);

// function sum (a, b, c, d) {
// 	console.log('value of the number is', a, b, c, d);
// 	const result = a + b + c + d;
// 	console.log('value of the number sum: ', result);

// }

// sum (2, 3, 4, 4);


// function remove (a, b, c, d) {
// 	console.log('value of the number is: ', a, b, c, d);
// 	const total = a - b - c - d;
// 	console.log('value of the remove number is: ', total);

// }

// remove (2, 3, 4, 5);

// function multiply  (num1, num2) {
// 	const final = num1 * num2;
// 	console.log('value of the multiply number: ', final);

// }

// multiply (3, 4);

// function divide (i, j){
// 	const divi = i / j;
// 	console.log('value of the divide number: ', divi);


// }
// divide (2, 3);

// function doubleIt (number) {
// 	const doubled = number * 2;
// 	console.log(number, doubled);
// }

// console.log('I will call the function');
// doubleIt(15);

// function difference (num1, num2) {
// 	const diff = num1 - num2;
// 	console.log(num1, num2, 'difference is',diff);
// }

// const fatherAge = 40;
// const myAge = 10;

// difference (fatherAge, myAge)

// function add (j, k) {
// 	const result =  j + k;
// 	// return result;
// 	console.log(result);
// }

// // const abs = add (2, 3);
// // console.log(abs);

// add(2, 3);

// function add (price1, price2) {
// 	const total = price1 + price2;
// 	return total;
// }

// const bill = add(5, 80);
// console.log(bill);

// function add2 (price1, price2) {
// 	return price1 + price2;
// }

// const bill2 = add2 (5, 80);
// console.log(bill2);

// function doMath (num1, num2) {
// 	const sum = num1 + num2;
// 	const diff = num1 - num2;
// 	const multiply = sum * diff;
// 	const result = multiply / 2;
// 	return result;

// }

// const result = doMath (14, 12);
// console.log(result);

// function isEven(number) {
// 	if (number % 2 !== 0){
// 		return true;
// 	}
// 	else  {
// 		return false;
// 	}
// }

// console.log(isEven(5));
// console.log(isEven(10));


// function evenSizedString (str) {
// 	const size = str.length;
// 	console.log(str, size);

// 	if (size % 2 === 0){
// 		console.log('even size');
// 		return true;
// 	}
// 	else {
// 		console.log('odd size');
// 		return false;
// 	}
// }

// evenSizedString('dhaka');
// evenSizedString('faka');

// function doubleOrTriple (number, doDouble) {
// 	if (doDouble === true) {
// 		const result = number * 2;
// 		return result;
// 	}
// 	else {
// 		const result = number * 3;
// 		return result;
// 	}
// }
// console.log(doubleOrTriple(4, true));
// console.log(doubleOrTriple(4, false));

// function numberOfElements (numbers) {
// 	const len = numbers.length;
// 	return len;
// }

// numberOfElements([23, 2, 23, 42, 245]);

// function sumOfNumbers (numbers) {
// 	let sum = 0;
// 	for (const number of numbers) {
// 		console.log(number);
// 		sum = sum + number;
// 	}
// 	return sum;
// }

// const numbs = [2, 3, 5, 3];
// const sum = sumOfNumbers(numbs);
// console.log('sum of numbers is ', sum);

// function evenNumbersOnly (numbers) {
// 	const evens = [];
// 	for (const number of numbers){
// 		if (number % 2 === 0){
// 			console.log(number);
// 			evens.push(number);
// 		}
// 	}
// 	return  evens;
// }

// const number1 = [2, 3, 6, 4];
// const result1 = evenNumbersOnly(number1);
// console.log(result1);

// function sumOfNumbers  (numbers) {
// 	let sum = 0;
// 	for (const number of numbers) {
// 		console.log(number);
// 		sum = sum + number;

// 	}
// 	return sum;

// }

// const number = [2, 43, 4];
// const sum = sumOfNumbers(number);
// console.log('sum of the number is ', sum);


//probling solving part 1

// function isLeafYear(year) {
// 	if (year % 4 === 0) {
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

// const isLipi = isLeafYear(2052);
// console.log(isLipi);


// function isLeafYear2 (year) {
// 	if (year % 100 !== 0 && year % 4 === 0){
// 		return true;
// 	}
// 	else if (year % 400 === 0){
// 		return true;
// 	}
// 	else{
// 		return false
// 	}
// }

// const islipi2 = isLeafYear2(2100);
// const islipi3 = isLeafYear2(2400);
// const islipi4 = isLeafYear2(1900);
// const islipi5 = isLeafYear2(2052);


// console.log(islipi2, islipi3, islipi4, islipi5);

// function oddAverage(numbers) {
// 	let odds = [];
// 	for (const number of  numbers){
// 		if (number % 2  === 1){
// 			number.push(odds)
// 		}
		
// 	}
// }

// const numbers = [2, 3, 3, 4, 5, 43, 33, 22, 21, 45,  32];
// const avg = oddAverage(numbers);
// console.log('odd average number: ', avg);

// function oddAverage (numbers) {
// 	let odds = [];
// 	for(const number of numbers) {
// 		if (number % 2 === 1){
// 			console.log(number);
// 			odds.push(number)
// 		}
// 	}

// 	let sum = 0;
// 	for (const number of odds) {
// 		sum = sum + number;

// 	}
// 	const count = odds.length;
// 	console.log(sum, count);
// 	const avg = sum / count;
// 	return avg;
// }
// const array = [5, 34, 45, 23, 42, 53, 56];
// const avg = oddAverage(array);
// console.log('odd average number', avg);


// function evenAverage (numbers) {
// 	let evens = [];
// 	for (const number of numbers){
// 		if (number % 2 === 0){
// 			evens.push(number);
// 			console.log(number);
// 		}
// 	}
// 	let sum = 0;
// 	for (const number of evens){
// 		sum = sum + number;

// 	}
// 	const count = evens.length;
// 	console.log(sum, count);
// 	const avg = sum / count;
// 	return avg;
// }

// const array = [2, 43, 45, 32, 42, 53, 56];
// const avg = evenAverage(array);
// console.log('even number of the array average: ', avg);

//---------------------------

// function noDuplicate (name){
// 	console.log(name);
// 	let doubled = [];
// 	for (const item of name){
// 		if (doubled === true){
// 			doubled.pop(item);
// 		}
// 	}
// 	return doubled;
// }

// const numbers = [1, 3, 4, 5, 6, 2, 4, 3, 4];
// const duplicate = noDuplicate(numbers);
// console.log('duplicate number find', duplicate);

// let x = 5;
// let y = 7;

// console.log(x, y);

// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);

// const date = new Date('2024-03-18');
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getTime());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getTimezoneOffset());
// console.log(date.toLocaleString('en-GB'));
// console.log(date.toLocaleDateString('en-GB'));
// console.log(date.toDateString('en-GB'));
// console.log(date.toUTCString('en-GB'));

// console.log(Math.random());

// function getRandomNumber (){
// 	let result = Math.floor(Math.random() * 11 + 10);
// 	return result;
// }

// console.log(getRandomNumber());

// function evenAverage(numbers) {
// 	let evens = [];
// 	for (const number of numbers){
// 		// console.log(number);
// 		if (number % 2 === 0){
// 			console.log(evens);
// 			evens.push(number);
// 		}
// 	}

// 	let sum = 0;
// 	for (let number of evens){
// 		sum = sum + number;
// 	}

// 	const count = evens.length;
// 	console.log(sum, evens);
// 	const avg = sum / count;
// 	return avg;
// }

// const array = [2, 43, 45, 65, 65, 44, 32, 12];
// const avg = evenAverage(array);
// console.log('even average number: ', avg);



//  function getRandomNumber (){
// 		let result = Math.floor(Math.random() * 11 + 10);
// 		return result;
// 	}
	
// 	console.log(getRandomNumber());

// console.log((Math.random() * 11));

// function countVowels (str) {
	// let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O',  'U'];

// 	let count = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (vowels.includes(str[i])) {
// 		  count++;
// 		}
// 	  }
// 	return count;
// }

// const result = countVowels('hello world bangladesh');
// console.log(result);

// function countVowels (str) {
// 	let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O',  'U'];

// 	let count = 0;
// 	for (let number of str){
// 		if (vowels.includes(number)){
// 			count++;
// 		}
// 	}
// 	return count;
// }

// const result = countVowels('Hello Bangladesh here');
// console.log(result);


// function findLongestWord (str) {
// 	let words = str.split(' ');
// 	let logestWord = '';
// 	for (let word of words) {
// 		if (word.length > logestWord.length){
// 			logestWord = word;
// 		}
// 	}
// 	return logestWord;
// }

// let sentence = 'I am learning programming to become a programmer';
// let longest = findLongestWord(sentence);
// console.log(longest);

//  const disha = 56;
//  const salman = 64;

//  if (disha > salman){
// 	console.log('disha will get the strawberry');
//  }
//  else{
// 	console.log('salman will get the strawberry');
//  }

// function getMax(num1, num2) {
// 	if (num1 > num2){
// 		return 'number one is big';
// 	}
// 	else{
// 		return 'number two is big';
// 	}
// }

// const max = getMax(54, 54);
// const max1 = getMax(54, 44);
// const result = getMax (max, max1)

// console.log('who is the boss: ', result);

// const jim = 45;
// const tim = 56;
// const kim = 54;

// if (jim > tim) {
// 	console.log('jim is the boss');
// }
// else if (tim > kim){
// 	console.log('tim is the boss');
// }
// else{
// 	console.log('kim is the boss');
// }


// function maxOfThree (num1, num2, num3){
// 	if (num1 > num2){
// 		return 'number one is big';
// 	}
// 	else if (num2 > num3){
// 		return 'number two is big';
// 	}
// 	else{
// 		return 'number three is big';
// 	}
// }

// const max = maxOfThree(23, 420, 45);
// console.log(max);

// const heights = [23, 34, 65, 66, 76, 87, 89];

// function getMax (numbers) {
// 	let max = numbers[0];
// 	for (const num of numbers){
// 		// console.log(num);
// 		if (num > max){
// 			max = num;
// 		}
// 	}
// 	return max;
// }

// const max = getMax(heights);
// console.log('Maximum number is: ', max);


// const heights = [23, 34, 65, 66, 76, 87, 89];

// function getMax(numbers){
// 	const min = numbers[0];
// 	for (const num of numbers){
// 		// console.log(num);
// 		if (num < min){
// 			min = num;
// 		}
// 	}
// 	return min;
// }

// const min = getMax(heights);
// console.log('Minimum heights is: ', min);

// const heights = Math.max(23, 34, 65, 66, 76, 87, 89);
// console.log(heights);


// function woodQuantity (chairQuantity, tableQuantity, bedQuantity) {
	
// 	const perChairWood = 3;
// 	const perTableWood = 10;
// 	const perBedWood = 50;

// 	const chairTotalWood = chairQuantity * perChairWood;
// 	const tableTotalWood = tableQuantity * perTableWood;
// 	const bedTotalWood = bedQuantity * perBedWood;

// 	const totalWood = chairTotalWood + tableTotalWood + bedTotalWood ;

// 	return totalWood;
// }

// const wood = woodQuantity(0, 0, 1);
// console.log(wood);

// function productQuantity (shirtQuantity, pantQuantity, shoeQuantity) {
	
// 	const shirtPrice = 500;
// 	const pantPrice = 300;
// 	const shoePrice = 900;

// 	const shirtTotalPrice = shirtQuantity * shirtPrice;
// 	const pantTotalPrice = pantQuantity * pantPrice;
// 	const shoeTotalPrice = shoeQuantity * shoePrice;

// 	const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

// 	return totalPrice;
// }

// const price = productQuantity(0, 0, 1);
// console.log('Total Price: ', price);


// const phones = [
// 	{ name: 'Samsung', price: 50000, camera: '12mp', color: 'Black'},
// 	{ name: 'Xiomi', price: 18000, camera: '12mp', color: 'Black'},
// 	{ name: 'Iphone', price: 100000, camera: '12mp', color: 'Black'},
// 	{ name: 'Oppo', price: 31000, camera: '12mp', color: 'Black'},
// 	{ name: 'Walton', price: 30000, camera: '12mp', color: 'Black'},
// 	{ name: 'HTC', price: 20000, camera: '12mp', color: 'Black'}
// ]

// function getCheapestPhone(phones){
// 	let min = phones[0];
// 	for (const phone of phones){
// 		if (phone.price < min.price){
// 			min = phone;
// 		}
// 	}
// 	return min;
// }

// function getRichPhone(phones) {
// 	let rich = phones[0];
// 	for (const phone of phones){
// 		if (phone.price > rich.price){
// 			rich = phone;
// 		}
// 	}
// 	return rich;
// }

// // const cheap = getCheapestPhone(phones);
// // console.log('Cheapest one is: ', cheap);


// const rich = getRichPhone(phones);
// console.log('Rich one is: ', rich);

// const products = [
// 	{ Name: 'Shampoo', price: 300, quantity: 1},
// 	{ Name: 'Chiruni', price: 100, quantity: 1},
// 	{ Name: 'Shirt', price: 700, quantity: 0},
// 	{ Name: 'Pant', price: 1200, quantity: 0}
// ]

// function productPrice (products) {
// 	let total = 0;
// 	for (const product of products){
// 		const thisItemCost = product.price * product.quantity;
// 		total = total + thisItemCost;

// 	}
// 	return total;
// }

// const price = productPrice(products);
// console.log(price);

//calculator create -------------------

// function add (num1, num2){
// 	return num1 + num2;
// }
// function multiply(num1, num2){
// 	return num1 * num2;
// }
// function subtract (num1, num2){
// 	return num1 - num2;
// }
// function divide(num1, num2){
// 	return num1 / num2;
// }

// function calculator(a, b, opertion) {
// 	if (opertion === 'add'){
// 		return add(a, b);
// 	}
// 	else if (opertion === 'multiply'){
// 		return multiply(a, b);
// 	}
// 	else if (opertion === 'subtract'){
// 		return subtract(a, b);
// 	}
// 	else if (opertion === 'divide'){
// 		return divide(a, b);
// 	}
// 	else{
// 		return "Only 'add', 'multiply', 'subtract', 'divide' operation is allowed"
// 	}
// }

// const calculate = calculator(4, 5, 'multiply');
// const calculate1 = calculator(4, 5, 'add');
// const calculate2 = calculator(4, 5, 'divide');
// const calculate3 = calculator(4, 5, 'subtract');
// console.log('Multiply: ', calculate);
// console.log('Add: ', calculate1);
// console.log('Divide: ', calculate2);
// console.log('Subtract: ', calculate3);


//typeof check------------------------

// function multiply (num1, num2){
// 	if(typeof num1 !== 'number' || typeof num2 !== 'number'){
// 		return 'please provide number'
// 	}
// 	return num1 * num2;
// }

// const multiply1 = multiply(2, "seven");
// console.log(multiply1);


// function multiply (num1, num2){
// 	if(typeof num1 !== 'string' || typeof num2 !== 'string'){
// 		return 'please provide string'
// 	}
// 	return num1 +" " +num2;
// }

// const multiply1 = multiply('Abdul', 6);
// console.log(multiply1);

// function getPrice (product){
// 	if (typeof product !== 'object'){
// 		return 'plese provide an object'
// 	}
// 	const price = product.price;
// 	return price;
// }

// // const price = getPrice({ name: 'chulkani dandi', price: 54, color: 'blue'});
// const price = getPrice(5);
// console.log(price);

// function getArray(array){
// 	if (Array.isArray(array) === false){
// 		return 'please provide an array';
// 	}
// 	return array[0];
// }

// // const second = getArray(54);
// const second = getArray([2,3,6,7])
// console.log(second);

// function calculateMoney (ticketSale) {
// 	if  (ticketSale < 0 || typeof ticketSale !== 'number'){
// 		return 'Invalid Number';
// 	}
// 	return (ticketSale * 120) - (500 + (8 * 50));
// }

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
// console.log(calculateMoney('ewtre'));

// function checkName(name){
// 	if (typeof name !== 'string'){
// 		return  'invalid';
// 	}
// 	let lastLetter = name.slice(-1).toLowerCase();
// 	// console.log(lastLetter);
// 	let result = false ;
// 	let checkArray = [ 'a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];

// 	for (let char of checkArray){
// 		// console.log(char);
// 		if (char === lastLetter){
// 			result = true;
// 		}
// 	}
// 	// let result = checkArray.includes(lastLetter);

// 	return  result ? 'Good Name' : 'Bad Name';


// }

// console.log(checkName('salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('jhankar'));
// console.log(checkName(199));
// console.log(checkName(['Rashed']));


// function getPrice(product){
// 	if (typeof product !== 'object'){
// 		return 'please provide an object';
// 	}
// 	return product.price;
// }

// // const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'black'});
// const price = getPrice(54);
// console.log(price);

// function checkArray (array){
// 	if (Array.isArray(array) === false){
// 		return 'please provide an array';
// 	}
// 	return array[2];
// }

// // const second = checkArray([2, 3, 4]);
// const second = checkArray(2);
// console.log(second);


// function deleteInvalids(array){
// 	if (Array.isArray(array) === false){
// 		return 'Invalid Array';
// 	}
// 	let numberArray = [];
// 	for (let element of array){
// 		// console.log(typeof element);
// 		if(typeof element === 'number' && isNaN(element) === false){
// 			// console.log(element);
// 			numberArray.push(element);
// 		}
// 	}
// 	return numberArray;

// }

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala'}]));
// console.log(deleteInvalids(['1', {num:2}, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({num:  [1, 2, 3]}));

// function password(obj){

// 	if (obj.siteName === undefined || obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length  !== 4){
// 		return 'Inavalid'
// 	}
// 	let firstletter = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
// 	let passwordString = firstletter + '#' + obj.name + obj.birthYear;
// 	return  passwordString;
// }

// console.log(password({name: 'kolimuddin', birthYear: 1999, siteName: 'Google'}));
// console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook'}));
// console.log(password({name: 'akash', birthYear: 199, siteName: 'Facebook'}));
// console.log(password({name: 'akash', birthYear: 1999}));


// const array = [2, 3, 4, 5, 6];
// console.log(array.slice(1));


// problem 5---------------------------------------

// function monthlySavings(arr, livingCost){

// 	if (Array.isArray(arr) === false){
// 		return 'invalid input';
// 	}
// 	let totalIncome = 0;
// 	for (let payment of arr){
// 		if(payment >= 3000){
// 			let tax = payment * 0.2;
// 			totalIncome += payment - tax;
// 		}else{
// 			totalIncome  += payment;
// 		}
// 	}

// 	let savings = totalIncome - livingCost;
// 	if (savings >= 0){
// 		return savings;
// 	}else{
// 		return 'earn more';
// 	}
// }

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([1000, 2000, 2500], 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings(100, [900, 2700, 3400]));

// function monthlySavings(arr, livingCost){

// 	let totalIncome = 0;
// 		for (let payment of arr){
// 			if(payment >= 3000){
// 				let tax = payment * 0.2;
// 				totalIncome += payment - tax;
// 			}else{
// 				totalIncome  += payment;
// 			}
// 		}
// 		return totalIncome;
// }

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));


// function monthlySavings(arr, livingCost){
// 	if(Array.isArray(arr) === false){
// 		return 'invalid input'
// 	}
// 	let totalIncome = 0;
// 	for (let payment of arr){
// 		if (payment >= 3000){
// 			let tax = payment * 0.2;
// 			totalIncome += payment - tax;
// 		}else{
// 			totalIncome += payment;
// 		}

// 	}
// 	let savings = totalIncome - livingCost;
// 	if (savings >= 0){
// 		return savings;
// 	}
// 	else{
// 		return 'earn more';
// 	}

// }

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));

// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));


// var x = null
// var x = NaN;
// var x = isNaN;
// var x = isFinite;
// var x = typeof;
// var x = Math.max;

// truthy value = true, 'hello', number
// falsy value = false, '', 0

// var x = "akash";
// x = x + 2;
// x +=2;

// var x = 6;

// console.log(isNaN(x));
// isRaining === true ? console.log('will not go outside') : console.log('will go outside');

// function noDuplicate(array){
//  let unique  = [];
//  for (const item of array){
// 	if (unique.includes(item) === false){
// 		unique.push(item);
// 	}

//  }
//  return unique;
// }



// const result = [2,4,5,7,6,3,2,4,5];
// console.log(noDuplicate(result));

//batch 10 assignment solution -------------------
//problem 1----------------------------------


// function calculateTax (income, expense){

// 	// if (0 <= income || 0 <= expense || expense > income ){
// 	// 	return "Invalid Input";
// 	// }
	
// 	const incomeAndCostDifference = income - expense;

// 	const tax = incomeAndCostDifference * 0.2;



// 	return tax;
	
// }

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500 ));

//after assignment practice js

// let fruits = ['mango', 'apple', 'orange', 'pineApple', 'jackFruit'];

// console.log(fruits);
// console.log(fruits.indexOf('apple'));

// // fruits[2] = 'jambura';
// const fruit = fruits[2];
// console.log(fruit);
// console.log(fruits);


// let destination = ['bandorban', 'cox bazar', 'rangamati'];

// let destination1 = ['sea beach', 'kua kata', 'jaflong'];

// let touristDestination = destination.concat(destination1);

// console.log(touristDestination);

// // console.log(destination.concat(destination1));

// touristDestination.pop();
// console.log(touristDestination);

// let books = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'MONGODB', 'BOOTSTRAP', 'TAILWIND CSS', 'DAISY UI'];

// console.log(books);
// console.log(books.includes('JAVASCRIPT'));

// let sports = ['football', 'cricket', 'badminton', 'tennis'];

// let numbers = [1, 2, 4, 5, 6];

// let type = [true, false, 'boolean', 'numbers', 3, 2];

// let blank = [];
// let null1 = (2, 4, 6);

// console.log(Array.isArray(sports));
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(type));
// console.log(Array.isArray(blank));
// console.log(Array.isArray(null1));

// let name = ['akash', 'noman', 'jeion', 'tuhin', 'toru', 'shakil', 'junaeid'];

// let name1 = ['robiul', 'kamrul', 'shawon', 'kawser', 'ovijit'];

// console.log(name.concat(name1));

// console.log(name.splice(2, 4));
// console.log(name1.slice(2, 4));

// console.log(name1.join(' | '));

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reversed = colors.reverse();
// console.log(reversed);
// console.log(colors.reverse());

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for  (let numbers = 0;  numbers % 2  === 0; numbers++){
// 	console.log(numbers);
// }

// console.log(numbers);

// console.log(colors.sort());

// for (let i = 0; i < colors.length; i++){
// 	console.log(i);
// 	console.log(colors[i]);
// }

// for (let i = colors.length - 1; i  >= 0; i--){
// 	console.log(i);
// 	console.log(colors[i]);
// }
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// let color_rev = [];
// for  (let color of colors){
// 	// color_rev.push(color);
// 	color_rev.unshift(color);
// 	// console.log(color);
// }

// console.log(color_rev);

// let num = 0;
// while(num < 5){
// 	console.log('Akash', num);
// 	num++;
// }

// for (let message = 1; message <= 60; message++){
// 	console.log('i will invest at least 6 hrs every single day for next 60 days', message);
// }
// let sum = 0;

// for (let odd = 61; odd <= 100; odd++){
// 	// console.log(odd);

// 	if (odd % 2 === 1){
// 		sum = sum + odd;
// 		console.log(sum,'odd number', odd);
// 	}
// }
// let sum = 0;
// for (let even = 78; even <= 98; even++){
// 	console.log(even);

// 	if (even % 2 === 0){
// 		console.log('even', even);
// 		sum = sum + even;
// 		// sum += even;
// 		console.log('sum', sum);
// 	}
// }

// let sum = 0;
// for (let odd = 91; odd <= 129; odd++){
// 	console.log(odd);

// 	if (odd % 2  === 1){
// 		console.log('odd number', odd);
// 		sum += odd;
// 		console.log('odd number sum', sum);
// 	}
// }

// let sum = 0;
// for (let even = 51; even <= 85; even++){
// 	console.log(even);

// 	if (even % 2 === 0){
// 		console.log('even number', even);
// 		sum += even;
// 		console.log('sum of even number', sum);
// 	}
// }

// let message = 1;
// while(message <= 60){
// 	console.log('I will invest at least 6 hrs every single day for next 60 days!', message);
// 	message++;
// }

// let sum = 0;
// let odd = 61;
// while(odd <= 100){
// 	// console.log(odd);
// 	odd ++;

// 	if (odd % 2 === 1){
// 		console.log('odd number', odd);
// 		sum += odd;
// 		console.log('sum odd number', sum);
// 	}

// }

// let n = 0;
// while(n < 15){
// 	n++;
// 	if (n % 5 !== 0){
// 		continue;
// 	}
// 	console.log(n);
// }


// let n = 0;
// do {
// 	console.log(n);
// 	n++
// }
// while(n < 5);

// for (let i = 1; i <= 200; i++){
// 	console.log(i);
// 	// if (i >= 101){
// 	// 	break;

// 	// }
// 	// console.log(i);
// }

let sentence = 'I am a wev developer';
// let reverse = '';
let rev = '';
// for (let letter of sentence){
// 	reverse = letter + reverse;

// }
// console.log(reverse);

// for (let i = 0; i < sentence.length; i++){
// 	// console.log(i);
// 	let letter = sentence[i];
// 	rev = letter + rev;
// }
// console.log(rev);

// let lang = 'bangla';

// function learn (topic){
// 	lang = topic;
// 	console.log(`I am learning ${topic}`);
// }

// learn('JavaScript');
// console.log(`I know ${lang}`);

// function loduRandom(){
// 	let result = Math.ceil(Math.random() * 6)
// 	return result;
// }

// console.log(loduRandom());


function isLeafYear(year){
	if ((year % 400  === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
		return `${year} is a leaf year`;
	}else{
		return `${year} is not a leaf year`;
	}
}

console.log(isLeafYear(2600));
console.log(isLeafYear(2800));
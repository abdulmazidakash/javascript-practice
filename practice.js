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


const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.unshift('ghumailam');
// console.log(friends);

console.log(friends.includes('balam'));

if (friends.includes('salam')){
	console.log('party');
}
else {
	console.log('no food .we are fasting');
}

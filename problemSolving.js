// //problem 1
// function calculateMoney(ticketSale) {
//  if (ticketSale < 0){
// 	return 'Invalid Number';
//  }

// //  return ( ticketSale * 120) - ( 500 + (8 * 50) );

// let result = ticketSale * 120 - (500 + (8 * 50));

// return result;

// }

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));


// //problem solving 2
// function checkName(name) {

// 	if (typeof name !== 'string'){
// 		return "Invalid";
// 	}

// 	let lastLetter = name[name.length -1].toLowerCase();
// 	// let lastLetter = name.slice(-1).toLowerCase();
// 	// console.log(lastLetter);
// 	let checkArray = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];

// 	// let result = false;

// 	for (let char of checkArray){
// 		// console.log(char);
		
// 		if (char === lastLetter){
// 			return 'Good Name';
// 		}
// 	}

// 	return 'Bad Name';

// 	// let result = checkArray.includes(lastLetter);

// 	// return result? 'Good Name': 'Bad Name';
// }

// // console.log(checkName('Salman'));
// // console.log(checkName('RAFEE'));
// // console.log(checkName('Jhankar'));
// // console.log(checkName(199));
// // console.log(checkName(["Rashed"]));
	

// //problem 2

// function checkName(name) {
// 	if (typeof name !== 'string'){
// 		return 'Invalid';
// 	}

// 	let lastLetter = name.slice(-1).toLowerCase();
// 	// console.log(lastLetter);

// 	let checkArray = ['a', 'y', 'i' ,'e' , 'o' ,'u', 'w'];

// 	for (let i = 0; i < checkArray.length; i++){
// 		// console.log(i);
// 		if (i === lastLetter){
// 			return 'Good Name';
// 		}
// 	}
// 	return 'Bad Name';

// 	// for (let char of checkArray){
// 	// 	// console.log(char);
// 	// 	if (char === lastLetter){
// 	// 		return 'Good Name';
// 	// 	}
// 	// }
// 	// return 'Bad Name';
// }

// // console.log(checkName('Salman'));
// // console.log(checkName('RAFEE'));
// // console.log(checkName('Jhankar'));
// // console.log(checkName(199));
// // console.log(checkName(["Rashed"]));

// function checkName(name) {
// 	if (typeof name !== 'string'){
// 		return 'Invalid';
// 	}

// 	let firstLetter = name[0].toLowerCase();
// 	// console.log(firstLetter);

// 	let checkArray = ['a', 'y', 'i' ,'e' , 'o' ,'u', 'w'];

// 	for (let char of checkArray){
// 		// console.log(char);
// 		if (char === firstLetter){
// 			return 'Good Name';
// 		}
// 	}
// 	return 'Bad Name';
// }

// console.log(checkName('Salman'));
// console.log(checkName('Akash'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

// //problem 03 
// function deleteInvalids(array) {

// 		if (!Array.isArray(array)){
// 			return 'Invalid Array';
// 		}

// 		let numberArray = [];
// 		for (let element of array){
// 			// console.log(element);
// 			if (typeof element === 'number' && !isNaN(element)){
// 				numberArray.push(element);
// 			}
// 		}
// 		return numberArray;
// }

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ] ));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ));

// //problem 4


// function password(obj) {


// 	if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
// 		return "invalid";
// 	}

// 	let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
	
// 	let result = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

// 	return result ;
// }

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 } ));


// //problem 5

// function monthlySavings(arr , livingCost) {

// 	if (!Array.isArray(arr) && typeof livingCost !== 'number'){
// 		return "Invalid Input";
// 	}
	
// 	let totalIncome = 0;
// 	for (let payment of arr){
// 		// console.log(payment);
// 		if (payment >= 3000){
// 			let  tax = payment * 0.2;
// 			totalIncome += payment - tax;
// 		}else{
// 			totalIncome += payment;
// 		}

// 	}

// 	let savings = totalIncome - livingCost;
// 	if (savings < 0){
// 		return 'earn more';
// 	}
// 	return savings;

// }
	

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
	

//problem solving part 1---------------------

//inch to feet

function inchToFeet (inch){
	// let feet = inch * 0.0833333;
	let feet = inch / 12;
	return feet;
}

// console.log(inchToFeet(75));

function inchToFeet2 (inch){
	let feetFraction = inch * 0.0833333;
	let feetNumber = parseInt(feetFraction);
	let inchRemaining = inch % 12;

	// return `${feetNumber} ft ${inchRemaining} inch`;

	// return feetNumber + ' ft ' + inchRemaining + ' inch';

	let result = feetNumber + " ft " + inchRemaining + ' inch';

	return result;
}

// let result = inchToFeet2(75);
// console.log(result);

//mile to km

function miltToKm(mile){
	let km = mile * 1.60934;
	return km;
}

// console.log(miltToKm(10));

function kmToMile(km){
	let mileFraction = km * 0.621371;
	let mileNumber = parseInt(mileFraction);
	let kmRemaining = km % 0.621371;

	return `${mileNumber} mile ${kmRemaining} km`;
}

// console.log(kmToMile(10));

//celsius to fahrenheit

function celsiusToFahrenheit(celsius){
	let fahrenheit =(celsius * 9 / 5) + 32;
	return fahrenheit;
}

// console.log(celsiusToFahrenheit());

function celsiusToKelvin(celsius){
	return celsius + 273.15;
}

// console.log(celsiusToKelvin(1));

//leap year check

function isLeapYear(year){
	if(year % 4 === 0){
		return `${year} is a leap year`;
	}else{
		return `${year} is not leap year`;
	}
}

// console.log(isLeapYear(2025));
// console.log(isLeapYear(2028));
// console.log(isLeapYear(2026));


function isLeapYear(year){
	if (year % 100 !== 0 && year % 4 === 0){
		return `${year} is a leap year1`;
	}
	else if (year % 400 === 0){
		return `${year} is a leap year`;
	}else{
		return `${year} is not a leap year`;
	}
}

// console.log(isLeapYear(2051));
// console.log(isLeapYear(2052));
// console.log(isLeapYear(2025));
// console.log(isLeapYear(2026));
// console.log(isLeapYear(2027));
// console.log(isLeapYear(2028));
// console.log(isLeapYear(2019));

function oddAverage(numbers){
	let odd = [];
	for (let num of numbers){
		// console.log(num);
		if (num % 2 === 1){
			odd.push(num);
		}
	}

	let sum = 0;
	for (let num of odd){
		sum = sum + num;
		// console.log(sum);
	}
	let count = odd.length;
	let avg = sum / count;

	return avg;
}

// console.log(oddAverage([42, 13, 58, 65, 81, 7, 105]));

function evenAverage(numbers){
	
	let even = [];
	for (let number of numbers){
		// console.log(number);
		if (number % 2 === 0){
			// console.log(number);
			even.push(number);
			
		}	
	}
	// console.log(even);
	let sum = 0;
	for (let number of even){
		// console.log(number);
		// sum = sum + number;
		sum += number;
		// console.log(sum);
	}
	
	let count = even.length;
	
	// console.log(sum, count);

	// let result = sum / count;
	// return `Even number average ${result}`;

	// return sum / count;

	return `Even number Average ${sum / count}`;

}

// console.log(evenAverage([2, 3, 4, 5, 10, 8]));

// duplicate name check 

function noDuplicateName(name){

	let unique = [];
	for (let item of name){
		// console.log(item);
		if (unique.includes(item) === false){
			unique.push(item);
			// console.log(unique);
		}

	}
	return unique;
}

// console.log(noDuplicateName(['abul', 'babul', 'cabul', 'dabul', 'abul', 'kabul', 'cabul', 'dabul']));

function noDuplicateNumbers(numbers){
	
	let uniqueNumbers = [];
	for (let item of numbers){
		// console.log(item);
		if (uniqueNumbers.includes(item)  === false){
			uniqueNumbers.push(item);
		}
	}
	return uniqueNumbers;
}

// console.log(noDuplicateNumbers([2, 4, 5, 65, 3, 4, 2, 4]));

// console.log(Math.);

function getRandomNumber() {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log("লটারি নম্বর:", getRandomNumber());


function selectRandomWinner(names) {
    // let randomIndex = Math.floor(Math.random() * names.length);
    // return names[randomIndex];

	return names[Math.floor(Math.random() * names.length)];
}

// let participants = ["Akash", "Rahim", "Karim", "Sujon", "Sadia"];
// console.log("লটারি বিজয়ী:", selectRandomWinner(["Akash", "Rahim", "Karim", "Sujon", "Sadia"]));

// console.log(Math.random);

function random(names){

	let randomIndex = Math.floor(Math.random() * names.length);

	return names[randomIndex];
}

// console.log('Lottary winner: ',random( ['Akash', 'Noman', 'Jeion', 'Tuhin', 'Junaeid']));

function  draw(names){
	
	// return names[Math.floor(Math.random() * names.length)];

	return `draw winner: ${names[Math.floor(Math.random() * names.length)]}`;
}

// console.log(draw(['Akash', 'Noman', 'Jeion', 'Tuhin']));
// console.log('draw winner;', draw(['Akash', 'Noman', 'Jeion', 'Tuhin']));

function random(numbers){
	let min = 10;
	// let max = 100;
	let max = 20;


	let result = Math.floor(Math.random() * (max - min + 1) + min);

	return result;
}

// console.log(random());

function raffleDraw(names){

	let random = Math.floor(Math.random() * names.length);

	return `Raffle Draw Winner: ${names[random]}`;
} 

// console.log(raffleDraw(['Akash', 'Noman', 'Tuhin', 'Jeion']));

// console.log(new Date);

// let x = 5;
// let y = 7;

// console.log(x, y);

// let temp = x;
// x = y;
// y = temp;

// console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

//problem solving task 1
function celsiusToFahrenheit(celsius){

	let fahrenheit = (celsius * 9/5) + 32;

	return fahrenheit;
	
}

// console.log(celsiusToFahrenheit(2));

// problem solving task 2

function duplicateCount(numbers, find){

	let duplicate = 0;

	for (let item of numbers){
		// console.log(item);

		if (item === find){
			duplicate++;

		}
	}
	return duplicate;
}

// console.log(duplicateCount([5,6,11,12,98, 5], 5));
// console.log(duplicateCount([5,6,11,12,98, 5], 25));


//problem task 5

function randomNumber(){

	let min = 11;
	let max = 20;

	let random = Math.floor(Math.random() * (max - min + 1) + min);

	return random;


}

// console.log(randomNumber());

function vowelCheck(string){

	let count = 0;
	let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	for(let item of string){
		// console.log(item);
		if (vowel.includes(item)){
			count++;
		}
	}
	return count;
}

// console.log(vowelCheck('I love Bangladesh'));


function findLongestWord(sentence){

	let words = sentence.split(' ');
	let longestWord = words[0];

	for (let word of words){
		// console.log(word);
		if (word.length > longestWord.length){
			longestWord = word;
		}
	}
	return longestWord;
}

// console.log(findLongestWord('I am learning Programming to become a programmer'));


//problem solving part 2

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){

	const perChairWood = 3;
	const perTableWood = 20;
	const perBedWood = 50;

	const chairTotalWood = chairQuantity * perChairWood;
	const tableTotalWood = tableQuantity * perTableWood;
	const bedTotalWood = bedQuantity * perBedWood;

	const totalWood = chairTotalWood + tableTotalWood + bedTotalWood ;

	return totalWood;
}

// console.log(woodQuantity(0,0,1));

//get max

function getMin(numbers){
	
	let min = numbers[0];
	for(let num of numbers){
		// console.log(num);

		if (num < min){
			min = num;
		}
	}
	return min;
}

// console.log(getMin([20000, 16000, 50000, 100000, 12000, 30000, 35000]));

function getMax(numbers){

	let max = numbers[0];
	for (let num of numbers){
		// console.log(num);

		if (num > max){
			max = num;
		}
	}
	return max;
}

// console.log(getMax([20000, 16000, 50000, 100000, 12000, 30000, 35000]));

//get cheapest phone 

// let phones = [
// 	{ name: 'xiomi', price: 18000, camera: '12mp', color: 'black'},
// 	{ name: 'Samsung', price: 50000, camera: '12mp', color: 'black'},
// 	{ name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
// 	{ name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
// 	{ name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
// 	{ name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
// ]

function getCheapestPhone(phones){

	let min = phones[0];
	for (let phone of phones){
		// console.log(phone);

		if (phone.price < min.price){
			min = phone;
		}
	}
	return min;
}

// const cheap = getCheapestPhone(phones);
// console.log('Cheapest phone: ', cheap);

// let products = [
// 	{ name: 'shanpoo', price: 200},
// 	{ name: 'chiruni', price: 50},
// 	{ name: 'shirt', price: 500},
// 	{ name: 'pant', price: 700}
// ]

function totalPrice(products){

	let total = 0;
	for (let product of products){
		total = total + product.price;
	}
	return total;
}

// let result = totalPrice(products);
// console.log(result);

let products = [
	{ name: 'shanpoo', price: 200, quantity: 4},
	{ name: 'chiruni', price: 50, quantity: 1},
	{ name: 'shirt', price: 500, quantity: 2},
	{ name: 'pant', price: 700, quantity: 2}
]
function shoppingTotal(products){

	let total = 0;
	for(let product of products){
		// console.log(product);
		let totalCost = product.price * product.quantity;

		total = total + totalCost;
	}
	return total;
}

// let result = shoppingTotal(products);
// console.log(result);

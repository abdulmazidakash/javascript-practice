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

console.log(evenAverage([2, 3, 4, 5, 10, 8]));

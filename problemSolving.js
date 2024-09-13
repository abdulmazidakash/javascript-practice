//problem 1
function calculateMoney(ticketSale) {
 if (ticketSale < 0){
	return 'Invalid Number';
 }

//  return ( ticketSale * 120) - ( 500 + (8 * 50) );

let result = ticketSale * 120 - (500 + (8 * 50));

return result;

}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));


//problem solving 2
function checkName(name) {

	if (typeof name !== 'string'){
		return "Invalid";
	}

	let lastLetter = name[name.length -1].toLowerCase();
	// let lastLetter = name.slice(-1).toLowerCase();
	// console.log(lastLetter);
	let checkArray = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];

	// let result = false;

	for (let char of checkArray){
		// console.log(char);
		
		if (char === lastLetter){
			return 'Good Name';
		}
	}

	return 'Bad Name';

	// let result = checkArray.includes(lastLetter);

	// return result? 'Good Name': 'Bad Name';
}

// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));
	

//problem 2

function checkName(name) {
	if (typeof name !== 'string'){
		return 'Invalid';
	}

	let lastLetter = name.slice(-1).toLowerCase();
	// console.log(lastLetter);

	let checkArray = ['a', 'y', 'i' ,'e' , 'o' ,'u', 'w'];

	for (let i = 0; i < checkArray.length; i++){
		// console.log(i);
		if (i === lastLetter){
			return 'Good Name';
		}
	}
	return 'Bad Name';

	// for (let char of checkArray){
	// 	// console.log(char);
	// 	if (char === lastLetter){
	// 		return 'Good Name';
	// 	}
	// }
	// return 'Bad Name';
}

// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

function checkName(name) {
	if (typeof name !== 'string'){
		return 'Invalid';
	}

	let firstLetter = name[0].toLowerCase();
	// console.log(firstLetter);

	let checkArray = ['a', 'y', 'i' ,'e' , 'o' ,'u', 'w'];

	for (let char of checkArray){
		// console.log(char);
		if (char === firstLetter){
			return 'Good Name';
		}
	}
	return 'Bad Name';
}

console.log(checkName('Salman'));
console.log(checkName('Akash'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

//problem 03 
function deleteInvalids(array) {

		if (!Array.isArray(array)){
			return 'Invalid Array';
		}

		let numberArray = [];
		for (let element of array){
			// console.log(element);
			if (typeof element === 'number' && !isNaN(element)){
				numberArray.push(element);
			}
		}
		return numberArray;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ] ));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ));

//problem 4


function password(obj) {


	if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
		return "invalid";
	}

	let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
	
	let result = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

	return result ;
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 } ));


//problem 5

function monthlySavings(arr , livingCost) {

	if (!Array.isArray(arr) && typeof livingCost !== 'number'){
		return "Invalid Input";
	}
	
	let totalIncome = 0;
	for (let payment of arr){
		// console.log(payment);
		if (payment >= 3000){
			let  tax = payment * 0.2;
			totalIncome += payment - tax;
		}else{
			totalIncome += payment;
		}

	}

	let savings = totalIncome - livingCost;
	if (savings < 0){
		return 'earn more';
	}
	return savings;

}
	

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ));
console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
	
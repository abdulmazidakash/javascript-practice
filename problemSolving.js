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

	let lastLetter = name.splice(-1);
	console.log(lastLetter);
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar '));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
	
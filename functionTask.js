//practice task 1: solution

// function multiply (a, b, c, d) {
// 	const fourPara = a * b * c * d;
// 	console.log(fourPara);
// }

// multiply(2,2,2,2);

// practice task 2: solution
// function multiplyOrDivide (number) {
// 	if (number % 2 === 0){
// 		const multiply = number * 2;
// 		return multiply;
// 	}
// 	else{
// 		const divide = number / 2;
// 		return divide;
// 	}
// }

// console.log(multiplyOrDivide(10));
// console.log(multiplyOrDivide(7));
// console.log(multiplyOrDivide(20));
// console.log(multiplyOrDivide(55));

//practice task 3: solution
function make_avg  (array) {
	// console.log(make_avg);
	let size = array.length;
	let sum = 0;
	for (let number of array){
		let sum = sum + number;
	}
	let average = sum / size;
	return average;

}

const num = [2, 3, 4, 3, 3];
const result = make_avg(num);
console.log(result);

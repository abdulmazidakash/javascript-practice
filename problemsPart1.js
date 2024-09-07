//celsius to fahrenheit convert ---------------
// function celsiusToFahrenheit (celsius) {
// 	const fahrenheit = celsius * 33.8;
// 	return fahrenheit;
// }

// const temperature = celsiusToFahrenheit(2);
// console.log(temperature);

// //task 2--------find duplicate ------------
// const numbers = [5,6,11,12,98,5];

// function noDuplicate (array) {
// 	let unique = [];
// 	for (const item of array) {
// 		if (unique.includes(55) === true){
// 			unique.push(item);

// 		}
// 	}
// 	const len = unique.length;
// 	console.log(len);
	
// 	return unique;
	
// }

// const uniqueArray = noDuplicate(numbers);
// console.log(uniqueArray);


// //highest word number find
// const max = Math.max('I am learning programming to become a programmer');
// console.log(max);


//task 3 ----------------------------------

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

//task 4 ----------------------------------

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

//task 5----------------------------------

// function getRandomNumber (){
// 	let result = Math.floor(Math.random() * 11 + 10);
// 	return result;
// }

// console.log(getRandomNumber());
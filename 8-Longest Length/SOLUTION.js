// SOLUTION 1
function myFunction(text) {
	let longestLength = 0;
	let strArray = text.split(' ');

	strArray.forEach( (word) => {
		longestLength = longestLength < word.length ? word.length : longestLength;
	});

	return longestLength;
	}
console.log(myFunction('I am a coding lov')); // 6
console.log(myFunction('I would like to work for helping')); // 7
console.log(myFunction("Ain't no fun if the homie don't code none")); // 5


// SOLUTION 2
function myFunction2(text) {

	let longestLength =
		text.split(' ').sort((word1, word2) => {
		return word1.length < word2.length;
	})[0].length;

	return longestLength;
}
console.log(myFunction2('I am a coding lov')); // 6
console.log(myFunction2('I would like to work for helping')); // 7
console.log(myFunction2("Ain't no fun if the homie don't code none")); // 5


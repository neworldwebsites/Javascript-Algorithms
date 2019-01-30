// SOLUTION 1
function myFunction(elem) { 
	const digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

		return digitArray.includes(elem);

	}
console.log(myFunction('1')); // true
console.log(myFunction('3')); // true
console.log(myFunction('d')); // false



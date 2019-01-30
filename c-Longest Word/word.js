function myFunction(text) { 
	let res = text.replace(/[\W_]/g, " ").split(' ');
	let largest = "";

	res.forEach((word) => {

		largest = word.length > largest.length ? word : largest;

	});

	return largest;
	}
console.log(myFunction('Ready, steady, go!')); // coding
console.log(myFunction('Ready[[[, steady, go!')); // steady
console.log(myFunction('ABCd')); // ABCd



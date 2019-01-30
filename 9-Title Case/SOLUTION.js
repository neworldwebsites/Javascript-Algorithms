function myFunction(text) {
	let res = text.split(" ");

	res = res.map((word) => {
		const firstLetter = word.charAt(0).toUpperCase();
		
		word = firstLetter.concat(word.slice(1, word.length));

		return word;
	});

	res = res.join(' ');

	return res;
	}
console.log(myFunction('I am a coding lov'));
// 'I Am A Coding Lov'
console.log(myFunction('I would like to work for helping'));
// 'I Would Like To Work For Helping'



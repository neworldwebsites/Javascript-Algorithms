// SOLUTION 1
function myFunction(num = int) {
	// start by the most exigeant condition
	if (num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz';
	} 
	else if (num % 3 === 0) {
		return 'fizz';
	}
	else if (num % 5 === 0) {
		return 'buzz';
	}
		return '';
} 
console.log(myFunction(3)); // fizz
console.log(myFunction(5)); // buzz 
console.log(myFunction(4)); // [empty string]
console.log(myFunction(15)); // fizzbuzz


// SOLUTION 2
function myFunction2(num = int) {
	let word = '';
	// for 15 both will be concat to word
	if (num % 3 === 0) {
		word = word.concat('fizz');
	}
	if (num % 5 === 0) {
		word = word.concat('buzz');
	} 
	return word;
}
console.log(myFunction2(3));
console.log(myFunction2(5));
console.log(myFunction2(4));
console.log(myFunction2(15));
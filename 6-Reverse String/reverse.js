// SOLUTION 1
function myFunction(word) {
	// 3 iterations !
	let res = word.split("").reverse().join("");

	return res;
} 
console.log(myFunction('codegod'));
console.log(myFunction('javascript'));


// SOLUTION 2
function myFunction2(word) {
	// 1 iteration only !
	let res = '';
	for (let i = word.length - 1; i >= 0; i--){
		// res = res.concat(word[i]);		
		res += word[i];
	}
	return res;
}
console.log(myFunction2('codegod')); // dogedoc
console.log(myFunction2('javascript')); // tpircsavaj

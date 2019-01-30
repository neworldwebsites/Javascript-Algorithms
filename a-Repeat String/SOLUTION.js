// SOLUTION 1
function myFunction(text, num) { 
	let res = '';

	while (num > 0) {
		// res = res.concat(text);
		res += text;
		num--;
	}
	
	return res;
	}
console.log(myFunction('codinglove', 2));
// 'codinglovecodinglove'
console.log(myFunction('google', 3));
// 'googlegooglegoogle'



// SOLUTION ES6
function myFunction2(text, num) {
	
	return text.repeat(num);

}
console.log(myFunction2('codinglove', 2));
// 'codinglovecodinglove'
console.log(myFunction2('google', 3));
// 'googlegooglegoogle'
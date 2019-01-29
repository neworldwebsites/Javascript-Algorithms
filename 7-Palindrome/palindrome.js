function myFunction(text) {

	let res = text.toLowerCase().replace(/[\W_]/g, "");
	let reveres = res.split("").reverse().join('');

	// if (res === reveres) {
	// 	return true;
	// }
	// return false;

	return res === reveres;
	
	}
console.log(myFunction('A man, aplan, a canal. Panama'));
console.log(myFunction('My age is 0, 0 si ega ym.'));
console.log(myFunction('codefun'));
console.log(myFunction('legendary'));
console.log(myFunction('.0_0(:/-\:)0-0'));


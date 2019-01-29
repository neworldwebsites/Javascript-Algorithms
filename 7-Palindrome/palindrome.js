function myFunction(text) {

	let res = text.toLowerCase().replace(/[\W_]/g, "");
	let reveres = res.split("").reverse().join('');

	return res === reveres;

	}
console.log(myFunction('A man, aplan, a canal. Panama')); // true
console.log(myFunction('My age is 0, 0 si ega ym.')); // true
console.log(myFunction('codefun')); // false
console.log(myFunction('legendary')); // false
console.log(myFunction('.0_0(:/-\:)0-0')); // true


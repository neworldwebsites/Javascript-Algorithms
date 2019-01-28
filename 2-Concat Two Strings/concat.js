function myFunction(first, last) {
	
	// let result = "Hi, my name is ".concat(first," ",last);

	let result = `Hi, my name is ${first} ${last}`; 
	return result;
}
console.log(myFunction('Gilius', 'Blanchard'));
console.log(myFunction('John', 'Brown'));

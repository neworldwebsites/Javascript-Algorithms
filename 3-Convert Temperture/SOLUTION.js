function myFunction(temp = int) {
	
	let result = temp * (9/5)+32; 
	return result;
} 
console.log(myFunction(30)); // 86
console.log(myFunction(-30)); // -22

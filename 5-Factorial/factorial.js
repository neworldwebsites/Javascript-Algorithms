
function myFunction(num = int) {
	let product = 1;
	for (let i = 2; i <= num; i++){
		 product *= i;	
	}
	return product;
} 
console.log(myFunction(5));
console.log(myFunction(4));
console.log(myFunction(0));
console.log(myFunction(10));


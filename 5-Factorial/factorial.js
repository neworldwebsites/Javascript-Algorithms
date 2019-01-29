
function myFunction(num = int) {
	let product = 1;
	for (let i = 2; i <= num; i++){
		 product *= i;	
	}
	return product;
} 
console.log(myFunction(5)); // 120
console.log(myFunction(4)); // 24
console.log(myFunction(0)); // 1
console.log(myFunction(10)); // 3628800


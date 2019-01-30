function myFunction(str) {

	str = str.match(/\d+/g) || [];
	let sum = 0;

	console.log(str);

	str.forEach((num) => {
		sum += Number(num);
	});
	return sum;
}
console.log(myFunction('2 apples, 12 oranges')); // 14
console.log(myFunction('123450')); // 123450
console.log(myFunction('Your payment method is invalid')); // 0

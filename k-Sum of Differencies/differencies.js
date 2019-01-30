function myFunction(numArr) {

	let min = Math.min(...numArr);
	let max = Math.max(...numArr);
	let sum = 0;

	for (let i = min; i <= max; i++){
		sum += i;
	}
	
	return sum;
}
console.log(myFunction([10, 5])); // 45
console.log(myFunction([3, 7])); // 25
						// 3+4 =7+5 =12+6 =18+7 =25

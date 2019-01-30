function myFunction(numArr) { 

	numArr = numArr.sort((num1, num2) => {
		return num1 - num2;
	});

	for (let i = 1; i < numArr.length; i++){
		if (i != numArr[i]) {
			return i;
		}
		
	}

	return numArr;
}
console.log(myFunction([0, 3, 5, 8, 4, 6, 1, 9, 7])); // 2
console.log(myFunction([1, 2, 5, 0, 6, 7, 9, 3, 4])); // 8





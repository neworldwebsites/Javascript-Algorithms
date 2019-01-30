function myFunction(numArr) {

	numArr = numArr.sort((num1,num2) => {
		return num1 < num2;
	});

	for (let i = 1; i < numArr.length; i++){
		if (numArr[i] === numArr[i + 1]) {
			return true;
		}
	}
	// coz numArr is sorting then if next = i, it's duplicate
	return false;
}
console.log(myFunction([1, 2, 3, 1])); // true
console.log(myFunction([3, 1])); // false
console.log(myFunction([0, 4, 5, 0, 3, 6])); // true

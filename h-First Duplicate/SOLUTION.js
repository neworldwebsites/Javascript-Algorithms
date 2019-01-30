// SOLUTION 1
function myFunction(numArr) {
	let duplicateObject = {};

	for (let num of numArr) {
		if (duplicateObject.hasOwnProperty(num)) {
			
			return num;
		}
		duplicateObject[num] = num;
	}
	return -1;
}
console.log(myFunction([2, 3, 3, 1, 5, 2])); // 3
console.log(myFunction([2, 2])); // 2
console.log(myFunction([2, 1, 3])); // -1



// SOLUTION 2
function myFunction2(numArr) {

	for (let i = 0; i < numArr.length - 1; i++){
		
		if (numArr[i] === numArr[i + 1]) {
			return numArr[i];
		}
	}
	return '-1';
}
console.log(myFunction2([2,3,3,1,5,2])); // 3
console.log(myFunction2([2,2])); // 2
console.log(myFunction2([2,1,3])); // -1



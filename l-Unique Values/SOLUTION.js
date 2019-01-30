function myFunction(arr1, arr2) {
	let uniqArr = [];
	
	for (let val of arr1) {
		if (!arr2.includes(val)  && !uniqArr.includes(val) ) {
			uniqArr.push(val);
		}
	}
	for (let val of arr2) {
		if (!arr1.includes(val) && !uniqArr.includes(val)) {
			uniqArr.push(val);
		}
	}


	return uniqArr;
}
console.log(myFunction([1, 2, 3, 5], [1, 2, 3, 4, 5]));// 4
console.log(myFunction([1, "calf", 3, "piglet"], [7, "filly"])); // [1,"calf",3,"piglet",7,"filly"]
console.log(myFunction([2, 1, 3], [3, 2, 1]));// []

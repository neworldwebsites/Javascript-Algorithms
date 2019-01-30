// SOLUTION 1
function myFunction(numArr) {
	let numArray = numArr.toString();

	numArray = numArray.split("");

	numArray = numArray.reduce((num1, num2) => parseInt(num1) + parseInt(num2));

	return numArray;
}
console.log(myFunction(29)); // 11
console.log(myFunction(48)); // 12
          // 29= 2+9 11    48= 4+8 12



// SOLUTION 2
function myFunction2(numArr) {

	return numArr.toString().split('').reduce((num1,num2)=>parseInt(num1) + parseInt(num2));

}
console.log(myFunction2(29)); // 11
console.log(myFunction2(48)); // 12
// 29= 2+9 11    48= 4+8 12
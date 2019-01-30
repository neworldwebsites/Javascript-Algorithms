function myFunction(time) { 
	let timeArray = time.split(':');

	if (timeArray[0] > 23) {
		return false;
	}
	else if (Number(timeArray[1]) > 59) {
		return false;
	}
	
	return true;
	}
console.log(myFunction('24:00')); // false
console.log(myFunction('23:31')); // true
console.log(myFunction('22:00')); // true


// EXERCICE 2 
// transform after 23 hour + 1 hour and hour init 0
// transform after 59 sec + 1 min and sec init 0
function myFunction2(time) {
	let timeArray = time.split(':');

		if (timeArray[0] == 24) {
					timeArray[0] = '00';	
		} else {
			timeArray[0] = timeArray[0];
	}
	
		if (timeArray[1] > 59) {
			timeArray[0] = Number(timeArray[0]);
			timeArray[0] += 1;

			timeArray[1] = '00';
		} 

	return timeArray;
}
console.log(myFunction2('24:00')); // ['00','00']
console.log(myFunction2('21:31')); // ['23','31']
console.log(myFunction2('22:56')); // ['22','56']
console.log(myFunction2('22:60')); // ['23','00']




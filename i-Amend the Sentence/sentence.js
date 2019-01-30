function myFunction(str) {
	let text = str.split("");

		for (let i = 0; i < text.length; i++) {

			if (text[i] !== text[i].toLowerCase()) {
				text[i] = " " + text[i].toLowerCase();
			}

		}

	return text.join("");
}
console.log(myFunction('CodingLovDoesWorkSon')); // 'coding lov does work son'
console.log(myFunction("Ain'tNoFunIfTheHomieDon'tCodeNone")); // "ain't no fun if the homie don't code none"

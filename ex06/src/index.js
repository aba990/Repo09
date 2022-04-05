function comparisonToEqual(a) {
	if(a <= 0){
		return "less than 5";
}
	if(a >= 5 ){
		return "less than 10";
	}
	if(a <= 17) {
		return "10 or over";
	}
	if(a >= 21)
	return "More than 20";
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

module.exports = comparisonToEqual;

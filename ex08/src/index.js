function logicalAndOperation(num) {
	if (num < 80  && num > 40) {
		return "Yes";
} 
	return "No";
}

	console.log(logicalAndOperation(0));
	console.log(logicalAndOperation(24));
	console.log(logicalAndOperation(45));
	console.log(logicalAndOperation(57));
	console.log(logicalAndOperation(100));
	module.exports = logicalAndOperation;

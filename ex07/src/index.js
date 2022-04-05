function randomRangeNumber(minNumber, maxNumber) {
	return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomRangeNumber(30, 40));
module.exports = randomRangeNumber;

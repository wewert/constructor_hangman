exports.letter = letter;

function letter(theLetter) {
	this.theLetter = theLetter;
	this.show = false;
	if (this.theLetter == ' ')
		this.show = true;
}

letter.prototype.printInfo = function() {
	if (this.show) {
		return this.theLetter;
	}
	return "_ ";
}

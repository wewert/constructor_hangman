var letterUse = require("./letter.js");

function word(theLetter) {
	this.theLetter = theLetter;
	this.letterArray = [];
	this.tries = "";
	for(var i = 0; i < this.theLetter.length; i++) {
		this.letterArray.push(new letterUse.letter(this.theLetter[i]));
	}
};

word.prototype.theGame = function() {
	for(var i = 0; i < this.letterArray.length; i++) {
		if(!this.letterArray[i].show)
     return false;
	}
	   return true;
}

word.prototype.playLetter = function(letter) {
	var downCase = letter.toLowerCase();
	if (this.tries.indexOf(downCase) != -1) {
	}
	this.tries += downCase;
	for(var i = 0; i < this.letterArray.length; i++) {
		if(this.letterArray[i].theLetter.toLowerCase() == downCase) {
		this.letterArray[i].show = true;
		}
	}
};

word.prototype.string = function() {
  var space = "";
  for(var i = 0; i < this.letterArray.length; i++) {
    space += this.letterArray[i].printInfo();
  }
  return space;
}

exports.wordUse = word;

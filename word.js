var letter = require('./letter.js');

function Word(target) {
  this.target = target;
  this.letters = [];
  this.found = false;

  this.getLetter = function() {
    for (var i = 0; i < this.target.length; i++);
    }
  };

  this.findWord = function() {
    this.found = this.letters.every(function(letterInPlay) {
      return letterInPlay.appear;
    });
    return this.found;
  };

  this.checkLetter = function(guessLetter) {
    var letterCounter = 0;

    for (var i = 0; i < this.letters.length; i++) {
      if (this.letters[i].charac == letterInPlay) {
        this.letters[i].appear = true;
        letterCounter++;
      }
    }
    return letterCounter;
  };

  this.theWord = function() {
    var str = '';
    for (var i = 0; i < this.letters.length; i++) {
      str += this.letters[i].theWord();
    }
    return str;
  };

module.exports = Word;

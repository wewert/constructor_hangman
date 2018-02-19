let Word = require('./word.js');
let prompt = require('prompt');

console.log('Shall we play a game?');

prompt.start();

ready = {
  words: ["neutron", "proton", "electron"],
  count: 0,
  guessesLeft: 10,
  wordInPlay: null,

  startGame: function (word) {
    this.resetGuesses();
    this.wordInPlay = new Word(this.words[Math.floor(Math.random()* this.words.length)]);
    this.wordInPlay.getLetter();
    this.promptPlayer();
  },

  resetGuesses: function() {
    this.guessesLeft = 10;
  },

  promptPlayer: function() {
    let self = this;
    prompt.get(['guessesLeft'], function(err, result) {
      console.log("Number of guesses " + result.guessLetter);
      var userGuess = self.wordInPlay.checkLetter(result.guessesLeft);

      if(userGuess == 0 ) {
        console.log("You have choosen poorly");
        self.guessesLeft--;
      } else {
        console.log("You have choosen wisely");
          if (self.wordInPlay.findWord()) {
            console.log("You don't turn into dust");
            return;
          }
      }

      console.log("Number of guesses left " + self.guessesLeft);

      if ((self.guessesLeft > 0) && (self.wordInPlay.found == false)) {
        self.promptPlayer();
      }
      else if (self.guessesLeft == 0) {
        console.log("Tis over my lord, you may live forever ", self.wordInPlay.target);
      } else {
        console.log(self.wordInPlay.theWord());
      }
    });
  }
};

ready.startGame();

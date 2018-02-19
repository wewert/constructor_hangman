let randomWord = require('./word.js');
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
    this.wordInPlay.getLet();
    this.promptPlayer();
  },

  resetGuesses: function() {
    this.guessesLeft = 10;
  },

  promptPlayer: function() {
    let self = this;
    prompt.get([''])
  }
}

var inquirer = require("inquirer");
var letterUse = require("./letter.js");
var wordUse = require("./word.js");
var game = require("./game.js");
var wordToPlay;

exports.letter;

var wordInstance = new wordUse.wordUse(game.wordToPlay);
var attempts = 10;

console.log("=====================================================");
console.log("Welcome to the Newest Super Deluxe Hanging of the Man");
console.log("=====================================================");

function startGame(){
	console.log(wordInstance.string());
	if (wordInstance.tries.length >= attempts){
		console.log('You have chosen poorly and now turned to dust...');
	return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Pick a cup(or in this case a letter)',
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(userInput) {
				var letter = userInput.letter;
				wordInstance.playLetter(letter);
					if(wordInstance.theGame()) {
					console.log(wordInstance.string() + ' is the correct word...');
					return;
					}
        console.log('...You better hurry up...');
				console.log('You have ' + (attempts - wordInstance.tries.length) + ' guesses left.')
				startGame();
				}
  );
}

startGame();

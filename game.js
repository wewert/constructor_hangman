var words = ["neutron", "proton", "electron"];
var randomWord = Math.floor(Math.random() * words.length);
var wordToPlay = words[randomWord];

exports.wordToPlay = wordToPlay;

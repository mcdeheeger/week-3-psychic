
//we place all the letters in an array 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//set the initial values of the attribitez
var wins = 0
var losses = 0
var guessesLeft = 10
var wrongGuess = [];

alert("Guess what letter I'm thinking of!")

//When a key is pressed, the following function will be run...
document.onkeyup = function (letter) {
	
	//stores the key pressed
	var guessMade = letter.key;
	//generates a random letter
	var randomLetter = letters[Math.floor(Math.random() * letters.length)]

	//compares the key pressed to the random letter
	//if equal, the following function is performed...
	if (guessMade === randomLetter) {
		alert("YOU READ MY MIND!!!")
		wins++;
		wrongGuess = [];
		guessesLeft = 10;
	}
	//if not equal, the following function is performed...
	else {
		guessesLeft--;
		wrongGuess.push(guessMade);
	}
	//if no more guesses left, the following function is performed...
	if (guessesLeft === 0) {
		alert("You don't have the gift! Try again...")
		losses++;
		guessesLeft = 10;
		wrongGuess = [];
	}
	//writes information into the html of the page
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
	document.querySelector("#wrong-guess").innerHTML = wrongGuess.join(" ");

}


	


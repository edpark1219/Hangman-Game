window.onload = function() {
		
		//Variables
		var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		var usedLetters = [];

		var guessesLeft = 8;

		var undScores = [];

		var inputIndex;

		var letOccur = [];

		var wins = 0;

		var losses = 0;

		var rand;

		var randArr = [];

		var lowerInput;

		//Word list
		var wordList = ["celtics", "nets", "knicks", "sixers", "raptors", "warriors", "clippers", "lakers", "suns", "kings", "bulls", "cavaliers", "pistons", "pacers", "bucks", "mavericks", "rockets", "grizzlies", "pelicans", "spurs", "hawks", "hornets", "heat", "magic", "wizards", "nuggets", "timberwolves", "thunder", "trailblazers", "jazz"];
		



		//Choose random word
		rand = wordList[Math.floor(Math.random() * wordList.length)];

		//Convert rand to array
		randArr = rand.split("");
		

		//Create underscores
		for (var i = 0; i < randArr.length; i++) {
			undScores.push("_");
		}   

		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("guessleft").innerHTML = guessesLeft;
		document.getElementById("guesses").innerHTML = undScores.join(" ");
		document.getElementById("guessed").innerHTML = usedLetters.join(", ");


		//User input


		document.onkeyup = function(event) {

        var userInput = event.key;

        lowerInput = userInput.toLowerCase();        

        if (randArr.indexOf(lowerInput) == -1){
        	usedLetters.push(lowerInput);
        	guessesLeft--;

			if (guessesLeft === 0) {

	        	alert("You lost!");
	        	losses++;
	        	rand = wordList[Math.floor(Math.random() * wordList.length)];


				//Convert rand to array
				randArr = rand.split("");
			

				//Create underscores
				undScores = [];
				for (var i = 0; i < randArr.length; i++) {
				undScores.push("_");

				guessesLeft = 8;
				usedLetters = [];
			}

			}
        }

        else {
        	usedLetters.push(lowerInput);
        	for (var j = 0; j < randArr.length; j++) {
        		if (randArr[j] == lowerInput) {
        			letOccur.push(j);
        		}
        	}

        	for (var k = 0; k < letOccur.length; k++) {
        		undScores[letOccur[k]] = lowerInput;

        	}

        	letOccur = [];


	        if (undScores.indexOf("_") == -1) {
	        	alert("You won!");
	        	wins++;
	        	rand = wordList[Math.floor(Math.random() * wordList.length)];


				//Convert rand to array
				randArr = rand.split("");
			

				//Create underscores
				undScores = [];
				for (var i = 0; i < randArr.length; i++) {
				undScores.push("_");

				guessesLeft = 8;
				usedLetters = [];

				}  
			}

        }

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessleft").innerHTML = guessesLeft;
document.getElementById("guesses").innerHTML = undScores.join(" ");
document.getElementById("guessed").innerHTML = usedLetters.join(", ");




}

console.log(randArr);
}





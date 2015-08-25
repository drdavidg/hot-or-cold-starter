
$(document).ready(function(){
	var allGuesses = [];
	var x;
	newGame(); //set global variable of the secretNumber number to be guessed

	var count = $('#count').text();

	$('nav').on('click', 'ul > li > a.new', newGame );
	// $('form').on('click', '#guessButton', checkGuess );
	$('form').submit(checkGuess); //trying to fix the issue the form submit (& refresh) is causing

	function newGame() {
		x = Math.floor(Math.random()*100); // set the global variable to a new secret number
		count = 0;
		$('span#count').text(count);
		$('#userGuess').val(0);
		$('ul#guessList').empty();
		giveFeedback("Make your Guess!");
		allGuesses = [];
	}

	function checkGuess(e) {
		e.preventDefault(); //prevent form from submitting
		var guess = $('#userGuess').val();

		function logGuess() {
			allGuesses.push(guess); //saving all guesses in an array
			$('ul#guessList').append(function() {
				return "<li>Guess #" + count + ":   " + guess + "</li>";
			});
		}

		if (guess == x) {
			giveFeedback("BINGO!!!");
		}
		else if ((guess < 1) || (guess > 100)) {  //validate if guess is between 1-100
			giveFeedback("Only guess a number between 1-100");
			return;
		}
		else if (!parseInt(guess)) { //validate if guess is a string
			giveFeedback("Only numbers allowed as a guess, no strings");
			return;
		}
		else if (guess % 1 != 0) {
			giveFeedback("No decimals.");
			return;
		}
		else if ((jQuery.inArray(guess, allGuesses)) >= 0) {
			giveFeedback("You already guessed that number!  Try a different number.");
			return;
		}
		else if (guess > x) { //if guess is too high
			giveFeedback("Too High");
			logGuess();
		}
		else if (guess < x) { //if guess is too low
			giveFeedback("Too Low");
		  logGuess();
		}

		addCount();
	}

	function giveFeedback(msg) {
		$('#feedback').text(msg);
	}

	function addCount() {
		count++;
		$('#count').text(count);
	}


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

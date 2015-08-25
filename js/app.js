
$(document).ready(function(){

	var x;
	newGame(); //set global variable of the secretNumber number to be guessed

	var count = $('#count').text();

	$('nav').on('click', 'ul > li > a.new', newGame );
	// $('form').on('click', '#guessButton', checkGuess );
	$('form').submit(checkGuess); //trying to fix the issue the form submit (& refresh) is causing

	function newGame() {
		x = secretNumber(); // set the global variable to a new secret number
		count = 0;
		$('span#count').text(count);
		$('#userGuess').val(0);
		$('ul#guessList').empty();
		giveFeedback("Make your Guess!");
	}

	function checkGuess(e) {
		e.preventDefault(); //prevent form from submitting
		var guess = $('#userGuess').val();

		function logGuess() {
			$('ul#guessList').append(function() {
				return "<li>Guess #" + count + ":   " + guess + "</li>";
			});
		}

		if (guess == x) {
			giveFeedback("BINGO!!!");
		}
		else if ((guess < 1) || (guess > 100)) {
			giveFeedback("Only guess a number between 1-100");
			return;
		}
		else if (!parseInt(guess)) {
			giveFeedback("Only numbers allowed as a guess, no strings");
			return;
		}
		else if (guess > x) {
			giveFeedback("Too High");
		}
		else if (guess < x) {
			giveFeedback("Too Low");
		}
		addCount();
		logGuess();

	}

	function giveFeedback(msg) {
		$('#feedback').text(msg);
	}

	function addCount() {
		count++;
		$('#count').text(count);
	}

	function secretNumber() {
		return Math.floor(Math.random()*100);
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

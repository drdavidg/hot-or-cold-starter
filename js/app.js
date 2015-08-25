
$(document).ready(function(){

	var x = secretNumber(); //set global variable of the secretNumber number to be guessed
	console.log(x);


	$('nav').on('click', 'ul > li > a.new', newGame );
	// $('form').on('click', '#guessButton', checkGuess );
	$('form').submit(checkGuess);


	function newGame() {
		x = secretNumber(); // set the global variable to a new secret number
		console.log(x);
	}

	function checkGuess() {


		var guess = $('#userGuess').val();
		if (guess == x) {
			$('h2#feedback').text("BINGO!!!");
		}
		else if (guess > x) {
			$('h2#feedback').text("Too High");
		}
		else if (guess < x) {
			$('h2#feedback').text("Too Low");
		}
		console.log(guess);

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

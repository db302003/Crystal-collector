var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'https://www.colourbox.com/preview/4545062-red-crystal.jpg', 
			'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642', 
			'https://images-na.ssl-images-amazon.com/images/I/61UDNlqB-aL._SL1200_.jpg', 
			'https://www.perlesandco.co.uk/images/1644917592-moyen/im-Swarovski-1122-Rivoli-Round-Stone-18mm-Crystal-AB-Ultra-Orange.jpg',
			]
	random_result = Math.floor(Math.random() * 69 ) + 30;

	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});
		

		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}
resetAndStart();


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();
	}
});
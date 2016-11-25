"use strict";

var GALAXY = (function (UNI) {


	UNI.createPlayer1 = function() {
	let character = $('.player1_char').val();
	let player1;
	switch (character) {
		case "Grayfox" :
		    player1 = new GALAXY.Grayfox();
			break;

		case "Terminator" :
			  player1 = new GALAXY.Terminator();
			break;

		case "Rex" :
			player1 = new GALAXY.Rex();
			break;	

		case "Evangelion" :
			player1 = new GALAXY.Evangelion();
			break;

		case "Ants" :
			player1 = new GALAXY.Ants();
			break;

	    case "Swarmbots" :
	    	player1 = new GALAXY.Swarmbots();
	    	break;

		default:
			window.alert("Choose two players and then select fight button to play this game.");
	}
	player1.Char = character;
	player1.Name = $('#p1').val();
	return player1;
};

UNI.createPlayer2 = function() {
	let character2 = $('.player2_char').val();

	let player2;
	switch (character2) {
		case "Grayfox" :
		    player2 = new GALAXY.Grayfox();
			break;

		case "Terminator" :
			player2 = new GALAXY.Terminator();
			break;

		case "Rex" :
			player2 = new GALAXY.Rex();
			break;	

		case "Evangelion" :
			player2 = new GALAXY.Evangelion();
			break;

		case "Ants" :
			player2 = new GALAXY.Ants();
			break;

	    case "Swarmbots" :
	    	player2 = new GALAXY.Swarmbots();
	    	break;

		default:
			window.alert("Choose two players and then select fight button to play this game.");
	}
	
	player2.Name = $('#p2').val();
	player2.Char = character2;
	return player2;
};


return UNI;

}) (GALAXY || {});

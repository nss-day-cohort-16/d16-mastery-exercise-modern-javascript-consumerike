"use strict";



// UNI.BotFight = function () {

 $('#fight').on("click",  function(event) {
 	 let player1 = GALAXY.createPlayer1();
     let player2 = GALAXY.createPlayer2();

     fight(player1, player2);
     


 	});




 	let fight = function (player1, player2) {
 		console.log("player 1 is:", player1 );
 		
 		while (player1.health > 0 && player2.health > 0) {
 			
	 		player2.health = (player1.attack - player2.health);
	 		player1.health = (player2.attack - player1.health);


 		}


 		if (player1.health <= 0) {
			console.log("player 2 wins");
			$('#grades').html(`${player1.Name} wins with ${player1.Char}`);
			$('#fight').off();
	 	}

	    else if (player2.health <= 0) {
	 		console.log("player 1 wins");
	 		$('#grades').html(`${player2.Name} wins with ${player2.Char}`);

	 		$('#fight').off();
	 	}


 		

		
		// console.log("clanking");
		// let result = [player1, player2]
		// console.log("results", result );
		// return result;
		
	};

		
 	
	   
	// 	if (player1.health  >  0 && player2.health > 0) {
	// 	player2.health = (Player1.attack - Player2.health);
	// 	player1.health = (Player2.attack - Player1.health);
	// 	console.log("clanking");
	// 	}

	// 	else if (player1.health <= 0) {
	// 		console.log("player 2 wins");
	// 		$('#fight').off();
	//  	}

	//  	else if (player2.health <= 0) {
	//  		console.log("player 1 wins");
	//  		$('#fight').off()
	//  	}
 // })

	// }, 1000) 
	
	
//  })
// };



// return UNI;

// }) (GALAXY || {});



// UNI.BotFight = function () {

//  $('#fight').on("click",  function() {
//  	let player1= GALAXY.createPlayer1();
//  	let player2 = GALAXY.createPlayer2();
	
	
// 	if (player1.health  > 0 || player2.health > 0) {
// 	(Player1.attack - Player2.health);
// 	(Player2.attack - Player1.health);
// 	}

// 	else if (player1.health <= 0) {
// 		console.log("player 2 wins");
// 		$('#fight').off();
//  	}

//  	else if (player2.health <= 0) {
//  		console.log("player 1 wins");
//  		$('#fight').off()
//  	}
//  })
// };

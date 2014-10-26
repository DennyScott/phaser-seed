//We create our only state
var mainState = {

	// Here we add all the functions we need for our state
	// For this project we will just have 3 functions

	preload: function() {
		// This function will be executed at the beginning 
		// That's where we load the game's assets

	},
	create: function() {
		// This function is called after the preload function
		//  Here we set up the game, display sprites, etc.
	},

	update: function() {
		// This function is called 60 times per second 
		// It contains the game's logic
	},

};
// We initialising Phaser
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');


// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');
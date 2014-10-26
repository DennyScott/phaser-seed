var loadState = {
	preload: function() {
		//Add a "loading..." label on the screen
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
			font: '30px Arial',
			fill: '#ffffff'
		});
		loadingLabel.anchor.setTo(0.5, 0.5);

		//Display the progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		//LOAD ALL OUR IMAGE ASSETS---------------------

		//load player image
		game.load.image('player', 'assets/player.png');

		//load wall and floor assets
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');

		//Loads the coin image
		game.load.image('coin', 'assets/coin.png');

		//Loads the enemy image
		game.load.image('enemy', 'assets/enemy.png');

		//Load the bacground image for the menu
		game.load.image('background', 'assets/background.png');

		//Loads pixel for our particle effects
		game.load.image('pixel', 'assets/pixel.png');

		//COMPLETE LOADING ASSETS--------------------------
		//LOAD ALL OF OUR SPRITESHEET ASSETS---------------
		
		game.load.spritesheet('player', 'assets/player2.png', 20, 20);
		game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
		
		//COMPLETE LOADING OUR SPRITESHEET ASSETS----------
		// LOAD ALL OF OUR SOUND ASSETS--------------------

		//Sounds when the player Jumps
		game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);

		//Sound when the player takes a coin
		game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);

		//Sound when the player dies
		game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
	},

	create: function() {
		//Go to the menu state
		game.state.start('menu');
	}
}
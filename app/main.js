//We create our only state
var mainState = {

	// Here we add all the functions we need for our state
	// For this project we will just have 3 functions

	preload: function() {
		// This function will be executed at the beginning 
		// That's where we load the game's assets

		//load player image
		game.load.image('player', 'assets/player.png');

		//load wall and floor assets
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');

		//Loads the coin image
		game.load.image('coin', 'assets/coin.png');

		//Loads the enemy image
		game.load.image('enemy', 'assets/enemy.png');


	},
	create: function() {
		// This function is called after the preload function
		//  Here we set up the game, display sprites, etc.

		//Sets up the background color and physics engine
		game.stage.backgroundColor = '#3498db'
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Creates the player in the center of the world, and fixes his anchor point to be its center
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5);

		//Tells Phaser that the player will use the Arcade physics engine
		game.physics.arcade.enable(this.player);

		//Add vertical gravity to the player
		this.player.body.gravity.y = 500;

		//gives the player controls
		this.cursor = game.input.keyboard.createCursorKeys();

		//creates all th world objects
		this.createWorld();

		//Display the coin
		this.coin = game.add.sprite(60, 140, 'coin');

		//Add Arcade Physics to the coin
		game.physics.arcade.enable(this.coin);

		//Set the anchor point of the coin to its center
		this.coin.anchor.setTo(0.5, 0.5);

		//Displays the Score
		this.scoreLabel = game.add.text(30, 30, 'score: 0', {
			font: '18px Arial',
			fill: '#fffff'
		});

		//Initalize the score variable
		this.score = 0;

		//Create an enemy group with Arcade physics
		this.enemies = game.add.group();
		this.enemies.enableBody = true;

		//Create 10 enemies with the 'enemy' image in the group
		//The enemies are 'dead' by default, so they are not visible in game
		this.enemies.createMultiple(10, 'enemy');

		game.time.events.loop(2200, this.addEnemy, this);
	},

	update: function() {
		// This function is called 60 times per second 
		// It contains the game's logic

		//Tells Phaser that the player and the walls should collide.  Collisions MUST be decalred at the START of the update function
		game.physics.arcade.collide(this.player, this.walls);

		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);

		//Make the enemies and walls collide
		game.physics.arcade.collide(this.enemies, this.walls);

		//Call the 'playerDie' function when the player and enemy overlap
		game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);

		//Gives the user the ability to move the player
		this.movePlayer();

		//Checks to see if the player has left the visible world space
		this.checkIfInWorld();
	},

	addEnemy: function () {
		//Get the first dead enemy of the group
		var enemy = this.enemies.getFirstDead();

		//If there isn't any dead enemies, do nothing
		if(!enemy) {
			return;
		}

		//Initialise the enemy
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.world.centerX, 0);
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;
	},

	checkIfInWorld: function() {
		//Checks to see if the player has left the visible world space.  If so, restart the main state
		if (!this.player.inWorld) {
			this.playerDie();
		}
	},

	movePlayer: function() {
		//If the left arrow key is pressed
		if (this.cursor.left.isDown) {
			//Move the player to the left
			this.player.body.velocity.x = -200;
		}

		//If the right arrow key is pressed
		else if (this.cursor.right.isDown) {
			//Move the player to the right
			this.player.body.velocity.x = 200;
		}

		//If neither left nor right is being pressed
		else {
			this.player.body.velocity.x = 0;
		}

		if (this.cursor.up.isDown && this.player.body.touching.down) {
			//Move the player upwards (jump)
			this.player.body.velocity.y = -320;
		}
	},

	createWorld: function() {
		//Create our wall group with Arcade Physics
		this.walls = game.add.group();
		this.walls.enableBody = true;

		//Create the 10 walls
		game.add.sprite(0, 0, 'wallV', 0, this.walls); //Left
		game.add.sprite(480, 0, 'wallV', 0, this.walls); //Right

		game.add.sprite(0, 0, 'wallH', 0, this.walls); //Top Left
		game.add.sprite(300, 0, 'wallH', 0, this.walls); //Top Right
		game.add.sprite(0, 320, 'wallH', 0, this.walls); //Bottom Left
		game.add.sprite(300, 320, 'wallH', 0, this.walls); //Bottom Right

		game.add.sprite(-100, 160, 'wallH', 0, this.walls); //Middle Left
		game.add.sprite(400, 160, 'wallH', 0, this.walls); //Middle Right

		var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1);
		var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
		middleBottom.scale.setTo(1.5, 1);

		//Set all the walls to be immovable
		this.walls.setAll('body.immovable', true);
	},

	playerDie: function() {
		//restarts the main game state
		game.state.start('main');
	},

	takeCoin: function(player, coin) {
		//Increase the score by 5
		this.score += 5;

		//Update the score label
		this.scoreLabel.text = 'score: ' + this.score;

		//Change the coin position
		this.updateCoinPosition();
	},

	updateCoinPosition: function() {
		// Store all the possible coin positions in an array 
		var coinPosition = [{
				x: 140,
				y: 60
			}, {
				x: 360,
				y: 60
			}, // Top row 
			{
				x: 60,
				y: 140
			}, {
				x: 440,
				y: 140
			}, // Middle row 
			{
				x: 130,
				y: 300
			}, {
				x: 370,
				y: 300
			} // Bottom row
		];

		// Remove the current coin position from the array
		// Otherwise the coin could appear at the same spot twice in a row 
		for (var i = 0; i < coinPosition.length; i++) {
			if (coinPosition[i].x === this.coin.x) {
				coinPosition.splice(i, 1);
			}
		}

		// Randomly select a position from the array
		var newPosition = coinPosition[game.rnd.integerInRange(0, coinPosition.length - 1)];

		// Set the new position of the coin
		this.coin.reset(newPosition.x, newPosition.y);
	},

};
// We initialising Phaser
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');


// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');
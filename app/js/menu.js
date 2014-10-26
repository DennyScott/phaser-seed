var menuState = {
	create: function() {

		//If the score is higher then the best score
		if (game.global.score > localStorage.getItem('bestScore')) {
			//Update best score
			localStorage.setItem('bestScore', game.global.score);
		}


		//Add a background image
		game.add.image(0, 0, 'background');

		// Replaced the '50px Arial' by '70px Geo'
		var nameLabel = game.add.text(game.world.centerX, -50, 'Super Coin Box', {
			font: '70px Geo',
			fill: '#ffffff'
		});
		nameLabel.anchor.setTo(0.5, 0.5);

		// //Create a tween on the label
		// var tween = game.add.tween(nameLabel);

		// //Change the y position of the label to 80, in 1000 ms
		// tween.to({y: 80}, 1000);

		// //Start the tween
		// tween.start();

		game.add.tween(nameLabel).to({
			y: 80
		}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var text = 'Score: ' + game.global.score + '\nBest score: ' + localStorage.getItem('bestScore');

		//Shows the score at the center of the screen
		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, text, {
			font: '25px Arial',
			fill: '#ffffff',
			align: 'center'
		});
		scoreLabel.anchor.setTo(0.5, 0.5);

		//Explain how to start the game
		var startLabel = game.add.text(game.world.centerX, game.world.height - 80, 'press the up arrow key to start', {
			font: '25px Arial',
			fill: '#ffffff'
		});
		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({
			angle: -2
		}, 500).to({
			angle: 2
		}, 500).loop().start();

		//create a new Phaser keyboard variable: the up arrow key
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

		//When the 'upKey' is pressed, it will call the 'start' function once
		upKey.onDown.addOnce(this.start, this);

		//Add the mute button that calls the 'toggleSound' function when pressed
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);

		//If the game is already muted
		if (game.sound.mute) {
			//Change the frame to display the speaker with no sound
			this.muteButton.frame = 1;
		}

		//If the mouse is pver the button, it becomes a hand cursor
		this.muteButton.input.useHandOver = true;
	},

	start: function() {
		//Start the actual game
		game.state.start('play');
	},

	toggleSound: function() {
		//Switch the Phaser sound variable from true to false, or false to true
		//When 'game.sound.mute = true', Phaser will mute the game
		game.sound.mute = !game.sound.mute;

		//Change the frame of the button
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	}
}
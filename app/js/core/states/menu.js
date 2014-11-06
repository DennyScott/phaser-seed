class Menu {
	
	create() {
		
		//Add a background image
		this.add.image(0,0, 'background');

		//Replaced the '50px Arial' by '70px Geo'
		var nameLabel = this.add.text(this.world.centerX, -50, 'Dennys Awesome Test', {
			font: '50px Arial',
			fill: '#ffffff'
		});
		nameLabel.anchor.setTo(0.5, 0.5);

		this.add.tween(nameLabel).to({
			y:80
		}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		//Explain how to start the game
		var startLabel = this.add.text(this.world.centerX, this.world.height - 80, 'press the up arrow key to start', {
			font: '25px Arial',
			fill: '#ffffff'
		});
		startLabel.anchor.setTo(0.5, 0.5);

		this.add.tween(startLabel).to({
			angle: -2
		}, 500).to({
			angle:2
		}, 500).loop().start();

		//create a new Phaser Keyboard variable: the up arrow key
		var upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);

		upKey.onDown.addOnce(this.start, this);
	}

	start() {
		//Start the actual game
		this.state.start('play');
	}
}

export {Menu}

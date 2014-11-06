class Load {
	
	preload() {
		//Add a "loading..." label on the screen
		var loadingLabel = this.add.text(this.world.centerX, 150, 'loading...',{
			font: '30px Arial',
			fill: '#ffffff'
		});
		loadingLabel.anchor.setTo(0.5, 0.5);

		//Display the progress bar
		var progressBar = this.add.sprite(this.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(progressBar);

		//LOAD ALL OF OUR SPRITESHEET ASSETS ------------------

		this.load.spritesheet('player', 'assets/player2.png', 20, 20);

		//COMPLETE LOADING OUR SPRITESHEET ASSETS --------------
	}

	create() {
		this.state.start('menu');
	}

	update() {

	}
}

export {Load}

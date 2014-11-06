class Boot {

	preload() {
		//Load the image
		this.game.load.image('progressBar', 'assets/progressBar.png');
		console.log('loading!');
	}

	create() {
		var go = gameObjectManager.add('Player', Player);
		var go2 = gameObjectManager.add('Enemy');


		go.tag = "Player";
		go2.tag = 'Enemy';

		var obj = gameObjectManager.findGameObjectByTag('Hello');
		//Set some game settings
		this.game.stage.backgroundColor = '#3498db';
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Start the load state
		this.game.state.start('load');
	}

	update() {

	}
}

export {
	Boot
}
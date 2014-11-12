var state = require('../core/core.js').state;
	class Load extends state {

		constructor() {
			super();
		};

		preload() {
			super.preload();
			Phaser = window.Phaser || {};
			game = window.game || {};


			this.createLoadScreen(); //Creates the load screen to watch.  This must be first

			//Loads all needed Assets
			this.loadImageAssets();
			this.loadSpritesheetAssets();
			this.loadTilesetAssets();
			this.loadAudioAssets();
		};

		create() {
			super.create();
			this.loadNextState();
		};

		update() {
			super.update();
		};

		createLoadScreen() {
			//Add a loading... label on the screen
			var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
				font: '30px Arial',
				fill: '#fffff'
			});
			loadingLabel.anchor.setTo(0.5, 0.5);

			//Display the progress bar
			var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
			progressBar.anchor.setTo(0.5, 0.5);
			game.load.setPreloadSprite(progressBar);
		};


		loadAudioAssets() {};


		loadImageAssets() {
			//Load a new asset that we will use in the menu state
			game.load.image('player', 'assets/images/RedSquare.png');
			game.load.image('actionItem', 'assets/images/GreenCircle.png');
			game.load.image('nextButton', 'assets/images/BlackLabel.png');
		};


		loadNextState() {
			game.state.start('menu');
		};


		loadSpritesheetAssets() {};


		loadTilesetAssets() {};

	};

	module.exports = Load;

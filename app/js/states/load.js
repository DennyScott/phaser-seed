var state = require('../core/core.js').state;

	var Load = function() {
		var _this = this;

		var _constructor = function() {
			state.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function() {
			_preload();
			_this.createLoadScreen(); //Creates the load screen to watch.  This must be first

			//Loads all needed Assets
			_this.loadImageAssets();
			_this.loadSpritesheetAssets();
			_this.loadTilesetAssets();
			_this.loadAudioAssets();
		};

		this.create = function() {
			_create();
			_this.loadNextState();
		}

		this.update = function() {
			_update();
		}

		this.createLoadScreen = function() {
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
		}


		this.loadAudioAssets = function() {}



		this.loadImageAssets = function() {
			//Load a new asset that we will use in the menu state
			game.load.image('player', 'assets/images/RedSquare.png');
			game.load.image('nextButton', 'assets/images/BlackLabel.png');
		}



		this.loadNextState = function() {
			game.state.start('menu');
		}



		this.loadSpritesheetAssets = function() {}



		this.loadTilesetAssets = function() {}
	};

	Load.prototype = Object.create(state.prototype);

	module.exports = Load;

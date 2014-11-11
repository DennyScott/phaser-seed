var state = require('../core/core.js').state;

	var Boot = function() {
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

			//Load the image
			game.load.image('progressBar', 'assets/images/progressBar.png');
		};

		this.create = function() {
			_create();
			_this.createBackgroundColor();

			if (!game.device.desktop) {
				game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				document.body.style.backgroundColor = '#aaaaaa';

				// Set the min and max width/height of the game
				game.scale.minWidth = 250;
				game.scale.minHeight = 170;
				game.scale.maxWidth = 1000;
				game.scale.maxHeight = 680;


				// Center the game on the screen
				game.scale.pageAlignHorizontally = true;
				game.scale.pageAlignVertically = true;
				// Apply the scale changes
				game.scale.setScreenSize(true);
			}

			_this.loadNextState();
		};

		this.update = function() {
			_update();
		};


		this.createBackgroundColor = function() {
			//Set the background color of the stage to a light blue color
			game.stage.backgroundColor = '#aaaaaa';
		};

		this.loadNextState = function() {
			game.state.start('load');
		};

		
	};

	Boot.prototype = Object.create(state.prototype);
	module.exports = Boot;
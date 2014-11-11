(function() {
	var Zephyr = window.Zephyr || {};
	var Phaser;
	var game;

	var Boot = function() {
		var _this = this;

		var _constructor = function() {
			window.Zephyr.states.__state__.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function() {
			_preload();
			Phaser = window.Phaser || {};
			game = window.game || {};

			//Load the image
			game.load.image('progressBar', 'assets/progressBar.png');
		};

		this.create = function() {
			_create();
			_createBackgroundColor();
			_createPhysicsStream();
			_prepareForMobile();
			_loadNextState();
		};

		this.update = function() {
			_update();
		};


		var _createBackgroundColor = function() {
			//Set the background color of the stage to a light blue color
			game.stage.backgroundColor = '#aaaaaa';
		};

		var _createPhysicsStream = function() {
			game.physics.startSystem(Phaser.Physics.ARCADE);
		};

		var _loadNextState = function() {
			game.state.start('load');
		};

		var _prepareForMobile = function() {
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
		}


	};

	Boot.prototype = Object.create(Zephyr.states.__state__.prototype);

	window.states.boot = Boot;

})();
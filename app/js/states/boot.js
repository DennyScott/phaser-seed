var state = require('../core/core.js').state;
var Stats = require('Stats');

class Boot extends state {

	constructor() {
		super()
	};

	preload() {
		super.preload();
		Phaser = window.Phaser || {};
		game = window.game || {};

		//Load the image
		game.load.image('progressBar', 'assets/images/progressBar.png');
	};

	create() {
		super.create();
		this._showStats();
		this._createBackgroundColor();
		this._createPhysicsStream();
		this._prepareForMobile();
		this._loadNextState();
	};

	update() {
		super.update();
	};

	_showStats() {
		var stats = new Stats();
		console.log(stats);

		stats.setMode(0);

		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';

		document.body.appendChild(stats.domElement);

		setInterval(function() {
			stats.begin();
			stats.end();
		}, 1000 / 60);

	}


	_createBackgroundColor() {
		//Set the background color of the stage to a light blue color
		game.stage.backgroundColor = '#aaaaaa';
	};

	_createPhysicsStream() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
	};

	_loadNextState() {
		game.state.start('load');
	};

	_prepareForMobile() {
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
module.exports = Boot;
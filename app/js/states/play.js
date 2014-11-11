	var gameObjectManager = require('../core/core.js').gameObjectManager; 
	var state = require('../core/core.js').state;
	var player = require('../gameObjects/player.js');

	class Play extends state {
		
		constructor() {
			super();
			this.gameObjectManager = undefined;
		};

		preload() {
			super.preload();
			game = window.game || {};
			this.gameObjectManager = gameObjectManager(game);
		};

		create() {
			super.create();
			var _player = player(game.world.centerX, game.world.centerY);
			this.gameObjectManager.add('player', _player);
			console.log(this.gameObjectManager);

		};

		update() {
			super.update();
			this.gameObjectManager.update();
		};
	};

	module.exports = Play;


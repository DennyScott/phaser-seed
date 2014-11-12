	var gameObjectManager = require('../core/core.js').gameObjectManager; 
	var state = require('../core/core.js').state;
	var player = require('../gameObjects/player.js');
	var loki = require('loki');

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
			
			// var db = new loki('loki.json');
			// var children = db.addCollection('children');
			// children.insert({name:"denny"});
			// console.log(children.get(1));

		};

		update() {
			super.update();
			this.gameObjectManager.update();
		};
	};

	module.exports = Play;
	var gameObjectManager = require('../core/core.js').gameObjectManager; 
	var state = require('../core/core.js').state;
	var player = require('../gameObjects/player.js');
	console.log(player);

	var Play = function() {
		var _this = this;
		this.gameObjectManager = undefined;

		var _constructor = function() {
			state.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function() {
			_preload();
			game = window.game || {};
			_this.gameObjectManager = gameObjectManager(game);
		};

		this.create = function() {
			_create();
			var _player = player(game.world.centerX, game.world.centerY);
			_this.gameObjectManager.add('player', _player);

		};

		this.update = function() {
			_update();
			_this.gameObjectManager.update();
		};
	};

	Play.prototype = Object.create(state.prototype);

	module.exports = Play;


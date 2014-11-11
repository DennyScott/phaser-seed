(function() {
	var Zephyr = window.Zephyr || {};
	var game;

	var Play = function() {
		var _this = this;
		this.gameObjectManager = undefined;

		var _constructor = function() {
			window.Zephyr.states.__state__.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function() {
			_preload();
			game = window.game || {};
			_this.gameObjectManager = Zephyr.managers.add.gameObjectManager(game);
		};

		this.create = function() {
			_create();
			var player = game.objects.add.player(game.world.centerX, game.world.centerY);
			_this.gameObjectManager.add('player', player);

		};

		this.update = function() {
			_update();
			_this.gameObjectManager.update();
		};
	};

	Play.prototype = Object.create(Zephyr.states.__state__.prototype);

	window.states.play = Play;

})();
(function() {
	var Zephyr = window.Zephyr || {};
	var game;

	var Play = function() {
		var _this = this;
		this.player = undefined;

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
		};

		this.create = function() {
			_create();
			_this.player = game.objects.add.player(game.world.centerX, game.world.centerY);
		};

		this.update = function() {
			_update();
			_this.player.update();
		};
	};

	Play.prototype = Object.create(Zephyr.states.__state__.prototype);

	window.states.play = Play;

})();
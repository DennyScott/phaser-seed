(function() {
	var Boot = function(){
		var _this = this;

		var _constructor = function(){
			window.Zephyr.states.__state__.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function(){
			_this._preload();
		};

		this.create = function(){
			_this._create();
			game.state.start('load');
		}

		this.update = function() {
			_this.update();
		}
	};

	Boot.prototype = Object.create(window.Zephyr.states.__state__.prototype);

	var game = window.game || {};
	var game.states = game.states || {};
	var game.states.boot = Boot;

})();
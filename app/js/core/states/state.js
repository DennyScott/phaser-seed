(function() {
	var Zephyr = window.Zephyr || {};

	var State = function() {
		var _constructor = function() {

		};

		this.preload = function() {
		};

		this.create = function() {

		};

		this.update = function() {

		};

		_constructor();
	};

	Zephyr.states = Zephyr.states || {};
	Zephyr.states.__state__ = State;
	window.states = window.states || {}; //This is for all extending classes to not have to include this line
})();
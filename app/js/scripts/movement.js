(function() {
	var Zephyr = window.Zephyr || {};
	var game = window.game || {};
	var _ = window._ || {};
	

	var Movement = function() {

	};

	Movement.prototype = Object.call(Zephyr.component.scriptBehaviour.prototype);

	game.scripts.movement = Movement;

})();
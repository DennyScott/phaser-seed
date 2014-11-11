(function() {
	var Zephyr = window.Zephyr || {};
	var game = window.game || {};
	// var _ = window._ || {};


	var Movement = function(speed) {
		var _this = this;
		this.speed = 2;

		var _constructor = function(speed) {
			Zephyr.component.scriptBehaviour.call(_this, game);
		};

		_constructor(speed);

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;
		var _destroy = _this.destroy;


		/**
		 * Creates the inputs that a user can use to traverse the game world
		 * @return {void} No return value
		 */
		var createKeyInputs = function() {
			this.cursor = game.input.keyboard.createCursorKeys();

			//Captures key buttons so that the browser does not
			game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT])

			this.wasd = {
				up: game.input.keyboard.addKey(Phaser.Keyboard.W),
				left: game.input.keyboard.addKey(Phaser.Keyboard.A),
				right: game.input.keyboard.addKey(Phaser.Keyboard.D)
			}
		};
	};

	Movement.prototype = Object.call(Zephyr.component.scriptBehaviour.prototype);

	game.scripts = game.scripts || {};

	game.scripts.movement = Movement;

})();
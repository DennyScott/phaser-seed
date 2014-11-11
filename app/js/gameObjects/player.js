(function() {

	var game = window.game || {};
	var Zephyr = window.Zephyr || {};
	/**
	 * Player Class
	 */
	var Player = function() {
		var _this = this;
		this.texture = 'player';

		/**
		 * Constructor
		 * @param  {String} name Players Name
		 * @param  {int} x    The X coordinate to place text at
		 * @param  {int} y    The Y coordinate to place text at
		 */
		var _constructor = function() {
			Zephyr.gameObject.call(_this, game, 'player');
			_this.addComponent(new game.scripts.movement(_this), 'movement');
		};

		_constructor(); //Call constructor

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;
		var _destroy = _this.destroy;

		this.preload = function() {
			_preload();
		};

		this.create = function(x, y) {
			_create();
			_this.sprite = game.add.sprite(x, y, _this.texture);
			_this.sprite.scale.x = 0.2;
			_this.sprite.scale.y = 0.2;
			_this.sprite.anchor.setTo(0.5, 0.5);

			//Tell Phaser that the player will use the Arcade physics engine
			game.physics.arcade.enable(_this.sprite);
		};

		this.update = function() {
			_update();
		};

		this.destroy = function() {
			_destroy();
		};


	};

	Player.prototype = Object.create(Zephyr.gameObject.prototype);


	game = game || {};
	game.objects = game.objects || {};
	game.objects.add = game.objects.add || {};
	game.player = Player; //Attach to objects scope
	game.objects.add.player = function(x, y) {
		var player = new Player();
		player.preload();
		player.create(x, y);
		return player;
	};

})();
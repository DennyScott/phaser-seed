(function() {

	var game = window.game || {};
	var Phaser = window.Phaser || {};
	/**
	 * Player Class
	 */
	var Player = function() {
		var _this = this;
		this.sprite = undefined;
		this.texture = 'player';

		/**
		 * Constructor
		 * @param  {String} name Players Name
		 * @param  {int} x    The X coordinate to place text at
		 * @param  {int} y    The Y coordinate to place text at
		 */
		var _constructor = function() {
		};

		this.preload = function() {

		};

		this.create = function(x, y) {
			this.sprite = game.add.sprite(x, y, texture);
			this.sprite.scale.x = 0.2;
			this.sprite.scale.y = 0.2;
		};

		this.update = function() {

		};


		_constructor(); //Call constructor
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
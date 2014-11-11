var gameObject = require('../core/core.js').gameObject;
var movement = require('../scripts/movement.js');

	/**
	 * Player Class
	 */
	class Player extends gameObject {

		/**
		 * Constructor
		 * @param  {String} name Players Name
		 * @param  {int} x    The X coordinate to place text at
		 * @param  {int} y    The Y coordinate to place text at
		 */
		constructor() {
			super(game, 'player');
			this.addComponent(new movement(this), 'movement');
			this.texture = 'player';
		};

		preload() {
			super.preload();
		};

		create(x, y) {
			super.create();
			this.sprite = game.add.sprite(x, y, this.texture);
			this.sprite.scale.x = 0.2;
			this.sprite.scale.y = 0.2;
			this.sprite.anchor.setTo(0.5, 0.5);
			//Tell Phaser that the player will use the Arcade physics engine
			game.physics.arcade.enable(this.sprite);
		};

		update() {
			super.update();
		};

		destroy() {
			super.destroy();
		};
	};

	module.exports = function(x, y) {
		var player = new Player();
		player.preload();
		player.create(x, y);
		return player;
	};

(function() {
	var Zephyr = window.Zephyr || {};
	var game = window.game || {};
	// var _ = window._ || {};


	var Movement = function(gameObject, speed) {
		var _this = this;
		this.speed = 2;

		var _constructor = function(gameObject, speed) {
			Zephyr.component.scriptBehaviour.call(_this, game, gameObject);
		};

		_constructor(gameObject, speed);

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;
		var _destroy = _this.destroy;

		/**
		 * This method can be extended, and will load before the state starts
		 */
		this.preload = function() {
			_preload();
		};

		/**
		 * This method can be extended, and will be called when the object is created
		 */
		this.create = function() {
			_create();
			_createKeyInputs();
		};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		this.update = function() {
			_update();
			_movePlayer();
		};

		this.destory = function() {
			destroy();
		};

		/**
		 * Creates the inputs that a user can use to traverse the game world
		 * @return {void} No return value
		 */
		var _createKeyInputs = function() {
			this.cursor = game.input.keyboard.createCursorKeys();

			//Captures key buttons so that the browser does not
			game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT])

			this.wasd = {
				up: game.input.keyboard.addKey(Phaser.Keyboard.W),
				left: game.input.keyboard.addKey(Phaser.Keyboard.A),
				right: game.input.keyboard.addKey(Phaser.Keyboard.D),
				down: game.input.keyboard.addKey(Phaser.Keyboard.S)
			}
		};

		/**
		 * Used for converting user inputs to moving the physical player
		 * @return {[type]} [description]
		 */
		var _movePlayer = function() {
			//If the left arrow key is pressed
			if (this.cursor.left.isDown || this.wasd.left.isDown) {
				//Move the player to the left
				gameObject.sprite.body.velocity.x = -200;
				// this.player.animations.play('left'); //Start the left animation
			}

			//If the right arrow is pressed
			else if (this.cursor.right.isDown || this.wasd.right.isDown) {
				//Move the player down
				gameObject.sprite.body.velocity.x = 200;
				// this.player.animations.play('right'); //Start the right animation
			}

			else {
				gameObject.sprite.body.velocity.x = 0;
			}

			//If the down arrow is pressed
			if (this.cursor.down.isDown || this.wasd.down.isDown) {
				//Move the player to the right
				gameObject.sprite.body.velocity.y = 200;
				// this.player.animations.play('right'); //Start the right animation
			}

			//If the up arrow is pressed
			else if (this.cursor.up.isDown || this.wasd.up.isDown) {
				//Move the player up
				gameObject.sprite.body.velocity.y = -200;
				// this.player.animations.play('right'); //Start the right animation
			}

			//If neither the right or left arrow key is pressed
			else {
				//Stop the player
				gameObject.sprite.body.velocity.y = 0;
				// this.player.animations.stop(); //Stop all animations
				// this.player.frame = 0 //Set the splayer to fram 0, which is stand still
			}

			// //If the up arrow key is pressed and the player is touching the ground
			// if ((this.cursor.up.isDown || this.wasd.up.isDown) && this.player.body.onFloor()) {
			// 	//Move the player upward (jump)
			// 	this.player.body.velocity.y = -320;
			// 	this.jumpSound.play();
			// }
		};
	};

	Movement.prototype = Object.call(Zephyr.component.scriptBehaviour.prototype);

	game.scripts = game.scripts || {};

	game.scripts.movement = Movement;

})();
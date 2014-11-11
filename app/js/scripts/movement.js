var scriptBehaviour = require('../core/core.js').scriptBehaviour;

class Movement extends scriptBehaviour{
	

	 constructor(gameObject, speed) {
		super(game, gameObject);
		this.speed = 2;
		this.cursor = undefined;
		this.wasd = undefined;
	};

	/**
	 * This method can be extended, and will load before the state starts
	 */
	preload() {
		super.preload();
	};

	/**
	 * This method can be extended, and will be called when the object is created
	 */
	create() {
		super.create();
		this._createKeyInputs();
	};

	/**
	 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
	 */
	update() {
		super.update();
		this._movePlayer();
	};

	destory() {
		super.destroy();
	};

	/**
	 * Creates the inputs that a user can use to traverse the game world
	 * @return {void} No return value
	 */
	_createKeyInputs() {
		this.cursor = game.input.keyboard.createCursorKeys();

		//Captures key buttons so that the browser does not
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);

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
	_movePlayer() {
		//If the left arrow key is pressed
		if (this.cursor.left.isDown || this.wasd.left.isDown) {
			//Move the player to the left
			this.gameObject.sprite.body.velocity.x = -200;
			// this.player.animations.play('left'); //Start the left animation
		}

		//If the right arrow is pressed
		else if (this.cursor.right.isDown || this.wasd.right.isDown) {
			//Move the player down
			this.gameObject.sprite.body.velocity.x = 200;
			// this.player.animations.play('right'); //Start the right animation
		} else {
			this.gameObject.sprite.body.velocity.x = 0;
		}

		//If the down arrow is pressed
		if (this.cursor.down.isDown || this.wasd.down.isDown) {
			//Move the player to the right
			this.gameObject.sprite.body.velocity.y = 200;
			// this.player.animations.play('right'); //Start the right animation
		}

		//If the up arrow is pressed
		else if (this.cursor.up.isDown || this.wasd.up.isDown) {
			//Move the player up
			this.gameObject.sprite.body.velocity.y = -200;
			// this.player.animations.play('right'); //Start the right animation
		}

		//If neither the right or left arrow key is pressed
		else {
			//Stop the player
			this.gameObject.sprite.body.velocity.y = 0;
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

module.exports = Movement;
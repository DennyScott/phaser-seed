var scriptBehaviour = require('../core/core.js').scriptBehaviour;

/**
 * The ClickMovement class will move the objects this script is attached to, to the point clicked on the map.  At the time of writing this
 * comment, pathfinding has not been included yet.
 * @class ArrowMovement
 */
class ClickMovement extends scriptBehaviour {

	/**
	 * gameobject and game will be passed to the super class, and variables created inside this contructor
	 * @constructor
	 */
	constructor(gameObject, speed) {
		super(game, gameObject);
		this.speed = 200; //The speed at which the player will move at.
	};

	/**
	 * Called when the script is first loaded on an object
	 * @method preload
	 */
	preload() {
		super.preload();
	};

	/**
	 * Called when the script is loaded on an object, after preload
	 * @method create
	 */
	create() {
		super();
		this._createKeyInputs();
	};

	/**
	 * Will be called every frame after the create method is called.  Be causious to not put to much into this method.
	 * @method update
	 */
	update() {
		super();
		this._movePlayer();
	};

	/**
	 * Called when an object is destoryed
	 * @method destroy
	 */
	destory() {
		super();
	};

	/**
	 * Creates the inputs that a user can use to traverse the game world
	 * @method _createKeyInputs
	 */
	_createKeyInputs() {
		this.cursor = game.input.keyboard.createCursorKeys();

		//Captures key buttons so that the browser does not
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);

		//Maps directions to the WASD buttons
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D),
			down: game.input.keyboard.addKey(Phaser.Keyboard.S)
		}
	};

	/**
	 * Used for converting user inputs to moving the physical player through velocity
	 * @method _movePlayer
	 */
	_movePlayer() {
		//If the left arrow key is pressed
		if (this.cursor.left.isDown || this.wasd.left.isDown) {
			//Move the player to the left
			this.gameObject.sprite.body.velocity.x = -1 * this.speed;
		}

		//If the right arrow is pressed
		else if (this.cursor.right.isDown || this.wasd.right.isDown) {
			//Move the player down
			this.gameObject.sprite.body.velocity.x = this.speed;
		} else {
			this.gameObject.sprite.body.velocity.x = 0;
		}

		//If the down arrow is pressed
		if (this.cursor.down.isDown || this.wasd.down.isDown) {
			//Move the player to the right
			this.gameObject.sprite.body.velocity.y = this.speed;
		}

		//If the up arrow is pressed
		else if (this.cursor.up.isDown || this.wasd.up.isDown) {
			//Move the player up
			this.gameObject.sprite.body.velocity.y = -1 * this.speed;
		}

		//If neither the right or left arrow key is pressed
		else {
			//Stop the player
			this.gameObject.sprite.body.velocity.y = 0;
		}
	};
};

module.exports = ClickMovement;
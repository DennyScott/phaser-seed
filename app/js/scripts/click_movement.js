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
		this.movementTween = undefined; //Used to keep track of if the player is currently moving
	};

	/**
	 * Called when the script is first loaded on an object
	 * @method preload
	 */
	preload() {
		super();
	};

	/**
	 * Called when the script is loaded on an object, after preload
	 * @method create
	 */
	create() {
		super();
		game.input.onDown.add(this._movePlayer, this);
	};

	/**
	 * Will be called every frame after the create method is called.  Be causious to not put to much into this method.
	 * @method update
	 */
	update() {
		super();
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
	 * @method _checkPointerInputs
	 */
	_checkPointerInputs() {
		if (game.input.activePointer.isDown) {
			this._movePlayer();
		}
	};

	/**
	 * Used for converting user inputs to moving the physical player through velocity
	 * @method _movePlayer
	 */
	_movePlayer(pointer) {

		if (this.movementTween && this.movementTween.isRunning) {
			this.movementTween.stop();
		}

		// sprite.rotation = game.physics.angleToPointer(sprite, pointer);

		//  300 = 300 pixels per second = the speed the sprite will move at, regardless of the distance it has to travel
		var duration = (game.physics.arcade.distanceToPointer(this.gameObject.sprite, pointer) / this.speed) * 1000;

		this.movementTween = game.add.tween(this.gameObject.sprite).to({
			x: pointer.x,
			y: pointer.y
		}, duration, Phaser.Easing.Linear.None, true);
	};
};

module.exports = ClickMovement;
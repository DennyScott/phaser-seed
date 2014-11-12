var scriptBehaviour = require('../core/core.js').scriptBehaviour;


class ActionItem extends scriptBehaviour {


	constructor(gameObject, speed) {
		super(game, gameObject);
		this.actionDistance = 200; //The speed at which the player will move at
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
};

module.exports = ArrowMovement;
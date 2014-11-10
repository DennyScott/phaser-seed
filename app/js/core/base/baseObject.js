(function() {
	 window.Zephyr = window.Zephyr || {};
	 var Zephyr = window.Zephyr;

	/**
	 * The BaseObject class is the inherited class most other scripts that involve in game activity will inherit from.  It contains the required preload, create, update
	 * and destroy methods that are needed for other objects.
	 *
	 * @class  BaseObject
	 */
	var BaseObject = function(game) {
		this.game;

		/**
		 * The base constructor for this class, this will store a variable called game into an attribute called game.
		 *
		 * @constructor
		 * @param {Phaser.Game} game The game world in which this object will exist
		 */
		var _constructor = function(game) {
			this.game = game;
		};

		/**
		 * This method can be extended, and will load before the state starts
		 *
		 * @method preload
		 */
		this.preload = function() {

		};

		/**
		 * This method can be extended, and will be called when the object is created
		 *
		 * @method create
		 */
		this.create = function() {

		};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 *
		 * @method update
		 */
		this.update = function() {

		};

		/**
		 * This method can be extended, and will destroy the object
		 *
		 * @method destroy
		 */
		this.destroy = function() {

		};

		_constructor(game);
	};
	Zephyr.base = Zephyr.base || {};
	Zephyr.base.__baseObject__ = BaseObject;

})();
(function() {
	var Zephyr = window.Zephyr || {};
	
	/**
	 * The Component class is used for items that will be attached to a Game Object.  These include things like scripts.
	 *
	 * @class Component
	 */
	var Component = function(game) {
		var _this = this;

		/**
		 * The constructor for the Component, this will also call the super Constructor
		 *
		 * @constructor
		 * @param {Phaser.Game} game The game object in which this component will exist
		 */
		var _constructor = function(game) {
			Zephyr.base.__baseObject__.call(_this, game);
		};

		_constructor(game);

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
		};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		this.update = function() {
			_update();
		};

		this.destory = function() {
			destroy();
		};
	};

	//Inherit Base Object
	Component.prototype = Object.create(Zephyr.base.__baseObject__.prototype);

	Zephyr.component = Zephyr.component || {};
	Zephyr.component.__component__ = Component;
})();
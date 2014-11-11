
	/**
	 * BaseManager will contain all objects that are being used
	 * in the current state.  It can be used to store objects and then
	 * retrieve using the key and/or tags.  This will also export the module.
	 *
	 * @class BaseManager
	 */
	var BaseManager = function(game) {
		this.game = undefined;
		var _this = this;

		var _constructor = function(game) {
			_this.game = game;
		};

		_constructor(game);

		/**
		 * This method can be extended, and will load before the state starts
		 */
		this.preload = function() {};

		/**
		 * This method can be extended, and will be called when the object is created
		 */
		this.create = function() {};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		this.update = function() {};

		this.destory = function() {};
	};

	module.exports = BaseManager;
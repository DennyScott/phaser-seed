
	/**
	 * BaseManager will contain all objects that are being used
	 * in the current state.  It can be used to store objects and then
	 * retrieve using the key and/or tags.  This will also export the module.
	 *
	 * @class BaseManager
	 */
	class BaseManager {
		constructor(game) {
			this.game = game;
		};

		/**
		 * This method can be extended, and will load before the state starts
		 */
		preload() {};

		/**
		 * This method can be extended, and will be called when the object is created
		 */
		create() {};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		update() {};

		destory() {};
	};

	module.exports = BaseManager;
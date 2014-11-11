var baseObject = require('../base/baseObject.js');
	/**
	 * The Component class is used for items that will be attached to a Game Object.  These include things like scripts.
	 *
	 * @class Component
	 */
	var Component = function() {
		var _this = this;

		/**
		 * The constructor for the Component, this will also call the super Constructor
		 *
		 * @constructor
		 * @param {Phaser.Game} game The game object in which this component will exist
		 */
		var _constructor = function(game) {
			baseObject.call(_this, game);
		};

		_constructor(game);

		/**
		 * This method can be extended, and will load before the state starts
		 */
		this.preload = function() {

		};

		/**
		 * This method can be extended, and will be called when the object is created
		 */
		this.create = function() {

		};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		this.update = function() {

		};

		this.destory = function() {

		};
	};

	//Inherit Base Object
	Component.prototype = Object.create(baseObject.prototype);

	module.exports = Component;
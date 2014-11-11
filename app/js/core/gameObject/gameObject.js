(function() {
	var Zephyr = window.Zephyr || {};
	var _ = window._ || {};

	/**
	 * Any object found within the scnee is generally going to be a GameObject.  This object stores all attributes needed for the object,
	 * any componenet created by the developer and attached will be stroed here and have all of its function intialised and run, and will store
	 * the sprite for the object to visually appear within the game world.  these can also be used as prefab for other objects to clone from.
	 *
	 * @class GameObject
	 */
	var GameObject = function(game, name, imageKey, frame) {

		var _this = this;
		this.components = {};
		this.sprite = undefined;
		this.name = "";
		this.imageKey = "";
		this.frame = undefined;
		this.tag = undefined;
		this.layer = undefined;
		this.isActive = false;

		/**
		 * The Base Constructor for the GameObject class
		 *
		 * @constructor
		 * @param {Phaser.Game} game The game in which this GameObject exists
		 * @param {string} name The name of this game object
		 * @param {string} imageKey The key for the image to be used for the sprite
		 * @param {int} frame The frame numbers for the passed spritesheet.  Leave undefined if not using a spritesheet.
		 */
		var _constructor = function(game, name, imageKey, frame) {
			Zephyr.gameObject.gameObject.call(_this, game); //Initalizes the BaseObject Super class
			_this.name = name || ""; //The name of the object
			_this.imageKey = imageKey || ""; //The image for the object
			_this.frame = frame || undefined;
		};


		_constructor(game, name, imageKey, frame);

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;
		var _destroy = _this.destroy;

		this.preload = function() {
			_preload();
			_.forEach(_this.components, function(component) {
				//Cycles through each component and preloads it
				component.preload();
			});
		};

		/**
		 * Runs through all of the components of this Game Object and calls thier create functions
		 *
		 * @method create
		 */
		this.create = function() {
			_create();
			if (_this.isActive) {
				_.forEach(_this.components, function(component) {
					component.create();
				});
			}
		};

		/**
		 * Runs through all of the components of this Game Object and calls thier update functions
		 *
		 * @method update
		 */
		this.update = function() {
			_update();
			if (_this.isActive) {
				_.forEach(_this.components, function(component) {
					if (_.isUndefined(component.isEnabled) || component.isEnabled() === true) {
						component.update();
					}

				});
			}
		};

		/**
		 * Destroys the gameObject.  Currently not working.
		 *
		 * @method destroy
		 */
		this.destroy = function() {
			_destroy();
		};

		/**
		 * Adds the passed component to the components object.  If the key already exists, it will be overridden.
		 *
		 * @method addComponent
		 * @param {Component} component The new component to add to the components ditionary
		 * @return {string} the key for the given component
		 */
		this.addComponent = function(component, key) {
			key = key || component.constructor.name;

			_this.components[key] = component;
			return key;
		};

		/**
		 * Removes the passed components from the component dictionary, and returns the component that was removed.
		 *
		 * @method removeComponent
		 * @param {Component} component The component to remove from the components dictionary.
		 * @return {Component} The components that was removed from the components dictionary
		 */
		this.removeComponent = function(component) {
			var key = component.constructor.name;
			var point = _this.components[key];
			return point;
		};

		/**
		 * Calls any function of the passed name in both this object, and all of this objects components
		 *
		 * @method broadcastMessage
		 * @param {string} methodName The method name to call for this object and its components
		 */
		this.broadcastMessage = function(methodName) {
			_.forEach(_this.components, function(component) {
				//Cycles through all keys in the components object
				if (_.isFunction(component[methodName])) {
					//If there is a method of the passed name. it will be called
					component[methodName]();
				}

			});
		};

		/**
		 * Sets if the gameobject is active in the game world, or if does not interact at all with the existing game world.
		 *
		 * @method setActive
		 * @param {Boolean} isActive true if the object needs to be visible and interactable in the existing game world.  Default to true if nothing is passed
		 */
		this.setActive = function(newIsActive) {
			if (_this.isActive !== newIsActive) {
				//If the property isn't changing, nothing needs to happen. If it is changing, run the method
				_this.isActive = newIsActive;
				if (_this.isActive) {
					//If isActive is true, reset the sprites x, y, and health (needed for phaser)
					if (_this.sprite) {
						//Check to see if sprite exists
						if (_this.sprite.reset) {
							_this.sprite.reset(_this.sprite.x, _this.sprite.y, 1);
						}
					}
				} else {
					if (_this.sprite) {
						//Check to see if the sprite exists
						if (_this.sprite.kill) {
							_this.sprite.kill(); //This does not remove the object from memory. Only game world visiblity.
						}
					}
				}
			}
		};
	};


	GameObject.prototype = Object.create(Zephyr.base.__baseObject__.prototype);

	Zephyr.gameObject = GameObject;

})();
var BaseObject = require('../base/baseObject.js');
var Component = require('../component/component.js');
var _ = window._ || {};


/**
 * Any object found within the scnee is generally going to be a GameObject.  This object stores all attributes needed for the object,
 * any componenet created by the developer and attached will be stroed here and have all of its function intialised and run, and will store
 * the sprite for the object to visually appear within the game world.  these can also be used as prefab for other objects to clone from.
 *
 * @class GameObject
 */
class GameObject extends BaseObject {
	

	/**
	 * The Base Constructor for the GameObject class
	 *
	 * @constructor
	 * @param {Phaser.Game} game The game in which this GameObject exists
	 * @param {string} name The name of this game object
	 * @param {string} imageKey The key for the image to be used for the sprite
	 * @param {int} frame The frame numbers for the passed spritesheet.  Leave undefined if not using a spritesheet.
	 */
	constructor(game, name, imageKey, frame) {
		super(game); //Initalizes the BaseObject super class.
		this.components = {}; //The components that belong to this object.
		this.sprite = undefined; //The part that will actually visually appear
		this.name = name; //the name of this object
		this.imageKey = imageKey; //The image for this object
		this.frame = frame || undefined;
		this.tag = undefined; //The tag associated with this class.
		this.layer = undefined;
		this.isActive = true;
		console.log(this);
	}

	/**
	 * Runs all of the components preload functions
	 *
	 * @method preload
	 */
	preload(context) {
		super.preload();
		console.log(context);
		_.forEach(this.components, function(component) {
			//Cycles through each component and preloads it
			component.preload();
		});
	}

	/**
	 * Runs through all of the components of this Game Object and calls thier create functions
	 *
	 * @method create
	 */
	create() {
		super.create();
		if (this.isActive) {
			_.forEach(this.components, function(component) {
				component.create();
			});
		}

	}

	/**
	 * Runs through all of the components of this Game Object and calls thier update functions
	 *
	 * @method update
	 */
	update() {
		super.update();
		if (this.isActive) {
			_.forEach(this.components, function(component) {
				if (_.isUndefined(component.isEnabled) || component.isEnabled() === true) {
					component.update();
				}

			});
		}
	}

	/**
	 * Destroys the gameObject.  Currently not working.
	 *
	 * @method destroy
	 */
	destroy() {
		super.destroy();
		if (_.isFunction(this.sprite.destroy)) {
			this.sprite.destroy();
		}
		_.forEach(this.components, function(value, key) {
			console.log('hit');
			if (_.isFunction(value.destroy)) {
				value.destroy();
			}
			delete this.components[key];
		});
	}

	/**
	 * Adds the passed component to the components object.  If the key already exists, it will be overridden.
	 *
	 * @method addComponent
	 * @param {Component} component The new component to add to the components ditionary
	 * @return {string} the key for the given component
	 */
	addComponent(component, key = component.constructor.name) {
		this.components[key] = component;
		return key;
	}

	/**
	 * Removes the passed components from the component dictionary, and returns the component that was removed.
	 *
	 * @method removeComponent
	 * @param {Component} component The component to remove from the components dictionary.
	 * @return {Component} The components that was removed from the components dictionary
	 */
	removeComponent(component) {
		var key = component.constructor.name;
		var point = this.components[key];
		delete this.components[key];
		return point;
	}

	/**
	 * Calls any function of the passed name in both this object, and all of this objects components
	 *
	 * @method broadcastMessage
	 * @param {string} methodName The method name to call for this object and its components
	 */
	broadcastMessage(methodName) {
		_.forEach(this.components, function(component) {
			//Cycles through all keys in the components object
			if (_.isFunction(component[methodName])) {
				//If there is a method of the passed name. it will be called
				component[methodName]();
			}

		});
	}

	/**
	 * Sets if the gameobject is active in the game world, or if does not interact at all with the existing game world.
	 *
	 * @method setActive
	 * @param {Boolean} isActive true if the object needs to be visible and interactable in the existing game world.  Default to true if nothing is passed
	 */
	setActive(newIsActive = true) {
		if (this.isActive !== newIsActive) {
			//If the property isnt changing, nothing needs to happen.  If it is changing, run the method
			this.isActive = newIsActive;
			if (this.isActive) {
				//If isActive is true,reset the sprites x, y, and health (Needed for Phaser)
				if (this.sprite) {
					// Check to see if the sprite exists
					if (this.sprite.reset) {
						this.sprite.reset(this.sprite.x, this.sprite.y, 1);
					}
				}
			} else {
				if (this.sprite) {
					// Check to see if the sprite exists
					if (this.sprite.kill) {
						this.sprite.kill(); //This does not remove the object from memory, instead it simply removes it from the game world visibly
					}
				}
			}
		}
	}
};

module.exports = GameObject;
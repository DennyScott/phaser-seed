var GameObject = require('../gameObject/gameObject.js');
var baseManager = require('./baseManager.js');
var _ = require('lodash');


/**
 * GameObjectManager will contain all objects that are being used
 * in the current state.  It can be used to store objects and then
 * retrieve using the key and/or tags.  This will also export the module.
 *
 * @class GameObjectManager
 */
class GameObjectManager extends baseManager {



	/**
	 * Basic constuctor for the GameObjectManager class
	 *
	 * @constructor
	 * @param {Phaser.Game} game The game object that this gameManager should exist within
	 */
	constructor(game) {
		super(game);
		this.game = game; //The game this exists within
		this.gameObjects = {}; //This will contain all of the GameObjects, stored unqily in objects with a key.
	}

	/**
	 * Adds a gameObject to the gameObjects associative array.  If another object already has the given key, it will iterate until it finds a non used key value.  Passing an object will
	 * store that gameObject under the given key, passing no object will return a new GameObject/
	 *
	 * @method add
	 * @param {string} key A unique string key to find the given object by
	 * @param {GameObject} object The gameObject to store within the gameObjects dictionary.
	 * @return {string} The gameObject stored in the gameObjects library.
	 */
	add(key, object) {
		if (!_.isUndefined(object) && object instanceof GameObject) {
			if (!_.isUndefined(this.gameObjects[key])) {
				//If an object with the given key already exists within the gameObjects dictionary

				var passed = this.gameObjects[key]; //Used to check if the key already exists
				var i = 0; //Used to concat onto the string to try and find a unique id

				while (!_.isUndefined(passed)) {
					//Iterate through ints until a string is created that is not a key in the gameObject dictionary
					i++;
					passed = this.gameObjects[key + '' + i] //Set passed to the new value to test if this string exists already in the gameObjects dictionary
				}
				key = key + '' + i; //Make key this new string
			}
			this.gameObjects[key] = object; //Set the given key to the passed GameObject
			object.key = key;
			return this.gameObjects[key]; //Return the new key.  If the key didn't exist, this is still your old key
		}
	};


	/**
	 * This method can be extended, and will load before the state starts
	 */
	preload() {
		super();
	};

	/**
	 * This method can be extended, and will be called when the object is created
	 */
	create() {
		super();
	};

	/**
	 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
	 */
	update() {
		super();
		//Cycles through all objects created and stored in the manager, and runs their update functions.
		_.forEach(this.gameObjects, function(value) {
			if (_.isFunction(value.update)) { //checks to see if it has an update function
				value.update();
			}
		});
	};

	destory() {
		super();
	};

	/**
	 * Returns the amount of gameObjects currently stored within the gameObjects dictionary
	 *
	 * @method count
	 * @return {int} The amount of objects stored within the gameObjects dictionary
	 */
	count() {
		return _.size(this.gameObjects);
	}

	/**
	 * Removes the passed keys object from the gameObjects dictionary
	 *
	 * @method remove
	 * @param {string} key The unique key to identify the object to remove
	 * @return {GameObject} Returns the removed GameObject
	 */
	remove(key) {
		var point = this.gameObjects[key];
		if (!_.isUndefined(point)) {
			point.key = undefined;
			if (_.isFunction(point.destroy)) {
				point.destroy();
			}
			delete this.gameObjects[key];
			return point;
		}
		return undefined;
	}

	/**
	 * Finds and returns the first GameObject found that cotains the tag of the attribute passed
	 *
	 * @method findGameObjectByTag
	 * @param {string} tag The tag to find the first GameObject of
	 * @return {GameObject} The first GameObject found that has the given tag
	 */
	findGameObjectByTag(tag) {
		_.forEach(this.gameObjects, function(value) {
			if (!_.isUndefined(value.tag) && value.tag === tag) {
				return value;
			}
		});
	}

	/**
	 * Finds and returns all GameObjects of the passed tag stored within an array
	 *
	 * @method findAllGameObjectsByTag
	 * @param {string} tag The tag to find all objects with that contain the string as a tag
	 * @return {Array} containing all objects that contain the passed tag value as a tag
	 */
	findAllGameObjectsByTag(tag) {
		var objects = []; //This will have objects added to it, and then returned to the user at the end
		_.forEach(this.gameObjects, function(value) {
			if (!_.isUndefined(value.tag) && value.tag === tag) {
				objects.push(value);
			}
		});
		return objects;
	}

};

module.exports = function(game) {
	var manager = new GameObjectManager(game);
	manager.preload();
	manager.create();
	return manager;
}
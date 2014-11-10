(function() {
	
	/**
	 * Used to hold all existing prefabs contained within a scene.  Items added to this manager
	 * do not exist in the scene, but instead exist to create clones of to put in the game world
	 * that share attributes and components.  This is used to simply save time and allow
	 * run time cloning of an object the developer is able to pre-define before runtime.
	 *
	 * @class PrefabManager
	 */
	var PrefabManager = function(game) {

		var _this = this;
		var _game;
		this.gameObjects = {};

		/**
		 * Base Constructor for the PrefabManager class
		 *
		 * @constructor
		 * @param {Phaser.Game} game The game object in which this prefabManager will exist
		 */
		var _constructor = function(game) {
			_game = game;
		};

		/**
		 * Adds a gameObject to the gameObjects associative array.  If another object already has the given key, it will iterate until it finds a non used key value
		 *
		 * @method add
		 * @param {string} key A unique string key to find the given object by
		 * @param {GameObject} object The gameObject to store within the gameObjects dictionary
		 * @return {string} The new key for this object.
		 */
		this.add = function(key, obect) {
			if (typeof _this.gameObjects[key] !== 'undefined') {
				//If an object with the given key already exists within the gameObjects dictionary

				var passed = _this.gameObjects[key]; //Used to check if the key already exists
				var i = 0; //Used to concat onto the string to try and find a unique id

				while (typeof passed !== 'undefined') {
					//Iterate through ints until a string is created that is not a key in the gameobject dictionary
					i++;
					//Set passed to the new value to test if this string exists already in the gameObjects dictionary
					passed = _this.gameObjects[key + '' + i];
				}
				key = key + '' + i; //Make key this new string
			}

			_this.gameObjects[key] = object; //Set te given key to the passed GameObject
			return key; //Return the new key. If the key didn't exist, this is still your old key
		}
		/**
		 * Returns the amount of gameObjects currently stored within the gameObjects dictionary
		 *
		 * @method count
		 * @return {int} The amount of objects stored within the gameObjects dictionary
		 */
		this.count = function() {
			var i = 0;
			for (var objs in _this.gameObjects) {
				i++;
			}
			return i;
		};

		/**
		 * Removes the passed keys object from the gameObjects dictionary
		 *
		 * @method remove
		 * @param {string} key The unique key to identify the object to remove
		 * @return {GameObject} Returns the removed GameObject
		 */
		this.remove = function(key) {
			var point = _this.gameObjects[key]; //Used to return end of function
			delete _this.gameObjects[key]; //Removes reference from prefabManager
			return point;
		};

		_constructor(game);
	};

	var Zephyr = Zephyr || {};
	Zephyr.managers = Zephyr.managers || {};
	Zephyr.managers.prefabManager = PrefabManager;
})();
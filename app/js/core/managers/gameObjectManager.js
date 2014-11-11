(function() {
	var Zephyr = window.Zephyr || {};
	var GameObject = Zephyr.gameObject;
	var _ = window._ || {};
	
	/**
	 * GameObjectManager will contain all objects that are being used
	 * in the current state.  It can be used to store objects and then
	 * retrieve using the key and/or tags.  This will also export the module.
	 *
	 * @class GameObjectManager
	 */
	var GameObjectManager = function(game) {
		this.game = undefined;
		var _this = this;
		this.gameObjects = {}; //This will contain all of the gameobjects, stored unique with a key

		var _constructor = function(game) {
			this.game = game
		};

		/**
		 * Adds a gameObject to the gameObjects associative array.  If another object already has the given key, it will iterate until it finds a non used key value.  Passing an object will
		 * store that gameObject under the given key, passing no object will return a new GameObject/
		 *
		 * @method add
		 * @param {string} key A unique string key to find the given object by
		 * @param {GameObject} object OPTIONAL The gameObject to store within the gameObjects dictionary.  If not passed, a new gameObject will be created
		 * @return {string} The gameObject stored in the gameObjects library.
		 */
		this.add = function(key, object) {
			if (_.isUndefined(object) || object instanceof GameObject) {
				if (!_.isUndefined(_this.gameObjects[key])) {
					//If an object with the given key already exists within the gameObjects dictionary

					var passed = _this.gameObjects[key]; //Used to check if the key already exists
					var i = 0; //Used to concat onto the string to try and find a unique id

					while (!_.isUndefined(passed)) {
						//Iterate through ints until a string is created that is not a key in the gameObject dictionary
						i++;

						//Set Passed to the new value to test if this string exists already in the gameObjects dictionary
						passed = _this.gameObjects[key + '' + i];
					}
					key = key + '' + i;
				}

				_this.gameObjects[key] = object; //Set the given key to the passed Gameobject
				object.key = key;

				//Return the new key. If the key didn't exist, this is still your old key
				return _this.gameObjects[key];
			}
		};

		/**
		 * Returns the amount of gameObjects currently stored within the gameObjects dictionary
		 *
		 * @method count
		 * @return {int} The amount of objects stored within the gameObjects dictionary
		 */
		this.count = function() {
			return _.size(_this.gameObjects);
		};

		/**
		 * Removes the passed keys object from the gameObjects dictionary
		 *
		 * @method remove
		 * @param {string} key The unique key to identify the object to remove
		 * @return {GameObject} Returns the removed GameObject
		 */
		this.remove = function(key) {
			var point = _this.gameObjects[key];
			if (!_.isUndefined(point)) {
				point.key = undefined;
				delete _this.gameObjects[key];
				return point;
			}
			return undefined;
		};

		/**
		 * Finds and returns the first GameObject found that cotains the tag of the attribute passed
		 *
		 * @method findGameObjectByTag
		 * @param {string} tag The tag to find the first GameObject of
		 * @return {GameObject} The first GameObject found that has the given tag
		 */
		this.findGameObjectByTag = function(tag) {
			_.forEach(_this.gameObjects, function (value) {
				if (!_.isUndefined(value.tag) && value.tag === tag) {
					return value;
				}
			});
		};

		/**
		 * Finds and returns all GameObjects of the passed tag stored within an array
		 *
		 * @method findAllGameObjectsByTag
		 * @param {string} tag The tag to find all objects with that contain the string as a tag
		 * @return {Array} containing all objects that contain the passed tag value as a tag
		 */
		this.findAllGameObjectsByTag = function(tag) {
			var objects = []; //This will have objects added to it, and then returned to the user at the end
			_.forEach(_this.gameObjects, function (value) {
				if (!_.isUndefined(value.tag) && value.tag === tag) {
					objects.push(value);
				}
			});
			return objects;
		};

		_constructor(game);
	};

	Zephyr.managers = Zephyr.managers || {};
	Zephyr.managers.gameObjectManager = GameObjectManager;
})();
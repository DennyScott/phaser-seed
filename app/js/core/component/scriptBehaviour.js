var Behaviour = require('./behaviour.js');
var _ = require('lodash');

/**
 * ScriptBehaviour is the base class that every script derives from. ScriptBehaviour adds imporant functions and variables
 * useful for behaviours while scripting.
 *
 */
class ScriptBehaviour extends Behaviour {
	
	constructor(game, gameObject) {
		super(game);
		this._allTimeouts = {}; //Store all single invokes
		this._allIntervals = {}; //Store all invokeRepeatings
		this.onEnable = function() {}; //onEnable trigger function
		this.onDisable = function() {}; //onDisable trigger function
		this.gameObject = gameObject;
	}


	/**
	 * Set the Enabled to the boolean passed through. If true, trigger the onEnable function, if false
	 * trigger the onDisable function.
	 *
	 * @param en bool Enabled or Disabled
	 */
	setEnabled(en) {
		super(en);
		if (this._enabled === true) {
			this.onEnable();
		}

		if (this._enabled === false) {
			this.onDisable();
		}
	}

	/**
	 *  Invoke a Method of ScriptBehaviour to be called after a passed amount of seconds
	 *
	 * @param methodName String: The name of the method to invoke
	 * @param seconds float: The amount of seconds passed before method is called.
	 */
	invoke(methodName, seconds) {

		//Check if method exists before invoke
		if (_.isFunction(_this[methodName])) {
			var currentScript = this;
			//Set a timeout for the method, and store the id
			var timeoutId = setTimeout(function() {
				currentScript[methodName]();
				if (!_.isUndefined(this._allTimeouts[timeoutId])) {
					//remove the id of the timeout from the JSON object
					delete currentScript._allTimeouts[timeoutId];
				}
			}, seconds * 1000);

			//Add the timoutID to the JSON object
			this._allTimeouts[timeoutId] = methodName;
		}
	}

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
	};

	destory() {
		super();
	};

	/**
	 * Get the number of pending timeouts in the _allTimeouts variable. This will count the number
	 * of JSON objects that remain. This will only count single invokes, and not any repeating invokes.
	 *
	 * @return i The number of pending invokes in the JSON object
	 */
	getPendingTimeouts() {
		return _.size(this.allTimeouts);
	}

	/*
	 * Get the number of pending intervals in the _allIntervals variable. This will count the number
	 * of JSON objects that remain. This will only count repeating invokes, and not any single invokes.
	 *
	 * @return i The number of peding invokes in the JSON object.
	 *
	 */
	getPendingIntervals() {
		return _.size(this._allIntervals);
	}

	/**
	 *  Invoke a method of ScriptBehaviour repeated. Each interval is called with a determined amount of seconds.
	 *
	 *  @param methodName String: The name of the method to invokeRepeating
	 *  @param seconds float: The amount of seconds passed before method is called.
	 *
	 */
	invokeRepeating(methodName, seconds) {
		//Check if method exists in ScriptBehaviour
		if (_.isFunction(this[methodName])) {
			var currentScript = this;

			//Set Interval for method, and store the id.
			var intervalId = setInterval(function() {
				currentScript[methodName]();
			}, seconds * 1000);

			//Place the ID in the allIntervals JSON object
			this._allIntervals[intervalId] = methodName;
		}
	}

	/**
	 * Cancel all invokes that are pending. This will cycle through the _allIntervals and _allTimeouts JSON objects,
	 * and cancel any pending invokes within them.
	 *
	 */
	cancelInvokes() {
		//Cancel all Timeouts (Invokes)
		_.forEach(this._allTimeouts, function(component, key) {
			clearTimeout(key);
			delete this._allTimeouts[key];
		});

		//Cancel all Intervals(Invoke Repeating)
		_.forEach(this._allIntervals, function(component, key) {
			clearTimeout(key);
			delete this._allIntervals[key];
		});
	};

	/**
	 * Check if a invoke is pending for the passed method name. We will iterage through _allIntervals and _allTimouts, and see if any
	 * of the stored id's have a methodName of the passed name.
	 *
	 *@param methodName String: Method name to check if there are any invokes pending against
	 */
	isInvoking(methodName) {

		//Check all timeouts
		_.forEach(this._allTimeouts, function(component) {
			if (component === methodName) {
				return true;
			}
		});

		_.forEach(this._allIntervals, function(component) {
			if (component === methodName) {
				return true;
			}
		});

		return false;

	};



};

module.exports = ScriptBehaviour;
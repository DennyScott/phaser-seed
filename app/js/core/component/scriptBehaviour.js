var Behaviour = require('./behaviour.js');

/**
 * ScriptBehaviour is the base class that every script derives from. ScriptBehaviour adds imporant functions and variables
 * useful for behaviours while scripting.
 *
 */
class ScriptBehaviour extends Behaviour {
	constructor(game){
		super(game);
		this._allTimeouts = {}; //Store all single invokes
		this._allIntervals = {}; //Store all invokeRepeatings
		this.onEnable = function(){}; //onEnable trigger function
		this.onDisable = function(){}; //onDisable trigger function
	}

	/**
	 * Set the Enabled to the boolean passed through. If true, trigger the onEnable function, if false
	 * trigger the onDisable function.
	 *
	 * @param en bool Enabled or Disabled
	 */
	setEnabled(en){
		super(en);
		if(this._enabled === true){
			this.onEnable();
		}

		if(this._enabled === false){
			this.onDisable();
		}
	}

	/**
	 *  Invoke a Method of ScriptBehaviour to be called after a passed amount of seconds
	 * 
	 * @param methodName String: The name of the method to invoke
	 * @param seconds float: The amount of seconds passed before method is called.
	 */
	invoke(methodName, seconds){

		//Check if method exists before invoke
		if(typeof this[methodName] === 'function'){
			var currentScript = this;
			//Set a timeout for the method, and store the id
			var timeoutId = setTimeout(function() {
				currentScript[methodName]();
				if(typeof currentScript._allTimeouts[timeoutId] !== 'undefined'){
					//remove the id of the timeout from the JSON object
					delete currentScript._allTimeouts[timeoutId];
				}
			}, seconds * 1000);

			//Add the timoutID to the JSON object
			this._allTimeouts[timeoutId] = methodName;
		}
	}

	/**
	 * Get the number of pending timeouts in the _allTimeouts variable. This will count the number
	 * of JSON objects that remain. This will only count single invokes, and not any repeating invokes. 
	 *
	 * @return i The number of pending invokes in the JSON object
	 */
	getPendingTimeouts() {
		var i = 0;
		for(var key in this._allTimeouts){
			i++;
		}

		return i;
	}


	/*
	 * Get the number of pending intervals in the _allIntervals variable. This will count the number
	 * of JSON objects that remain. This will only count repeating invokes, and not any single invokes.
	 *
	 * @return i The number of peding invokes in the JSON object.
	 *
	 */
	getPendingIntervals() {
		var i = 0;
		for(var key in this._allIntervals){
			i++;
		}

		return i;
	}

	/**
	 *  Invoke a method of ScriptBehaviour repeated. Each interval is called with a determined amount of seconds.
	 *
	 *  @param methodName String: The name of the method to invokeRepeating
	 *  @param seconds float: The amount of seconds passed before method is called.
	 *
	 */
	invokeRepeating(methodName, seconds){
		//Check if method exists in ScriptBehaviour
		if(typeof this[methodName] === 'function'){
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
		//Cancel all Timouts (Invokes)
		for(var key in this._allTimeouts){
			clearTimeout(key);
			delete this._allTimeouts[key];
		}

		//Cancel all Intervals(InvokeRepeating)
		for(var iKey in this._allIntervals){
			clearInterval(iKey);
			delete this._allIntervals[iKey];
		}
	}

	/**
	 * Check if a invoke is pending for the passed method name. We will iterage through _allIntervals and _allTimouts, and see if any
	 * of the stored id's have a methodName of the passed name.
	 *
	 *@param methodName String: Method name to check if there are any invokes pending against
	 */
	isInvoking(methodName){

		//Check all timeouts
		for(var key in this._allTimeouts){
			if(this._allTimeouts[key] === methodName){
				return true;
			}
		}

		//Check all Intervals
		for(var iKey in this._allIntervals){
			if(this._allIntervals[iKey] === methodName){
				return true;
			}
		}

		return false;
	}



}

module.exports = ScriptBehaviour;
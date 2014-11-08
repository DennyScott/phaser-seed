(function() {

	/**
	 * ScriptBehaviour is the base class that every script derives from. ScriptBehaviour adds imporant functions and variables
	 * useful for behaviours while scripting.
	 *
	 */
	var ScriptBehaviour = function() {

		var _this = this;
		this._allTimeouts = {}; //Store all single invokes
		this._allIntervals = {}; //Store all invokeRepeatings
		this.onEnable = function() {}; //onEnable trigger function
		this.onDisable = function() {}; //onDisable trigger function

		var _constructor = function(game) {
			Zephyr.component.behaviour.call(_this, game);
		};

		_constructor(game);
		var _enabled = this.setEnabled

		/**
		 * Set the Enabled to the boolean passed through. If true, trigger the onEnable function, if false
		 * trigger the onDisable function.
		 *
		 * @param en bool Enabled or Disabled
		 */
		this.setEnabled = function(en) {
			_enabled(en);

			if (this._enabled === true) {
				this.onEnable();
			}
		};

		/**
		 *  Invoke a Method of ScriptBehaviour to be called after a passed amount of seconds
		 *
		 * @param methodName String: The name of the method to invoke
		 * @param seconds float: The amount of seconds passed before method is called.
		 */
		this.invoke = function(methodName, seconds) {

			//Check if method exists before invoke
			if (typeof _this[method] === 'function') {

				//Set a timeout for the method, and store the id
				var timeoutId = setTimeout(function() {
					_this[methodName]();
					if (typeof _this._allTimeouts[timeoutId] !== 'undefined') {
						//remove the id of the timeout from the JSON object
						delete _this._allTimeouts[timeoutId];
					}
				}, seconds * 1000);

				//Add the timeoutID to the JSON object
				this._allTimeouts[timeoutId] = methodName;
			}
		};

		/**
		 * Get the number of pending timeouts in the _allTimeouts variable. This will count the number
		 * of JSON objects that remain. This will only count single invokes, and not any repeating invokes.
		 *
		 * @return i The number of pending invokes in the JSON object
		 */
		this.getPendingTimeouts = function() {
			var i = 0;
			for (var key in _this.allTimeouts) {
				i++;
			}

			return i;
		};

		/*
		 * Get the number of pending intervals in the _allIntervals variable. This will count the number
		 * of JSON objects that remain. This will only count repeating invokes, and not any single invokes.
		 *
		 * @return i The number of peding invokes in the JSON object.
		 *
		 */
		this.getPendingIntervals = function() {
			var i = 0;
			for (var key in _this._allIntervals) {
				i++;
			}

			return i;
		};


		/**
		 *  Invoke a method of ScriptBehaviour repeated. Each interval is called with a determined amount of seconds.
		 *
		 *  @param methodName String: The name of the method to invokeRepeating
		 *  @param seconds float: The amount of seconds passed before method is called.
		 *
		 */
		this.invokeRepeating = function(methodName, seconds) {
			//Check if method exists in ScriptBehaviour
			if (typeof _this[methodName] === 'function') {

				//Set interval for Method
				var intervalId = setInterval(function() {
					_this[methodName]();
				}, seconds * 1000);

				//Place the ID in the allIntervals JSON object
				_this.allIntervals[intervalId] = methodName;
			}
		};

		/**
		 * Cancel all invokes that are pending. This will cycle through the _allIntervals and _allTimeouts JSON objects,
		 * and cancel any pending invokes within them.
		 *
		 */
		this.cancelInvokes = function() {

			//Cancel all Timeouts (Invokes)
			for (var key in _this._allTimeouts) {
				clearTimeout(key);
				delete _this._allTimeouts[key];
			}

			//Cancel all Intervals(Invoke Repeating)
			for (var iKey in _this._allIntervals) {
				clearInterval(iKey);
				delete _this._allIntervals[iKey];
			}
		};

		/**
		 * Check if a invoke is pending for the passed method name. We will iterage through _allIntervals and _allTimouts, and see if any
		 * of the stored id's have a methodName of the passed name.
		 *
		 *@param methodName String: Method name to check if there are any invokes pending against
		 */
		this.isInvoking = function(methodName) {

			//Check all timeouts
			for (var key in _this._allTimeouts) {
				if (_this._allTimeouts[key] === methodName) {
					return true;
				}
			}

			//Check all Intervals
			for (var iKey in _this._allIntervals) {
				if (this._allIntervals[iKey] === methodName) {
					return true;
				}
			}

			return false;
		}



	};

	ScriptBehaviour.prototype = Object.call(Zephyr.component.behaviour.prototype);

	Zephyr = Zephyr || {};
	Zephyr.component = Zephyr.component || {};
	Zephyr.component.scriptBehaviour = ScriptBehaviour;

})();
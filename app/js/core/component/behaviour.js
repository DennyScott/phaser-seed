(function() {

	/**
	 * The Behaviour class are Components that can be enabled or disabled.
	 *
	 * @class Behaviour
	 *
	 */
	var Behaviour = function() {
		var _this = this;
		var _enabled = true;


		var _constructor = function(game) {
			Zephyr.component.__component__.call(_this, game);

		};

		/**
		 *Check if the current Behaviour object is enabled.
		 *
		 * @return boolean Is the object enabled
		 */
		this.isEnabled = function() {
			return _this._enabled;
		};

		/**
		 * Set the Behaviour Object as enabled or disabled. A disabled obejct will not update.
		 *
		 * @param en The value to set the enabled or disabled object o.
		 */
		this.setEnabled = function(en) {
			_this._enabled = en;
		}

		_constructor(game);
	};

	Behaviour.prototype = Zephyr.component.__component__.prototype;

	Zephyr = Zephyr || {};
	Zephyr.component = Zephyr.component || {};
	Zephyr.component.behaviour = Behaviour;


})();
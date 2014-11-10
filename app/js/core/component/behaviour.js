(function() {
	var Zephyr = window.Zephyr || {};
	var game = window.game || {};
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
			return _enabled;
		};

		/**
		 * Set the Behaviour Object as enabled or disabled. A disabled obejct will not update.
		 *
		 * @param en The value to set the enabled or disabled object o.
		 */
		this.setEnabled = function(en) {
			_enabled = en;
		};

		_constructor(game);
	};

	Behaviour.prototype = Zephyr.component.__component__.prototype;

	Zephyr.component = Zephyr.component || {};
	Zephyr.component.behaviour = Behaviour;


})();
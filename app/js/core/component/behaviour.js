var component = require('./component.js');
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
			component.call(_this, game);

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

	Behaviour.prototype = component.prototype;

	module.exports = Behaviour;


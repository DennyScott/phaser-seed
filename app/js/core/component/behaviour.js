(function() {
	var Zephyr = window.Zephyr;
	/**
	 * The Behaviour class are Components that can be enabled or disabled.
	 *
	 * @class Behaviour
	 *
	 */
	var Behaviour = function(game) {
		var _this = this;
		var _enabled = true;


		var _constructor = function(game) {
			Zephyr.component.__component__.call(_this, game);
		};

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;
		var _destroy = _this.destroy;

		/**
		 * This method can be extended, and will load before the state starts
		 */
		this.preload = function() {
			_preload();
		};

		/**
		 * This method can be extended, and will be called when the object is created
		 */
		this.create = function() {
			_create();
		};

		/**
		 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
		 */
		this.update = function() {
			_update();
		};

		this.destory = function() {
			destroy();
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
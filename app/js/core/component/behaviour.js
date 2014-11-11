var Component = require('./component.js');

/**
 * The Behaviour class are Components that can be enabled or disabled.
 *
 * @class Behaviour
 *
 */
class Behaviour extends Component {
	constructor(game) {
		super(game);
		this._enabled = true; //Set the inital enable of this object to true
	}

	/**
	 *Check if the current Behaviour object is enabled.
	 *
	 * @return boolean Is the object enabled
	 */
	isEnabled() {
		return this._enabled;
	}

	/**
	 * Set the Behaviour Object as enabled or disabled. A disabled obejct will not update.
	 *
	 * @param en The value to set the enabled or disabled object o.
	 */
	setEnabled(en) {
		this._enabled = en;
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

}

module.exports = Behaviour;
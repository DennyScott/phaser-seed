import {Component} from './component';

/**
 * The Behaviour class are Components that can be enabled or disabled.
 *
 * @class Behaviour
 *
 */
export class Behaviour extends Component {
	constructor(game){
		super(game);
		this._enabled = true;//Set the inital enable of this object to true
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
	setEnabled(en){
		this._enabled = en;
	}


}

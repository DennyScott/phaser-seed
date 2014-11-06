import {BaseObject} from '../base/modules';

/**
 * The Component class is used for items that will be attached to a Game Object.  These include things like scripts.
 *
 * @class Component
 */
export class Component extends BaseObject { 
	/**
	 * The constructor for the Component, this will also call the super Constructor
	 *
	 * @constructor
	 * @param {Phaser.Game} game The game object in which this component will exist
	 */
	constructor(game) {
		super(game);
	}

	/**
	 * This method can be extended, and will load before the state starts
	 */
	preload() {
		//Preload Code goes here
	}

	/**
	 * This method can be extended, and will be called when the object is created
	 */
	create() {
		//Create Code goes here
	}

	/**
	 * This method can be extended, and will be called every frame after the create method is called.  Be causious to not put to much into this method.
	 */
	update() {
		super();
		//Update code goes here
	}

	destroy() {

	}
}

window.Component = Component;

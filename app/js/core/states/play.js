import {Player} from '../gameObject/modules';

class Play {

	preload() {
		this.player = new Player(this);
		this.player.preload();
	}

	create() {
		this.player.create();
	}

	update() {
		this.player.update();
	}

}

export {Play}

import {GameObject} from './modules';

export class Player {
	constructor(game) {
		super(game);
		this.sprite = null;
		this.cursors = null;
	}

	preload() {
		var t = this.game.load.spritesheet('player', 'assets/player2.png', 20, 20);
	}

	create() {
		this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
		this.game.physics.arcade.enable(this.sprite);

		//  Player physics properties. Give the little guy a slight bounce.
		this.sprite.body.bounce.y = 0.2;
		this.sprite.body.gravity.y = 20;
		this.sprite.body.collideWorldBounds = true;

		this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500, 500);
		this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500, 500);

		//  Our two animations, walking left and right.
		//Create the 'right' animation by looping thorugh frames 1 and 2
		this.sprite.animations.add('right', [1, 2], 8, true);
		//Create the 'left' animation by looping the frames 3 and 4
		this.sprite.animations.add('left', [3, 4], 8, true);

		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update() {
		this.sprite.body.velocity.x = 0;

		if (this.cursors.left.isDown) {
			this.sprite.body.velocity.x = -250;

			this.sprite.animations.play('left');
		} else if (this.cursors.right.isDown) {
			this.sprite.body.velocity.x = 250;

			this.sprite.animations.play('right');
		} else {
			this.sprite.animations.stop();
			this.sprite.frame = 0;
		}

		//  Allow the player to jump if they are touching the ground.
		if (this.cursors.up.isDown && this.sprite.body.touching.down) {
			this.sprite.body.velocity.y = -650;
		}
	}
}
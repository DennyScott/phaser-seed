var state = require('../core/core.js').state;

	class Menu extends state {

		constructor() {
			super();
		};

		preload() {
			super.preload();
			Phaser = window.Phaser || {};
			game = window.game || {};
		};

		create() {
			super.create();
			this.createButton();
			this.createNameLabel();
		};

		update() {
			super.update();
		};

		createNameLabel() {
			//Display the name of the game
			var nameLabel = game.add.text(game.world.centerX, -50, 'Donald Dingberg!', {
				font: '90px Geo',
				fill: '#ffffff'
			});
			nameLabel.anchor.setTo(0.5, 0.5);

			//Create a tween on teh label
			game.add.tween(nameLabel).to({
					y: game.world.height * 0.15
				}, 1000).easing(Phaser.Easing.Bounce.Out)
				.start();
		};

		createButton() {
			var startX = game.world.width + 180;
			var endX = game.world.centerX;

			this.nextButton = game.add.button(startX, game.world.height * 0.9, 'nextButton', this.start, this);
			this.nextButton.anchor.setTo(0.5, 0.55);
			var text = 'Start';
			this.nextButton.buttonText = game.add.text(0, 0,
				text, {
					font: '30px Arial',
					fill: '#ffffff',
					align: 'center'
				});
			this.nextButton.buttonText.anchor.setTo(0.5, 0.5);
			this.nextButton.addChild(this.nextButton.buttonText);


			game.add.tween(this.nextButton).to({
				x: endX
			}, 1000, Phaser.Easing.Bounce.Out, true, 500);


			this.nextButton.input.useHandCursor = true; //if you want a hand cursor
		};

		/**
		 * Starts the next state
		 * @return {void} No return value
		 */
		start() {
			//Start the actual game
			game.state.start('play');
		};


	};

	module.exports = Menu;

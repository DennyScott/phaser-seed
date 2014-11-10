(function() {
	var Menu = function() {
		var _this = this;

		var _constructor = function() {
			window.Zephyr.states.__state__.call(_this);
		};

		_constructor();

		var _preload = _this.preload;
		var _create = _this.create;
		var _update = _this.update;

		this.preload = function() {
			_preload();
		};

		this.create = function() {
			_create();
			_this.createButton();
			_this.createNameLabel();
		}

		this.update = function() {
			_update();
		}

		this.createNameLabel = function() {
			//Display the name of the game
			var nameLabel = game.add.text(game.world.centerX, -50, 'Donald Dirkins!', {
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

		this.createButton = function() {
			var startX = game.world.width + 180;
			var endX = game.world.centerX;

			_this.nextButton = game.add.button(startX, game.world.height * 0.9, 'nextButton', _this.start, _this);
			_this.nextButton.anchor.setTo(0.5, 0.55);
			var text = 'Start';
			_this.nextButton.buttonText = game.add.text(0, 0,
				text, {
					font: '30px Arial',
					fill: '#ffffff',
					align: 'center'
				});
			_this.nextButton.buttonText.anchor.setTo(0.5, 0.5);
			_this.nextButton.addChild(_this.nextButton.buttonText);


			game.add.tween(_this.nextButton).to({
				x: endX
			}, 1000, Phaser.Easing.Bounce.Out, true, 500);


			_this.nextButton.input.useHandCursor = true; //if you want a hand cursor
		};

		/**
		 * Starts the next state
		 * @return {void} No return value
		 */
		this.start = function() {
			//Start the actual game
			// game.state.start('play');
			console.log('Start Game!!!');
		};


	};

	Menu.prototype = Object.create(window.Zephyr.states.__state__.prototype);

	window.states.menu = Menu;

})();
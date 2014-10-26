var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
window.game = game;
window.myrenderer = Phaser.Auto;

//Define our 'global' variables
game.global = {
	score: 0
};

//Add all the game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

//Start the 'boot' state
game.state.start('boot');
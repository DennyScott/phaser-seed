var Phaser = window.Phaser || {};
// We initialising Phaser
var game = new Phaser.Game(1000, 680, Phaser.AUTO, 'gameDiv');

//Define our 'global variable'
game.global = {};


//Add all the states
game.state.add('boot', new window.states.boot());
game.state.add('load', new window.states.load());
game.state.add('menu', new window.states.menu());
// game.state.add('play', window.states.playState);
// game.state.add('victory', window.states.victoryState);


//Start the boot state
game.state.start('boot');
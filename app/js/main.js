var Phaser = require('phaser');
// We initialising Phaser
window.game = new Phaser.Game(1000, 680, Phaser.AUTO, 'gameDiv');

//Define our 'global variable'
game.global = {
	"debug" : true
};

var boot = require('./states/boot.js');
var load = require('./states/load.js');
var menu = require('./states/menu.js');
var play = require('./states/play.js');
//Add all the states
game.state.add('boot', new boot());
game.state.add('load', new load());
game.state.add('menu', new menu());
game.state.add('play', new play());

//Start the boot state
game.state.start('boot');


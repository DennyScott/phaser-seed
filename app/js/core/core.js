var gameObject = require('./gameObject/gameObject.js');
var behaviour = require('./component/behaviour.js');
var scriptBehaviour = require('./component/scriptBehaviour.js');
var gameObjectManager = require('./managers/gameObjectManager.js');
var prefabManager = require('./managers/prefabManager.js');
var tagManager = require('./managers/tagManager.js');
var state = require('./states/state.js');

module.exports = {
	gameObject: gameObject,
	behaviour: behaviour,
	scriptBehaviour: scriptBehaviour,
	gameObjectManager: gameObjectManager,
	prefabManager: prefabManager,
	tagManager: tagManager,
	state: state
};
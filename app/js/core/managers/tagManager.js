var gameObject = require('../gameObject/gameObject.js');
var baseManager = require('./baseManager.js');
var _ = window._ || {};

/**
 * Used to store existing tags in, and keep track of data that needs to be associated with the tags.  This is not
 * the place in which items are associated with tags, that is done within the GameObject class.  Instead this
 * is used to simply store all the different tags, as well as some rudementary data that may need to be stored
 * with that tag.  Exports iteself.
 *
 * @class TagManager
 */
class TagManager extends baseManager{
    
    /**
     * Base Contructor for the tagManager class
     *
     * @constructor
     * @param {Phaser.Game} game The game in which this manager exists
     */
    constructor(game) {
        super(game);
        this.game = game;  //The game in which this TagManager exists
        this.tags = {}; //This dictionary of tags that exists within the game
    }

    /**
     * Adds a tag to the tags dictionary with its associated data, and then returns the tag
     *
     * @method add
     * @param {string} tag The tag that is to be added to the tags dictionary
     * @param {Object} data Any sort of data that needs to be stored with the tag
     * @return {String} Returns the tag as a string
     */
    add(tag, data) {
        this.tags[tag] = data;
        return tag;
    }

    /**
     * Removes the passed tag from the tags object, and then returns the associated data
     *
     * @method remove
     * @param {string} tag The tag to remove from the tags dictionary
     * @return {Object} The data associated with the tag passed
     */
    remove(tag) {
        var point = this.tags[tag]; //used to return to the user
        delete this.tags[tag]; //Deletes refrence to tag from the tags dictionary
        return point;
    }

    /**
     * Counts all of the tags found within the tags dictionary
     *
     * @method count
     * @return {int} the amount of tags found within the tags dictionary
     */
    count() {
        return _.size(_this.tags); //Returns the amount of keys found
    }
};

module.exports = TagManager;
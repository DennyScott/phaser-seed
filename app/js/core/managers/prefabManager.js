var GameObject = require('../gameObject/gameObject.js');

/**
 * Used to hold all existing prefabs contained within a scene.  Items added to this manager
 * do not exist in the scene, but instead exist to create clones of to put in the game world
 * that share attributes and components.  This is used to simply save time and allow
 * run time cloning of an object the developer is able to pre-define before runtime.
 *
 * @class PrefabManager
 */
class PrefabManager {

    /**
     * Base Constructor for the PrefabManager class
     *
     * @constructor
     * @param {Phaser.Game} game The game object in which this prefabManager will exist
     */
    constructor(game) {
        this.game = game; //The game in which this manager exists in
        this.gameObjects = {}; //The gameObjects that are prefabs
    }

    /**
     * Adds a gameObject to the gameObjects associative array.  If another object already has the given key, it will iterate until it finds a non used key value
     *
     * @method add
     * @param {string} key A unique string key to find the given object by
     * @param {GameObject} object The gameObject to store within the gameObjects dictionary
     * @return {string} The new key for this object.
     */
    add(key, objects) {
        if (typeof this.gameObjects[key] !== 'undefined') {
            //If an object with the given key already exists within the gameObjects dictionary

            var passed = this.gameObjects[key]; //Used to check if the key already exists
            var i = 0; //Used to concat onto the string to try and find a unique id

            while (typeof passed !== 'undefined') {
                //Iterate through ints until a string is created that is not a key in the gameObject dictionary
                i++;
                passed = this.gameObjects[key + '' + i] //Set passed to the new value to test if this string exists already in the gameObjects dictionary
            }
            key = key + '' + i; //Make key this new string
        }

        this.gameObjects[key] = object; //Set the given key to the passed GameObject
        return key; //Return the new key.  If the key didn't exist, this is still your old key
    }

    /**
     * Returns the amount of gameObjects currently stored within the gameObjects dictionary
     *
     * @method count
     * @return {int} The amount of objects stored within the gameObjects dictionary
     */
    count() {
        var i = 0;
        for (var objs in this.gameObjects) {
            //This is a javascript trick to actually iterate through keys in a dictionary.
            i++
        }
        return i;
    }


    /**
     * Removes the passed keys object from the gameObjects dictionary
     *
     * @method remove
     * @param {string} key The unique key to identify the object to remove
     * @return {GameObject} Returns the removed GameObject
     */
    remove(key) {
        var point = this.gameObjects[key]; //Used to return at end of function
        delete this.gameObjects[key]; //Removes refrence from prefabManager
        return point;
    }
}

module.exports = PrefabManager;
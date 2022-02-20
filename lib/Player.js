"use strict";

const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // This is not following OOP because we are calling a new Potion inside the Player constructor.
    this.inventory = [new Potion('health'), new Potion()];
}
// Get stats
Player.prototype.getStats = function() {
    return {
        potion: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};
// Get inventory
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};
// Get health
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

// Check to see if player is Alive
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    } 
    return true;
}

// Reduce health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;
    if (this.health < 0) {
        this.health = 0;
    }
};
module.exports = Player;
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

Player.prototype.getStats = function() {
    return {
        potion: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;
    if (this.health < 0) {
        this.health = 0;
    }
};
Player.prototype.getHealth = function() {
    return `You're health is now ${this.health}!`;
};

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};
module.exports = Player;
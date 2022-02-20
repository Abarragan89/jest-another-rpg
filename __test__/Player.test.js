"use strict";

const { expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
// anytime we make a new Potion(), this mock data will be used. 
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
});

console.log(new Potion())
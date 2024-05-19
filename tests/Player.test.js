const Player = require('../src/player');
const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

describe('Player.', () => {
    let player;
    let opponent;

    beforeEach(() => {
        player = new Player('real');
        opponent = new Player('computer');
    });

    describe('placeShip()', () => {
        test('should place a ship on players gameboard', () => {
            const ship = new Ship(3);
            expect(player.placeShip(ship, 0, 0, true)).toBe(true);
        });
    });

    describe('attack()', () => {
        test('should return true if attack is successful for real player', () => {
            const ship = new Ship(3);
            opponent.placeShip(ship, 0, 0, true);
            const result = player.attack(opponent, 1, 2);
            expect(result).toBe(true);
        });

        test('should return true if attack is successful for computer', () => {
            const ship = new Ship(3);
            player.placeShip(ship, 0, 0, true);
            const result = opponent.attack(player);
            expect(result).toBe(true);
        })
    });
})
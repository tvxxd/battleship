const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

describe('Gameboard.placeship()', () => {
    test('placeship() should place ship horizontally and return true', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, true);
        expect(result).toBe(true);
    });

    test('placeship() should place ship vertically and return true', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, false);
        expect(result).toBe(true);
    });

    test('placeship() should place the ship horizontally at the specified coordinates', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, true);

        for (let i = 0; i < ship.shipLength; i++) {
            expect(gameboard.grid[1][2 + i]).toBe(ship);
        }
    });

    test('placeship() should place the ship vertically at the specified coordinates', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, false);

        for (let i = 0; i < ship.shipLength; i++) {
            expect(gameboard.grid[1 + i][2]).toBe(ship);
        }
    });

})
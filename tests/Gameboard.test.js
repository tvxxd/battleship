const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

describe('Gameboard.placeship()', () => {
    test('placeship() should place ship horizontally and return true', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, true);
        // expect(result).toBe(true);

        // check if the ship is placed horizontally at the specified coordinates
        for (let i = 0; i < ship.length; i++) {
            expect(gameboard.grid[1][2 + i]).toBe(ship);
        }
    });

})
const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

describe('Gameboard.placeShip()', () => {
    test('placeShip() should place ship horizontally and return true', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, true);
        expect(result).toBe(true);
    });

    test('placeShip() should place ship vertically and return true', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, false);
        expect(result).toBe(true);
    });

    test('placeShip() should place the ship horizontally at the specified coordinates', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, true);

        for (let i = 0; i < ship.shipLength; i++) {
            expect(gameboard.grid[1][2 + i]).toBe(ship);
        }
    });

    test('placeShip() should place the ship vertically at the specified coordinates', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, false);

        for (let i = 0; i < ship.shipLength; i++) {
            expect(gameboard.grid[1 + i][2]).toBe(ship);
        }
    });

    test('placeShip() should add a ship to ships array', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);

        const result = gameboard.placeShip(ship, 1, 2, false);

        expect(gameboard.ships).toContain(ship);
    });

    test('placeShip() should return false if ship does not fit horizontally', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(5);

        const result = gameboard.placeShip(ship, 0, 7, true);

        expect(result).toBe(false);

    });

    test('placeShip() should return false if ship does not fit vertically', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(5);

        const result = gameboard.placeShip(ship, 23, 25, false);

        expect(result).toBe(false);

    });

    test('verify ship is not placed at any coordinates', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(5);

        const result = gameboard.placeShip(ship, 8, 5, false);

        expect(gameboard.grid.every(row => row.every(cell => cell === null))).toBe(true);

    });

    test('placeShip() should return false if ship merges with existing ships horizontally', () => {
        const gameboard = new Gameboard();
        const ship1 = new Ship(3);
        const ship2 = new Ship(4);

        gameboard.placeShip(ship1, 0, 0, true);

        const result = gameboard.placeShip(ship2, 0, 1, true);

        expect(result).toBe(false);
    });

    test('placeShip() should return false if ship merges with existing ships vertically', () => {
        const gameboard = new Gameboard();
        const ship1 = new Ship(3);
        const ship2 = new Ship(4);

        gameboard.placeShip(ship1, 0, 0, false);

        const result = gameboard.placeShip(ship2, 1, 0, false);

        expect(result).toBe(false);
    });
})
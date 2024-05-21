const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');
const Player = require('../src/player')

describe('Gameboard()', () => {
    describe('placeShip()', () => {
        test('should place ship horizontally and return true', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            const result = gameboard.placeShip(ship, 1, 2, true);
            expect(result).toBe(true);
        });

        test('should place ship vertically and return true', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            const result = gameboard.placeShip(ship, 1, 2, false);
            expect(result).toBe(true);
        });

        test('should place the ship horizontally at the specified coordinates', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            const result = gameboard.placeShip(ship, 1, 2, true);

            for (let i = 0; i < ship.shipLength; i++) {
                expect(gameboard.grid[1][2 + i]).toBe(ship);
            }
        });

        test('should place the ship vertically at the specified coordinates', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            const result = gameboard.placeShip(ship, 1, 2, false);

            for (let i = 0; i < ship.shipLength; i++) {
                expect(gameboard.grid[1 + i][2]).toBe(ship);
            }
        });

        test('should add a ship to ships array', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            const result = gameboard.placeShip(ship, 1, 2, false);

            expect(gameboard.ships).toContain(ship);
        });

        test('should return false if ship does not fit horizontally', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(5);

            const result = gameboard.placeShip(ship, 0, 7, true);

            expect(result).toBe(false);

        });

        test('should return false if ship does not fit vertically', () => {
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

        test('should return false if ship merges with existing ships horizontally', () => {
            const gameboard = new Gameboard();
            const ship1 = new Ship(3);
            const ship2 = new Ship(4);

            gameboard.placeShip(ship1, 0, 0, true);

            const result = gameboard.placeShip(ship2, 0, 1, true);

            expect(result).toBe(false);
        });

        test('should return false if ship merges with existing ships vertically', () => {
            const gameboard = new Gameboard();
            const ship1 = new Ship(3);
            const ship2 = new Ship(4);

            gameboard.placeShip(ship1, 0, 0, false);

            const result = gameboard.placeShip(ship2, 1, 0, false);

            expect(result).toBe(false);
        });
    })

    describe('receiveAttack()', () => {
        test('should return true if the target takes a hit', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            gameboard.placeShip(ship, 0, 0, true);

            const attack = gameboard.receiveAttack(0, 2);

            expect(attack).toBe(true);
            expect(ship.hits).toBe(1);
            expect(gameboard.grid[0][2]).toBe('hit');
        });

        test('should return false if attack is out of grid', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            gameboard.placeShip(ship, 0, 0, true);

            const attack = gameboard.receiveAttack(-10, 10);
            expect(attack).toBe(false);
        });

        test('should return true if the shot is missed and is in grid boundries', () => {
            const gameboard = new Gameboard();

            // this true indicates successful attack
            const attack = gameboard.receiveAttack(0, 5);
            expect(attack).toBe(true);
            expect(gameboard.missedShots).toContain('0,5');
        });

        test('should return false if already attacked', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            gameboard.placeShip(ship, 0, 0, true);

            gameboard.receiveAttack(0, 2);
            const attack = gameboard.receiveAttack(0, 2);

            expect(attack).toBe(false);
        });

        test('should sink the ship after enough hits (ship.hits >= shipLength )', () => {
            const gameboard = new Gameboard();
            const ship = new Ship(3);

            gameboard.placeShip(ship, 0, 0, true);

            gameboard.receiveAttack(0, 0);
            gameboard.receiveAttack(0, 1);
            gameboard.receiveAttack(0, 2);

            expect(ship.isSunk()).toBe(true);
        });
    });

    describe('allShipsSunk()', () => {
        test('should check if all ships are sunk', () => {
            const gameboard = new Gameboard();
            const ship1 = new Ship(2);
            const ship2 = new Ship(2);

            gameboard.placeShip(ship1, 0, 1, true);
            gameboard.placeShip(ship2, 1, 0, true);

            // sink both ships
            gameboard.receiveAttack(0, 1);
            gameboard.receiveAttack(0, 2);
            gameboard.receiveAttack(1, 0);
            gameboard.receiveAttack(1, 1);

            expect(gameboard.allShipsSunk()).toBe(true);
        });
    })

    describe('placeShip() for computer', () => {
        let computerPlayer;

        beforeEach(() => {
            computerPlayer = new Player('computer');
        });

        test('should place the correct number of ships on the gameboard', () => {
            const placedShips = computerPlayer.gameboard.ships.length;
            console.log(computerPlayer.gameboard.grid);
            expect(placedShips).toBe(4);
        });

    })
})
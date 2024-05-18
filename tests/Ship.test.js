const Ship = require('../src/ship');

describe('Ship.hit()', () => {
    test('hit() should increment the number of hits by 1', () => {
        const ship = new Ship(2);

        ship.hit();

        expect(ship.hits).toBe(1);
    });

    test('hit() should increment the number of hits many times', () => {
        const ship = new Ship(4);

        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.hits).toBe(3);
    });

    test('hit() should not increment hits when the ship is already sunk', () => {
        const ship = new Ship(2);

        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.hits).toBe(2);
    });

    test('hit() should not increment hits beyond the length of the ship', () => {
        const ship = new Ship(4);

        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.hits).toBe(4);

        ship.hit();

        expect(ship.hits).toBe(4);
    });
});

describe('Ship.isSunk()', () => {
    test('isSunk() should return false when hits are less than ship length', () => {
        const ship = new Ship(3);

        ship.hit();

        expect(ship.isSunk()).toBeFalsy()
    });

    test('isSunk() should return false when there are no hits', () => {
        const ship = new Ship(3);
        expect(ship.isSunk()).toBeFalsy()
    });

    test('isSunk() should return true when hits equal ship length', () => {
        const ship = new Ship(3);

        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.isSunk()).toBeTruthy();
    });

    test('isSunk() should return true when hits > shipLength', () => {
        const ship = new Ship(3);

        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.isSunk()).toBeTruthy();
    });

    test('isSunk() should return true when hits > shipLength', () => {
        const ship = new Ship(3);

        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.isSunk()).toBeTruthy();
    });
});
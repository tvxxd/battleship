import Ship from '../src/ship';

describe('Ship', () => {
    describe('hit()', () => {
        test('should increment the number of hits by 1', () => {
            const ship = new Ship(2);

            ship.hit();

            expect(ship.hits).toBe(1);
        });

        test('should increment the number of hits many times', () => {
            const ship = new Ship(4);

            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.hits).toBe(3);
        });

        test('should not increment hits when the ship is already sunk', () => {
            const ship = new Ship(2);

            ship.hit();
            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.hits).toBe(2);
        });

        test('should not increment hits beyond the length of the ship', () => {
            const ship = new Ship(4);

            ship.hit();
            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.hits).toBe(4);

            ship.hit();

            expect(ship.hits).toBe(4);
        });
    })

    describe('isSunk()', () => {
        test('should return false when hits are less than ship length', () => {
            const ship = new Ship(3);

            ship.hit();

            expect(ship.isSunk()).toBeFalsy()
        });

        test('should return false when there are no hits', () => {
            const ship = new Ship(3);
            expect(ship.isSunk()).toBeFalsy()
        });

        test('should return true when hits equal ship length', () => {
            const ship = new Ship(3);

            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.isSunk()).toBeTruthy();
        });

        test('should return true when hits > shipLength', () => {
            const ship = new Ship(3);

            ship.hit();
            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.isSunk()).toBeTruthy();
        });

        test('should return true when hits > shipLength', () => {
            const ship = new Ship(3);

            ship.hit();
            ship.hit();
            ship.hit();

            expect(ship.isSunk()).toBeTruthy();
        });
    });
});


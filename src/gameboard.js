const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedShots = [];
        this.grid = Array(5).fill(null).map(() => Array(5).fill(null));
    }

    placeShip(ship, row, col, isHorizontal) {

        // place the ship on the grid
        for (let i = 0; i < ship.shipLength; i++) {
            if (isHorizontal) {
                this.grid[row][col + i] = ship;
            } else {
                this.grid[row + i][col] = ship;
            }
        }
        
        this.ships.push(ship);

        return true;
    }

    receiveAttack() {
    }

}

const board = new Gameboard();
const ship1 = new Ship(3);
const result = board.placeShip(ship1, 1, 2, false);
console.log(result);
module.exports = Gameboard;
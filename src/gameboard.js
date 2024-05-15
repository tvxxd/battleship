const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedShots = [];
        this.grid = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeShip(ship, row, col, isHorizontal) {
        // if the ship fits within grid
        if (isHorizontal && ship.shipLength + col > this.grid.length) return false;
        if (!isHorizontal && ship.shipLength + row > this.grid.length) return false;

        // if theres already a ship 
        for (let i = 0; i < ship.shipLength; i++) {
            if (isHorizontal && this.grid[row][col + i]) return false;
            if (!isHorizontal && this.grid[row + i][col]) return false;
        }

        // place the ship in the grid
        for (let i = 0; i < ship.shipLength; i++) {
            if (isHorizontal) {
                this.grid[row][col + i] = ship;
            } else {
                this.grid[row + i][col] = ship;
            }
        }

        // placed ships
        this.ships.push(ship);

        return true;
    }

    receiveAttack() {
    }
}

module.exports = Gameboard;
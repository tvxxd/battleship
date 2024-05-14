const Ship = require('./ship');
const ship = require('./ship')

class Gameboard {
    constructor() {
        this.gridSize = 5; // 10x10
        this.ships = [];
        this.missedShots = [];
        this.grid = [];
        for (let i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.gridSize; j++) {
                this.grid[i][j] = null;
            }
        }
    }

    placeShip(ship, row, column, isHorizontal) {

        // place the ships
        for (let i = 0; i <= ship.length; i++) {
            if (isHorizontal) {
                this.grid[row][column + i] = ship;
            } else {
                this.grid[row + i][column] = ship;
            }
        }

        // this.grid.push(ship);

        return this.grid;
    }

    receiveAttack() {
    }

}

const ship1 = new Ship(3);
const board = new Gameboard();

const result = board.placeShip(ship, 1, 2, true);
console.log(result);
module.exports = Gameboard;
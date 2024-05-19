const Gameboard = require('./gameboard');

class Player {
    constructor(playerType) {
        this.playerType = playerType; // real & computer
        this.gameboard = new Gameboard();
    }

    placeShip(ship, row, col, isHorizontal) {
        return this.gameboard.placeShip(ship, row, col, isHorizontal);
    }

    attack(enemy, row, col) {
        if (this.playerType === 'real') {
            return enemy.gameboard.receiveAttack(row, col)
        } else if (this.playerType === 'computer') {
            let coordinates = this.getRandomCoordinates();
            
            // attacks until a successful attack is made
            while (!enemy.gameboard.receiveAttack(coordinates.row, coordinates.col)) {
                coordinates = this.getRandomCoordinates();
            }
            return true;
        }
    }

    getRandomCoordinates() {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        return { row, col };
    }
}

module.exports = Player;
import Gameboard from './gameboard';
import Ship from './ship';

export default class Player {
    constructor(playerType) {
        this.playerType = playerType; // real & computer
        this.gameboard = new Gameboard();

        if (playerType === 'computer') this.placeShipsForComputer(4);
    }

    placeShipsForComputer(numberOfShips) {
        let placedShips = 0;

        while (placedShips < numberOfShips) {
            const randomSize = Math.floor(Math.random() * 4) + 2;
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            const isHorizontal = Math.random() < 0.5;

            const ship = new Ship(randomSize);

            if (this.gameboard.placeShip(ship, randomX, randomY, isHorizontal)) {
                placedShips++;
            }
        }
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
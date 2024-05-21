export default class Ship {
    constructor(shipLength) {
        this.shipLength = shipLength;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.sunk) return false;

        this.hits++;

        if (this.hits >= this.shipLength) this.sunk = true;
    }

    isSunk() {
        return this.sunk;
    }
}

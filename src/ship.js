class Ship {
    constructor(shipLength) {
        this.shipLength = shipLength;
        this.hits = 0;
    }

    hit() {
        if (this.isSunk() || this.hits >= this.shipLength) return;
        this.hits += 1;
    }

    isSunk() {
        return this.hits >= this.shipLength;
    }
}

module.exports = Ship;
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Player from './player.js';
import image from "./assets/mark.png";
import image2 from "./assets/dot.jpg";

export default class UI {
    constructor() {
        this.player = new Player('real');
        this.computer = new Player('computer');
    }

    load() {
        this.game();
    }

    createSection() {
        const main = document.createElement('main');

        const leftSection = document.createElement('div');
        const leftSectionh3 = document.createElement('h3');
        const leftSectionGridContainer = document.createElement('div');

        const rightSection = document.createElement('div');
        const rightSectionh3 = document.createElement('h3');
        const rightSectionGridContainer = document.createElement('div');

        const body = document.body;
        body.classList.add('body')

        main.classList.add('main');
        body.appendChild(main);

        main.appendChild(leftSection);
        main.appendChild(rightSection);

        leftSection.classList.add('left-section');
        leftSectionh3.id = "player";
        leftSectionh3.textContent = "You"
        leftSectionGridContainer.classList.add('grid-container-left')
        leftSection.appendChild(leftSectionh3);
        leftSection.appendChild(leftSectionGridContainer);

        rightSection.classList.add('right-section');
        rightSectionh3.id = "computer";
        rightSectionh3.textContent = "Computer"
        rightSectionGridContainer.classList.add('grid-container-right')
        rightSection.appendChild(rightSectionh3);
        rightSection.appendChild(rightSectionGridContainer);
    }

    createGrid() {
        const gLeft = document.querySelector(".grid-container-left");
        const gRight = document.querySelector(".grid-container-right");

        for (let i = 0; i < 100; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item", "left-grid-item", `grid-item-${i + 1}`);
            gLeft.appendChild(div);
        }

        for (let i = 0; i < 100; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item", "right-grid-item", `grid-item-${i + 1}`);
            gRight.appendChild(div);
        }
    }
    loadHomepage() {
        this.createSection();
        this.createGrid();
        this.createShipCountElements();
    }

    game() {
        this.loadHomepage();
        this.gridClickEvents();
        this.placeShipsForPlayer();
    }

    gridClickEvents() {
        const computerGrid = document.querySelector(".grid-container-right");

        computerGrid.addEventListener("click", (event) => {
            if (this.player.gameboard.shipsCount() !== 4) {
                alert("place all 4 ships before attacking!");
                return;
            }

            const cell = event.target;
            if (cell.classList.contains("right-grid-item")) {
                const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
                const row = Math.floor(cellIndex / 10);
                const col = cellIndex % 10;

                const attack = this.player.attack(this.computer, row, col);

                if (attack) {
                    if (attack === 'hit') {
                        const myIcon = new Image();
                        myIcon.src = image;
                        cell.appendChild(myIcon);
                        this.updateShipCounts();
                    } else if (attack) {
                        const myIcon2 = new Image();
                        myIcon2.src = image2;
                        cell.appendChild(myIcon2);
                    }
                } else {
                    return;
                }
            }
        });
    }

    createShipCountElements() {
        const h4C = document.createElement('h4');
        const h4P = document.createElement('h4');
        h4C.id = 'computer-ships-left';
        h4P.id = 'player-ships-left';

        const rSection = document.querySelector('.right-section');
        const lSection = document.querySelector('.left-section');

        rSection.children[0].insertAdjacentElement('afterend', h4C);
        lSection.children[0].insertAdjacentElement('afterend', h4P);

        this.updateShipCounts();
    }

    updateShipCounts() {
        const h4C = document.querySelector('#computer-ships-left');
        const h4P = document.querySelector('#player-ships-left');

        h4C.innerHTML = `Ships left: ${this.computer.gameboard.shipsCount()}`;
        h4P.innerHTML = `Ships left: ${this.player.gameboard.shipsCount()}`;
    }

    displayShipPlacementPopup(cell) {
        const popupContainer = document.createElement("div");
        popupContainer.classList.add("popup");

        const form = document.createElement("form");
        const isHorizontalCheckbox = document.createElement("input");
        const isHorizontalLabel = document.createElement("label");
        isHorizontalLabel.textContent = "Horizontal?";
        isHorizontalLabel.style.textAlign = "center";
        isHorizontalCheckbox.type = "checkbox";
        isHorizontalCheckbox.textContent = "Horizontal?"
        const shipSize = document.createElement("label");
        shipSize.textContent = "Ship Size"
        shipSize.style.textAlign = "center";
        const lengthInput = document.createElement("input");
        lengthInput.min = "2";
        lengthInput.max = "5";
        lengthInput.type = "number";
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Place Ship";

        form.appendChild(isHorizontalLabel);
        form.appendChild(isHorizontalCheckbox);
        form.appendChild(shipSize);
        form.appendChild(lengthInput);
        form.appendChild(submitButton);

        popupContainer.appendChild(form);

        document.body.appendChild(popupContainer);

        const rect = cell.getBoundingClientRect();
        popupContainer.style.top = `${rect.top}px`;
        popupContainer.style.left = `${rect.left}px`;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const isHorizontal = isHorizontalCheckbox.checked;
            const length = parseInt(lengthInput.value);
            if (!isNaN(length) && length > 0) {
                const row = Math.floor(Array.from(cell.parentNode.children).indexOf(cell) / 10);
                const col = Array.from(cell.parentNode.children).indexOf(cell) % 10;
                const ship = new Ship(length);
                if (this.player.placeShip(ship, row, col, isHorizontal)) {
                    for (let i = 0; i < length; i++) {
                        const index = isHorizontal ? row * 10 + col + i : (row + i) * 10 + col;
                        const gridItem = document.querySelector(`.left-grid-item.grid-item-${index + 1}`);
                        gridItem.classList.add('ship-placed');
                    }
                    document.body.removeChild(popupContainer);
                    this.updateShipCounts();
                } else {
                    alert("invalid ship placement!");
                    document.body.removeChild(popupContainer);
                    return;
                }
            } else {
                alert("enter a valid ship length!");
                return;
            }
        });
    }

    placeShipsForPlayer() {
        const gridLeft = document.querySelector(".grid-container-left");
        let shipsPlaced = 0;
        gridLeft.addEventListener("click", (event) => {
            const cell = event.target;
            if (cell.classList.contains("left-grid-item")) {
                if (shipsPlaced < 4) {
                    this.displayShipPlacementPopup(cell);
                    shipsPlaced++;
                } else {
                    alert("you have already placed 4 ships!");
                    return;
                }
            }
        });
    }
}
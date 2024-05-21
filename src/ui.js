import Gameboard from "./gameboard";
import Ship from "./ship";
import Player from './player';

export default class UI {
    constructor() {
        this.player = new Player('real');
        this.computer = new Player('computer');
    }

    load() {
        this.loadHomepage();
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
        this.gridClickEvents();
    }

    gridClickEvents() {
        const computerGrid = document.querySelector(".grid-container-right");

        computerGrid.addEventListener("click", (event) => {
            const cell = event.target;
            if (cell.classList.contains("right-grid-item")) {
                const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
                const row = Math.floor(cellIndex / 10);
                const col = cellIndex % 10;

                const attack = this.player.attack(this.computer, row, col);

                if (attack) {
                    if (attack === 'hit') {
                        cell.style.backgroundColor = "red";
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }
        });
    }


}
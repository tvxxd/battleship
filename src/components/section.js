export default function section() {
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
    leftSectionh3.textContent = "Player"
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
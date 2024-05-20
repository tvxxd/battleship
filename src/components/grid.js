export default function grid() {
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
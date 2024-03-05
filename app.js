const container = document.querySelector("#container");


for (let i = 1; i <= 16 * 16; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("square");
    container.appendChild(gridDiv);
}

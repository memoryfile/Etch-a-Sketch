function makeGrids() {
  for (let i = 0; i < 16 * 16; i++) {
    const grids = document.querySelector("#grids");
    const cells = document.createElement("cells");
    grids.append(cells);

function hoverEffect() {
      cells.addEventListener("mouseenter", () => console.log("Mouse enter"));
      cells.style.color = "black";
      cells.addEventListener("mouseleave", () => console.log("Mouse leave"));
      cells.style.color = "white";
    }
    hoverEffect();
  }
}

makeGrids();
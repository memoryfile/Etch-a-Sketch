function createCells() {
  const grids = document.querySelector("#grids");
  grids.style.gridTemplateColumns = "repeat(16, 1fr)";
  grids.style.gridTemplateRows = "repeat(16, 1fr)";

  function makeGrids() {
    for (let i = 0; i < 256; i++) {
      const cells = document.createElement("cells");
      grids.append(cells);

      function hoverEffect() {
        cells.addEventListener("mouseenter", () => console.log("Mouse enter"));
        cells.style.backgroundColor = "black";
        cells.addEventListener("mouseleave", () => console.log("Mouse leave"));
        cells.style.backgroundColor = "white";
      }
      hoverEffect();
    }
  }

  makeGrids();
}

createCells();
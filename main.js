function makeGrids() {
  for (let i = 0; i < 16 * 16; i++) {
    const grids = document.querySelector("#grids");
    const cells = document.createElement("cells");
    grids.append(cells);

    function hoverEffect() {
      grids.addEventListener("mouseenter", enter);
      grids.addEventListener("mouseleave", leave);
    }
  }
}

makeGrids();

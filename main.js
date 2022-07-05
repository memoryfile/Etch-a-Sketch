function makeGrids() {
  for (let i = 0; i < 16 * 16; i++) {
    const grids = document.querySelector("#grids");
    const cells = document.createElement("cells");

    // // cells.innerText = "grid";
    grids.append(cells);
    const square = document.querySelector(".square");
    grids.append(square);
  }
}

makeGrids();

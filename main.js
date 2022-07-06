const blackButton = document.querySelector("blackButton");

function createCells() {
  const grids = document.querySelector("#grids");
  // grids.style.gridTemplateColumns = "repeat(16, 1fr)";
  // grids.style.gridTemplateRows = "repeat(16, 1fr)";

  function makeGrids() {
    for (let i = 0; i < 256; i++) {
      const cells = document.createElement("cells");
      grids.append(cells);

      function hoverEffect() {
        cells.addEventListener(
          "mouseenter",
          () => (cells.style.backgroundColor = "black")
        );
        cells.addEventListener(
          "mouseleave",
          () => (cells.style.backgroundColor = "white")
        );
      }
      hoverEffect();

      function cellsBecomeBlack() {
        blackButton.addEventListener("click", () =>
        cells.style.backgroundColor = "black");
      }

      function cellsBecomeWhite() {
        cells.style.backgroundColor = "white";
      }

      function cellsBecomeRandom() {
        // cells.style.backgroundColor = "black";
      }
    }
  }

  makeGrids();
}

createCells();

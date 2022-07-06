const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");

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
        blackButton.addEventListener(
          "click",
          () => (cells.style.backgroundColor = "black")
        );
      }
      cellsBecomeBlack();

      function cellsBecomeWhite() {
        whiteButton.addEventListener(
          "click",
          () => (cells.style.backgroundColor = "white")
        );
      }
      cellsBecomeWhite();

      function cellsBecomeRandom() {
        randomButton.addEventListener(
          "click",
          () =>
            (cells.style.backgroundColor =
              "#" +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6))
        );
      }
      cellsBecomeRandom();

      function inputButtonPrompt() {
        let inputButtonVar = prompt("How many squares per side do you want in a grid?")
        inputButton.addEventListener("click", () =>
          alert(inputButtonVar)
        );
        // if (inputButtonVar != null) {
        //     return;
        // }
      }
    }
  }

  makeGrids();
}

createCells();


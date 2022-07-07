const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
// const inputButtonVar = prompt(
//   "How many squares per side do you want in a grid?"
// );

// On/off switch for all other functions

function createCells() {
  const grids = document.querySelector("#grids");

  // Make grid

  function makeGrids() {
    for (let i = 0; i < 256; i++) {
      const cells = document.createElement("cells");
      grids.append(cells);

      // Allow a mouse to interact with the grid

      function hoverEffect() {
        // if (cellsBecomeWhite()) {
        cells.addEventListener(
          "mouseenter",
          () => (cells.style.backgroundColor = "black")
        );
        cells.addEventListener(
          "mouseleave",
          () => (cells.style.backgroundColor = "white")
        );
        // }
        // if (cellsBecomeBlack()) {
        //   cells.addEventListener(
        //     "mouseenter",
        //     () => (cells.style.backgroundColor = "white")
        //   );
        //   cells.addEventListener(
        //     "mouseleave",
        //     () => (cells.style.backgroundColor = "black")
        //   );
        // }
      }
      hoverEffect();

      // Allow buttons to change grid color

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

      // function inputButtonPrompt() {
      //   document
      //     .getElementById("inputButton")
      //     .addEventListener("click", () => alert(inputButtonVar));
      //   // if (inputButtonVar != null) {
      //   //     return;
      //   // }
      // }
    }
  }

  makeGrids();
}

createCells();

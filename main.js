const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
const resetButton = document.getElementById("resetButton");
// const topContent = document.querySelector("topContent");
let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

// On/off switch for all other functions

function createCells() {
  // Make board

  function makeBoard() {
    for (let i = 0; i < 256; i++) {
      let cells = document.createElement("cells");
      cells.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", cells);
      // board.append(cells);

      function changeGridSize() {
        topContent.addEventListener(
          "click",
          () => (alert("test"))
        );
      }
      // changeGridSize();

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
      // hoverEffect();


      // Allow mouse clicks to interact with the grid

      function clickEffect() {
        // if (cellsBecomeWhite()) {
        cells.addEventListener(
          "click",
          () => (cells.style.backgroundColor = "black")
        );
        cells.addEventListener(
          "click",
          () => (cells.style.backgroundColor = "white")
        );
      }
      clickEffect();

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

      function cellsReset() {
        resetButton.addEventListener(
          "click",
          () => (cells.style.backgroundColor = "white")
        );
      }
      cellsReset();

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
    }
  }

  makeBoard();
}

createCells();

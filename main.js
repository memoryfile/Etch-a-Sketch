const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
const resetButton = document.getElementById("resetButton");
let board = document.querySelector(".board");
let content = document.querySelector(".content");
let size = Number(
  window.prompt("How many squares per side do you want in the grid?", 16)
);

// On/off switch for all other functions

function createCells() {
  // Make board

  function makeBoard() {
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < size * size; i++) {
      let cells = document.createElement("cells");
      cells.style.backgroundColor = "grey";

      // Another way to 'append'

      board.insertAdjacentElement("beforeend", cells);


      // inputButton.addEventListener("click", promptSize => {
      //   if (size === null || size === NaN || size < 2 || size > 100) {
      //     return console.log("Could not input grid size, not a valid number.");
      //   } else {
      //     console.log(size);
      //     makeBoard(size);
      //   }
      // });
      inputButton.addEventListener("click", promptSize);
      function promptSize() {
        Number(
          window.prompt("How many squares per side do you want in the grid?", 16)
        );
      }

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

      // Allow buttons to change grid

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

// Cells coloring hover effect (can use instead of a click effect)

// function hoverEffect() {
//   cells.addEventListener(
//     "mouseenter",
//     () => (cells.style.backgroundColor = "black")
//   );
//   cells.addEventListener(
//     "mouseleave",
//     () => (cells.style.backgroundColor = "white")
//   );
// }
// hoverEffect();

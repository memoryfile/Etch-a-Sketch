const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
const resetButton = document.getElementById("resetButton");
let board = document.querySelector(".board");
let content = document.querySelector(".content");
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

// On/off switch for all other functions

function createCells() {
  // Make board

  inputButton.onclick = function inputButtonPrompt() {
    let size = Number(
      window.prompt("How many squares per side do you want in the grid?", 16)
    );
    inputButton.addEventListener("click", () => size);
    if (size === null) {
      return alert("That's not a number");
    }
    if (size === Number) {
      cells.style.backgroundColor = "yellow";
    }
  };
  // inputButtonPrompt();

  function makeBoard() {
    for (let i = 0; i < 256; i++) {
      let cells = document.createElement("cells");
      cells.style.backgroundColor = "white";

      // Another way to 'append'

      board.insertAdjacentElement("beforeend", cells);

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

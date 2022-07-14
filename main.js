const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
const resetButton = document.getElementById("resetButton");
let board = document.querySelector(".board");
let content = document.querySelector(".content");
let cells = document.createElement("cells");

function createCells() {
  cells.style.backgroundColor = "blue";
  // board.insertAdjacentElement("beforeend", cells);
  board.append(cells);
}

inputButton.addEventListener("click", promptSize);

function promptSize(size) {
  size =
    Number(
      window.prompt("How many squares per side do you want in the grid?", 16)
    );
  if (size === null || size === NaN || size < 2 || size > 100) {
    return console.log("Could not input grid size, not a valid number.");
  } else {
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      createCells();
    }
  }

  function makeBoard() {
    board.style.gridTemplateColumns = `repeat(16 , 1fr)`;
    board.style.gridTemplateRows = `repeat(16 , 1fr)`;
    for (let i = 0; i < 256; i++) {
      createCells();
    }

    // Allow mouse clicks to interact with the grid

    function clickEffect() {
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

  makeBoard();
}

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

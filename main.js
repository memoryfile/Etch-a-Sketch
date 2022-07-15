const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton");
const randomButton = document.getElementById("randomButton");
const inputButton = document.getElementById("inputButton");
const resetButton = document.getElementById("resetButton");
let board = document.querySelector(".board");
let content = document.querySelector(".content");
let cellGrid = board.querySelectorAll("div");
let cell = document.createElement("div");
let size = 16;

function makeBoard(size) {
  let amount = size * size;
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  for (let i = 0; i < amount; i++) {
    cell.style.backgroundColor = "grey";
    board.insertAdjacentElement("beforeend", cell);
  }
}
makeBoard(size);

inputButton.addEventListener("click", promptSize);

function promptSize() {
  let size = Number(
    window.prompt("How many squares per side do you want in the grid?", 16)
  );
  if (size === null || size === NaN || size < 2 || size > 100) {
    return alert("Could not input grid size, as the only options are between 2-100.");
  } else {
    return makeBoard(size);
  }
}

// Allow mouse clicks to interact with the grid

function clickEffect() {
  cell.addEventListener(
    "click",
    () => (cell.style.backgroundColor = "white")
  );
}
clickEffect();

// Allow buttons to change grid

function cellBecomeBlack() {
  blackButton.addEventListener(
    "click",
    () => (cell.style.backgroundColor = "black")
  );
}
cellBecomeBlack();

function cellBecomeWhite() {
  whiteButton.addEventListener(
    "click",
    () => (cell.style.backgroundColor = "white")
  );
}
cellBecomeWhite();

function cellReset() {
  resetButton.addEventListener(
    "click",
    () => (cell.style.backgroundColor = "white")
  );
}
cellReset();

function cellBecomeRandom() {
  randomButton.addEventListener(
    "click",
    () =>
      (cell.style.backgroundColor =
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6))
  );
}
cellBecomeRandom();

// cell coloring hover effect (can use instead of a click effect)

// function hoverEffect() {
//   cell.addEventListener(
//     "mouseenter",
//     () => (cell.style.backgroundColor = "black")
//   );
//   cell.addEventListener(
//     "mouseleave",
//     () => (cell.style.backgroundColor = "white")
//   );
// }
// hoverEffect();

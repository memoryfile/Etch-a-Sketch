const grids = document.querySelector("#grids");

// const gridd = document.getElementById("head");
// gridd.innerText("head2");

const cell = document.createElement("div");
cell.innerText = "test";
grids.append(cell);

let divContainer = document.getElementById("grids");

function makeGrids() {
  for (let i = 0; i < 16; i++) {
    const gridd = document.getElementById(grids);
    gridd.classList.add('head');
    gridd.innerText = "test2";
    console.log(gridd)
    gridd.style.cssText = "color: pink; border:2px black";
    grids.append(head);
  }
}

makeGrids();

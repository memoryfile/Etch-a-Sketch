function makeGrids() {
  for (let i = 0; i < (16 * 16); i++) {
    const grids = document.querySelector("#grids");
    const testClass = document.createElement("testClass");
    testClass.innerText = "grid";
    testClass.style.cssText = "color: blue; border:2px black";
    grids.append(testClass);
  }
}

makeGrids();

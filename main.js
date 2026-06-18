const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
const newBtn = document.querySelector("#new-btn");

// default sketch page

let squaresNum = 256;

function createGrid (input) {
for (let i=0 ; i < input; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    fragment.append(square);
}
}
createGrid(squaresNum);
container.append(fragment);

//new sketch page


newBtn.addEventListener("click" , () => {
    sideNumber = parseInt(prompt("Enter the desired number of squares each side to make new page"));
    squaresNum = sideNumber * sideNumber;
    container.textContent = "";
    createGrid(squaresNum);
    container.append(fragment);
})


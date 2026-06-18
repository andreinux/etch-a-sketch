const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
const newBtn = document.querySelector("#new-btn");

// default sketch page

let sideNumber = 16;
let squareNumber = 16 * 16;

function createGrid (input) {
for (let i=0 ; i < input; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width=`calc(100% / ${sideNumber})`
    square.style.height=`calc(100% / ${sideNumber})`
    fragment.append(square);
}


}
createGrid(squareNumber);
container.append(fragment);

//new sketch page


newBtn.addEventListener("click" , () => {
    sideNumber = parseInt(prompt("Enter the desired number of squares each side to make new page"));
    squareNumber = sideNumber * sideNumber;
    container.textContent = "";
    createGrid(squareNumber);
    container.append(fragment);
})


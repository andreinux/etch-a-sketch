const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
const newBtn = document.querySelector("#new-btn");
const erase = document.querySelector("#erase");
// default sketch page

let sideNumber = 16;
let squareNumber = 16 * 16;



let isDrawing = false;

document.addEventListener("mousedown" , (e) => {
    if (e.button===0) {
    isDrawing= true;
    }
});
document.addEventListener("mouseup" , () => {
     isDrawing = false;
});



function createGrid (input) {
for (let i=0 ; i < input; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width=`calc(100% / ${sideNumber})`
    square.style.height=`calc(100% / ${sideNumber})`

    
    fragment.append(square);

square.addEventListener("mousedown" , () => {
        square.style.backgroundColor="red";
});
    
square.addEventListener("mouseover" , () => {
    if (isDrawing) {
        square.style.backgroundColor="red";
    }
});

}};


createGrid(squareNumber);
container.append(fragment);










//new sketch page


newBtn.addEventListener("click" , () => {
    sideNumber = parseInt(prompt("Enter the desired number of squares each side to make new page"));


    if (sideNumber < 1 || sideNumber > 100) {
        alert("The sketchpad is only limited to 100 squares per side");
    } 
    else if (isNaN(sideNumber)) {
        alert("Please Input a Valid Number of Sides");
    }
  else {
    squareNumber = sideNumber * sideNumber;
    container.textContent = "";
    createGrid(squareNumber);
    container.append(fragment);
  }

})

erase.addEventListener("click" , () => {
    container.textContent="";
    createGrid(squareNumber);
    container.append(fragment);


})
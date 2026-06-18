const container = document.querySelector("#container");

const fragment = document.createDocumentFragment();

let squaresNum = 256;

for (let i=0 ; i < squaresNum; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    fragment.append(square);
}

container.append(fragment);

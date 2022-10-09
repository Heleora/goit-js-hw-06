const boxesRef = document.querySelector("#boxes");
const btnCreateBoxesRef = document.querySelector("button[data-create]");
const btnDestroyBoxesRef = document.querySelector("button[data-destroy]");
const inputAmountRef = document.querySelector("#controls input");

btnCreateBoxesRef.addEventListener("click", () => {
    createBoxes(inputAmountRef.value);
});

btnDestroyBoxesRef.addEventListener("click", () => {
    boxesRef.textContent = "";
    inputAmountRef.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
   let blocks = [];
   
   for (let i = 0; i < amount; i += 1) {
    
    const box = document.createElement("div");
    box.style.width = `${30 + i*10}px`;
    box.style.height = `${30 + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
   
    blocks.push(box);

    boxesRef.append(...blocks);

  };
  };


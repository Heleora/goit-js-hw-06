const spanRef = document.querySelector("#value");

let counterValue = 0;

const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

btnDecrementRef.addEventListener("click", () => {
spanRef.textContent = counterValue -= 1;
});

btnIncrementRef.addEventListener("click", () => {
spanRef.textContent = counterValue += 1;
});


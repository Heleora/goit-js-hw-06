const textValueRef = document.querySelector("#value");
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecrementRef.addEventListener("click", () => {
    textValueRef.textContent = counterValue -= 1;
});

btnIncrementRef.addEventListener("click", () => {
    textValueRef.textContent = counterValue += 1;
});


const inputControlRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputControlRef.addEventListener("input", (event) => {
   spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
})
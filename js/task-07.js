const inputControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputControlRef.addEventListener("input", (event) => {
   textRef.style.fontSize = `${event.currentTarget.value}px`;
})
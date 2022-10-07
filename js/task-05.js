const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
if (event.currentTarget.value !== "") {
    return spanRef.textContent = event.currentTarget.value;
};
spanRef.textContent = "Anonymous";
});
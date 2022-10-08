function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnChangeColorRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

btnChangeColorRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColorRef.textContent = getRandomHexColor();
})

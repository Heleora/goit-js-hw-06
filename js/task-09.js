function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const btnChangeColorRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

btnChangeColorRef.addEventListener("click", () => {
  textColorRef.textContent = getRandomHexColor();
  console.log(bodyRef.style.backgroundColor = textColorRef.textContent);
})

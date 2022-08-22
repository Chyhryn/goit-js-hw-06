function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  const getColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getColor;
  spanEl.textContent = getColor;
});
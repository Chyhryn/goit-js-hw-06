const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  const { value } = event.currentTarget;
  spanEl.style.fontSize = `${value}px`;
});

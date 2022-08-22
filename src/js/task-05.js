const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const { value } = event.currentTarget;
  spanEl.textContent = value || "Anonymous";
});

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const spanEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.innerHTML = `${counterValue}`;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = `${counterValue}`;
});

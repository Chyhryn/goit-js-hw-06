const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const { value } = event.currentTarget;

  value.length == inputEl.dataset.length
    ? (inputEl.classList = "valid")
    : (inputEl.classList = "invalid");
});

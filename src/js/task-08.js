const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }

  formData[email.name] = email.value;
  formData[password.name] = password.value;
  console.log(formData);
  formEl.reset();
});

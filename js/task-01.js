const categoriesEl = document.querySelector("#categories");
const numberOfCategories = categoriesEl.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const liEl = document.querySelectorAll(".item");

const liElData = liEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

const categoriesEl = document.querySelector("#categories");
const numberOfCategories = categoriesEl.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const liEl = document.querySelectorAll(".item");

for (let i = 0; i < liEl.length; i += 1) {
  console.log(`Category: ${liEl[i].firstElementChild.textContent}`);
  console.log(`Elements: ${liEl[i].lastElementChild.children.length}`);
}

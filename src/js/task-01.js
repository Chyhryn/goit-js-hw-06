// <ul id="categories">
//       <li class="item">
//         <h2>Animals</h2>

//         <ul>
//           <li>Cat</li>
//           <li>Hamster</li>
//           <li>Horse</li>
//           <li>Parrot</li>
//         </ul>
//       </li>
//       <li class="item">
//         <h2>Products</h2>

//         <ul>
//           <li>Bread</li>
//           <li>Prasley</li>
//           <li>Cheese</li>
//         </ul>
//       </li>
//       <li class="item">
//         <h2>Technologies</h2>

//         <ul>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React</li>
//           <li>Node.js</li>
//         </ul>
//       </li>
//     </ul>

const categoriesEl = document.querySelector("#categories");
const numberOfCategories = categoriesEl.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const liEl = document.querySelectorAll(".item");

for (let i = 0; i < liEl.length; i += 1) {
  console.log(`Category: ${liEl[i].firstElementChild.textContent}`);
  console.log(`Elements: ${liEl[i].lastElementChild.children.length}`);
}

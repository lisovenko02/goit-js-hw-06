const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ullIngredients = document.querySelector("#ingredients")
// function attachList(arr) { 
//   const result = [];
// //   arr.forEach((item) => {
// //     const list = document.createElement(`li`);
// //     list.classList = `item`;
// //     list.textContent = item;
    
// //   result.push(list)
// // })
// return result
//  }
const ull = [...ingredients].map(el => {
  const list = document.createElement(`li`);
  list.classList.add(`item`);
  list.textContent = el;
  return list;
})
 ullIngredients.append(...ull);

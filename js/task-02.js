const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients")
function attachList(arr) { 
  const result = [];
  arr.forEach((item) => {
    const list = document.createElement(`li`);
    list.classList = `item`;
    list.textContent = item;
  
  result.push(list)
})
return result
 }

 ul.append(...attachList(ingredients));

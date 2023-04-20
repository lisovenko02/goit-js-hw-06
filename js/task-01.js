const categoriesArr = [
    ...document.querySelector(`#categories`).children
];
console.log("Number of categories: ", categoriesArr.length)
categoriesArr.forEach((category) => {
    console.log(`Category:` , category.firstElementChild.textContent)
    console.log(`Elements:`, category.lastElementChild.childElementCount)
})
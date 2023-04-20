const counter = document.querySelector("#counter");
const btnIncrement = counter.firstElementChild;
const btnDecrement = counter.lastElementChild;
let counterValue = 0;
btnIncrement.addEventListener("click", onClick);
btnDecrement.addEventListener("click", onClick);
function onClick(evt) {
    const btn = evt.currentTarget;
    if (btn.dataset.action === "decrement") {
        counterValue -= 1;
    } else {
        counterValue += 1;
    }

document.getElementById("value").textContent = counterValue;
}
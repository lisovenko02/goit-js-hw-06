function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const control = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const btnCreate = control.querySelector("[data-create]");

const input = document.querySelector("#controls input");
const minValue = Number(input.getAttribute("min"));
const maxValue = Number(input.getAttribute("max"));
const step = Number(input.getAttribute("step"));

btnCreate.addEventListener("click", onClick);
control.lastElementChild.addEventListener("click", onClick);

function onClick(evt) {
  const btn = evt.currentTarget;
  if (btn.dataset === btnCreate.dataset) {
    const input = control.firstElementChild.value;
    boxes.insertAdjacentHTML("beforeend", createBox(input));

    boxStyle([...boxes.children], input);
  } else {
    boxes.innerHTML = "";
    input.value = "";
  }
}

function createBox(arg) {
  if (arg > maxValue || arg < minValue) {
    alert("Введіть значення від 1 до 100!");
    input.value = "";
    return "";
  }
  let str = "";
  for (let i = 0; i < arg; i += 1) {
    str += `<div></div>`;
  }
  return str;
}

function boxStyle(arr, input) {
  let count = 30;
  for (let i = arr.length - input; i < arr.length; i += 1) {
    arr[i].style.backgroundColor = getRandomHexColor();
    arr[i].style.width = `${count}px`;
    arr[i].style.height = `${count}px`; 
    count += 10;
  }
}
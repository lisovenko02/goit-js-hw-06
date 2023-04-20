const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener('input', onInput);
function onInput (evt) {
    span.style.fontSize = `${evt.currentTarget.value}px`
};
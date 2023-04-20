const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInput);
function onInput(evt) {
    const input = evt.currentTarget;
    if (input.value) {
        span.textContent = input.value;
    } else {
        span.textContent = "Anonymous"
    }
}
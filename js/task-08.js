const userForm = document.querySelector(".login-form");

userForm.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
} else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
}

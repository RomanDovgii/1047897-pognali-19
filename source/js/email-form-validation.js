var input = document.querySelector(".cta-form__input");

var inputInvalidClass = "cta-form__input--invalid";

function activateInvalid() {
  input.classList.add(inputInvalidClass);
}

function disactivateInvalid() {
  input.classList.remove(inputInvalidClass);
}

input.addEventListener("invalid", activateInvalid);
input.addEventListener("click", disactivateInvalid);

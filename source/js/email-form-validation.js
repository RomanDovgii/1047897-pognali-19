const input = document.querySelector(".cta-form__input");

const inputInvalidClass = "cta-form__input--invalid";

const activateInvalid = () => {
  input.classList.add(inputInvalidClass);
}

const disactivateInvalid = () => {
  input.classList.remove(inputInvalidClass);
}

input.addEventListener("invalid", activateInvalid);
input.addEventListener("click", disactivateInvalid);

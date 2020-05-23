const plans = document.querySelectorAll(".step-description__text");
const plansLabel = document.querySelectorAll(".step-description__label");

const invalidTextareaClass = ".step-description__label--invalid";


plans.forEach(element => {
  element.addEventListener("invalid", function () {
    plansLabel.classList.add(invalidTextareaClass);
  });
});

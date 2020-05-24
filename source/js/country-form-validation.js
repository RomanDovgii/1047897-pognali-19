const labels = document.querySelectorAll(".step-description__label");

const invalidTextareaClass = "step-description__label--invalid";


labels.forEach(element => {
  let planDescription = element.querySelector(".step-description__text");

  planDescription.addEventListener("invalid", function () {
    element.classList.add(invalidTextareaClass)
  });
});

var labels = document.querySelectorAll(".step-description__label");

var invalidTextareaClass = "step-description__label--invalid";

for (let i = 0; i < labels.length; i++) {
  let element = labels[i];

  let planDescription = element.querySelector(".step-description__text");

  planDescription.addEventListener("invalid", function () {
    element.classList.add(invalidTextareaClass)
  });
}

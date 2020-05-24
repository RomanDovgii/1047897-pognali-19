const closeClass = "business-rates--closed";

let openBusinessButton = document.querySelector(".rates__link");
let businessRates = document.querySelector(".business-rates");
let closeBusinessButton = businessRates.querySelector(".business-rates__link");

openBusinessButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  businessRates.classList.remove(closeClass);
})

closeBusinessButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  businessRates.classList.add(closeClass);
})

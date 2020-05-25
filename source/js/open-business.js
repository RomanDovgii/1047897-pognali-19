var closeClass = "business-rates--closed";

var openBusinessButton = document.querySelector(".rates__link");
var businessRates = document.querySelector(".business-rates");
var closeBusinessButton = businessRates.querySelector(".business-rates__link");

openBusinessButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  businessRates.classList.remove(closeClass);
})

closeBusinessButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  businessRates.classList.add(closeClass);
})

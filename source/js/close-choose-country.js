var chooseCountryElements = document.querySelectorAll(".countries-planned__country");

var deleteButton = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".countries-planned__delete");
var addCountryButton = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".countries-planned__choose");
var addCountryBlock = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".add-block");

var activeButtonClass = "countries-planned__delete--active";
var activeCountryButton = "countries-planned__choose--active";
var closeCountryBlock = "add-block--hidden";

function removeChooseCountry() {
  deleteButton.classList.remove(activeButtonClass);
  addCountryButton.classList.remove(activeCountryButton);
  addCountryBlock.classList.add(closeCountryBlock);
}

function addChooseCountry() {
  deleteButton.classList.add(activeButtonClass);
  addCountryButton.classList.add(activeCountryButton);
  addCountryBlock.classList.remove(closeCountryBlock);
}

function switcher() {
  addCountryButton.classList.contains("countries-planned__choose--active") ? removeChooseCountry() : addChooseCountry();
}

removeChooseCountry();
addCountryButton.addEventListener("click", switcher);
deleteButton.addEventListener("click", switcher);

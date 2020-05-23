const chooseCountryElements = document.querySelectorAll(".countries-planned__country");

const deleteButton = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".countries-planned__delete");
const addCountryButton = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".countries-planned__choose");
const addCountryBlock = chooseCountryElements[chooseCountryElements.length - 2].querySelector(".add-block");

const activeButtonClass = "countries-planned__delete--active";
const activeCountryButton = "countries-planned__choose--active";
const closeCountryBlock = "add-block--hidden";

const removeChooseCountry = () => {
  deleteButton.classList.remove(activeButtonClass);
  addCountryButton.classList.remove(activeCountryButton);
  addCountryBlock.classList.add(closeCountryBlock);
}

const addChooseCountry = () => {
  deleteButton.classList.add(activeButtonClass);
  addCountryButton.classList.add(activeCountryButton);
  addCountryBlock.classList.remove(closeCountryBlock);
}

const switcher = () => {
  addCountryButton.classList.contains("countries-planned__choose--active") ? removeChooseCountry() : addChooseCountry();
}

removeChooseCountry();
addCountryButton.addEventListener("click", switcher);
deleteButton.addEventListener("click", switcher);


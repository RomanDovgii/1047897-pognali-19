const buttonCollapse = document.querySelector(".country-filter__button");
const buttonCollapseBottom = document.querySelector(".select-country__collapse");
const filterBlock = document.querySelector(".select-country");
const buttonText = document.querySelector(".country-filter__button-text");
const filterSection = document.querySelector(".country-filter");

const closedClass = "select-country--closed";
const blockOpenClass = "country-filter--open";
const buttonOpenClass = "country-filter__button--open"


const buttonTextOpen = "Показать все";
const buttonTextClose = "Свернуть";


const closeBlock = () => {
  filterBlock.classList.add(closedClass);
  buttonCollapse.removeEventListener("click", closeBlock);
  buttonCollapseBottom.removeEventListener("click", closeBlock);
  buttonText.textContent = buttonTextOpen;
  buttonCollapse.classList.add(buttonOpenClass);
  filterSection.classList.add(blockOpenClass);
}

const openBlock = () => {
  filterBlock.classList.remove(closedClass);
  buttonCollapse.addEventListener("click", closeBlock);
  buttonCollapseBottom.addEventListener("click", closeBlock);
  buttonText.textContent = buttonTextClose;
  buttonCollapse.classList.remove(buttonOpenClass);
  filterSection.classList.remove(blockOpenClass);
}

const selector = () => {
  buttonCollapse.classList.contains(buttonOpenClass) ? openBlock() : closeBlock();
}

closeBlock();
buttonCollapse.addEventListener("click", selector);
buttonCollapseBottom.addEventListener("click", closeBlock);

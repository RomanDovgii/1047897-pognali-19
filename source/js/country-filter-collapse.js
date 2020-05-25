var buttonCollapse = document.querySelector(".country-filter__button");
var buttonCollapseBottom = document.querySelector(".select-country__collapse");
var filterBlock = document.querySelector(".select-country");
var buttonText = document.querySelector(".country-filter__button-text");
var filterSection = document.querySelector(".country-filter");
var fixer = document.querySelector(".country-filter__width-fix");
var wrapper = fixer.querySelector(".country-filter__wrapper");

var closedClass = "select-country--closed";
var blockOpenClass = "country-filter--open";
var buttonOpenClass = "country-filter__button--open";
var fixerClass = "country-filter__width-fix--js";
var fixerClosedClass = "country-filter__width-fix--closed";
var wrapperJSClass = "country-filter__wrapper--js";


var buttonTextOpen = "Показать все";
var buttonTextClose = "Свернуть";


function closeBlock() {
  filterBlock.classList.add(closedClass);
  buttonCollapse.removeEventListener("click", closeBlock);
  buttonCollapseBottom.removeEventListener("click", closeBlock);
  buttonText.textContent = buttonTextOpen;
  buttonCollapse.classList.add(buttonOpenClass);
  filterSection.classList.add(blockOpenClass);
  fixer.classList.add(fixerClosedClass);
}

function openBlock() {
  filterBlock.classList.remove(closedClass);
  buttonCollapse.addEventListener("click", closeBlock);
  buttonCollapseBottom.addEventListener("click", closeBlock);
  buttonText.textContent = buttonTextClose;
  buttonCollapse.classList.remove(buttonOpenClass);
  filterSection.classList.remove(blockOpenClass);
  fixer.classList.remove(fixerClosedClass);
}

function selector() {
  buttonCollapse.classList.contains(buttonOpenClass) ? openBlock() : closeBlock();
}

closeBlock();
wrapper.classList.add(wrapperJSClass);
fixer.classList.add(fixerClass);
fixer.classList.add(fixerClosedClass);
buttonCollapse.addEventListener("click", selector);
buttonCollapseBottom.addEventListener("click", closeBlock);

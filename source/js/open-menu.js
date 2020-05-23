const openMenuButton = document.querySelector(".functions__button");
const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".information");
const logo = document.querySelector(".functions__link picture");
const sources = logo.querySelectorAll("source");
const image = logo.querySelector(".functions__logo-img");

const white = "white";
const blue = "blue";

const whiteToChange = /white/gi;
const blueToChange = /blue/gi;

let imageChanger = (array, colorOne, colorTwo) => {
  array.forEach(function(element) {
    replacement = element.srcset.replace(colorOne, colorTwo);
    element.srcset = replacement;
  });

  let logoSrc = image.src.replace(colorOne, colorTwo);
  let logoSrcset = image.srcset.replace(colorOne, colorTwo);
  image.src = logoSrc;
  image.srcset = logoSrcset;
}

let openMenu = () => {
  imageChanger(sources, whiteToChange, blue);
  openMenuButton.classList.remove("functions__button--open");
  mobileMenu.classList.remove("information--closed")
  header.classList.remove("header--index-blue");
  header.classList.remove("header--blue");
}

let closeMenu = () => {
  imageChanger(sources, blueToChange, white);
  openMenuButton.classList.add("functions__button--open");
  if (header.classList.contains("header--index")) {
    header.classList.add("header--index-blue")
  } else {
    header.classList.add("header--blue")
  }
  mobileMenu.classList.add("information--closed")

}

mobileMenu.classList.add("information--js");
mobileMenu.classList.add("information--closed");
closeMenu();

openMenuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mobileMenu.classList.contains("information--closed")) {
    mobileMenu.style.display = "block";
    openMenu();
  } else {
    mobileMenu.style.display = "none";
    closeMenu();
  }
});

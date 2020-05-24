const openMenuButton = document.querySelector(".functions__button");
const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".information");
const logo = document.querySelector(".functions__link picture");
const sources = logo.querySelectorAll("source");
const image = logo.querySelector(".functions__logo-img");
const topMenu = document.querySelector(".top-menu");
const main = document.querySelector(".main");
const intro = document.querySelector(".intro");

const topMenyStickyClass = "top-menu--fixed";
const openMenuButtonSticky = "functions__button--js";

const white = "white";
const blue = "blue";

const whiteToChange = /white/gi;
const blueToChange = /blue/gi;

let height;
let body = document.querySelector("body");

const addStickyClass = () => {
  if (topMenu.offsetWidth < 1440) {
    height = topMenu.offsetHeight;
  } else {
    height = intro.offsetHeight;
  }

  if (window.pageYOffset > height) {
    topMenu.classList.add(topMenyStickyClass);
    header.style.paddingTop = height + "px";
    openMenuButton.classList.add(openMenuButtonSticky);
    imageChanger(sources, whiteToChange, blue);
  } else {
    topMenu.classList.remove(topMenyStickyClass);
    header.style.paddingTop = 0;
    openMenuButton.classList.remove(openMenuButtonSticky);
    imageChanger(sources, blueToChange, white);
  }
}

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
  mobileMenu.style.display = "block";
}

let closeMenu = () => {
  if (!topMenu.classList.contains(topMenyStickyClass)) {
    imageChanger(sources, blueToChange, white);
  }

  openMenuButton.classList.add("functions__button--open");
  if (header.classList.contains("header--index")) {
    header.classList.add("header--index-blue")
  } else {
    header.classList.add("header--blue")
  }
  mobileMenu.classList.add("information--closed")
  mobileMenu.style.display = "none";

}

mobileMenu.classList.add("information--js");
mobileMenu.classList.add("information--closed");
closeMenu();

openMenuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mobileMenu.classList.contains("information--closed")) {
    openMenu();
  } else {
    closeMenu();
  }
});


fixLogoDesktop = () => {
  if (body.offsetWidth >= 1440) {
    closeMenu();
  }
}

window.addEventListener("scroll", addStickyClass);
window.addEventListener("resize", fixLogoDesktop);

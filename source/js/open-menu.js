var openMenuButton = document.querySelector(".functions__button");
var header = document.querySelector(".header");
var mobileMenu = document.querySelector(".information");
var logo = document.querySelector(".functions__link picture");
var sources = logo.querySelectorAll("source");
var image = logo.querySelector(".functions__logo-img");
var topMenu = document.querySelector(".top-menu");
var topMenuInnerLinks = document.querySelector(".top-menu__inner-links");
var main = document.querySelector(".main");
var intro = document.querySelector(".intro");

var topMenyStickyClass = "top-menu--fixed";
var openMenuButtonSticky = "functions__button--js";
var InnerLinksFixClass = "top-menu__inner-links--dropdown"

var white = "white";
var blue = "blue";

var whiteToChange = /white/gi;
var blueToChange = /blue/gi;

let changeHeight;
let body = document.querySelector("body");

function addStickyClass() {
  if ((topMenu.offsetWidth < 1440)) {
    changeHeight = topMenu.offsetHeight;
  } else {
    if (intro) {
      changeHeight = intro.offsetHeight;
    } else {
      changeHeight = topMenu.offsetHeight;
    }

    topMenuInnerLinks.classList.add(InnerLinksFixClass);
  }

  let height = topMenu.offsetHeight;

  if (window.pageYOffset > changeHeight) {
    topMenu.classList.add(topMenyStickyClass);
    header.style.paddingTop = height + "px";
    openMenuButton.classList.add(openMenuButtonSticky);
    imageChanger(sources, whiteToChange, blue);
  } else {
    topMenu.classList.remove(topMenyStickyClass);
    header.style.paddingTop = 0;
    openMenuButton.classList.remove(openMenuButtonSticky);
    imageChanger(sources, blueToChange, white);
    topMenuInnerLinks.classList.remove(InnerLinksFixClass);
  }
}

function imageChanger(array, colorOne, colorTwo) {
  for (let i = 0; i < array.length; i++) {
    replacement = array[i].getAttribute("srcset").replace(colorOne, colorTwo);
    array[i].srcset = replacement;
  }

  let logoSrc = image.src.replace(colorOne, colorTwo);
  let logoSrcset = image.setAttribute("srcset", image.getAttribute("srcset").replace(colorOne, colorTwo));
  image.src = logoSrc;
  image.srcset = logoSrcset;
}

function openMenu() {
  imageChanger(sources, whiteToChange, blue);
  openMenuButton.classList.remove("functions__button--open");
  openMenuButton.classList.add("functions__button--js");
  mobileMenu.classList.remove("information--closed")
  header.classList.remove("header--index-blue");
  header.classList.remove("header--blue");
  mobileMenu.style.display = "block";
}

function closeMenu() {
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


function fixLogoDesktop() {
  if (body.offsetWidth >= 1440) {
    closeMenu();
  }
}

window.addEventListener("scroll", addStickyClass);
window.addEventListener("resize", fixLogoDesktop);

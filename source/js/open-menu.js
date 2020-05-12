const openMenuButton = document.querySelector(`.functions__button`);
const header = document.querySelector(`.header`);
const mobileMenu = document.querySelector(`.information`);

openMenuButton.addEventListener(`click`,() => {
  if (openMenuButton.style.display !== `none`) {
    mobileMenu.style.display = `block`;
    header.style.backgroundColor = `#ffffff`;
  }
});

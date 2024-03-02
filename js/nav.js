const menu = document.querySelector(".navBar__menu");
const sideMenu = document.querySelector(".navBar__toogleMenu img");

sideMenu.addEventListener('click', () => {
    menu.classList.toggle("toogle");
})
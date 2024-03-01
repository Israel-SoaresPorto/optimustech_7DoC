const menu = document.querySelector(".navBar__links");
const sideMenu = document.querySelector(".navBar__sideMenu img");

sideMenu.addEventListener('click', () => {
    menu.classList.toggle("toogle");
})
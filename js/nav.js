const menu = document.querySelector(".navBar");
const toogleMenu = document.querySelector(".top__toogleNavBar img");

toogleMenu.addEventListener('click', () => {
    menu.classList.toggle("toogle");
})
// Menu hamburgesa
const menuHamburger = document.getElementById('menuHamburger');
const menu = document.getElementById('menu');

menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('toggle');
})
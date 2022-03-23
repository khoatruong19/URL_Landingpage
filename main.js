var burgerMenu = document.querySelector(".burger-menu");
var navLinks = document.querySelector(".nav__links")
var menuButtons = document.querySelectorAll(".burger-menu i")
let openBurgerMenu = false;

burgerMenu.addEventListener("click", () => {
    openBurgerMenu = !openBurgerMenu;
    if(openBurgerMenu) {
        navLinks.style.display = "flex";
        menuButtons[0].style.display = "none";
        menuButtons[1].style.display = "block";
    }
    else {
        navLinks.style.display = "none";
        menuButtons[0].style.display = "block";
        menuButtons[1].style.display = "none";
    }
})
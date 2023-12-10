const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Affiche le menu et valide si la constante navToggle existe
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// cache le menu et valide si la constante navClose existe
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// supprime le menu mobile
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Quand on clique sur chaque lien nav__link, nous supprimons la class "show-menu"
  navMenu.classList.remove("show-menu");
}

// // import Swiper bundle with all modules installed
// import Swiper from "swiper/bundle";

// // import styles bundle
// import "swiper/css/bundle";

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
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ACCORDION SKILLS
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent - length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// PORTFOLIO SWIPER

// const swiperPortfolio = new Swiper(".swiper-container");
//   cssMode: true,
//   loop: true,
//   modules: [Navigation, Pagination],
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// SCROLL ACTIVE
function scrollActive() {
  const scrollY = window.scrollY;
  const sections = document.querySelectorAll("section");
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// =========== CHANGE BACKGROUND HEADER ========//
function scrollHeader() {
  const nav = document.getElementById("header");
  // Quand le défilement est plus grand que 80 la hauteur de la fenêtre, ajout de la classe scroll-header à la balise header
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// Show scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // lorsque le défilement est supérieur à 560 hauteur de fenêtre, ajout de la classe show-scroll à la balise avec le défilement
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// ============= DARK/LIGHT THEME =============//

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
// l'icon sélectionné précédemment (si l'utilisateur l'avait sélectionné)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
// on obtient le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
// On valide si l'utilisateur a précédemment choisi un thème
if (selectedTheme) {
  // si la validation est remplie, nous demandons quel était l'issue pour savoir si nous avons activé ou désactivé le thème sombre
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

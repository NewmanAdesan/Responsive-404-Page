


/* ==================== SHOW & HIDE MENU ==================== */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* SHOW BY TOGGLE BUTTON */
// add the class show-menu to the nav menu on click of the nav-toggle
if (navToggle) {
    navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

/* HIDE BY CLOSE BUTTON */
// remove the class show-menu from the nav menu on click of the nav-close
if (navClose) {
    navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

/* HIDE BY NAV ITEM CLICK  */
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(n => n.addEventListener("click", () => navMenu.classList.remove("show-menu")))








/* ==================== SCROLL REVEAL ANIMATION ==================== */

// function runReveal() {

//     const sr = ScrollReveal({
//         distance: "90px",
//         duration: 3000
//     })


//     sr.reveal(".home__data", { origin: "top", delay: 400 })

//     sr.reveal(".home__img", { origin: "bottom", delay: 600 })

//     sr.reveal(".home__footer", { origin: "bottom", delay: 800 })
// }





/* ==================== Project Info Close Button ==================== */
document.getElementById("project-info-close").addEventListener("click", () => {
    document.getElementById("project-info").style.display = "none";
    runReveal();
})

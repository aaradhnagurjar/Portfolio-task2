/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active"); // FIXED
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("active"); // FIXED
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__img", { origin: "right", delay: 400 });

/*SCROLL ABOUT*/
sr.reveal(".about__text", { delay: 300 });

/*SCROLL SKILLS*/
sr.reveal(".skills__container", { delay: 300 });

/*SCROLL WORK*/
sr.reveal(".work__container img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__container", { delay: 300 });



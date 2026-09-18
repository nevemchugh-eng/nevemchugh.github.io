/* =========================================
   NEVE McHUGH — PORTFOLIO
   script.js
   ========================================= */


// ---------- PAGE LOAD ----------

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// ---------- SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(
  ".section-heading, .project, .about-intro, .about-details, .experience-item"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Stop observing once revealed
        revealObserver.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});


// ---------- SMOOTH NAVIGATION ----------

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetID = link.getAttribute("href");
    const target = document.querySelector(targetID);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


// ---------- NAVIGATION APPEARANCE ----------

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


// ---------- PROJECT HOVER ----------

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

  project.addEventListener("mouseenter", () => {

    projects.forEach((otherProject) => {

      if (otherProject !== project) {
        otherProject.classList.add("inactive");
      }

    });

  });

  project.addEventListener("mouseleave", () => {

    projects.forEach((otherProject) => {
      otherProject.classList.remove("inactive");
    });

  });

});


// ---------- HERO PARALLAX ----------

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("scroll", () => {

  const scrollPosition = window.scrollY;

  if (scrollPosition < window.innerHeight) {

    heroTitle.style.transform =
      `translateY(${scrollPosition * 0.08}px)`;

  }

});


// ---------- CURRENT YEAR ----------

const footerCopyright = document.querySelector("footer p");

if (footerCopyright) {

  const year = new Date().getFullYear();

  footerCopyright.textContent =
    `© ${year} Neve McHugh`;

}

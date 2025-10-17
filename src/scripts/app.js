 "use strict";


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-list");
    const links = document.querySelectorAll(".navbar-links a");

    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });


    links.forEach(link => {
      link.addEventListener("click", function () {
        toggle.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  });


// Aidé de l'IA pour l'animarion de fade-in-up 

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in-up").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in-left").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "left 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
});


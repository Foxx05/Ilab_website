"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const slides = document.querySelectorAll('.slider');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('actif', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('actif', i === index);
  });
}


nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});


prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});


dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

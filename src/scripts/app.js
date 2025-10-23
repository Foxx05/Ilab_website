"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmblaCarousel from 'embla-carousel';
// import { addPrevNextBtnsClickHandlers } from './embla-buttons';


//NAVBAR

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


// SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);

const ClassBut = gsap.utils.toArray('.fade-in-up__first');
const ClassRaison = gsap.utils.toArray('.fade-in-up__second');
const ClassPersonnage = gsap.utils.toArray('.fade-in-up__third');
const ClassBoutique1 = gsap.utils.toArray('.fade-in-up__six');
const ClassBoutique2 = gsap.utils.toArray('.fade-in-up__seven');
const ClassStudio = gsap.utils.toArray('.fade-in-up__eight');

ClassBut.forEach((ClassBut, index) => {
gsap.set(ClassBut, { x:-1000});
  gsap.to(ClassBut, {
    x:0,
    scrollTrigger: {
      trigger: ClassBut,
      end: "top 200px",
      scrub: true,

    }
  });
});

ClassRaison.forEach((ClassRaison, index) => {
gsap.set(ClassRaison, { x:500});
  gsap.to(ClassRaison, {
    x:0,
    scrollTrigger: {
      trigger: ClassRaison,
      end: "top 200px",
      scrub: true,
    }
  });
});

ClassPersonnage.forEach((ClassPersonnage, index) => {
gsap.set(ClassPersonnage, { x:-500});
  gsap.to(ClassPersonnage, {
    x:0,
    scrollTrigger: {
      trigger: ClassPersonnage,
      end: "top 55%",
      scrub: true,
    }
  });
});



gsap.set(".fade-in-up__five", { x:-400});
gsap.to(".fade-in-up__five", {
  x:0,
  scrollTrigger: {
    trigger: ".fade-in-up__five",
    end: "top 200px",
    scrub: true,
  }
});

ClassBoutique1.forEach((ClassBoutique1, index) => {
gsap.set(ClassBoutique1, { x:400});
  gsap.to(ClassBoutique1, {
    x:0,
    scrollTrigger: {
      trigger: ClassBoutique1,
      end: "top 55%",
      scrub: true,
    }
  });
});

ClassBoutique2.forEach((ClassBoutique2, index) => {
gsap.set(ClassBoutique2, { x:-400});
  gsap.to(ClassBoutique2, {
    x:0,
    scrollTrigger: {
      trigger: ClassBoutique2,
      end: "top 55%",
      scrub: true,
    }
  });
});

ClassStudio.forEach((ClassStudio, index) => {
gsap.set(ClassStudio, { x:400});
  gsap.to(ClassStudio, {
    x:0,
    scrollTrigger: {
      trigger: ClassStudio,
      end: "top 55%",
      scrub: true,
    }
  });
});



//SLIDER ITEM
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

//************************ */



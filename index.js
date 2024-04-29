// MOBILE NAV TOGGLE

document
  .getElementById("open-menu-btn")
  .addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  document.getElementById("mobile-nav").classList.toggle("mobile-nav--hidden");
}

// HOMEPAGE CARROUSEL

import { homepageCarrouselData } from "./data.js";

const controlsArray = Array.from(document.getElementsByClassName("control"));

const homepageCarrousel = document.getElementById("homepage-carrousel");
const homepageCarrouselTitle = document.getElementById(
  "homepage-carrousel__title"
);
const homepageCarrouselDes = document.getElementById("homepage-carrousel__des");

controlsArray.forEach((control, index) => {
  control.addEventListener("click", () => changeCarrouselSlide(index));
});

function changeCarrouselSlide(index) {
  const currentItem = homepageCarrouselData[index];
  homepageCarrousel.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), 
  url(images/${currentItem.img})`;

  homepageCarrouselTitle.innerHTML = currentItem.title;
  homepageCarrouselDes.textContent = currentItem.des;

  controlsArray.forEach((control) => {
    control.classList.remove("control--current");
  });
  controlsArray[index].classList.add("control--current");
}

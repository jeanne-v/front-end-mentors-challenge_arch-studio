document
  .getElementById("open-menu-btn")
  .addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  document.getElementById("mobile-nav").classList.toggle("mobile-nav--hidden");
}

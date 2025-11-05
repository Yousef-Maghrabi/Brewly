/* Brewly — Reviewed: 2025-11-05 — Header interactivity helper (hamburger) */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#nav-menu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    const isActive = hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive);
    navMenu.classList.toggle("hidden", !isActive);
  });
});

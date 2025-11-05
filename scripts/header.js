/* Brewly — Reviewed: 2025-11-05 — Header interactivity helper (hamburger) */
/*
  Brewly — Reviewed: 2025-11-05
  Small header helper to toggle mobile nav.
  Notes:
  - Keeps behavior minimal and accessible (aria-expanded toggled).
  - Uses defensive selectors so missing elements don't cause runtime errors.
*/
document.addEventListener("DOMContentLoaded", () => {
  // Support a few common menu selector patterns used across pages
  const hamburger = document.querySelector(".hamburger") || document.getElementById("menu__toggle");
  // the nav element might be #nav-menu or .menu__box in some templates
  const navMenu = document.querySelector("#nav-menu") || document.querySelector(".menu__box");

  if (!hamburger || !navMenu) return;

  // Use a button-like toggle. If the hamburger is an input (checkbox), listen for change
  if (hamburger.tagName === "INPUT") {
    hamburger.addEventListener("change", () => {
      const isActive = hamburger.checked;
      // sync aria-expanded on the label if present
      const label = document.querySelector("label[for='menu__toggle']");
      if (label) label.setAttribute("aria-expanded", isActive);
      navMenu.classList.toggle("hidden", !isActive);
    });
  } else {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("active");
      try {
        hamburger.setAttribute("aria-expanded", isActive);
      } catch (e) {
        // ignore if element doesn't support attributes
      }
      navMenu.classList.toggle("hidden", !isActive);
    });
  }
});

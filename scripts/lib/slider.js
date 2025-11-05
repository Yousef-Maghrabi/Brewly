/*
  Brewly — Reviewed: 2025-11-05
  Gallery slider helper — preloads images and updates gallery safely.
  Notes:
  - Uses a small transition delay when swapping images to match CSS transitions.
  - Keep the preloading strategy conservative to avoid heavy memory usage.
*/
export default function init(images) {
  const d = document.querySelectorAll(".e-gallery_nav-dot");
  const g = document.querySelector(".e-gallery_img");
  let i = 0;

  // safely update the gallery image with preloading
  function sfi(index) {
    if (!g) return;

    const imgSrc = images[index];
    if (typeof imgSrc !== "string") return;

    // Add loading class (dim, blur, or spinner)
    g.classList.add("e-gallery_img--loading");

    // Preload new image off-DOM
    const temp = new Image();
    temp.src = imgSrc;

    temp.onload = () => {
      // Once fully loaded, swap instantly — no flicker
      requestAnimationFrame(() => {
        g.src = imgSrc;
        g.classList.remove("e-gallery_img--loading");
      });
    };

    temp.onerror = () => {
      console.error(`Failed to load image: ${imgSrc}`);
      g.classList.remove("e-gallery_img--loading");
    };
  }

  // Get initial active index
  function initIndexFromDots() {
    const openDot = document.querySelector(".e-gallery_nav-dot.open");
    if (openDot) {
      const nodes = Array.from(d);
      const idx = nodes.indexOf(openDot);
      if (idx >= 0) return idx;
    }
    return 0;
  }

  i = initIndexFromDots();
  sfi(i);

  // dot click
  d.forEach((dot, idx) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const prev = document.querySelector(".e-gallery_nav-dot.open");
      if (prev) prev.classList.remove("open");
      dot.classList.add("open");
      i = idx;
      sfi(i);
    });
  });

  const lr = document.querySelector(".e-gallery_nav-arrow_left");
  const rr = document.querySelector(".e-gallery_nav-arrow_right");
  // Small constant so the timeout value is obvious and easy to tweak
  const TRANSITION_DELAY = 200;

  // arrow controls
  lr?.addEventListener("click", () => {
    if (d.length === 0) return;
    i = i > 0 ? i - 1 : d.length - 1;
    updateDotAndImage();
  });

  rr?.addEventListener("click", () => {
    if (d.length === 0) return;
    i = i < d.length - 1 ? i + 1 : 0;
    updateDotAndImage();
  });

  function updateDotAndImage() {
    const prev = document.querySelector(".e-gallery_nav-dot.open");
    if (prev) prev.classList.remove("open");
    if (d[i]) d[i].classList.add("open");
    // small delay kept inside sfi preloader; call sfi to handle swapping
    sfi(i);
  }
}

/*
    Brewly — Reviewed: 2025-11-05
    File: productPage.js
    Purpose: Product detail page script. Adds gallery, data population and graceful error handling.
*/
import Loader from "/scripts/lib/loader.js";

// --- DOM Element Selectors ---
const loaderContainer = document.getElementById("loader");

// --- Initial State and Configuration ---
let productData;
const loader = new Loader(loaderContainer);

// --- Main Logic ---

// Render the initial loader while data is being fetched.
loader.render();

// Fetch product data from the API based on the URL query parameter.
{
  const productId = new URLSearchParams(window.location.search).get("id");
  const category = productId.includes("ct") ? "coffee" : "machine";
  let brand;

  // Determine the brand based on the category and product ID.
  if (category === "coffee") {
    brand = "cbtl";
  } else if (category === "machine") {
    if (productId.includes("pmc")) {
      brand = "philips";
    } else {
      brand = "saoco";
    }
  }

  // Construct the API URL.
  const apiUrl =
    category === "coffee"
      ? `https://brewly-api.vercel.app/api/coffee/${productId}`
      : `https://brewly-api.vercel.app/api/machines/${brand}/${productId}`;

  // Fetch the data, handle success and error cases, and then populate the page.
  // Note: we intentionally keep the fetch logic simple and user-friendly.
  // The API returns either a coffee or a machine object. We display a
  // loader while waiting, show a friendly error on failure, and populate
  // the page on success.
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      productData = data;
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      // Display a user-friendly error message on the page
      const contentContainer = document.querySelector(".layout_container-v_2");
      if (contentContainer) {
        contentContainer.innerHTML = `<div class="error-message"><h2>Oops!</h2><p>We couldn't load the product details. Please try again later.</p></div>`;
      }
    })
    .finally(() => {
      loader.abort();
      if (productData) {
        populateProductPage(productData);
      }
    });
}

/**
 * Populates the product page with the fetched data.
 * @param {object} data - The product data fetched from the API.
 */
function populateProductPage(data) {
  // --- Element Selectors for Page Content ---
  const titleElement = document.querySelector(".layout_content h1");
  const brandElement = document.querySelector(".layout_content p.text-accent");
  const priceElement = document.querySelector(
    '.layout_content p[style*="color: var(--color-success)"]'
  );
  const detailsContentElement = document.querySelector("#details-content p");
  const featuresContentElement = document.querySelector(
    "#features-content .flex-v"
  );
  const specsContentElement = document.querySelector("#specs-content .flex-v");

  // --- Populate Basic Product Info ---
  if (titleElement) titleElement.textContent = data.title;
  if (brandElement) brandElement.textContent = data.brand || brand;
  if (priceElement) priceElement.textContent = `$${data.price}`;
  if (detailsContentElement) detailsContentElement.textContent = data.details;

  // --- Populate Features ---
  if (featuresContentElement && data.features) {
    featuresContentElement.innerHTML = ""; // Clear existing content
    for (const [key, value] of Object.entries(data.features)) {
      const featureDiv = document.createElement("div");
      featureDiv.className = "text_size-s flex-h flex_align-center";
      featureDiv.innerHTML = `<span class="icon-rocket flex-h icon-s spacing_pad-h_s text-accent"></span> ${value}`;
      featuresContentElement.appendChild(featureDiv);
    }
  }

  // --- Populate Key Specifications ---
  if (specsContentElement && data.keySpecs) {
    specsContentElement.innerHTML = ""; // Clear existing content
    for (const [key, value] of Object.entries(data.keySpecs)) {
      const specDiv = document.createElement("div");
      specDiv.className = "text_size-s flex-h flex_align-center";
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      specDiv.innerHTML = `<span class="icon-sparkle flex-h icon-s spacing_pad-h_s text-accent"></span> <strong>${formattedKey}:</strong> ${value}`;
      specsContentElement.appendChild(specDiv);
    }
  }

  // --- Initialize Image Gallery ---
  initializeGallery(data.images);
}

/**
 * Initializes the image gallery.
 * @param {string[]} images - An array of image URLs.
 */
function initializeGallery(images) {
  const galleryImage = document.querySelector(".e-gallery_img");
  const dotsContainer = document.querySelector(".e-gallery_nav-dot_container");
  const leftArrow = document.querySelector(".e-gallery_nav-arrow_left");
  const rightArrow = document.querySelector(".e-gallery_nav-arrow_right");

  if (!galleryImage || !images || images.length === 0) return;

  // --- Create Navigation Dots ---
  dotsContainer.innerHTML = "";
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "e-gallery_nav-dot";
    if (index === 0) dot.classList.add("open");
    dot.addEventListener("click", () => updateGallery(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".e-gallery_nav-dot");
  let currentIndex = 0;

  /**
   * Updates the gallery to show the specified image.
   * @param {number} index - The index of the image to display.
   */
  function updateGallery(index) {
    // Fade out the current image
    galleryImage.style.opacity = 0;

    // After the fade-out transition, change the image source and fade it in.
    // We use a small timeout to allow the CSS opacity transition to run.
    // This is intentionally lightweight – if you later change the CSS
    // transition duration, update this value to match for a smooth swap.
    setTimeout(() => {
      galleryImage.src = images[index];
      galleryImage.style.opacity = 1;
    }, 200); // This timeout should match the CSS transition duration

    // Update the active dot
    dots.forEach((dot) => dot.classList.remove("open"));
    dots[index].classList.add("open");
    currentIndex = index;
  }

  // --- Set Initial Gallery State ---
  updateGallery(0);

  // --- Arrow Navigation ---
  leftArrow.addEventListener("click", () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery(newIndex);
  });

  rightArrow.addEventListener("click", () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery(newIndex);
  });
}

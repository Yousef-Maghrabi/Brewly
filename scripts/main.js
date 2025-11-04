import Card from "/scripts/lib/card.js";

{
    document.addEventListener("DOMContentLoaded", () => {
        const productsGrid = document.getElementById("productsGrid");

        // === LOADING PLACEHOLDER ===
        function renderLoading(count = 4) {
            productsGrid.innerHTML = "";
            for (let i = 0; i < count; i++) {
                const skeleton = document.createElement("div");
                skeleton.className = "card skeleton";
                skeleton.innerHTML = `
        <div class="card_image skeleton_box"></div>
        <div class="card_content">
          <div class="skeleton_line w-80 h-20 radius-s"></div>
          <div class="skeleton_line w-60 h-16 radius-s"></div>
          <div class="skeleton_line w-40 h-16 radius-s"></div>
        </div>
      `;
                productsGrid.appendChild(skeleton);
            }
        }

        // === FETCH & RENDER ===
        async function loadProducts() {
            renderLoading(4);

            try {
                const res = await fetch("https://brewly-api.vercel.app/api/machines");
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                const data = await res.json();

                // Clear skeletons
                productsGrid.innerHTML = "";

                // The backend returns nested brand > model structure
                // Example: data = { philips: { pmc01: {...}, pmc02: {...} }, saoco: {...} }
                for (const brandKey in data) {
                    const brand = data[brandKey];
                    for (const modelKey in brand) {
                        const product = brand[modelKey];

                        // Defensive checks for missing fields
                        const title = product.title || "Unnamed Product";
                        const image = product.imagePath
                            ? product.imagePath.replace("/public", "")
                            : "/assets/placeholder.webp";
                        const price = product.price || "0.00";
                        const id = modelKey;

                        new Card(productsGrid, title, image, price, id);
                    }
                }
            } catch (err) {
                console.error("Failed to load products:", err);
                productsGrid.innerHTML = `
        <p class="text_size-s text-accent">⚠️ Failed to load products. Please try again later.</p>
      `;
            }
        }

        // Run on load
        loadProducts();
    });

}

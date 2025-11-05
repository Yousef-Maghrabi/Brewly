# ☕ Brewly: Brew Better. Live Better.

## Project Overview

**Brewly** is a modern, responsive e-commerce platform concept dedicated to premium coffee blends and high-performance brewing equipment.

This project serves two primary purposes:

1.  **Graduation Project:** Demonstrating full-stack (or comprehensive front-end) development, architectural design, and modern coding best practices using **Vanilla HTML, CSS, and JavaScript**.
2.  **Front-End Skills Test:** Providing a realistic, complex e-commerce structure for junior front-end developers to practice core skills like state management, API integration, routing, and responsive design.

---

## 🚀 Key Features

* **Dynamic Product Listing:** Displays a flexible grid of products with real-time filtering and sorting capabilities.
* **Intuitive Product Pages:** Detailed product views featuring image galleries, specifications, and dynamic customer reviews.
* **Responsive Navigation:** Seamless user experience across mobile, tablet, and desktop devices.
* **CTA Integration:** Clear calls-to-action for shopping, subscribing, and exploring product categories.
* **Contact & About Sections:** Comprehensive informational pages detailing the brand's mission and contact information.

---

## 💻 The Junior Front-End Challenge

The core challenge for junior developers tackling this project is to implement a clean, maintainable, and highly responsive user interface that effectively manages data flow.

Focus areas for testing front-end skills include:

| **Skill Area** | **Goal** |
| :--- | :--- |
| **API Integration** | Integrating with the dedicated REST API (`https://brewly-api.vercel.app/`) to fetch and display product data on the Home and Products pages. |
| **Component Reusability** | Creating a single, reusable `ProductCard` component used across Featured Products, Product Grid, and Related Products sections. |
| **State Management** | Handling form state on the Contact page and managing filter/sort selections on the Products page using pure JavaScript. |
| **Carousel/Slider** | Implementing the dynamic carousel for the **Customer Favorites** section without external libraries. |
| **Responsive Design** | Ensuring the navigation menu, product grid, and details layouts adapt flawlessly to mobile viewports. |

---

## 🗺️ Website Structure & Content

The site is divided into five core pages, each with specific content requirements:

### 1. Home Page

* **Headline:** "Brew Better. Live Better."
* **Subheadline:** "Discover premium coffee blends and top-of-the-line machines designed to elevate your daily brew."
* **Sections:** Hero, Featured Products, Why Brewly (sustainability focus), Customer Favorites (Dynamic Carousel), and Join the Brewly Club (Subscription CTA).

### 2. Products Page

* **Goal:** Allow users to efficiently find their perfect brew.
* **Filters:** Must include dynamic filtering by **Coffee Beans, Machines, and Accessories**.
* **Sort Options:** Allow sorting by **Popular, Newest, Price, and Rating**.
* **Display:** Dynamic product grid.

### 3. Single Product Page

* **Dynamic Title & Description**
* **Sections:** Product Gallery (Multiple images), Detailed Specs (Origin, roast level, etc.), Quantity Selector/Add to Cart, Dynamic Customer Reviews (Star Rating, Comments), and Suggested Related Products.

### 4. About Page

# ☕ Brewly — Brew Better. Live Better.

Updated: 2025-11-05

This README was regenerated after a repository-wide review focused on adding human-friendly maintenance headers, small non-breaking defensive tweaks in JS, and clarifying comments across styles and scripts. The edits are intentionally conservative: no UX-breaking changes were made.

## What changed (brief)

- Added top-of-file review headers to many HTML files and component/CSS files to help future maintainers understand intent and design-system linkage.
- Added defensive DOM guards and small, non-breaking hardening to key scripts (loader, card, products listing, product page, header, responsive helpers).
- Fixed a minor CSS syntax issue in `styles/components/card-list.css` discovered during the sweep.
- Normalized backend-returned image paths in `scripts/lib/card.js` to avoid broken images when API returns relative paths.
- This work is committed on branch `maintenance/add-headers-2025-11-05`.

## Changelog (recent commits on branch `maintenance/add-headers-2025-11-05`)

Latest commits (most recent first):

- 1cec731 — docs(html): add review header to login and clarify products filter markup (non-breaking)
- 2214c80 — docs(css): add human-friendly headers to component and effect styles (non-functional)
- 79db6ec — docs: add comments and small defensive guards to core scripts (main, header, slider, responsive)
- 9d31a97 — docs: add internal comments & small defensive tweaks for loader, card, productPage and products (non-breaking)
- 68647d8 — chore: add review headers and minor defensive fixes (WIP) 2025-11-05

If you want the full commit history for this branch, run:

```
git checkout maintenance/add-headers-2025-11-05
git log --oneline
```

## Line-count (LOC) — files included: *.html, *.js, *.css, *.md, LICENSE

Below is an automated per-file line count captured at the time of this update. Total lines: **5577**.

| Lines | Path |
| -----: | --- |
| 517 | `index.html` |
| 385 | `test.html` |
| 353 | `styles/normalize.css` |
| 287 | `contact/index.html` |
| 283 | `styles/style-guide.md` |
| 280 | `scripts/products.js` |
| 271 | `login/index.html` |
| 243 | `products/product/index.html` |
| 204 | `styles/utils/sizing.css` |
| 188 | `scripts/productPage.js` |
| 180 | `styles/components/footer.css` |
| 130 | `styles/components/input.css` |
| 124 | `styles/tokens.css` |
| 124 | `styles/components/card.css` |
| 119 | `styles/components/header.css` |
| 118 | `products/index.html` |
| 104 | `styles/globals.css` |
| 103 | `README.md` |
| 94 | `styles/effects/gallery.css` |
| 93 | `scripts/lib/slider.js` |
| 91 | `styles/utils/position.css` |
| 91 | `scripts/lib/card.js` |
| 88 | `login/style.css` |
| 88 | `styles/utils/spacing.css` |
| 83 | `scripts/main.js` |
| 71 | `styles/motion/transition.css` |
| 71 | `scripts/lib/responsive.js` |
| 70 | `styles/utils/layout.css` |
| 66 | `styles/utils/text.css` |
| 64 | `styles/components/button.css` |
| 56 | `styles/components/card-list.css` |
| 52 | `styles/components/customloader.css` |
| 51 | `scripts/lib/loader.js` |
| 51 | `styles/components/link.css` |
| 50 | `styles/effects/innershadow.css` |
| 47 | `styles/utils/grid.css` |
| 41 | `styles/components/tabs.css` |
| 41 | `scripts/header.js` |
| 33 | `styles/utils/flex.css` |
| 30 | `styles/components/skeleton.css` |
| 26 | `styles/components/form.css` |
| 23 | `scripts/lib/enterleft.js` |
| 22 | `LICENSE` |
| 22 | `scripts/lib/tabs.js` |
| 19 | `styles/motion/enterleft.css` |
| 18 | `styles/components/image.css` |
| 12 | `styles/utils/radius.css` |

---

How this LOC table was generated:

```powershell
Get-ChildItem -Path . -Recurse -Include *.html,*.js,*.css,*.md,LICENSE |
	ForEach-Object { $c=(Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue).Split("`n").Count; "$c`t$($_.FullName)" } |
	Sort-Object -Descending
```

## Next steps & suggestions

- Run a quick visual smoke test (open `index.html`, `products/index.html`, and `products/product/index.html`) to confirm no visible regressions.
- Consider adding a lightweight CI pipeline that runs HTML/CSS/JS linters and the LOC report on each PR.
- If you'd like, I can open a PR from `maintenance/add-headers-2025-11-05` into `main` with these changes and include this README as the summary.

---

Summary: README regenerated and LOC table added. Total lines (selected file types): **5577**.

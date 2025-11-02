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

* **Focus:** **Our Story, Your Brew.**
* **Key Messages:** Our Mission (premium, accessible, enjoyable), Sustainability Promise (ethically sourced, eco-friendly), and The Brewly Experience (technology meets taste).

### 5. Contact Page

* **Headline:** "Let’s Talk Coffee."
* **Contact Options:** Functional **Name, Email, Subject, Message** form.
* **Alternative Info:** support@brewly.com, +1 (800) BREWLY, Brewly HQ, Seattle, WA.

---

## 🛠️ Installation and Setup

### Steps

1.  **Clone the Repository**

    Clone the repository using the following SSH URL:

    ```bash
    git clone git@github.com:Yousef-Maghrabi/Brewly.git
    cd Brewly
    ```

2.  **Run Locally**

    Open the `index.html` file in your preferred browser to view the project.

    *Note: If you encounter issues fetching product data (Cross-Origin Resource Sharing or CORS errors) due to browser security restrictions on local files, you may need to run the project using a simple local web server (such as Python's `http.server` or a VS Code extension like Live Server).*

---

## Notes

This project aims to deliver a modern, production-ready front-end application built with **Vanilla HTML, CSS, and JavaScript** and styled using **Standard CSS**. The focus is on modular design, performance optimization, and adherence to accessibility standards.

**Developed by:** Yousef El-Maghrabi

**Thanks you for visiting my repo!**

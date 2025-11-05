/*
  Brewly — Reviewed: 2025-11-05
  File: products.js
  Purpose: Fetch and render product listing. Minor defensive comments added. Do not change external API contract here.
*/
import Loader from "./lib/loader.js";
/*
 * Product
 * Lightweight product card renderer used by the products page.
 * - Inputs: title (string), price (number or string), parent (DOM element)
 * - Renders a small card with title and price into the parent element.
 *
 * Production notes (kept minimal and non-opinionated):
 * - Defensive: checks for parent before appending.
 * - No external dependencies.
 * - Avoids changing DOM layout/structure used by the rest of the library.
 */
class Product {
  title;
  price;
  id;
  parent;

  constructor(title, price, id, parent) {
    // Keep input handling minimal and consistent with existing library behaviour.
    this.title = title;
    this.id = id;
    // Ensure price is displayed with a leading dollar sign when provided as a primitive.
    this.price = price != null ? "$" + price : "";
    this.parent = parent;

    this.#render();
  }

  #render() {
    // Init container
    const productContainer = document.createElement("a");
    productContainer.href = `/products/product/?id=${this.id}`;
    productContainer.className = "card_list transition";

    // Init title
    const productTitle = document.createElement("p");
    productTitle.className = "card_list-title";
    // Truncate long titles to preserve layout (matches original behaviour)
    productTitle.textContent =
      typeof this.title === "string" && this.title.length > 20
        ? this.title.slice(0, 17) + ".."
        : this.title ?? "";

    // Init price
    const productPrice = document.createElement("p");
    productPrice.className = "card_list-price";
    productPrice.textContent = this.price ?? "";

    // Append children into container
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productPrice);

    // append container into parent if available
    if (this.parent && this.parent.appendChild) {
      this.parent.appendChild(productContainer);
    }
  }
}

/*
 * Products fetch + render
 * - Keeps the original data-shape parsing logic (iterating keys) because the
 *   backend returns nested objects for coffee and machines. Do not change
 *   data-shape assumptions here unless the backend contract changes.
 */
const productsSection = document.getElementById("productsSection");
const loaderContainer = document.getElementById("loader");
const loader = new Loader(loaderContainer);
let data = [];
// Creating Products Section and fetching data
{
  // 1. init
  if (!productsSection) {
    // Production: fail gracefully when DOM container is missing.
    console.warn("#productsSection element not found in the DOM.");
  } else {
    loader.render();

    // Fetch both endpoints and combine results. Promise.all is used to
    // parallelize the requests while keeping the existing parsing style.
    Promise.all([
      fetch("https://brewly-api.vercel.app/api/coffee").then((r) => r.json()),
      fetch("https://brewly-api.vercel.app/api/machines").then((r) => r.json()),
    ])
      .then(([coffee, machines]) => {
        // backend returns objects keyed by id — preserve original approach
        for (let key in coffee) {
          if (Object.prototype.hasOwnProperty.call(coffee, key)) {
            data.push({ ...coffee[key], id: key });
          }
        }

        for (let brand in machines) {
          if (Object.prototype.hasOwnProperty.call(machines, brand)) {
            const brandGroup = machines[brand];
            for (let key in brandGroup) {
              if (Object.prototype.hasOwnProperty.call(brandGroup, key)) {
                data.push({ ...brandGroup[key], id: key });
              }
            }
          }
        }
      })
      .catch((err) => {
        // Log for debugging in production; keep original alert behaviour.
        console.error(err);
        alert("Weak Internet Connection");
      })
      .finally(() => {
        // Ensure loader is removed whether successful or not
        loader.abort();

        if (data.length === 0) {
          const empty = document.createElement("p");
          empty.textContent = "No products available.";
          productsSection.appendChild(empty);
        } else {
          // Render each product. Iterate array items rather than `for..in` to
          // preserve original ordering and clarity.
          for (let i = 0; i < data.length; i++) {
            const tmp = data[i];
            // Keep the same calls/signature as the existing library
            new Product(tmp.title, tmp.price, tmp.id, productsSection);
          }
        }
      });
  }
}
// handling search
{
  const form = document.getElementById("filterBar");
  const search = document.getElementById("search");
  const category = document.getElementById("category");
  const brand = document.getElementById("brand");
  const searchBtn = document.getElementById("searchBtn");
  // Defensive: if any of the filter UI pieces are missing, skip attaching handlers.
  // This keeps the page functional when the filter bar is removed or rendered conditionally.
  if (!form || !search || !category || !brand || !searchBtn) return;
  const getCategory = () => {
    let tmp = [];
    if (category.value !== "null") {
      for (let i of data) {
        if (
          category.value === "coffee" &&
          i.imagePath.includes("/public/images/ct")
        ) {
          tmp.push({ title: i.title, price: i.price, id: i.id });
        } else if (category.value === "machines") {
          if (
            i.imagePath.includes("/public/images/pmc") ||
            i.imagePath.includes("/public/images/smc")
          ) {
            tmp.push({ title: i.title, price: i.price, id: i.id });
          } else {
            // do nothing
          }
        } else {
          // do nothing
        }
      }
      return tmp;
    }
    return null;
  };
  const getBrand = (data) => {
    let tmp = [];
    if (brand.value === "null") {
      return null;
    } else if (brand.value === "cbtl") {
      for (let i of data) {
        if (i.id.includes("ct")) {
          tmp.push({ title: i.title, price: i.price, id: i.id });
        }
      }
      return tmp;
    } else if (brand.value === "philips") {
      for (let i of data) {
        if (i.id.includes("pmc")) {
          tmp.push({ title: i.title, price: i.price, id: i.id });
        }
      }
      return tmp;
    } else if (brand.value === "saeco") {
      for (let i of data) {
        if (i.id.includes("smc")) {
          tmp.push({ title: i.title, price: i.price, id: i.id });
        }
      }
      return tmp;
    }
    return null;
  };
  const getSearch = (data) => {
    let tmp = [];
    for (let i of data) {
      if (
        i.title
          .toLowerCase()
          .trim()
          .includes(String(search.value).toLowerCase().trim())
      ) {
        tmp.push(i);
      }
    }
    return tmp;
  };
  category.addEventListener("change", () => {
    if (category.value === "coffee") {
      brand.innerHTML = "";
      let defaultOption = document.createElement("option");
      defaultOption.value = "null";
      defaultOption.setAttribute("default", true);
      defaultOption.innerHTML = "Choose Brand..";
      let coffeeBeanTeaLeaf = document.createElement("option");
      coffeeBeanTeaLeaf.value = "cbtl";
      coffeeBeanTeaLeaf.innerHTML = "Coffee Bean & Tea Leaf";
      brand.appendChild(defaultOption);
      brand.appendChild(coffeeBeanTeaLeaf);
    } else if (category.value === "machines") {
      brand.innerHTML = "";
      let defaultOption = document.createElement("option");
      defaultOption.value = "null";
      defaultOption.setAttribute("default", true);
      defaultOption.innerHTML = "Choose Brand..";
      let philips = document.createElement("option");
      philips.value = "philips";
      philips.innerHTML = "Philips";
      let saeco = document.createElement("option");
      saeco.value = "saeco";
      saeco.innerHTML = "Saeco";
      brand.appendChild(defaultOption);
      brand.appendChild(philips);
      brand.appendChild(saeco);
    } else {
      brand.innerHTML = "";
      let defaultOption = document.createElement("option");
      defaultOption.value = "null";
      defaultOption.setAttribute("default", true);
      defaultOption.innerHTML = "Choose Brand..";
      brand.appendChild(defaultOption);
    }
  });
  searchBtn.addEventListener("click", () => {
    let tmp = [];
    loader.render();
    // if all fields aren't empty
    if (search.value.toLowerCase().trim() !== "" && brand.value !== "null") {
      const c = getCategory();
      const b = getBrand(c);
      tmp = getSearch(b);
    } else if (brand.value !== "null") {
      const c = getCategory();
      tmp = getBrand(c);
    } else if (
      search.value.toLowerCase().trim() !== "" &&
      category.value !== "null"
    ) {
      const c = getCategory();
      tmp = getSearch(c);
    } else if (search.value.toLowerCase().trim() !== "") {
      tmp = getSearch(data);
    } else if (category.value !== "null") {
      tmp = getCategory();
    } else {
      tmp = data;
    }
    loader.abort();
    productsSection.innerHTML = "";
    for (let i of tmp) {
      new Product(i.title, i.price, i.id, productsSection);
    }
  });
}

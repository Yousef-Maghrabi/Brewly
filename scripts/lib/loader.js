/* Brewly — Reviewed: 2025-11-05 — Small DOM loader utility used by product listing */
class Loader {
  parent;

  constructor(parent) {
    this.parent = parent;
  }

  render() {
    this.parent.classList.add("layered");
    const loaderContainer = document.createElement("div");
    loaderContainer.className =
      "flex-v gap-m flex_align-center flex_justify-center";

    const loaderEle = document.createElement("div");
    loaderEle.className = "custom-loader";

    const loaderText = document.createElement("p");
    loaderText.textContent = "Fetching Products...";

    loaderContainer.append(loaderEle, loaderText);
    // Append loader to parent if present. Using append keeps existing markup intact.
    if (this.parent && this.parent.append) this.parent.append(loaderContainer);
  }

  abort() {
    this.parent.classList.remove("layered");
    if (this.parent) this.parent.innerHTML = "";
  }
}

export default Loader;

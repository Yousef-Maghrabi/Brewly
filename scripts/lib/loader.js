/* Brewly — Reviewed: 2025-11-05
   Small DOM loader utility used by product listing.
   Notes:
   - Conservative: only manipulates a provided parent container.
   - Keeps UX friendly with a short loading message.
*/

class Loader {
  parent;

  constructor(parent) {
    // Store the parent container where loader UI will be injected
    this.parent = parent;
  }

  render() {
    // Defensive: if parent is not provided, do nothing silently.
    if (!this.parent) return;

    // Add a visual layering class to the parent so loader appears above content
    this.parent.classList.add("layered");

    const loaderContainer = document.createElement("div");
    loaderContainer.className = "flex-v gap-m flex_align-center flex_justify-center";

    // The spinner element (visual only)
    const loaderEle = document.createElement("div");
    loaderEle.className = "custom-loader";

    // Friendly, non-blocking message for users while data loads
    const loaderText = document.createElement("p");
    loaderText.textContent = "Loading products...";

    loaderContainer.append(loaderEle, loaderText);

    // Append loader to parent if present. Using append keeps existing markup intact.
    if (this.parent && this.parent.append) this.parent.append(loaderContainer);
  }

  abort() {
    // Remove the layering class and clear the parent's temporary loader content.
    if (!this.parent) return;
    this.parent.classList.remove("layered");
    // Clearing innerHTML resets loader content; keep this limited to loader container usage.
    this.parent.innerHTML = "";
  }
}

export default Loader;

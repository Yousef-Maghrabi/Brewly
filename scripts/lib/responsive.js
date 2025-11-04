/**
 * responsive.js
 *
 * Change elements' classes based on window width.
 * Uses data attributes: data-class-s, data-class-m, data-class-l, data-class-xl
 * Those map to element.dataset.classS / classM / classL / classXl
 */

const responsiveElems = document.querySelectorAll("[responsive]");

function windowSize() {
  if (window.innerWidth <= 400) {
    return "s";
  } else if (window.innerWidth <= 768) {
    return "m";
  } else if (window.innerWidth <= 992) {
    return "l";
  } else {
    return "xl";
  }
}

function applyResponsiveClasses() {
  const size = windowSize();

  // priority order for each target size (most preferred first)
  const priorities = {
    s: ["classS", "classM", "classL", "classXl"], // s > m > l > xl
    m: ["classM", "classS", "classL", "classXl"], // m > s > l > xl
    l: ["classL", "classM", "classS", "classXl"], // l > m > s > xl
    xl: ["classXl", "classL", "classM", "classS"], // xl > l > m > s
  };

  responsiveElems.forEach((el) => {
    const order = priorities[size] || priorities.xl;
    let applied = false;

    for (let key of order) {
      // element.dataset keys are camelCased, e.g. data-class-s -> dataset.classS
      const value = el.dataset[key];
      if (value !== undefined && value !== "") {
        // set the element's classes to the provided string
        // using className is safe and straightforward for full replacement
        el.className = value;
        applied = true;
        break;
      }
    }

    if (!applied) {
      console.warn("No responsive data-class-* found for element:", el);
    }
  });
}

// initial application (script is deferred in your HTML, so DOM is ready)
applyResponsiveClasses();

// update on resize
window.addEventListener("resize", applyResponsiveClasses);

// optional: helpful console info
console.log("Detected responsive elements:", responsiveElems.length);
console.log("Current window size:", windowSize());

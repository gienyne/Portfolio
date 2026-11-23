export function Media({ src, alt = "", className = "" }) {
  return `<div class="media ${className}"><img src="${src}" alt="${alt}"></div>`;
}

document.addEventListener(
  "error",
  (event) => {
    const element = event.target;
    if (element && element.tagName === "IMG" && element.parentElement.classList.contains("media")) {
      element.parentElement.classList.add("empty");
    }
  },
  true
);
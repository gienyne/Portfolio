import { TECH_STACK } from "../../data/techStack.js";
import { t } from "../../i18n/index.js";

const MARQUEE_SPEED = 38;
const MAX_REPEATS = 40;

function renderPill(item) {
  return `<span class="tech-pill"><i class="fas ${item.icon}"></i>${item.name}</span>`;
}

export function TechStack() {
  const rows = TECH_STACK.map(
    (row) => `
      <div class="tech-row ${row.reverse ? "tech-row-reverse" : ""}" style="--row-color: ${row.color}">
        <h3 class="tech-row-title">${t(row.titleKey)}</h3>
        <div class="tech-marquee">
          <div class="tech-track">
            <div class="tech-group">${row.items.map(renderPill).join("")}</div>
          </div>
        </div>
      </div>`
  ).join("");

  return `<div class="tech-stack">${rows}</div>`;
}

export function mountTechStack() {
  document.querySelectorAll(".tech-track").forEach(startMarquee);
}

function startMarquee(track) {
  const group = track.firstElementChild;
  const originals = [...group.children];
  const minWidth = Math.max(track.parentElement.clientWidth, screen.width);

  let repeats = 0;
  while (group.getBoundingClientRect().width < minWidth && repeats < MAX_REPEATS) {
    originals.forEach((pill) => group.appendChild(pill.cloneNode(true)));
    repeats += 1;
  }

  track.appendChild(group.cloneNode(true));
  track.style.setProperty("--marquee-duration", `${group.getBoundingClientRect().width / MARQUEE_SPEED}s`);
}
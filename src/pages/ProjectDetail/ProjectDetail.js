import { Media } from "../../components/Media/Media.js";
import { PROJECT_DETAILS } from "../../data/projectDetails.js";
import { PROFILE } from "../../data/profile.js";
import { t, localized } from "../../i18n/index.js";

function renderBlock(block) {
  switch (block.type) {
    case "heading":
      return `<h2 class="detail-heading">${localized(block.text)}</h2>`;

    case "text":
      return `<p class="detail-text">${localized(block.text)}</p>`;

    case "list":
      return `<ul class="detail-list">${block.items
        .map((item) => `<li class="detail-list-item"><strong>${localized(item.label)}:</strong> ${localized(item.text)}</li>`)
        .join("")}</ul>`;

    case "specs":
      return `<dl class="detail-specs">${block.items
        .map((item) => `<dt class="detail-spec-label">${localized(item.label)}</dt><dd class="detail-spec-value">${localized(item.text)}</dd>`)
        .join("")}</dl>`;

    case "figure":
      return `
        <figure class="detail-figure">
          ${Media({ src: `assets/projects/${block.image}`, alt: localized(block.alt) })}
          <figcaption class="detail-caption">${localized(block.caption)}</figcaption>
        </figure>`;

    case "todo":
      return `<p class="detail-todo">${localized(block.text)}</p>`;

    case "github":
      return `<p class="detail-text"><a href="${block.url || PROFILE.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> ${localized(block.text)}</a></p>`;

    default:
      return "";
  }
}

export const ProjectDetailPage = {
  render(params) {
    const detail = PROJECT_DETAILS[params.id];
    if (!detail) return `<p class="detail-text">${t("notFound")}</p>`;

    return `
      <article class="detail">
        <a class="detail-back" href="#/projects">${t("backToProjects")}</a>
        <h1 class="detail-title">${localized(detail.title)}</h1>
        <p class="detail-lead">${localized(detail.lead)}</p>
        ${detail.blocks.map(renderBlock).join("")}
      </article>
    `;
  },
};
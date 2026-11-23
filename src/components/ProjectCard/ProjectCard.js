import { Media } from "../Media/Media.js";
import { PROFILE } from "../../data/profile.js";
import { t } from "../../i18n/index.js";

export function ProjectCard(project) {
  const githubUrl = project.github || PROFILE.github;
  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");

  const detailLink = project.hasDetail
    ? `<a href="#/projects/${project.id}">${t("btnDetails")}</a>`
    : "";

  return `
    <article class="project-card">
      ${Media({ src: `assets/projects/${project.image}`, className: "project-card-media" })}
      <h3 class="project-card-title">${t(project.titleKey)}</h3>
      <p class="project-card-text">${t(project.descKey)}</p>
      <ul class="project-card-tags">${tags}</ul>
      <div class="project-card-links">
        ${detailLink}
        <a href="${githubUrl}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </article>
  `;
}
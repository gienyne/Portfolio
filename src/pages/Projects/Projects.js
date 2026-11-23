import { ProjectCard } from "../../components/ProjectCard/ProjectCard.js";
import { PROJECTS } from "../../data/projects.js";
import { t } from "../../i18n/index.js";

export const ProjectsPage = {
  render() {
    return `
      <section class="projects">
        <h1 class="page-title">${t("secProjects")}</h1>
        <div class="project-grid">
          ${PROJECTS.map(ProjectCard).join("")}
        </div>
      </section>
    `;
  },
};
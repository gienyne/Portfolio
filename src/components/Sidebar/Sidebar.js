import { Button } from "../Button/Button.js";
import { Media } from "../Media/Media.js";
import { PROFILE } from "../../data/profile.js";
import { t, getLang, setLang } from "../../i18n/index.js";

const NAV_LINKS = [
  { id: "home", href: "#/", icon: "fas fa-home", labelKey: "navHome" },
  { id: "projects", href: "#/projects", icon: "fas fa-folder-open", labelKey: "navProjects" },
  { id: "contact", href: "#/contact", icon: "fas fa-envelope", labelKey: "navContact" },
];

const LANGUAGES = ["de", "en", "fr"];

export function Sidebar(activeNav) {
  const links = NAV_LINKS.map(
    (link) => `
      <a class="sidebar-link ${link.id === activeNav ? "active" : ""}" href="${link.href}">
        <i class="${link.icon}"></i>
        <span>${t(link.labelKey)}</span>
      </a>`
  ).join("");

  const languageButtons = LANGUAGES.map(
    (lang) => `
      <button class="lang-button ${lang === getLang() ? "active" : ""}" data-lang="${lang}">
        ${lang.toUpperCase()}
      </button>`
  ).join("");

  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        ${Media({ src: PROFILE.photo, alt: PROFILE.name, className: "sidebar-avatar" })}
        <div class="sidebar-name">${PROFILE.name}</div>
        <div class="sidebar-role">${t("roleSubtitle")}</div>
        <div class="sidebar-location">
          <i class="fas fa-location-dot"></i>
          <span>${t("locationVal")}</span>
        </div>

        <nav class="sidebar-nav">${links}</nav>

        ${Button({ label: t("btnCV"), href: PROFILE.cv, icon: "fas fa-download", download: true, extraClass: "sidebar-cv" })}
      </div>

      <div class="sidebar-footer">
        <div class="lang-switch">${languageButtons}</div>
        <small>&copy; 2026 Dimitry Nyatcha</small>
      </div>
    </aside>
  `;
}

export function mountSidebar() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
}
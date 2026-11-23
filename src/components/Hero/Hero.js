import { Button } from "../Button/Button.js";
import { PROFILE } from "../../data/profile.js";
import { t } from "../../i18n/index.js";

export function Hero() {
  return `
    <div class="hero">
      <h1 class="hero-title">${t("heroTitle")}</h1>
      <p class="hero-subtitle">${t("heroSub")}</p>
      <p class="hero-text">${t("heroDesc")}</p>

      <div class="hero-actions">
        ${Button({ label: "LinkedIn", href: PROFILE.linkedin, variant: "primary", icon: "fab fa-linkedin", external: true })}
        ${Button({ label: "GitHub", href: PROFILE.github, icon: "fab fa-github", external: true })}
        ${Button({ label: t("btnContact"), href: "#/contact" })}
      </div>
    </div>
  `;
}
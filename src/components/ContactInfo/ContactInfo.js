import { PROFILE } from "../../data/profile.js";
import { t } from "../../i18n/index.js";

export function ContactInfo() {
  return `
    <div class="contact-info">
      <h1 class="contact-info-title">${t("contactHeading")}</h1>
      <p class="contact-info-text">${t("contactText")}</p>
      <a class="contact-info-mail" href="mailto:${PROFILE.email}">
        <i class="fas fa-envelope"></i> ${PROFILE.email}
      </a>
    </div>
  `;
}
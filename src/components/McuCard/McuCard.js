import { MCUS } from "../../data/mcus.js";
import { t } from "../../i18n/index.js";

export function McuCard() {
  const items = MCUS.map(
    (mcu) => `
      <div class="mcu-card-item">
        <i class="fas fa-microchip"></i>
        <strong>${mcu.name}</strong>
        <span>${mcu.detail}</span>
      </div>`
  ).join("");

  return `
    <div class="mcu-card">
      <h2 class="mcu-card-title">${t("mcuTitle")}</h2>
      <div class="mcu-card-grid">${items}</div>
    </div>
  `;
}
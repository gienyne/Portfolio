import { Button } from "../Button/Button.js";
import { PROFILE } from "../../data/profile.js";
import { t } from "../../i18n/index.js";

export function ContactForm() {
  return `
    <form class="contact-form" id="contact-form" novalidate>
      <div class="contact-form-row">
        <input class="contact-form-input" type="text" name="name" required autocomplete="name" placeholder="${t("placeholderName")}">
        <input class="contact-form-input" type="email" name="email" required autocomplete="email" placeholder="${t("placeholderEmail")}">
      </div>

      <textarea class="contact-form-input" name="message" required placeholder="${t("placeholderMessage")}"></textarea>

      <!-- Anti-spam field -->
      <input class="contact-form-honeypot" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">

      ${Button({ label: t("btnSend"), variant: "primary", type: "submit" })}
      <p class="contact-form-status" id="contact-form-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

export function mountContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-form-status");
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    status.className = "contact-form-status";
    status.textContent = t("formSending");
    submitButton.disabled = true;

    try {
      const response = await fetch(PROFILE.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(response.status);

      form.reset();
      status.classList.add("is-success");
      status.textContent = t("formOk");
    } catch (error) {
      status.classList.add("is-error");
      status.textContent = t("formErr");
    }

    submitButton.disabled = false;
  });
}
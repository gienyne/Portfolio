import { ContactInfo } from "../../components/ContactInfo/ContactInfo.js";
import { ContactForm, mountContactForm } from "../../components/ContactForm/ContactForm.js";

export const ContactPage = {
  render() {
    return `
      <section class="contact-page">
        ${ContactInfo()}
        ${ContactForm()}
      </section>
    `;
  },

  mount() {
    mountContactForm();
  },
};
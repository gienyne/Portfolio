import { Hero } from "../../components/Hero/Hero.js";
import { McuCard } from "../../components/McuCard/McuCard.js";
import { TechStack, mountTechStack } from "../../components/TechStack/TechStack.js";

export const HomePage = {
  render() {
    return `
      <section class="home">
        <div class="home-hero">
          ${Hero()}
          ${McuCard()}
        </div>
        ${TechStack()}
      </section>
    `;
  },

  mount() {
    mountTechStack();
  },
};
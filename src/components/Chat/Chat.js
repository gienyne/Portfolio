import { PROFILE } from "../../data/profile.js";
import { escapeHtml } from "../../utils/escapeHtml.js";
import { t, getBot } from "../../i18n/index.js";

let isOpen = false;
const history = [];

function renderMessage(text, author) {
  return `<div class="chat-message chat-message-${author}">${escapeHtml(text)}</div>`;
}

export function Chat() {
  const messages = history.map((message) => renderMessage(message.text, message.author)).join("");

  const suggestions = getBot()
    .suggestions.map((question) => `<button class="chat-suggestion" type="button">${escapeHtml(question)}</button>`)
    .join("");

  return `
    <button class="chat-toggle" id="chat-toggle" aria-label="Chat">
      <i class="fas fa-comment-dots"></i>
    </button>

    <div class="chat-window ${isOpen ? "open" : ""}" id="chat-window">
      <div class="chat-header">
        <div class="chat-header-text">
          <strong>${PROFILE.shortName}</strong>
          <span>${t("chatStatus")}</span>
        </div>
        <button class="chat-close" id="chat-close" aria-label="Close">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="chat-messages" id="chat-messages">
        ${renderMessage(t("chatWelcome"), "bot")}
        ${messages}
      </div>

      <div class="chat-suggestions">${suggestions}</div>

      <div class="chat-input">
        <input type="text" id="chat-input" placeholder="${t("chatPlaceholder")}">
        <button class="chat-send" id="chat-send" aria-label="Send">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;
}

export function mountChat() {
  document.getElementById("chat-toggle").addEventListener("click", toggleChat);
  document.getElementById("chat-close").addEventListener("click", toggleChat);
  document.getElementById("chat-send").addEventListener("click", sendTypedMessage);
  document.getElementById("chat-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendTypedMessage();
  });

  document.querySelectorAll(".chat-suggestion").forEach((button) => {
    button.addEventListener("click", () => ask(button.textContent));
  });
}

function toggleChat() {
  isOpen = !isOpen;
  document.getElementById("chat-window").classList.toggle("open", isOpen);
}

function addMessage(text, author) {
  history.push({ text, author });

  const box = document.getElementById("chat-messages");
  box.insertAdjacentHTML("beforeend", renderMessage(text, author));
  box.scrollTop = box.scrollHeight;
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ");
}

function getBotResponse(question) {
  const { rules, fallback } = getBot();
  const text = ` ${normalize(question)} `;

  let bestAnswer = null;
  let bestScore = 0;

  rules.forEach(([keywords, answer]) => {
    const score = keywords.reduce(
      (sum, word) => (text.includes(normalize(word)) ? sum + word.length : sum),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = answer;
    }
  });

  return bestAnswer || fallback;
}

function ask(question) {
  addMessage(question, "user");
  setTimeout(() => addMessage(getBotResponse(question), "bot"), 500);
}

function sendTypedMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  ask(text);
}
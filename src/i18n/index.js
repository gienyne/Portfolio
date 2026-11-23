import { de } from "./de.js";
import { en } from "./en.js";
import { fr } from "./fr.js";

const DICTIONARIES = { de, en, fr };
const DEFAULT_LANG = "de";

let currentLang = readSavedLang();
const listeners = [];

function readSavedLang() {
  try {
    const saved = localStorage.getItem("lang");
    return DICTIONARIES[saved] ? saved : DEFAULT_LANG;
  } catch (error) {
    return DEFAULT_LANG;
  }
}

export function getLang() {
  return currentLang;
}

export function t(key) {
  const text = DICTIONARIES[currentLang][key];
  return text === undefined ? key : text;
}


export function localized(value) {
  if (typeof value === "string") return value;
  return value[currentLang] !== undefined ? value[currentLang] : value.de;
}

export function getBot() {
  return DICTIONARIES[currentLang].bot;
}

export function setLang(lang) {
  if (!DICTIONARIES[lang]) return;

  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (error) {

  }

  document.documentElement.lang = lang;
  listeners.forEach((listener) => listener(lang));
}

export function onLangChange(listener) {
  listeners.push(listener);
}

document.documentElement.lang = currentLang;
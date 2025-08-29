import "./global-C3NZUKAC.js";
import { a as addIcons } from "./ix-icon.entry-CYj13Rk8.js";
import "./init-BC6OebfG.js";
import { z as iconRefresh } from "./index-TgiuVEsn.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();

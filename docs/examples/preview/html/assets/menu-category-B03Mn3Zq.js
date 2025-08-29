import "./global-C3NZUKAC.js";
import { a as addIcons } from "./ix-icon.entry-CYj13Rk8.js";
import "./init-BC6OebfG.js";
import { d as iconRocket, B as iconGlobe, r as iconHome } from "./index-TgiuVEsn.js";
addIcons({
  iconHome,
  iconGlobe,
  iconRocket
});
(async () => {
  await window.customElements.whenDefined("ix-menu");
  const menu = document.querySelector("ix-menu");
  menu.breakpoints = ["medium"];
})();

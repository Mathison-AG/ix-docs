import "./global-C3NZUKAC.js";
import { a as addIcons } from "./ix-icon.entry-CYj13Rk8.js";
import "./init-BC6OebfG.js";
import { c as iconBulb } from "./index-TgiuVEsn.js";
const mapNavigationMigration = "";
addIcons({
  iconBulb
});
const overlay = document.getElementById("overlay");
const buttonOpenOverlay = document.getElementById("btn-open-overlay");
let expanded = overlay.getAttribute("expanded") === "true";
overlay.addEventListener("expandedChanged", (e) => {
  expanded = e.detail.expanded;
});
buttonOpenOverlay.addEventListener("click", () => {
  expanded = !expanded;
  overlay.setAttribute("expanded", expanded);
});

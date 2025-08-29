import "./global-C3NZUKAC.js";
import { a as addIcons } from "./ix-icon.entry-CYj13Rk8.js";
import "./init-BC6OebfG.js";
import { F as iconUndo } from "./index-TgiuVEsn.js";
import { t as toast } from "./index-DmECL0yT.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BX-tL-0i-iu9BW76b.js";
import "./index-Cz75KU1f-BUHLjWzB.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-B5B7HmpH-BXCJNYHu.js";
import "./theme-switcher-Bg6wsOIn-C92mV1Nh.js";
addIcons({
  iconUndo
});
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastMessageButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    await toast({
      title: "Toast headline",
      message: customModal,
      type: "success"
    });
  });
  document.getElementById("toastActionButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    const instance = await toast({
      title: "Toast headline",
      message: customModal,
      action: customModalAction
    });
    customModal.querySelector("ix-button").addEventListener("click", () => {
      instance.close();
    });
  });
})();

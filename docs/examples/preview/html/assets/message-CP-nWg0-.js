import "./global-C3NZUKAC.js";
import "./index-DmECL0yT.js";
import { a as showMessage } from "./modal-BX-tL-0i-iu9BW76b.js";
import "./init-BC6OebfG.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-B5B7HmpH-BXCJNYHu.js";
import "./theme-switcher-Bg6wsOIn-C92mV1Nh.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-Cz75KU1f-BUHLjWzB.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", async () => {
  (await showMessage.success(
    "Example title",
    "message",
    "Save",
    "Cancel",
    "payload:save",
    "payload:cancel"
  )).once(console.log);
});

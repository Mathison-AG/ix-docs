import "./global-C3NZUKAC.js";
import { s as showModalLoading } from "./index-DmECL0yT.js";
import "./init-BC6OebfG.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BX-tL-0i-iu9BW76b.js";
import "./index-Cz75KU1f-BUHLjWzB.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-B5B7HmpH-BXCJNYHu.js";
import "./theme-switcher-Bg6wsOIn-C92mV1Nh.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress = showModalLoading("Loading 0/2");
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);
    if (count === 2) {
      progress.finish("Done");
      clearInterval(interval);
    }
  }, 1e3);
});

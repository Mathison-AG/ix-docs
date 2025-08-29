import "./animation-B5B7HmpH-BXCJNYHu.js";
import { s as showModal } from "./modal-BX-tL-0i-iu9BW76b.js";
async function showAppSwitch(config) {
  const modal = document.createElement("ix-application-switch-modal");
  modal.config = config;
  const result = await showModal({
    content: modal,
    size: "840",
    closeOnBackdropClick: true
  });
  const appSwitchElement = result.htmlElement.querySelector("ix-application-switch-modal");
  return (updateAppSwitchConfig) => {
    if (!appSwitchElement) {
      console.warn("ix-application-switch-modal element not found!");
      return;
    }
    appSwitchElement.config = updateAppSwitchConfig;
  };
}
export {
  showAppSwitch as s
};

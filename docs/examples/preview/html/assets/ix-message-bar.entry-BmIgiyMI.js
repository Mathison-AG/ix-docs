import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C3NZUKAC.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
import { q as iconClose, A as iconNotification, i as iconInfo, c as iconSuccess, a as iconWarning, B as iconWarningRhomb, b as iconError } from "./index-Cz75KU1f-BUHLjWzB.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem;}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .alarm{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .critical{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-critical)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .success{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-success)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .neutral{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-neutral)}:host .primary{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-primary)}:host .message-content{flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}";
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
    this.type = "info";
    this.dismissible = true;
  }
  componentWillRender() {
    const config = MessageBar.messageTypeConfigs[this.type];
    if (config) {
      this.icon = config.icon;
      this.color = config.color;
    }
  }
  closeAlert(el) {
    const { defaultPrevented } = this.closedChange.emit();
    if (!defaultPrevented) {
      animate(el, {
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: "easeOutSine",
        onComplete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "f01c0ad8c2f5c129e87db050c5638605981735e7" }, h("div", { key: "0af18ae5c670b819f44e0cd0c0f1820698f02e70", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "4b5243b9da035c04af4ae2e16bd9163eb4523a75", color: this.color, name: this.icon }), h("div", { key: "29613817b6717e76c6d3097907715016aae93c99", class: "message-content" }, h("slot", { key: "88412173e02583aa932c586963f3285b221ba6ea" })), this.dismissible ? h("ix-icon-button", { icon: iconClose, iconColor: "color-soft-text", size: "24", ghost: true, onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.messageTypeConfigs = {
  alarm: { icon: iconError, color: "color-alarm" },
  danger: { icon: iconError, color: "color-alarm" },
  critical: { icon: iconWarningRhomb, color: "color-critical" },
  warning: { icon: iconWarning, color: "color-warning" },
  success: { icon: iconSuccess, color: "color-success" },
  info: { icon: iconInfo, color: "color-info" },
  neutral: { icon: iconNotification, color: "color-neutral" },
  primary: { icon: iconNotification, color: "color-primary" }
};
MessageBar.style = messageBarCss;
export {
  MessageBar as ix_message_bar
};

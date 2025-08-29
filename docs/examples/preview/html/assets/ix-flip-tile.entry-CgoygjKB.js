import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-C3NZUKAC.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { F as FlipTileState } from "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import { t as iconEye } from "./index-Cz75KU1f-BUHLjWzB.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
import { A as Animation } from "./animation-B5B7HmpH-BXCJNYHu.js";
const flipTileCss = ".text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:flex;flex-direction:column;perspective:1000px;}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}:host .flip-tile-container .footer{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container.primary{border-color:var(--theme-color-primary)}:host .flip-tile-container.primary .footer{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}:host .flip-tile-container.info{border-color:var(--theme-color-info)}:host .flip-tile-container.info .footer{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host .flip-tile-container.warning{border-color:var(--theme-color-warning)}:host .flip-tile-container.warning .footer{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host .flip-tile-container.alarm{border-color:var(--theme-color-alarm)}:host .flip-tile-container.alarm .footer{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host:hover .flip-tile-container .footer ix-icon{color:var(--theme-color-std-text)}";
const FlipTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.height = 15.125;
    this.width = 16;
    this.index = 0;
    this.isFlipAnimationActive = false;
    this.contentItems = [];
  }
  watchIndex(newIndex, oldIndex) {
    if (newIndex === oldIndex) {
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => this.updateContentItems());
    this.observer.observe(this.hostElement, {
      childList: true
    });
  }
  componentWillLoad() {
    this.updateContentItems();
    this.updateContentVisibility(this.index);
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  updateContentItems() {
    this.contentItems = Array.from(this.hostElement.querySelectorAll("ix-flip-tile-content"));
  }
  updateContentVisibility(indexVisible) {
    this.contentItems.forEach((content, index) => content.contentVisible = index === indexVisible);
  }
  toggleIndex() {
    let newIndex;
    const oldIndex = this.index;
    if (this.index >= this.contentItems.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.index + 1;
    }
    const { defaultPrevented } = this.toggle.emit(newIndex);
    if (defaultPrevented) {
      this.index = oldIndex;
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  doFlipAnimation(index) {
    if (this.isFlipAnimationActive) {
      return;
    }
    this.isFlipAnimationActive = true;
    animate(this.hostElement.shadowRoot.querySelector(".flip-tile-container"), {
      keyframes: {
        "0%": {
          transform: "rotateY(0)"
        },
        "50%": {
          transform: "rotateY(90deg)"
        },
        "51%": {
          transform: "rotateY(270deg)"
        },
        "100%": {
          transform: "rotateY(360deg)"
        }
      },
      duration: Animation.defaultTime,
      easing: "ease-in-out",
      onComplete: () => {
        this.index = index;
        this.updateContentVisibility(this.index);
      }
    });
    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * Animation.defaultTime);
  }
  render() {
    return h(Host, { key: "08e1e0b42abce592d36a7ab4ca5afa77f3b20420", style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "1cac723e5b7bc9cd93b53692dcdc3ee8db8f8582", class: {
      "flip-tile-container": true,
      info: this.state === FlipTileState.Info,
      warning: this.state === FlipTileState.Warning,
      alarm: this.state === FlipTileState.Alarm,
      primary: this.state === FlipTileState.Primary
    } }, h("div", { key: "2d1397911896820affe45c1152db033b24edea82", class: "flip-tile-header" }, h("div", { key: "cd5cb0f55defa75793aab4c4caed0776e655f62d", class: "header-slot-container text-l-title" }, h("slot", { key: "62ff2dbf73d65ae130a61f3c786f4d3dac75005a", name: "header" })), h("ix-icon-button", { key: "316b0761718cbb0fed9f7f78aaf4b4cdffd57f9c", icon: iconEye, variant: "primary", ghost: true, onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "47585d2e3baae58fd3dace92e6337685b611f03d", class: "content-container" }, h("slot", { key: "8733c30b08ba7b28e0f5241c041669b57e1e06b0" })), h("div", { key: "953857c6e95ed0fb10238fc66bd9e6b95121b601", class: {
      footer: true,
      "contrast-light": this.state === FlipTileState.Warning,
      "contrast-dark": this.state === FlipTileState.Info || this.state === FlipTileState.Alarm
    } }, h("slot", { key: "b28f5f9813c1e0cab9852fc1efc4787cfaec7a77", name: "footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "index": ["watchIndex"]
    };
  }
};
FlipTile.style = flipTileCss;
export {
  FlipTile as ix_flip_tile
};

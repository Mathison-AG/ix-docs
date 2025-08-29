import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-C3NZUKAC.js";
import { q as iconClose } from "./index-Cz75KU1f-BUHLjWzB.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
const mapNavigationOverlayCss = ":host{position:absolute;width:100%;height:100%;z-index:2;top:0;left:0;background-color:var(--theme-overlay--background);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .overlay-header{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}:host .overlay-header-content{display:flex;align-items:center;min-width:0}:host .overlay-header-content ix-icon{margin-inline-start:1rem;color:var(--theme-overlay-header--color)}:host .overlay-header-content .overlay-header-title{color:var(--theme-overlay-header--color);margin-inline-start:1rem;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .color-indicator{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}:host .overlay-close{margin-inline-start:auto;margin-inline-end:1rem}:host .display-none{display:none}:host(.display-none){display:none}";
const MapNavigationOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  componentWillLoad() {
    animate(this.hostElement, {
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: [0, "blur(1rem)"],
      translateX: ["-4rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      onBegin: () => {
        this.hostElement.classList.remove("display-none");
      }
    });
  }
  closeOverlay() {
    animate(this.hostElement, {
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: ["blur(1rem)", 0],
      translateX: [0, "-4rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      onComplete: () => {
        this.closeClick.emit();
        this.hostElement.classList.add("display-none");
      }
    });
  }
  render() {
    var _a, _b, _c;
    return h(Host, { key: "c871f6fe68c0777e421f61f8328157ba34ddcf17" }, h("div", { key: "bfdd33afbdd9b13bd4856fd38e5e6a1bf73ef4a3", class: "overlay-header" }, h("div", { key: "202507973dd8cf5f78a2fd1540a0046ad0be7bc9", class: {
      "color-indicator": true,
      "display-none": ((_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color) === void 0
    }, style: {
      "background-color": ((_b = this.iconColor) !== null && _b !== void 0 ? _b : this.color) ? `var(--theme-${(_c = this.iconColor) !== null && _c !== void 0 ? _c : this.color})` : ""
    } }), h("div", { key: "b52ee1b88f12abecaa6d3aaf8d3a9528274bb671", class: "overlay-header-content" }, h("ix-icon", { key: "ab956bb6cdb79bb588129cc5c6914e724a79ee14", size: "32", name: this.icon, "aria-label": this.ariaLabelIcon }), h("span", { key: "a09894bfbfcb577b75b8ff02018c0f4ad1bf9333", class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { key: "c9f601bb9a0b1e6cb9a046da6a60f035934ca804", class: "overlay-close", ghost: true, icon: iconClose, iconColor: "color-soft-text", size: "24", onClick: () => this.closeOverlay(), "aria-label": this.ariaLabelCloseIconButton })), h("slot", { key: "6ca5034645f6821c0a305e83b0f2142858118f42" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigationOverlay.slowTime = 500;
MapNavigationOverlay.style = mapNavigationOverlayCss;
export {
  MapNavigationOverlay as ix_map_navigation_overlay
};

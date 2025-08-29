import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-C3NZUKAC.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv-B0zIukL5.js";
import { x as iconContextMenu } from "./index-Cz75KU1f-BUHLjWzB.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar.display-none{display:none}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);padding-left:1rem;padding-right:1rem;padding-bottom:0.625rem;height:100%;width:100%;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{display:flex;align-items:center;flex-grow:1;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const MapNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
    this.hasContentHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get menuOverlay() {
    return this.hostElement.querySelector("ix-menu-overlay");
  }
  get mapNavMenu() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-menu");
  }
  get sidebar() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar");
  }
  get overlay() {
    return this.hostElement.shadowRoot.querySelector("#overlay");
  }
  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }
  componentWillLoad() {
    useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: "map-navigation"
    });
  }
  appendMenu() {
    this.menu.addEventListener("mapExpandChange", (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
    });
    this.menu.enableMapExpand = true;
  }
  /**
   * Change the visibility of the sidebar
   *
   * @param show new visibility state
   */
  async toggleSidebar(show) {
    if (show !== void 0) {
      this.isSidebarOpen = show;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    if (this.isSidebarOpen) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
    this.navigationToggled.emit(this.isSidebarOpen);
    this.menu.toggleMapExpand(this.isSidebarOpen);
  }
  closeSidebar() {
    animate(this.sidebar, {
      duration: MapNavigation.defaultTime,
      marginLeft: [0, "-29.75rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      onComplete: () => {
        this.sidebar.classList.add("display-none");
      }
    });
  }
  openSidebar() {
    animate(this.sidebar, {
      duration: MapNavigation.defaultTime,
      marginLeft: ["-29.75rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      onBegin: () => {
        this.sidebar.classList.remove("display-none");
      }
    });
  }
  /**
   * Open a overlay inside content area
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   *
   * @param name
   * @param component
   * @param icon
   * @param color
   */
  async openOverlay(name, component, icon, color) {
    animate(this.overlay, {
      duration: MapNavigation.slowTime,
      backdropFilter: [0, "blur(1rem)"],
      translateX: ["-4rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      onBegin: () => {
        this.overlay.classList.remove("display-none");
      }
    });
    const overlayInstance = document.createElement("ix-map-navigation-overlay");
    overlayInstance.setAttribute("color", color !== null && color !== void 0 ? color : "");
    overlayInstance.setAttribute("name", name);
    overlayInstance.setAttribute("icon", icon !== null && icon !== void 0 ? icon : "");
    overlayInstance.setAttribute("slot", "overlay");
    overlayInstance.addEventListener("closeClick", () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.hostElement.appendChild(overlayInstance);
  }
  /**
   * Close current shown overlay
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   */
  async closeOverlay() {
    animate(this.overlay, {
      duration: MapNavigation.slowTime,
      backdropFilter: ["blur(1rem)", 0],
      translateX: [0, "-4rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      onComplete: () => {
        var _a;
        if (!this.overlay) {
          return;
        }
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add("display-none");
      }
    });
  }
  checkHasContentHeader(e) {
    const nodes = e.currentTarget.assignedNodes({
      flatten: true
    });
    this.hasContentHeader = (nodes === null || nodes === void 0 ? void 0 : nodes.length) !== 0;
  }
  render() {
    return h(Host, { key: "4a5be003002bd56d5c2683b317b35e60540db486" }, h("slot", { key: "33cfd010f4f70f388597b6686e26c36fad6f6cff", name: "menu" }), h("div", { key: "244f0940fce005cd15aca6c863aae1b9a564ea63", class: "map-nav" }, h("div", { key: "f706f339759ecb4fedc718530392a5ba20c61333", class: "map-nav-sidebar" }, h("div", { key: "4d753df1b2229e953eb705460e7930bb5879aad8", class: "map-nav-header" }, h("ix-application-header", { key: "a2089ade8196521ef5d5e8574aa5d12f0002cb48", name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: "c60c219ae1d87f11e170cf8eb51489dec1e0b88d", slot: "logo", name: "logo" }))), h("div", { key: "98562f144d70209be36221157bd531343524d74d", class: "map-nav-sidebar-content" }, h("div", { key: "cbd1d712280b3e856cccb888be9e3d32f76a76ba", class: "map-nav-sidebar-static-content" }, h("div", { key: "0e1fe4ecc2a1fca199b2154e11693d222f1b509f", class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: iconContextMenu, ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit(), "aria-label": this.ariaLabelContextIconButton })), h("div", { key: "171ff426c1300ee612fcb5d7c739ddc31c13fa3d", class: "map-nav-sidebar-user-content" }, h("slot", { key: "efc0e9e54bf964f56c12e3a5210ecd264b4d3311", name: "sidebar-content" })))), h("div", { key: "02e7d566a9f020b26de57ae1c561c00856159ade", class: "content" }, h("div", { key: "e26651642cc0988e20c7874b4c910764e10a7a8e", class: {
      "map-nav-header-content": true,
      "bg-2": true,
      empty: !this.hasContentHeader
    } }, h("slot", { key: "11096e8112ac25af8eb3418c282a51c8d57ab1eb", name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: "1421aec056d40c4edf5120cccd2034aa22c6e5c5" }, h("slot", { key: "573182eb4fad91f604f0363242fa4da1c98536f9" }), h("slot", { key: "75d1b9e31c861c85a108429e8cfd63cf14886836", name: "overlay" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = mapNavigationCss;
export {
  MapNavigation as ix_map_navigation
};

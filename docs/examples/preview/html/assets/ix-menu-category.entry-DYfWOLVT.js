import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-C3NZUKAC.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
import { c as closestIxMenu } from "./context-CKM5pVsv-B0zIukL5.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { g as iconChevronDownSmall } from "./index-Cz75KU1f-BUHLjWzB.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
function createEnterLeaveDebounce(enterCallback, leaveCallback, { debounceTimeEnter, debounceTimeLeave } = {
  debounceTimeEnter: 0,
  debounceTimeLeave: 500
}) {
  let enterTimeout;
  let leaveTimeout;
  return {
    onEnter: () => {
      clearTimeout(leaveTimeout);
      enterTimeout = setTimeout(() => {
        enterCallback();
      }, debounceTimeEnter);
    },
    onLeave: () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        leaveCallback();
      }, debounceTimeLeave);
    }
  };
}
const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative;}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
    this.menuExpand = false;
    this.showItems = false;
    this.showDropdown = false;
    this.nestedItems = [];
    this.enterLeaveDebounce = createEnterLeaveDebounce(() => {
      this.onPointerEnter();
    }, () => {
      this.onPointerLeave();
    });
  }
  isNestedItemActive() {
    return this.getNestedItems().some((item) => item.active);
  }
  getNestedItems() {
    return Array.from(this.hostElement.querySelectorAll(":scope ix-menu-item"));
  }
  getNestedItemsHeight() {
    const items = this.getNestedItems();
    return items.length * DefaultIxMenuItemHeight;
  }
  onExpandCategory(showItems) {
    if (showItems) {
      this.animateFadeIn();
    } else {
      this.animateFadeOut();
    }
  }
  animateFadeOut() {
    const slotHideThresholdMs = 25;
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      onComplete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      }
    });
  }
  animateFadeIn() {
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onBegin: () => {
        this.showItems = true;
        this.showDropdown = false;
      }
    });
  }
  onPointerEnter() {
    var _a;
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      return;
    }
    this.closeOtherCategories.emit();
    this.showDropdown = true;
  }
  onPointerLeave() {
    this.showDropdown = false;
  }
  onCategoryClick(e) {
    var _a;
    e.stopPropagation();
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }
  }
  onNestedItemsChanged(mutations) {
    const oldNestedItemsLength = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();
    if (this.showItems && this.menuItemsContainer && oldNestedItemsLength !== this.nestedItems.length) {
      this.menuItemsContainer.style.maxHeight = `${this.getNestedItemsHeight() + DefaultIxMenuItemHeight}px`;
    }
    if (!this.menuExpand || this.showItems || !mutations) {
      return;
    }
    for (const mutation of mutations !== null && mutations !== void 0 ? mutations : []) {
      if (mutation.attributeName === "class" && mutation.target instanceof HTMLElement && mutation.target.classList.contains("active")) {
        this.showItems = true;
        this.onExpandCategory(true);
        return;
      }
    }
  }
  isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }
  componentWillLoad() {
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error("ix-menu-category can only be used as a child of ix-menu");
    }
    this.ixMenu = closestMenu;
    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }
  componentDidLoad() {
    var _a;
    this.observer = createMutationObserver((mutations) => this.onNestedItemsChanged(mutations));
    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });
    (_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemStyles() {
    var _a, _b;
    (_a = this.menuItemsContainer) === null || _a === void 0 ? void 0 : _a.style.removeProperty("max-height");
    (_b = this.menuItemsContainer) === null || _b === void 0 ? void 0 : _b.style.removeProperty("opacity");
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "525c90ca4e2929e981215da12c118a42e622c1a5", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.enterLeaveDebounce.onEnter();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.enterLeaveDebounce.onLeave();
    } }, h("ix-menu-item", { key: "5c42f77c23d5cca88817d9ef4e676872faa498da", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onFocus: () => this.onPointerEnter(), tooltipText: this.tooltipText, isCategory: true }, h("div", { key: "f158ef5ad623f783379db5c086013dd5d8e4ac67", class: "category" }, h("div", { key: "35c61aa0104a0fdd3418917c78786e8c2970d554", class: "category-text" }, this.label), h("ix-icon", { key: "b24406c014090e468b5cd0e180770077b37d476f", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { key: "338c10cddd863542712978d5c6d9e65b486d9748", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "166a8c28812d73faafd673cca9d03693ce3b8e08", closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    } }, h("ix-dropdown-item", { key: "e35fd939e321cad728a9ca38917570e82a6d4c65", class: "category-dropdown-header" }, h("ix-typography", { key: "8eb98cc91b5deb4e65d90128e6f5807f4b71da98", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "d045b9ca064d42e1e1b2a2a90f797bd07a91903a" }), h("slot", { key: "d7071e8475159c6909af68f59d66858adc0e45f7" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = menuCategoryCss;
export {
  MenuCategory as ix_menu_category
};

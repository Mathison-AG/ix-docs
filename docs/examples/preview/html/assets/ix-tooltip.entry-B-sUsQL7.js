import { r as registerInstance, h, H as Host, g as getElement } from "./global-C3NZUKAC.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, h as hide, a as autoUpdate } from "./floating-ui.dom-CAqtPJ4--B_Z-K7Jv.js";
import { r as resolveSelector } from "./find-element-CFRrPFxi-BfUKzqCM.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { b as addDisposableEventListenerAsArray } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
const tooltipCss = '.dialog{margin:0;padding:0;border:none;max-width:18.25rem;width:-moz-max-content;width:max-content;background-color:transparent;overflow-wrap:break-word;box-shadow:none;overflow:visible}.tooltip-container{display:block;position:relative;width:auto;height:-moz-fit-content;height:fit-content;background:var(--theme-tootlip--background);color:var(--theme-color-std-text);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4);border-radius:0.25rem}.content-wrapper{overflow:auto}.tooltip-title{display:flex;align-items:center}.tooltip-title ::slotted(ix-icon){margin-right:0.35rem}.arrow,.arrow::before{position:absolute;width:12px;height:12px;background:inherit}.arrow{visibility:hidden}.arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
const numberToPixel = (value) => value !== null ? `${value}px` : "";
let tooltipInstance = 0;
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interactive = false;
    this.placement = "top";
    this.showDelay = 0;
    this.hideDelay = 50;
    this.animationFrame = false;
    this.visible = false;
    this.instance = tooltipInstance++;
    this.dialogRef = makeRef();
  }
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector(".arrow");
  }
  /** @internal */
  async showTooltip(anchorElement) {
    this.clearTimeouts();
    if (this.showTooltipTimeout || this.visibleFor === anchorElement) {
      return;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.showTooltipTimeout = setTimeout(() => {
      this.setAnchorElement(anchorElement);
      dialog.showPopover();
      this.applyTooltipPosition(anchorElement, dialog);
      this.registerTooltipListener(dialog);
    }, this.showDelay);
  }
  /** @internal */
  async hideTooltip(hideDelay = this.hideDelay) {
    this.clearTimeouts();
    if (this.hideTooltipTimeout || !this.visible) {
      return;
    }
    if (this.interactive && hideDelay === 50) {
      hideDelay = 150;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.hideTooltipTimeout = setTimeout(() => {
      var _a, _b;
      this.setAnchorElement();
      dialog.hidePopover();
      (_a = this.disposeAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
      (_b = this.disposeTooltipListener) === null || _b === void 0 ? void 0 : _b.call(this);
    }, hideDelay);
  }
  setAnchorElement(anchorElement) {
    if (!anchorElement) {
      this.visibleFor = void 0;
      this.visible = false;
    } else {
      this.visibleFor = anchorElement;
      this.visible = true;
    }
  }
  computeArrowPosition({ placement, middlewareData }) {
    let { x, y } = middlewareData.arrow;
    const resetPosition = {
      top: "unset",
      right: "unset",
      bottom: "unset",
      left: "unset"
    };
    if (placement.startsWith("top")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(x), top: numberToPixel(y) });
    }
    if (placement.startsWith("right")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(-6), top: numberToPixel(y) });
    }
    if (placement.startsWith("bottom")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(x), top: numberToPixel(-6) });
    }
    if (placement.startsWith("left")) {
      return Object.assign(Object.assign({}, resetPosition), { right: numberToPixel(-6), top: numberToPixel(y) });
    }
  }
  async computeTooltipPosition(target, dialog) {
    return computePosition(target, dialog, {
      strategy: "fixed",
      placement: this.placement,
      middleware: [
        shift(),
        offset(12),
        arrow({
          element: this.arrowElement
        }),
        flip({
          fallbackStrategy: "initialPlacement",
          fallbackAxisSideDirection: "end",
          padding: 10
        }),
        hide()
      ]
    });
  }
  applyTooltipArrowPosition(computeResponse) {
    const arrowPosition = this.computeArrowPosition(computeResponse);
    Object.assign(this.arrowElement.style, arrowPosition);
  }
  async applyTooltipPosition(target, dialog) {
    if (!target) {
      return;
    }
    return new Promise((resolve) => {
      var _a;
      (_a = this.disposeAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
      this.disposeAutoUpdate = autoUpdate(target, dialog, async () => {
        var _a2;
        const computeResponse = await this.computeTooltipPosition(target, dialog);
        const isHidden = (_a2 = computeResponse.middlewareData.hide) === null || _a2 === void 0 ? void 0 : _a2.referenceHidden;
        if (isHidden) {
          this.hideTooltip(0);
          resolve(computeResponse);
        }
        if (computeResponse.middlewareData.arrow) {
          this.applyTooltipArrowPosition(computeResponse);
        }
        const { x, y } = computeResponse;
        Object.assign(dialog.style, {
          left: numberToPixel(x),
          top: numberToPixel(y)
        });
        resolve(computeResponse);
      }, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
        animationFrame: this.animationFrame
      });
    });
  }
  async queryAnchorElements() {
    if (this.for) {
      if (Array.isArray(this.for)) {
        return this.resolveElements(this.for);
      } else {
        return this.resolveElements([this.for]);
      }
    }
  }
  async resolveElements(references) {
    const elements = [];
    await Promise.all(references.map(async (reference) => {
      if (typeof reference === "string") {
        const resolvedElements = await resolveSelector(reference, this.hostElement);
        if (resolvedElements) {
          elements.push(...resolvedElements);
        }
      } else if (reference instanceof HTMLElement) {
        elements.push(reference);
      } else if (reference instanceof Promise) {
        elements.push(await reference);
      }
    }));
    return elements;
  }
  async registerTriggerListener() {
    var _a;
    (_a = this.disposeTriggerListener) === null || _a === void 0 ? void 0 : _a.call(this);
    const triggerElementList = await this.queryAnchorElements();
    if (!triggerElementList) {
      return;
    }
    const listeners = [];
    triggerElementList.forEach((element) => {
      listeners.push(...[
        {
          element,
          eventType: "mouseenter",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "mouseleave",
          callback: () => {
            this.hideTooltip();
          }
        },
        {
          element,
          eventType: "focus",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "focusout",
          callback: () => {
            this.hideTooltip();
          }
        }
      ]);
    });
    this.disposeTriggerListener = addDisposableEventListenerAsArray(listeners);
  }
  registerTooltipListener(dialog) {
    var _a;
    (_a = this.disposeTooltipListener) === null || _a === void 0 ? void 0 : _a.call(this);
    this.disposeTooltipListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: "mouseenter",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "focus",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "mouseleave",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "focusout",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "click",
        callback: (event) => {
          event.stopPropagation();
        }
      },
      {
        element: document,
        eventType: "keydown",
        callback: (event) => {
          if (event.key === "Escape") {
            this.hideTooltip();
          }
        }
      }
    ]);
  }
  registerDomChangeListener() {
    const observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-ix-tooltip"],
      childList: true,
      subtree: true
    });
    this.disposeDomChangeListener = () => {
      observer.disconnect();
    };
  }
  clearHideTimeout() {
    clearTimeout(this.hideTooltipTimeout);
    this.hideTooltipTimeout = void 0;
  }
  clearShowTimeout() {
    clearTimeout(this.showTooltipTimeout);
    this.showTooltipTimeout = void 0;
  }
  clearTimeouts() {
    this.clearHideTimeout();
    this.clearShowTimeout();
  }
  componentWillLoad() {
    this.registerTriggerListener();
  }
  componentDidLoad() {
    this.registerDomChangeListener();
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    this.clearTimeouts();
    (_a = this.disposeAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.disposeTriggerListener) === null || _b === void 0 ? void 0 : _b.call(this);
    (_c = this.disposeTooltipListener) === null || _c === void 0 ? void 0 : _c.call(this);
    (_d = this.disposeDomChangeListener) === null || _d === void 0 ? void 0 : _d.call(this);
  }
  render() {
    return h(Host, { key: "917322f34b65fc6d5ff8facad86b1ba72990c757", role: "tooltip", class: { visible: this.visible } }, h("dialog", { key: "1a24b3ed79fe491b554577aa0c52cd06b728d2fd", ref: this.dialogRef, id: "tooltip-" + this.instance, class: "dialog", popover: "manual", inert: !this.visible }, h("div", { key: "a5f76ae5d81b4f71bd58d5a55500ea55df36c28d", class: "tooltip-container" }, h("div", { key: "05d504218d1bd58b55848edd447f51ef32118aeb", class: "content-wrapper" }, h("div", { key: "804f79dc7e35fe469e36a76465789cc1c926d2a4", class: "tooltip-title" }, h("slot", { key: "fbd1ab75b38b15937e3f3c7ee1719aa0bd1e501a", name: "title-icon" }), h("ix-typography", { key: "69524350ad0c2723a8989698b5290dba25e3800b", format: "h5" }, this.titleContent, h("slot", { key: "344776805a5c59c910d65ed55cb5f20d470096cb", name: "title-content" }))), h("slot", { key: "091c2d8b0e135adbd59147c86443a7b2e22d5bc8" }), h("div", { key: "261834f164a5211c3f2ef53dc76d54df6e015c06", class: "arrow" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tooltip.style = tooltipCss;
export {
  Tooltip as ix_tooltip
};

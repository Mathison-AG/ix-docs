import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C3NZUKAC.js";
import { q as iconClose, y as iconShout } from "./index-Cz75KU1f-BUHLjWzB.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.i18nShowMore = "Show more";
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "c64b5cf97a522d325d022d8c926d8c9734646425", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "9ba716f9fcc223d7b5b2d9bc28c2f8f28a457462", class: "banner-container" }, h("ix-icon", { key: "798f58b181ab9e91f8b1d88567eec52f6442978b", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "46bad2b7a6bf5ceb43c305b9e5089a2bbdb18c22", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "6a4b421a8d3dbabf524dec74b37476f968646fb8", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "f2180d9fcee77160fc4b1ad071e57ed3adf160a3", class: "cui-popover-news-header" }, h("ix-typography", { key: "8831582147f84df598c0b138f6f438259b161cc3", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "e828135a283b80b38e8bbb1a7801e05af43f2c25", size: "24", icon: iconClose, iconColor: "color-soft-text", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "e7353eaafa8feef5704d8dd166f14d75281b65cf", class: "slot-container" }, h("slot", { key: "b89c3d6d1334056f15d8109fdf6fcbd1aefc96fe" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "6c68a2a15721b8335f2b3d82c77d2fe867051fc9", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};

import { LitElement as c, html as m } from "lit";
import { o as d, e as u, n as l, r as h, t as f } from "./vendor/@lit-zEaRr5DC.js";
import k from "./kmk-breadcrumbs.css.lit.js";
import { e as y } from "./vendor/lit-html-7zeMcSoo.js";
import "./kmk-link.js";
var g = Object.defineProperty, S = Object.getOwnPropertyDescriptor, s = (e, a, i, r) => {
  for (var o = r > 1 ? void 0 : r ? S(a, i) : a, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (o = (r ? p(a, i, o) : p(o)) || o);
  return r && o && g(a, i, o), o;
};
let t = class extends c {
  constructor() {
    super(...arguments), this.showEllipsis = !1, this.spacing = "md", this.separator = "chevronRight300", this.homeLabel = "Home", this.homeUrl = "/", this.homeIcon = "house300", this.separatorsCreated = !1, this.firstUpdatedSuccess = !1, this.allowHandleSlotchange = !0;
  }
  createSeparator() {
    if (!this.separatorsCreated) {
      const e = this.links.length;
      this.links.map((a, i) => {
        if (i < e - 1) {
          const r = document.createElement("kmk-icon");
          r.setAttribute("name", this.separator), r.setAttribute("slot", "links"), a.insertAdjacentElement("afterend", r);
        }
      }), this.separatorsCreated = !0;
    }
  }
  removeSeparator() {
    this.links.map((e) => {
      e.tagName !== "KMK-LINK" && e.remove();
    }), this.separatorsCreated = !1;
  }
  hideItems() {
    this.links.map((e, a) => {
      if (a < this.links.length - 1) {
        const i = e;
        i && (this.showEllipsis ? (i.style.display = "none", this.ellipsis.style.display = "flex") : (i.style.display = "block", this.ellipsis.style.display = "none"));
      }
    });
  }
  firstUpdated() {
    this.createSeparator(), this.firstUpdatedSuccess = !0;
  }
  updated(e) {
    e.has("showEllipsis") && this.hideItems(), this.allowHandleSlotchange = !0;
  }
  handleSlotchange() {
    !this.firstUpdatedSuccess && this.allowHandleSlotchange && (this.removeSeparator(), this.createSeparator(), this.allowHandleSlotchange = !1), this.firstUpdatedSuccess = !1;
  }
  render() {
    const e = {
      "kmk-breadcrumbs": !0,
      [`spacing-${this.spacing}`]: !0
    };
    return m`
      <nav class="${y(e)}">
        <div class="home">
          <kmk-icon name="${this.homeIcon}"></kmk-icon>
          <kmk-link variant="secondary" href="${this.homeUrl}" size="${this.spacing}" slot="links">
            ${this.homeLabel}
          </kmk-link>
        </div>
        <kmk-icon name="${this.separator}"></kmk-icon>
        <span class="ellipsis">
          <span>...</span>
          <kmk-icon name="${this.separator}"></kmk-icon>
        </span>
        <slot name="links" @slotchange=${this.handleSlotchange}></slot>
      </nav>
    `;
  }
};
t.styles = [k];
s([
  d({ slot: "links" })
], t.prototype, "links", 2);
s([
  u(".ellipsis")
], t.prototype, "ellipsis", 2);
s([
  l({ type: Boolean, attribute: "show-ellipsis" })
], t.prototype, "showEllipsis", 2);
s([
  l({ type: String, attribute: "spacing" })
], t.prototype, "spacing", 2);
s([
  l({ type: String, attribute: "separator" })
], t.prototype, "separator", 2);
s([
  l({ type: String, attribute: "home-label" })
], t.prototype, "homeLabel", 2);
s([
  l({ type: String, attribute: "home-url" })
], t.prototype, "homeUrl", 2);
s([
  l({ type: String, attribute: "home-icon" })
], t.prototype, "homeIcon", 2);
s([
  h()
], t.prototype, "separatorsCreated", 2);
s([
  h()
], t.prototype, "firstUpdatedSuccess", 2);
s([
  h()
], t.prototype, "allowHandleSlotchange", 2);
t = s([
  f("kmk-breadcrumbs")
], t);
export {
  t as KmkBreadcrumbs
};

import { html as t } from "lit";
import { n, t as m } from "./vendor/@lit-zEaRr5DC.js";
import { e as d } from "./vendor/lit-html-7zeMcSoo.js";
import h from "./kmk-details.css.lit.js";
import { KmkAccordionPanel as b } from "./kmk-accordion-panel.js";
import "./kmk-icon.js";
import "./kmk-loader.js";
var u = Object.defineProperty, v = Object.getOwnPropertyDescriptor, s = (o, l, r, a) => {
  for (var i = a > 1 ? void 0 : a ? v(l, r) : l, p = o.length - 1, c; p >= 0; p--)
    (c = o[p]) && (i = (a ? c(l, r, i) : c(i)) || i);
  return a && i && u(l, r, i), i;
};
let e = class extends b {
  constructor() {
    super(...arguments), this.openLabel = "Show", this.closeLabel = "Hide", this.size = "md", this.loading = !1, this.iconPosition = "right";
  }
  LabelTemplate() {
    const o = {
      sm: "icon-xxs",
      md: "icon-xs",
      lg: "icon-sm"
    };
    return t`
      ${this.iconPosition === "left" ? t`` : t``}
      ${this.loading ? t`<kmk-loader size="${o[this.size]}" color="loading-1"></kmk-loader>` : t`
            ${this.iconPosition === "left" ? this.IconTemplate() : null}
            <span> ${this.active ? this.closeLabel : this.openLabel} </span>
            ${this.iconPosition === "right" ? this.IconTemplate() : null}
          `}
    `;
  }
  IconTemplate() {
    return t`
      ${this.active ? t`<kmk-icon name="${this.closeIcon}"></kmk-icon>` : t`<kmk-icon name="${this.openIcon}"></kmk-icon>`}
    `;
  }
  render() {
    const o = {
      "kmk-details": !0,
      [`size-${this.size}`]: !0
    };
    return t`
      <div class="${d(o)}">
        <div class="details-content" aria-hidden="${!this.active}">
          <slot></slot>
        </div>
        <div class="details-label">
          <button aria-expanded="${this.active}" @click="${this.handleClick}" ?disabled="${this.disabled}">
            ${this.LabelTemplate()}
          </button>
        </div>
      </div>
    `;
  }
};
e.styles = [h];
s([
  n({ type: String, attribute: "open-label" })
], e.prototype, "openLabel", 2);
s([
  n({ type: String, attribute: "close-label" })
], e.prototype, "closeLabel", 2);
s([
  n({ type: String, attribute: "size" })
], e.prototype, "size", 2);
s([
  n({ type: Boolean, attribute: "loading" })
], e.prototype, "loading", 2);
s([
  n({ type: String, attribute: "icon-position" })
], e.prototype, "iconPosition", 2);
e = s([
  m("kmk-details")
], e);
export {
  e as KmkDetails
};

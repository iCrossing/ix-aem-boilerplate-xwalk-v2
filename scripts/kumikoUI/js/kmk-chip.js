import { html as a } from "lit";
import { n as l, t as h } from "./vendor/@lit-zEaRr5DC.js";
import { e as m } from "./vendor/lit-html-7zeMcSoo.js";
import u from "./kmk-chip.css.lit.js";
import { KmkButton as f } from "./kmk-button.js";
var v = Object.defineProperty, C = Object.getOwnPropertyDescriptor, c = (s, o, i, r) => {
  for (var t = r > 1 ? void 0 : r ? C(o, i) : o, n = s.length - 1, p; n >= 0; n--)
    (p = s[n]) && (t = (r ? p(o, i, t) : p(t)) || t);
  return r && t && v(o, i, t), t;
};
let e = class extends f {
  constructor() {
    super(...arguments), this.chipVariant = "neutral", this.showCloseIcon = !1;
  }
  LabelTemplate() {
    return a`
      ${this.IconTemplate()}
      <span><slot></slot></span>
      ${this.showCloseIcon ? a`<kmk-icon name="x300"></kmk-icon>` : ""}
    `;
  }
  render() {
    const s = {
      "kmk-chip": !0,
      [`variant-${this.variant}`]: !0,
      "icon-position-left": !!this.icon,
      "icon-position-right": this.showCloseIcon
    }, o = m(s);
    return a`${this.ButtonTemplate(o)}`;
  }
};
e.styles = [u];
c([
  l({ type: String, attribute: "chip-variant" })
], e.prototype, "chipVariant", 2);
c([
  l({ type: Boolean, attribute: "show-close-icon" })
], e.prototype, "showCloseIcon", 2);
e = c([
  h("kmk-chip")
], e);
export {
  e as KmkChip
};

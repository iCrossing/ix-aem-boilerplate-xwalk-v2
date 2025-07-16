import { LitElement as a, html as m } from "lit";
import { n as l, t as g } from "./vendor/@lit-zEaRr5DC.js";
import { e as y } from "./vendor/lit-html-7zeMcSoo.js";
import f from "./kmk-button-group.css.lit.js";
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (r, o, n, p) => {
  for (var t = p > 1 ? void 0 : p ? b(o, n) : o, s = r.length - 1, u; s >= 0; s--)
    (u = r[s]) && (t = (p ? u(o, n, t) : u(t)) || t);
  return p && t && h(o, n, t), t;
};
let e = class extends a {
  constructor() {
    super(...arguments), this.layout = "horizontal", this.alignment = "left", this.gapSize = "sm";
  }
  render() {
    const r = {
      "kmk-button-group": !0,
      [`layout-${this.layout}`]: !0,
      [`gap-${this.gapSize}`]: !0,
      [`align-${this.alignment}`]: !0
    };
    return m`<div class="${y(r)}">
      <slot></slot>
    </div>`;
  }
};
e.styles = [f];
i([
  l({ type: String, attribute: "layout" })
], e.prototype, "layout", 2);
i([
  l({ type: String, attribute: "alignment" })
], e.prototype, "alignment", 2);
i([
  l({ type: String, attribute: "gap-size" })
], e.prototype, "gapSize", 2);
e = i([
  g("kmk-button-group")
], e);
export {
  e as KmkButtonGroup
};

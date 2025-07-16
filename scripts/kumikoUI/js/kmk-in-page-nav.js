import { LitElement as p, html as v } from "lit";
import { o as y, n as m, t as f } from "./vendor/@lit-zEaRr5DC.js";
import g from "./kmk-in-page-nav.css.lit.js";
import { e as c } from "./vendor/lit-html-7zeMcSoo.js";
var u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, r = (n, e, o, i) => {
  for (var t = i > 1 ? void 0 : i ? d(e, o) : e, a = n.length - 1, l; a >= 0; a--)
    (l = n[a]) && (t = (i ? l(e, o, t) : l(t)) || t);
  return i && t && u(e, o, t), t;
};
let s = class extends p {
  constructor() {
    super(...arguments), this.alignment = "left", this.sticky = !1;
  }
  render() {
    const n = {
      "links-container": !0,
      [`align-${this.alignment}`]: !0
    }, e = {
      "nav-container": !0,
      sticky: this.sticky
    };
    return v`
      <div class="${c(e)}">
        <div class="heading-container">
          <slot name="heading"></slot>
        </div>
        <div class="${c(n)}">
          <slot name="links"></slot>
        </div>
        <div class="cta-container">
          <slot name="cta"></slot>
        </div>
      </div>
    `;
  }
};
s.styles = [g];
r([
  y({ slot: "links" })
], s.prototype, "links", 2);
r([
  m({ type: String, attribute: "alignment" })
], s.prototype, "alignment", 2);
r([
  m({ type: Boolean, attribute: "sticky" })
], s.prototype, "sticky", 2);
s = r([
  f("kmk-in-page-nav")
], s);
export {
  s as KmkInPageNav
};

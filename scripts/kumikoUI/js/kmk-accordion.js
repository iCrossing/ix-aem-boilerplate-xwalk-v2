import { LitElement as a, html as m } from "lit";
import { o as v, n, t as h } from "./vendor/@lit-zEaRr5DC.js";
import u from "./kmk-accordion.css.lit.js";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, r = (t, s, p, i) => {
  for (var o = i > 1 ? void 0 : i ? y(s, p) : s, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (o = (i ? c(s, p, o) : c(o)) || o);
  return i && o && d(s, p, o), o;
};
let e = class extends a {
  constructor() {
    super(...arguments), this.allOpen = !1, this.openIcon = "plus300", this.closeIcon = "minus300", this.showDivider = !1;
  }
  updated() {
    this.panels.map((t) => {
      t.openIcon = this.openIcon, t.closeIcon = this.closeIcon, t.showDivider = this.showDivider, this.allOpen ? t.setAttribute("active", "active") : t.removeAttribute("active");
    });
  }
  render() {
    return m`
      <div class="kmk-accordion">
        <slot name="panels"></slot>
      </div>
    `;
  }
};
e.styles = [u];
r([
  v({ slot: "panels" })
], e.prototype, "panels", 2);
r([
  n({ type: Boolean, attribute: "all-open" })
], e.prototype, "allOpen", 2);
r([
  n({ type: String, attribute: "open-icon" })
], e.prototype, "openIcon", 2);
r([
  n({ type: String, attribute: "close-icon" })
], e.prototype, "closeIcon", 2);
r([
  n({ type: Boolean, attribute: "show-divider" })
], e.prototype, "showDivider", 2);
e = r([
  h("kmk-accordion")
], e);
export {
  e as KmkAccordion
};

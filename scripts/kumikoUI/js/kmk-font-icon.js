import { LitElement as c, html as f } from "lit";
import { n as l, t as a } from "./vendor/@lit-zEaRr5DC.js";
import u from "./kmk-font-icon.css.lit.js";
var v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, i = (p, e, o, r) => {
  for (var t = r > 1 ? void 0 : r ? _(e, o) : e, m = p.length - 1, s; m >= 0; m--)
    (s = p[m]) && (t = (r ? s(e, o, t) : s(t)) || t);
  return r && t && v(e, o, t), t;
};
let n = class extends c {
  constructor() {
    super(...arguments), this.name = "chevronLeft300";
  }
  render() {
    return f`<i class=${`kmk-font-icon icon-${this.name}`}></i>`;
  }
};
n.styles = [u];
i([
  l({ type: String, attribute: "name" })
], n.prototype, "name", 2);
n = i([
  a("kmk-font-icon")
], n);
export {
  n as KmkFontIcon
};

import { LitElement as l, html as c } from "lit";
import { n as f, t as a } from "./vendor/@lit-zEaRr5DC.js";
import u from "./kmk-list.css.lit.js";
var v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, i = (m, r, o, e) => {
  for (var t = e > 1 ? void 0 : e ? _(r, o) : r, p = m.length - 1, n; p >= 0; p--)
    (n = m[p]) && (t = (e ? n(r, o, t) : n(t)) || t);
  return e && t && v(r, o, t), t;
};
let s = class extends l {
  constructor() {
    super(...arguments), this.spacing = "md";
  }
  render() {
    return c` <slot></slot>`;
  }
};
s.styles = [u];
i([
  f({ type: String, attribute: "spacing" })
], s.prototype, "spacing", 2);
s = i([
  a("kmk-list")
], s);
export {
  s as KmkList
};

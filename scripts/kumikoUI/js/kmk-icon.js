import { LitElement as l, html as a } from "lit";
import { n as m, t as v } from "./vendor/@lit-zEaRr5DC.js";
import { a as f, b as h } from "./vendor/lit-html-7zeMcSoo.js";
import { Icons as y } from "./kmk-icon-library.js";
import u from "./kmk-icon.css.lit.js";
var g = Object.defineProperty, z = Object.getOwnPropertyDescriptor, i = (r, e, n, s) => {
  for (var t = s > 1 ? void 0 : s ? z(e, n) : e, p = r.length - 1, c; p >= 0; p--)
    (c = r[p]) && (t = (s ? c(e, n, t) : c(t)) || t);
  return s && t && g(e, n, t), t;
};
let o = class extends l {
  constructor() {
    super(...arguments), this.name = "arrowLeft100", this.color = void 0, this.size = void 0;
  }
  render() {
    const r = {
      ...this.color ? { "--svg-icon-color": `var(--color-${this.color})` } : "",
      ...this.size ? { "--svg-icon-size": `var(--sizing-${this.size})` } : ""
    };
    return a`<i class="kmk-icon" style="${f(r)}">${h(y[this.name])}</i>`;
  }
};
o.styles = [u];
i([
  m({ type: String, attribute: "name" })
], o.prototype, "name", 2);
i([
  m({ type: String, attribute: "color" })
], o.prototype, "color", 2);
i([
  m({ type: String, attribute: "size" })
], o.prototype, "size", 2);
o = i([
  v("kmk-icon")
], o);
export {
  o as KmkIcon
};

import { LitElement as a, html as u } from "lit";
import { n as p, t as c } from "./vendor/@lit-zEaRr5DC.js";
import d from "./kmk-full-width-content-module.css.lit.js";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, i = (m, n, r, o) => {
  for (var t = o > 1 ? void 0 : o ? g(n, r) : n, s = m.length - 1, l; s >= 0; s--)
    (l = m[s]) && (t = (o ? l(n, r, t) : l(t)) || t);
  return o && t && f(n, r, t), t;
};
let e = class extends a {
  constructor() {
    super(...arguments), this.alignment = "center", this.size = "sm";
  }
  updated() {
    this.style.setProperty("--content-align", this.alignment);
  }
  render() {
    return u`
      <div class="content">
        <slot name="heading"></slot>
        <slot name="body"></slot>
        <slot name="button-group"></slot>
      </div>
    `;
  }
};
e.styles = d;
i([
  p({ type: String })
], e.prototype, "alignment", 2);
i([
  p({ type: String })
], e.prototype, "size", 2);
e = i([
  c("kmk-full-width-content-module")
], e);
export {
  e as KmkFullWidthContentModule
};

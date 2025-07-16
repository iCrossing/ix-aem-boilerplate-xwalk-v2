import { LitElement as u, html as a } from "lit";
import { n as s, t as m } from "./vendor/@lit-zEaRr5DC.js";
import { e as h } from "./vendor/lit-html-7zeMcSoo.js";
import d from "./kmk-multi-column-container.css.lit.js";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, e = (l, r, p, i) => {
  for (var o = i > 1 ? void 0 : i ? g(r, p) : r, c = l.length - 1, n; c >= 0; c--)
    (n = l[c]) && (o = (i ? n(r, p, o) : n(o)) || o);
  return i && o && f(r, p, o), o;
};
let t = class extends u {
  constructor() {
    super(...arguments), this.colsDefault = 1, this.colsMd = void 0, this.colsLg = void 0, this.columnGap = "none", this.rowGap = "none";
  }
  render() {
    const l = {
      "kmk-multi-column": !0,
      [`cols-default-${this.colsDefault}`]: this.colsDefault !== void 0,
      [`cols-md-${this.colsMd}`]: this.colsMd !== void 0,
      [`cols-lg-${this.colsLg}`]: this.colsLg !== void 0,
      [`col-gap-${this.columnGap}`]: this.columnGap !== "none",
      [`row-gap-${this.rowGap}`]: this.rowGap !== "none"
    };
    return a`<div class="${h(l)}">
      <slot></slot>
    </div>`;
  }
};
t.styles = [d];
e([
  s({ type: Number, attribute: "cols-default" })
], t.prototype, "colsDefault", 2);
e([
  s({ type: Number, attribute: "cols-md" })
], t.prototype, "colsMd", 2);
e([
  s({ type: Number, attribute: "cols-lg" })
], t.prototype, "colsLg", 2);
e([
  s({ type: String, attribute: "column-gap" })
], t.prototype, "columnGap", 2);
e([
  s({ type: String, attribute: "row-gap" })
], t.prototype, "rowGap", 2);
t = e([
  m("kmk-multi-column-container")
], t);
export {
  t as KmkMultiColumnContainer
};

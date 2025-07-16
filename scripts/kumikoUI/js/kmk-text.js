import { LitElement as p, html as v } from "lit";
import { t as i } from "./vendor/@lit-zEaRr5DC.js";
import a from "./kmk-text.css.lit.js";
var c = Object.getOwnPropertyDescriptor, f = (s, o, n, l) => {
  for (var t = l > 1 ? void 0 : l ? c(o, n) : o, e = s.length - 1, m; e >= 0; e--)
    (m = s[e]) && (t = m(t) || t);
  return t;
};
let r = class extends p {
  render() {
    return v`<div class="kmk-text"><slot></slot></div>`;
  }
};
r.styles = [a];
r = f([
  i("kmk-text")
], r);
export {
  r as KmkText
};

import { LitElement as g, html as h } from "lit";
import { n as r, t as l } from "./vendor/@lit-zEaRr5DC.js";
import m from "./kmk-divider.css.lit.js";
import { e as P } from "./vendor/lit-html-7zeMcSoo.js";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, d = (n, e, p, o) => {
  for (var i = o > 1 ? void 0 : o ? y(e, p) : e, s = n.length - 1, a; s >= 0; s--)
    (a = n[s]) && (i = (o ? a(e, p, i) : a(i)) || i);
  return o && i && v(e, p, i), i;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.orientation = "horizontal", this.topPadding = "none", this.rightPadding = "none", this.bottomPadding = "none", this.leftPadding = "none", this.dividerStyle = "solid";
  }
  render() {
    const n = {
      [`padding-top-${this.topPadding}`]: this.topPadding,
      [`padding-right-${this.rightPadding}`]: this.rightPadding,
      [`padding-bottom-${this.bottomPadding}`]: this.bottomPadding,
      [`padding-left-${this.leftPadding}`]: this.leftPadding
    }, e = {
      [this.orientation]: !0,
      [this.dividerStyle]: !0,
      ...n
    };
    return h`
      <div class="dividerContainer">
        <div class="divider  ${P(e)}"></div>
      </div>
    `;
  }
};
t.styles = [m];
d([
  r({ type: String })
], t.prototype, "orientation", 2);
d([
  r({ type: String, attribute: "top-padding" })
], t.prototype, "topPadding", 2);
d([
  r({ type: String, attribute: "right-padding" })
], t.prototype, "rightPadding", 2);
d([
  r({ type: String, attribute: "bottom-padding" })
], t.prototype, "bottomPadding", 2);
d([
  r({ type: String, attribute: "left-padding" })
], t.prototype, "leftPadding", 2);
d([
  r({ type: String, attribute: "divider-style" })
], t.prototype, "dividerStyle", 2);
t = d([
  l("kmk-divider")
], t);
export {
  t as KmkDivider
};

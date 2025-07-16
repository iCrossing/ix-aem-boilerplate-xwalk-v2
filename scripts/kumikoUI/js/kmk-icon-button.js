import { html as n } from "lit";
import { n as a, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { e as l } from "./vendor/lit-html-7zeMcSoo.js";
import h from "./kmk-icon-button.css.lit.js";
import { KmkButton as f } from "./kmk-button.js";
import "./kmk-icon.js";
var k = Object.defineProperty, b = Object.getOwnPropertyDescriptor, p = (r, t, i, s) => {
  for (var e = s > 1 ? void 0 : s ? b(t, i) : t, u = r.length - 1, m; u >= 0; u--)
    (m = r[u]) && (e = (s ? m(t, i, e) : m(e)) || e);
  return s && e && k(t, i, e), e;
};
let o = class extends f {
  constructor() {
    super(...arguments), this.useStroke = !1, this.icon = "x300";
  }
  LabelTemplate() {
    return this.icon ? n`<kmk-icon name=${this.icon}></kmk-icon>` : n``;
  }
  render() {
    const r = {
      "kmk-icon-button": !0,
      [`size-${this.size}`]: !0,
      [`variant-${this.variant}`]: !0,
      stroke: this.useStroke
    }, t = l(r);
    return n`${this.icon ? this.url ? this.AnchorTemplate(t) : this.ButtonTemplate(t) : n``}`;
  }
};
o.styles = [h];
p([
  a({ type: Boolean, attribute: "use-stroke" })
], o.prototype, "useStroke", 2);
p([
  a({ type: String, attribute: "icon" })
], o.prototype, "icon", 2);
o = p([
  c("kmk-icon-button")
], o);
export {
  o as KmkIconButton
};

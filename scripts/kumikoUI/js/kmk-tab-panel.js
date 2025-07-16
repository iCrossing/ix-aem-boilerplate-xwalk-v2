import { LitElement as c, html as v } from "lit";
import { n, t as d } from "./vendor/@lit-zEaRr5DC.js";
import { o as f } from "./vendor/lit-html-7zeMcSoo.js";
var m = Object.defineProperty, u = Object.getOwnPropertyDescriptor, o = (p, t, i, r) => {
  for (var e = r > 1 ? void 0 : r ? u(t, i) : t, l = p.length - 1, s; l >= 0; l--)
    (s = p[l]) && (e = (r ? s(t, i, e) : s(e)) || e);
  return r && e && m(t, i, e), e;
};
let a = class extends c {
  constructor() {
    super(...arguments), this.active = !1, this.panelId = void 0;
  }
  render() {
    return this.style.display = this.active ? "block" : "none", v`<div
      class="tab-panel"
      role="tabpanel"
      id=${f(this.panelId)}
      aria-selected=${this.active ? "true" : "false"}
      aria-hidden=${this.active ? "false" : "true"}
    >
      <slot></slot>
    </div>`;
  }
};
o([
  n({ type: Boolean, attribute: "active" })
], a.prototype, "active", 2);
o([
  n({ type: String, reflect: !0, attribute: "panel-id" })
], a.prototype, "panelId", 2);
a = o([
  d("kmk-tab-panel")
], a);
export {
  a as KmkTabPanel
};

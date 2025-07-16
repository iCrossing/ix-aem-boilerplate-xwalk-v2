import { html as m } from "lit";
import { o as n, n as h, t as d } from "./vendor/@lit-zEaRr5DC.js";
import { e as y } from "./vendor/lit-html-7zeMcSoo.js";
import u from "./kmk-compound-button.css.lit.js";
import { KmkButton as g } from "./kmk-button.js";
import { validateSlot as i } from "./utils/slot.js";
var S = Object.defineProperty, f = Object.getOwnPropertyDescriptor, o = (l, s, a, p) => {
  for (var e = p > 1 ? void 0 : p ? f(s, a) : s, r = l.length - 1, c; r >= 0; r--)
    (c = l[r]) && (e = (p ? c(s, a, e) : c(e)) || e);
  return p && e && S(s, a, e), e;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.selected = !1, this.size = "sm", this.logoType = void 0;
  }
  validateSlots() {
    i(this.headingSlot, ".heading", this.shadowRoot), i(this.iconSlot, ".icon", this.shadowRoot), i(this.logoSlot, ".logo", this.shadowRoot), i(this.copySlot, ".copy", this.shadowRoot);
  }
  firstUpdated() {
    this.validateSlots();
  }
  LabelTemplate() {
    return m`
      <span class="label">
        <span class="heading"><slot name="heading"></slot></span>
        <span class="icon"><slot name="icon"></slot></span>
        <span class="logo"><slot name="logo"></slot></span>
        <span class="copy"><slot name="copy"></slot></span>
      </span>
    `;
  }
  render() {
    const l = {
      "kmk-compound-button": !0,
      [`size-${this.size}`]: !0,
      [`logo-type-${this.logoType}`]: this.logoType !== void 0,
      selected: this.selected
    }, s = y(l);
    return m`${this.url ? this.AnchorTemplate(s) : this.ButtonTemplate(s)}`;
  }
};
t.styles = [u];
o([
  n({ slot: "heading" })
], t.prototype, "headingSlot", 2);
o([
  n({ slot: "icon" })
], t.prototype, "iconSlot", 2);
o([
  n({ slot: "logo" })
], t.prototype, "logoSlot", 2);
o([
  n({ slot: "copy" })
], t.prototype, "copySlot", 2);
o([
  h({ type: Boolean, attribute: "selected" })
], t.prototype, "selected", 2);
o([
  h({ type: String, attribute: "size" })
], t.prototype, "size", 2);
o([
  h({ type: String, attribute: "logo-type" })
], t.prototype, "logoType", 2);
t = o([
  d("kmk-compound-button")
], t);
export {
  t as KmkCompoundButton
};

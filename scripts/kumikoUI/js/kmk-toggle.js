import { LitElement as b, html as d } from "lit";
import { n as s, t as h } from "./vendor/@lit-zEaRr5DC.js";
import u from "./kmk-toggle.css.lit.js";
import { e as m, o as c } from "./vendor/lit-html-7zeMcSoo.js";
var v = Object.defineProperty, g = Object.getOwnPropertyDescriptor, t = (r, i, n, l) => {
  for (var a = l > 1 ? void 0 : l ? g(i, n) : i, o = r.length - 1, p; o >= 0; o--)
    (p = r[o]) && (a = (l ? p(i, n, a) : p(a)) || a);
  return l && a && v(i, n, a), a;
};
let e = class extends b {
  constructor() {
    super(...arguments), this.size = "md", this.disabled = !1, this.checked = !1, this.variant = "primary";
  }
  _onChange(r) {
    const i = r.target;
    this.checked = i.checked;
  }
  render() {
    const r = {
      "kmk-toggle": !0,
      [`size-${this.size}`]: !0,
      disabled: this.disabled,
      [`${this.checked ? "on" : "off"}`]: !0,
      [`variant-${this.variant}`]: !0
    };
    return d`
      <label class="${m(r)}">
        <div class="container">
          <div class="slide">
            <input
              type="checkbox"
              @change=${this._onChange}
              ?disabled="${this.disabled}"
              aria-label="${c(this.ariaLabelValue)}"
              name="${c(this.name)}"
              value="${c(this.value)}"
            />
            <span class="knob-state"></span>
            <span class="slide-mask"></span>
            <span class="knob-container">
              <span class="knob"></span>
            </span>
          </div>
        </div>
        <span class="label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
e.styles = [u];
t([
  s({ type: String, attribute: "size" })
], e.prototype, "size", 2);
t([
  s({ type: Boolean, attribute: "disabled" })
], e.prototype, "disabled", 2);
t([
  s({ type: Boolean, attribute: "checked" })
], e.prototype, "checked", 2);
t([
  s({ type: String, attribute: "variant" })
], e.prototype, "variant", 2);
t([
  s({ type: String, attribute: "name" })
], e.prototype, "name", 2);
t([
  s({ type: String, attribute: "value" })
], e.prototype, "value", 2);
t([
  s({ type: String, attribute: "aria-label-value" })
], e.prototype, "ariaLabelValue", 2);
e = t([
  h("kmk-toggle")
], e);
export {
  e as KmkToggle
};

import { LitElement as c, html as h } from "lit";
import { n as i, r as u, e as m, t as b } from "./vendor/@lit-zEaRr5DC.js";
import { e as y, o as n } from "./vendor/lit-html-7zeMcSoo.js";
import v from "./kmk-radio-button.css.lit.js";
import "./kmk-icon.js";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, t = (o, s, d, a) => {
  for (var r = a > 1 ? void 0 : a ? g(s, d) : s, l = o.length - 1, p; l >= 0; l--)
    (p = o[l]) && (r = (a ? p(s, d, r) : p(r)) || r);
  return a && r && f(s, d, r), r;
};
let e = class extends c {
  constructor() {
    super(...arguments), this.checked = !1, this.size = "md", this.disabled = !1, this.error = !1, this.isFocus = !1;
  }
  _onChange(o) {
    const s = o.target;
    this.checked = s.checked;
  }
  firstUpdated() {
    this.radioInput.checked = this.checked;
  }
  render() {
    const o = {
      [`size-${this.size}`]: !0,
      error: this.error,
      disabled: this.disabled,
      selected: this.checked,
      [`size-${this.size}`]: !0
    };
    return h`
      <label for="radio" class="${y(o)}">
        <input
          type="radio"
          id="radio"
          @change=${this._onChange}
          ?disabled=${this.disabled}
          aria-label=${n(this.name)}
          name=${n(this.name)}
          value=${n(this.value)}
        />
        <div class="radio-container">
          <div class="focus-ring"></div>
          <div class="radio">
            <kmk-icon name="dotForm"></kmk-icon>
          </div>
        </div>
        <slot></slot>
      </label>
    `;
  }
};
e.styles = [v];
t([
  i({ type: Boolean, attribute: "checked" })
], e.prototype, "checked", 2);
t([
  i({ type: String, attribute: "size" })
], e.prototype, "size", 2);
t([
  i({ type: Boolean, attribute: "disabled" })
], e.prototype, "disabled", 2);
t([
  i({ type: String, attribute: "aria-label-value" })
], e.prototype, "ariaLabelValue", 2);
t([
  i({ type: String, attribute: "value" })
], e.prototype, "value", 2);
t([
  i({ type: String, attribute: "name" })
], e.prototype, "name", 2);
t([
  i({ type: Boolean, attribute: "error" })
], e.prototype, "error", 2);
t([
  u()
], e.prototype, "isFocus", 2);
t([
  m('input[type="radio"]')
], e.prototype, "radioInput", 2);
e = t([
  b("kmk-radio-button")
], e);
export {
  e as KmkRadioButton
};

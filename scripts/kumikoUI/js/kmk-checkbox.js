import { LitElement as u, html as h } from "lit";
import { n as i, r as d, t as m } from "./vendor/@lit-zEaRr5DC.js";
import { e as b, o as p } from "./vendor/lit-html-7zeMcSoo.js";
import y from "./kmk-checkbox.css.lit.js";
import "./kmk-icon.js";
var f = Object.defineProperty, k = Object.getOwnPropertyDescriptor, t = (s, o, n, a) => {
  for (var r = a > 1 ? void 0 : a ? k(o, n) : o, c = s.length - 1, l; c >= 0; c--)
    (l = s[c]) && (r = (a ? l(o, n, r) : l(r)) || r);
  return a && r && f(o, n, r), r;
};
let e = class extends u {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.size = "md", this.disabled = !1, this.error = !1, this.isFocus = !1;
  }
  _onChange(s) {
    const o = s.target;
    this.checked = o.checked;
  }
  _onFocus() {
    this.isFocus = !0;
  }
  _onBlur() {
    this.isFocus = !1;
  }
  render() {
    const s = {
      [`size-${this.size}`]: !0,
      error: this.error,
      disabled: this.disabled,
      selected: this.checked,
      indeterminate: this.indeterminate,
      [`size-${this.size}`]: !0,
      focused: this.isFocus
    };
    return h`
      <label for="input" class="${b(s)}">
        <input
          type="checkbox"
          id="input"
          @change=${this._onChange}
          ?disabled=${this.disabled}
          aria-label="${p(this.ariaLabelValue)}"
          @focus=${this._onFocus}
          @blur="${this._onBlur}"
          name="${p(this.name)}"
          value="${p(this.value)}"
        />
        <div class="checkmark-container">
          <div class="focus-ring"></div>
          <span class="checkmark">${this.IconTemplate()}</span>
        </div>
        <slot></slot>
      </label>
    `;
  }
  IconTemplate() {
    const s = this.indeterminate ? "minus300" : "check300";
    return h` <kmk-icon name="${s}"></kmk-icon> `;
  }
};
e.styles = [y];
t([
  i({ type: Boolean, attribute: "checked" })
], e.prototype, "checked", 2);
t([
  i({ type: Boolean, attribute: "indeterminate" })
], e.prototype, "indeterminate", 2);
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
  d()
], e.prototype, "isFocus", 2);
e = t([
  m("kmk-checkbox")
], e);
export {
  e as KmkCheckbox
};

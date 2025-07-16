import { LitElement as c, html as u } from "lit";
import { o as b, n as i, r as d, e as m, t as v } from "./vendor/@lit-zEaRr5DC.js";
import { e as x, o as h } from "./vendor/lit-html-7zeMcSoo.js";
import f from "./kmk-text-field.css.lit.js";
import { validateSlot as y } from "./utils/slot.js";
import "./kmk-icon.js";
var $ = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, e = (a, r, l, o) => {
  for (var s = o > 1 ? void 0 : o ? _(r, l) : r, p = a.length - 1, n; p >= 0; p--)
    (n = a[p]) && (s = (o ? n(r, l, s) : n(s)) || s);
  return o && s && $(r, l, s), s;
};
let t = class extends c {
  constructor() {
    super(...arguments), this.variant = "standard", this.size = "md", this.value = "", this.placeholder = "", this.disabled = !1, this.error = !1, this.isFocus = !1, this.hasEnteredText = !1;
  }
  _onInput(a) {
    const r = a.target;
    this.value = r.value, this.hasEnteredText = this.value.length > 0;
  }
  _onFocus() {
    this.isFocus = !0;
  }
  _onBlur() {
    this.isFocus = !1;
  }
  _clearInput() {
    this.value = "", this.hasEnteredText = !1, this.textInput.value = "";
  }
  firstUpdated() {
    y(this.helperTextRef, ".helper-text", this.shadowRoot), this.textInput?.value && (this.hasEnteredText = !0);
  }
  render() {
    const a = {
      "kmk-text-field": !0,
      [this.variant]: !0,
      [`size-${this.size}`]: !0,
      focused: this.isFocus,
      error: this.error,
      placeholder: this.placeholder !== "",
      "entered-text": this.hasEnteredText,
      disabled: this.disabled
    }, r = this.hasEnteredText && !this.disabled;
    return u`
      <div class="${x(a)}">
        <div class="input-wrapper">
          ${this.icon ? u`<kmk-icon name="${this.icon}"></kmk-icon>` : ""}
          <input
            type="text"
            id="textfield"
            value="${this.value}"
            placeholder="${h(this.placeholder)}"
            ?disabled="${this.disabled}"
            aria-label="${h(this.ariaLabelValue)}"
            name="${h(this.name)}"
            @focus="${this._onFocus}"
            @blur="${this._onBlur}"
            @input="${this._onInput}"
          />
          <label for="textfield">
            <slot name="label"></slot>
          </label>
          <button @click="${this._clearInput}" ?disabled="${!r}"><kmk-icon name="x300"></kmk-icon></button>
        </div>

        <div class="helper-text">
          <slot name="helper-text"></slot>
        </div>
      </div>
    `;
  }
};
t.styles = [f];
e([
  b({ slot: "helper-text" })
], t.prototype, "helperTextRef", 2);
e([
  i({ type: String, attribute: "variant" })
], t.prototype, "variant", 2);
e([
  i({ type: String, attribute: "size" })
], t.prototype, "size", 2);
e([
  i({ type: String, attribute: "value" })
], t.prototype, "value", 2);
e([
  i({ type: String, attribute: "placeholder" })
], t.prototype, "placeholder", 2);
e([
  i({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
e([
  i({ type: String, attribute: "aria-label-value" })
], t.prototype, "ariaLabelValue", 2);
e([
  i({ type: String, attribute: "name" })
], t.prototype, "name", 2);
e([
  i({ type: Boolean, attribute: "error" })
], t.prototype, "error", 2);
e([
  i({ type: String, attribute: "icon" })
], t.prototype, "icon", 2);
e([
  d()
], t.prototype, "isFocus", 2);
e([
  d()
], t.prototype, "hasEnteredText", 2);
e([
  m('input[type="text"]')
], t.prototype, "textInput", 2);
t = e([
  v("kmk-text-field")
], t);
export {
  t as KmkTextField
};

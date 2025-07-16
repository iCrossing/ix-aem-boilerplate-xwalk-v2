import { LitElement as c, html as p } from "lit";
import { n as i, r as d, a as h, t as m } from "./vendor/@lit-zEaRr5DC.js";
import g from "./kmk-radio-button-group.css.lit.js";
import { e as b } from "./vendor/lit-html-7zeMcSoo.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, a = (n, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? f(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (o ? u(t, e, s) : u(s)) || s);
  return o && s && y(t, e, s), s;
};
let r = class extends c {
  constructor() {
    super(...arguments), this.layout = "row", this.buttonCount = 2, this.columnGap = "none", this.rowGap = "none", this.selectedValues = [];
  }
  _onRadioChange(n) {
    const t = n.target, e = t.value, o = t.checked;
    o && !this.selectedValues.includes(e) ? this.selectedValues = [...this.selectedValues, e] : o || (this.selectedValues = this.selectedValues.filter((s) => s !== e)), this.dispatchEvent(
      new CustomEvent("selection-changed", {
        detail: { selectedValues: this.selectedValues },
        bubbles: !0,
        composed: !0
      })
    );
  }
  firstUpdated() {
    this.radioButtons.forEach(
      (n) => n.addEventListener("change", (t) => this._onRadioChange(t))
    );
  }
  render() {
    const n = {
      row: this.layout === "row",
      column: this.layout === "column"
    }, e = { ...{
      [`col-gap-${this.columnGap}`]: this.columnGap !== "none",
      [`row-gap-${this.rowGap}`]: this.rowGap !== "none"
    }, ...n }, o = Array.from(
      { length: this.buttonCount },
      () => p` <kmk-radio-button>Label</kmk-radio-button> `
    );
    return p`
      <div class="radio-button-group ${b(e)}">
        <slot>${o}</slot>
      </div>
    `;
  }
};
r.styles = [g];
a([
  i({ type: String })
], r.prototype, "layout", 2);
a([
  i({ type: Number })
], r.prototype, "buttonCount", 2);
a([
  i({ type: String, attribute: "column-gap" })
], r.prototype, "columnGap", 2);
a([
  i({ type: String, attribute: "row-gap" })
], r.prototype, "rowGap", 2);
a([
  d()
], r.prototype, "selectedValues", 2);
a([
  h("kmk-radio-button")
], r.prototype, "radioButtons", 2);
r = a([
  m("kmk-radio-button-group")
], r);
export {
  r as KmkRadioButtonGroup
};

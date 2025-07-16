import { LitElement as u, html as i } from "lit";
import { n, r as h, a as m, t as d } from "./vendor/@lit-zEaRr5DC.js";
import b from "./kmk-checkbox-group.css.lit.js";
import { e as g } from "./vendor/lit-html-7zeMcSoo.js";
var k = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (c, e, t, o) => {
  for (var s = o > 1 ? void 0 : o ? y(e, t) : e, a = c.length - 1, p; a >= 0; a--)
    (p = c[a]) && (s = (o ? p(e, t, s) : p(s)) || s);
  return o && s && k(e, t, s), s;
};
let r = class extends u {
  constructor() {
    super(...arguments), this.layout = "row", this.buttonCount = 2, this.columnGap = "none", this.rowGap = "none", this.selectedValues = [];
  }
  _onChecked(c) {
    const e = c.target, t = e.value, o = e.checked;
    o && !this.selectedValues.includes(t) ? this.selectedValues = [...this.selectedValues, t] : o || (this.selectedValues = this.selectedValues.filter((s) => s !== t)), this.dispatchEvent(
      new CustomEvent("selection-changed", {
        detail: { selectedValues: this.selectedValues },
        bubbles: !0,
        composed: !0
      })
    );
  }
  firstUpdated() {
    this.checkboxes.forEach(
      (c) => c.addEventListener("change", (e) => this._onChecked(e))
    );
  }
  render() {
    const c = {
      row: this.layout === "row",
      column: this.layout === "column"
    }, t = { ...{
      [`col-gap-${this.columnGap}`]: this.columnGap !== "none",
      [`row-gap-${this.rowGap}`]: this.rowGap !== "none"
    }, ...c }, o = Array.from(
      { length: this.buttonCount },
      () => i` <kmk-checkbox>Label</kmk-checkbox> `
    );
    return i`
      <div class="checkbox-group ${g(t)}">
        <slot>${o}</slot>
      </div>
    `;
  }
};
r.styles = [b];
l([
  n({ type: String })
], r.prototype, "layout", 2);
l([
  n({ type: Number })
], r.prototype, "buttonCount", 2);
l([
  n({ type: String, attribute: "column-gap" })
], r.prototype, "columnGap", 2);
l([
  n({ type: String, attribute: "row-gap" })
], r.prototype, "rowGap", 2);
l([
  h()
], r.prototype, "selectedValues", 2);
l([
  m("kmk-checkbox")
], r.prototype, "checkboxes", 2);
r = l([
  d("kmk-checkbox-group")
], r);
export {
  r as KmkCheckboxGroup
};

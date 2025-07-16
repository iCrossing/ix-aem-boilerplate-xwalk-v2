import { LitElement as u, html as r } from "lit";
import { n as e, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { e as b } from "./vendor/lit-html-7zeMcSoo.js";
import m from "./kmk-button.css.lit.js";
import "./kmk-loader.js";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, i = (o, s, a, n) => {
  for (var l = n > 1 ? void 0 : n ? y(s, a) : s, p = o.length - 1, h; p >= 0; p--)
    (h = o[p]) && (l = (n ? h(s, a, l) : h(l)) || l);
  return n && l && d(s, a, l), l;
};
let t = class extends u {
  constructor() {
    super(...arguments), this.variant = "primary", this.label = "", this.disabled = !1, this.fullWidth = !1, this.size = "md", this.url = "", this.target = "_self", this.icon = void 0, this.iconPosition = "right", this.type = "button", this.loading = !1, this.onClick = null;
  }
  AnchorTemplate(o) {
    return r`<a
      aria-label=${this.label}
      ?disabled=${this.disabled || this.loading}
      href=${this.url}
      target=${this.target}
      class="${o}"
      @click=${this.onClick}
    >
      ${this.LabelTemplate()}
    </a>`;
  }
  ButtonTemplate(o) {
    return r`<button
      aria-label=${this.label}
      ?disabled=${this.disabled || this.loading}
      type=${this.type}
      class="${o}"
      @click=${this.onClick}
    >
      ${this.LabelTemplate()}
    </button>`;
  }
  LabelTemplate() {
    return r`${this.loading ? r`<kmk-loader></kmk-loader>` : r`
          ${this.iconPosition === "left" ? this.IconTemplate() : null}
          <span><slot></slot></span>
          ${this.iconPosition === "right" ? this.IconTemplate() : null}
        `}`;
  }
  IconTemplate() {
    return this.icon ? r`<kmk-icon name=${this.icon}></kmk-icon>` : r``;
  }
  render() {
    const o = {
      "kmk-button": !0,
      [`size-${this.size}`]: !0,
      [`variant-${this.variant}`]: !0,
      "full-width": this.fullWidth,
      [`icon-position-${this.iconPosition}`]: this.icon !== void 0 && this.iconPosition,
      loading: this.loading
    }, s = b(o);
    return r`${this.url ? this.AnchorTemplate(s) : this.ButtonTemplate(s)}`;
  }
};
t.styles = [m];
i([
  e({ type: String, attribute: "variant" })
], t.prototype, "variant", 2);
i([
  e({ type: String, attribute: "label" })
], t.prototype, "label", 2);
i([
  e({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
i([
  e({ type: Boolean, attribute: "full-width" })
], t.prototype, "fullWidth", 2);
i([
  e({ type: String, attribute: "size" })
], t.prototype, "size", 2);
i([
  e({ type: String, attribute: "url" })
], t.prototype, "url", 2);
i([
  e({ type: String, attribute: "target" })
], t.prototype, "target", 2);
i([
  e({ type: String, attribute: "icon" })
], t.prototype, "icon", 2);
i([
  e({ type: String, attribute: "icon-position" })
], t.prototype, "iconPosition", 2);
i([
  e({ type: String, attribute: "type" })
], t.prototype, "type", 2);
i([
  e({ type: Boolean, attribute: "loading" })
], t.prototype, "loading", 2);
i([
  e()
], t.prototype, "onClick", 2);
t = i([
  c("kmk-button")
], t);
export {
  t as KmkButton
};

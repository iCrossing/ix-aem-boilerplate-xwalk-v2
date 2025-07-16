import { LitElement as b, html as s } from "lit";
import { n as e, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { o as h, e as m } from "./vendor/lit-html-7zeMcSoo.js";
import y from "./kmk-link.css.lit.js";
import "./kmk-icon.js";
var d = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, i = (u, n, a, o) => {
  for (var r = o > 1 ? void 0 : o ? $(n, a) : n, l = u.length - 1, p; l >= 0; l--)
    (p = u[l]) && (r = (o ? p(n, a, r) : p(r)) || r);
  return o && r && d(n, a, r), r;
};
let t = class extends b {
  constructor() {
    super(...arguments), this.variant = "primary", this.label = "", this.disabled = !1, this.size = "md", this.url = "", this.target = "_self", this.icon = void 0, this.iconPosition = "left", this.underline = !1;
  }
  get linkClasses() {
    return {
      "kmk-link": !0,
      [`variant-${this.variant}`]: !0,
      [`size-${this.size}`]: !0,
      [`icon-position-${this.iconPosition}`]: !0,
      disabled: this.disabled,
      underline: this.underline
    };
  }
  LabelTemplate() {
    return s`
      ${this.icon && this.iconPosition === "left" ? s`<kmk-icon name=${h(this.icon)}></kmk-icon>` : null}
      <span><slot></slot></span>
      ${this.icon && this.iconPosition === "right" ? s`<kmk-icon name=${h(this.icon)}></kmk-icon>` : null}
    `;
  }
  render() {
    return s` ${this.disabled ? s`<span class="${m(this.linkClasses)}"> ${this.LabelTemplate()} </span>` : s`
          <a
            aria-label=${this.label}
            href=${this.url}
            target=${h(this.target)}
            class="${m(this.linkClasses)}"
            size="${this.size}"
          >
            ${this.LabelTemplate()}
          </a>
        `}`;
  }
};
t.styles = [y];
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
  e({ type: Boolean, attribute: "underline" })
], t.prototype, "underline", 2);
t = i([
  c("kmk-link")
], t);
export {
  t as KmkLink
};

import { LitElement as b, html as n } from "lit";
import { n as i, t as h } from "./vendor/@lit-zEaRr5DC.js";
import { e as u, o as d } from "./vendor/lit-html-7zeMcSoo.js";
import m from "./kmk-tab.css.lit.js";
import "./kmk-icon.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, e = (s, r, p, a) => {
  for (var o = a > 1 ? void 0 : a ? f(r, p) : r, l = s.length - 1, c; l >= 0; l--)
    (c = s[l]) && (o = (a ? c(r, p, o) : c(o)) || o);
  return a && o && y(r, p, o), o;
};
let t = class extends b {
  constructor() {
    super(...arguments), this.position = "top", this.useStroke = !0, this.disabled = !1, this.active = !1, this.tabId = void 0, this.icon = void 0, this.iconPosition = "right", this.size = "md", this.onClick = null;
  }
  render() {
    const s = {
      tab: !0,
      active: this.active,
      disabled: this.disabled,
      [`position-${this.position}`]: !0,
      "no-stroke": !this.useStroke,
      [`size-${this.size}`]: !0
    };
    return n` <button
      class=${u(s)}
      role="tab"
      id=${d(this.tabId)}
      aria-disabled=${this.disabled ? "true" : "false"}
      aria-selected=${this.active ? "true" : "false"}
      @click="${this.onClick}"
      ?disabled=${this.disabled}
    >
      ${this.LabelTemplate()}
    </button>`;
  }
  LabelTemplate() {
    return n`
      <span class="label-container">
        <span class="label">
          ${this.iconPosition === "left" && this.icon ? n`<kmk-icon name="${this.icon}"></kmk-icon>` : ""}
          <slot></slot>
          ${this.iconPosition === "right" && this.icon ? n`<kmk-icon name="${this.icon}"></kmk-icon>` : ""}
        </span>
      </span>
    `;
  }
};
t.styles = [m];
e([
  i({ type: String, reflect: !0, attribute: "position" })
], t.prototype, "position", 2);
e([
  i({ type: Boolean, attribute: "use-stroke" })
], t.prototype, "useStroke", 2);
e([
  i({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
e([
  i({ type: Boolean, attribute: "active" })
], t.prototype, "active", 2);
e([
  i({ type: String, reflect: !0, attribute: "tab-id" })
], t.prototype, "tabId", 2);
e([
  i({ type: String, attribute: "icon" })
], t.prototype, "icon", 2);
e([
  i({ type: String, attribute: "icon-position" })
], t.prototype, "iconPosition", 2);
e([
  i({ type: String, attribute: "size" })
], t.prototype, "size", 2);
e([
  i()
], t.prototype, "onClick", 2);
t = e([
  h("kmk-tab")
], t);
export {
  t as KmkTab
};

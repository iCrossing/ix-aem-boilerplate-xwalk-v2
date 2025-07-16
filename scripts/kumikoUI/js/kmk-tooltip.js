import { LitElement as g, html as n } from "lit";
import { n as r, e as c, t as m } from "./vendor/@lit-zEaRr5DC.js";
import y from "./kmk-tooltip.css.lit.js";
import { o as b } from "./vendor/lit-html-7zeMcSoo.js";
var x = Object.defineProperty, T = Object.getOwnPropertyDescriptor, a = (o, i, e, t) => {
  for (var s = t > 1 ? void 0 : t ? T(i, e) : i, p = o.length - 1, h; p >= 0; p--)
    (h = o[p]) && (s = (t ? h(i, e, s) : h(s)) || s);
  return t && s && x(i, e, s), s;
};
let l = class extends g {
  constructor() {
    super(...arguments), this.text = "", this.static = !1, this.hideTooltipArrow = !1, this.variant = "bg-light";
  }
  setRightPosition(o, i, e, t) {
    this.static ? (this.tooltip.style.top = `-${e}px`, this.tooltip.style.right = "auto", this.tooltip.style.bottom = "auto", this.tooltip.style.left = `calc(100% + ${t}px)`, this.tooltip.setAttribute("data-placement", "right")) : (this.tooltip.style.top = `${o.top - i.top - e}px`, this.tooltip.style.left = `${o.right - i.left + t}px`, this.tooltip.setAttribute("data-placement", "right"));
  }
  setBottomPosition(o, i, e) {
    this.static ? (this.tooltip.style.top = "100%", this.tooltip.style.right = "auto", this.tooltip.style.bottom = "auto", this.tooltip.style.left = "0", this.tooltip.setAttribute("data-placement", "bottom")) : (this.tooltip.style.top = `${o.bottom - i.top + e}px`, this.tooltip.style.right = `${o.left - i.left}px`, this.tooltip.setAttribute("data-placement", "bottom"));
  }
  setTopPosition(o, i, e, t) {
    this.static ? (this.tooltip.style.top = "auto", this.tooltip.style.right = "auto", this.tooltip.style.bottom = "100%", this.tooltip.style.left = "0", this.tooltip.setAttribute("data-placement", "top")) : (this.tooltip.style.top = `${o.top - e.height - i.top - t}px`, this.tooltip.style.right = `${o.left - i.left}px`, this.tooltip.setAttribute("data-placement", "top"));
  }
  setLeftPosition(o, i, e, t) {
    this.static ? (this.tooltip.style.top = `-${e}px`, this.tooltip.style.right = `calc(100% + ${t}px)`, this.tooltip.style.bottom = "auto", this.tooltip.style.left = "auto", this.tooltip.setAttribute("data-placement", "left")) : (this.tooltip.style.top = `${o.top - i.top - e}px`, this.tooltip.style.left = `-${i.width + t}px`, this.tooltip.setAttribute("data-placement", "left"));
  }
  showTooltip() {
    const t = this.button.getBoundingClientRect(), s = this.tooltip.getBoundingClientRect(), p = this.getBoundingClientRect(), h = window.innerWidth - t.right, f = window.innerHeight - t.bottom, u = t.top, d = t.left;
    this.static ? (this.tooltip.setAttribute("aria-hidden", "false"), this.staticPosition === "top" ? this.setTopPosition(t, p, s, 8) : this.staticPosition === "bottom" ? this.setBottomPosition(t, p, 4) : this.staticPosition === "left" ? this.setLeftPosition(t, p, 8, 4) : this.setRightPosition(t, p, 8, 4)) : (h >= s.width ? this.setRightPosition(t, p, 8, 4) : f >= s.height ? this.setBottomPosition(t, p, 4) : u >= s.height ? this.setTopPosition(t, p, s, 8) : d >= s.width ? this.setLeftPosition(t, p, 8, 4) : this.setRightPosition(t, p, 8, 4), this.tooltip.setAttribute("aria-hidden", "false"));
  }
  hideTooltip() {
    !this.static && this.tooltip.setAttribute("aria-hidden", "true");
  }
  firstUpdated() {
    this.static || (this.showTooltip(), this.tooltip.setAttribute("aria-hidden", "true"));
  }
  updated() {
    this.static && (this.tooltip.setAttribute("aria-hidden", "false"), this.showTooltip());
  }
  render() {
    return n`
      <button
        @mouseenter="${this.showTooltip}"
        @mouseleave="${this.hideTooltip}"
        @focus="${this.showTooltip}"
        @blur="${this.hideTooltip}"
        aria-describedby="kmkTooltip"
      >
        <slot name="content"></slot>
      </button>
      <span
        class="kmk-tooltip variant-${this.variant}"
        role="tooltip"
        data-placement="${b(this.static ? this.staticPosition : "right")}"
        id="kmkTooltip"
        aria-hidden="true"
      >
        ${this.hideTooltipArrow ? "" : n`<span class="tooltip-arrow"></span>`}
        <span class="tooltip-content"> ${this.text} </span>
      </span>
    `;
  }
};
l.styles = [y];
a([
  r({ type: String, attribute: "text" })
], l.prototype, "text", 2);
a([
  c("button")
], l.prototype, "button", 2);
a([
  c(".kmk-tooltip")
], l.prototype, "tooltip", 2);
a([
  r({ type: Boolean, attribute: "static" })
], l.prototype, "static", 2);
a([
  r({ type: String, attribute: "static-position" })
], l.prototype, "staticPosition", 2);
a([
  r({ type: Boolean, attribute: "hide-tooltip-arrow" })
], l.prototype, "hideTooltipArrow", 2);
a([
  r({ type: String, attribute: "variant" })
], l.prototype, "variant", 2);
l = a([
  m("kmk-tooltip")
], l);
export {
  l as KmkTooltip
};

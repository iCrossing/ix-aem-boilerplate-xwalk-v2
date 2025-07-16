import { LitElement as p, html as b } from "lit";
import { n as e, t as u } from "./vendor/@lit-zEaRr5DC.js";
import { e as g, a as h } from "./vendor/lit-html-7zeMcSoo.js";
import c from "./kmk-surface-container.css.lit.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, r = (a, i, d, n) => {
  for (var o = n > 1 ? void 0 : n ? f(i, d) : i, l = a.length - 1, s; l >= 0; l--)
    (s = a[l]) && (o = (n ? s(i, d, o) : s(o)) || o);
  return n && o && y(i, d, o), o;
};
let t = class extends p {
  constructor() {
    super(...arguments), this.elevation = "none", this.rounded = "none", this.border = !1, this.borderStyle = "solid", this.borderWidth = "xs", this.borderColor = "color-stroke-1", this.background = "color-container-fill-no-fill", this.fullWidth = !1, this.topPadding = "none", this.rightPadding = "none", this.bottomPadding = "none", this.leftPadding = "none", this.contentAlignment = "center", this.borderColorOverwrite = "", this.backgroundColorOverwrite = "", this.overflowHidden = !1;
  }
  render() {
    const a = {
      "kmk-surface-container": !0,
      "full-width": this.fullWidth,
      [`content-alignment-${this.contentAlignment}`]: !0,
      [`padding-top-${this.topPadding}`]: !0,
      [`padding-right-${this.rightPadding}`]: !0,
      [`padding-bottom-${this.bottomPadding}`]: !0,
      [`padding-left-${this.leftPadding}`]: !0
    }, i = this.borderColorOverwrite ? this.borderColorOverwrite : `var(--${this.borderColor})`, d = this.backgroundColorOverwrite ? this.backgroundColorOverwrite : `var(--${this.background})`, n = {
      "--surface-elevation": `var(--elevation-${this.elevation})`,
      "--surface-border-radius": `${this.rounded === "circle" ? "50%" : `var(--border-radius-${this.rounded})`}`,
      "--surface-border": `${this.border ? `var(--border-width-${this.borderWidth}) ${this.borderStyle} ${i}` : "none"}`,
      "--surface-background-color": d,
      overflow: this.overflowHidden ? "hidden" : "visible",
      display: this.overflowHidden ? "inline-flex" : "block"
    };
    return b`
      <div class=${g(a)} style=${h(n)}>
        <slot></slot>
      </div>
    `;
  }
};
t.styles = [c];
r([
  e({ type: String, attribute: "elevation" })
], t.prototype, "elevation", 2);
r([
  e({ type: String, attribute: "rounded" })
], t.prototype, "rounded", 2);
r([
  e({ type: Boolean, attribute: "border" })
], t.prototype, "border", 2);
r([
  e({ type: String, attribute: "border-style" })
], t.prototype, "borderStyle", 2);
r([
  e({ type: String, attribute: "border-width" })
], t.prototype, "borderWidth", 2);
r([
  e({ type: String, attribute: "border-color" })
], t.prototype, "borderColor", 2);
r([
  e({ type: String, attribute: "background" })
], t.prototype, "background", 2);
r([
  e({ type: Boolean, attribute: "full-width" })
], t.prototype, "fullWidth", 2);
r([
  e({ type: String, attribute: "top-padding" })
], t.prototype, "topPadding", 2);
r([
  e({ type: String, attribute: "right-padding" })
], t.prototype, "rightPadding", 2);
r([
  e({ type: String, attribute: "botton-padding" })
], t.prototype, "bottomPadding", 2);
r([
  e({ type: String, attribute: "left-padding" })
], t.prototype, "leftPadding", 2);
r([
  e({ type: String, attribute: "content-alignment" })
], t.prototype, "contentAlignment", 2);
r([
  e({ type: String, attribute: "border-color-overwrite" })
], t.prototype, "borderColorOverwrite", 2);
r([
  e({ type: String, attribute: "background-color-overwrite" })
], t.prototype, "backgroundColorOverwrite", 2);
r([
  e({ type: Boolean, attribute: "overflow-hidden" })
], t.prototype, "overflowHidden", 2);
t = r([
  u("kmk-surface-container")
], t);
export {
  t as KmkSurfaceContainer
};

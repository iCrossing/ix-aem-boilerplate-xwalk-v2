import { LitElement as m, html as v } from "lit";
import { n as p, t as c } from "./vendor/@lit-zEaRr5DC.js";
import h from "./kmk-hero.css.lit.js";
import "./kmk-responsive-image.js";
import "./kmk-full-width-content-module.js";
var u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, a = (l, o, s, r) => {
  for (var e = r > 1 ? void 0 : r ? d(o, s) : o, i = l.length - 1, n; i >= 0; i--)
    (n = l[i]) && (e = (r ? n(o, s, e) : n(e)) || e);
  return r && e && u(o, s, e), e;
};
let t = class extends m {
  constructor() {
    super(...arguments), this.variant = "full-width", this.useThreeToOneRatio = !1;
  }
  render() {
    return v`
      <section class="container ${this.variant}">
        <div class="gradient-wrapper">
          <div class="image">
            <slot
              name="image"
              image-ration="${this.useThreeToOneRatio ? "3-1" : ""}"
            ></slot>
          </div>
        </div>
        <div class="content">
          <slot name="heading"></slot>
          <slot name="body"></slot>
          <slot name="button-group"></slot>
        </div>
      </section>
    `;
  }
};
t.styles = [h];
a([
  p({ type: String })
], t.prototype, "variant", 2);
a([
  p({ type: Boolean })
], t.prototype, "useThreeToOneRatio", 2);
t = a([
  c("kmk-hero")
], t);
export {
  t as KmkHero
};

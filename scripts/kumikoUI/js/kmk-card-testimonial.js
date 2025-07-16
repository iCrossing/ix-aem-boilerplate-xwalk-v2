import { html as s } from "lit";
import { n as u, o as p, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { e as h } from "./vendor/lit-html-7zeMcSoo.js";
import v from "./kmk-card-testimonial.css.lit.js";
import b from "./kmk-card.css.lit.js";
import { KmkCardBasic as y } from "./kmk-card-basic.js";
import { validateSlot as i } from "./utils/slot.js";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, l = (e, r, m, a) => {
  for (var t = a > 1 ? void 0 : a ? g(r, m) : r, d = e.length - 1, n; d >= 0; d--)
    (n = e[d]) && (t = (a ? n(r, m, t) : n(t)) || t);
  return a && t && f(r, m, t), t;
};
let o = class extends y {
  constructor() {
    super(...arguments), this.quotePosition = "bottom";
  }
  firstUpdated() {
    i(this.imageSlot, ".image", this.shadowRoot), i(this.nameSlot, ".name", this.shadowRoot), i(this.jobTitleSlot, ".job-title", this.shadowRoot), i(this.bodyCopySlot, ".body-copy", this.shadowRoot), i(this.buttonGroupSlot, ".button-group", this.shadowRoot);
  }
  CardTemplate() {
    const e = {
      "kmk-card-testimonial": !0,
      "kmk-card": !0,
      [`size-${this.size}`]: !0,
      [`quote-${this.quotePosition}`]: !0,
      [`background-${this.background}`]: !0
    };
    return s`
      <div class="${h(e)}">
        ${this.quotePosition === "top" ? s`<div class="body-copy">
              <slot name="body-copy"></slot>
            </div>` : ""}
        <div class="header">
          <div class="image">
            <slot name="image"></slot>
          </div>
          <div class="info">
            <div class="name">
              <slot name="name"></slot>
            </div>
            <div class="job-title">
              <slot name="job-title"></slot>
            </div>
          </div>
        </div>
        ${this.quotePosition === "bottom" ? s`<div class="body-copy">
              <slot name="body-copy"></slot>
            </div>` : ""}
        ${this.url ? s`` : s` <div class="button-group">
              <slot name="button-group"></slot>
            </div>`}
      </div>
    `;
  }
};
o.styles = [v, b];
l([
  u({ type: String, attribute: "quote-position" })
], o.prototype, "quotePosition", 2);
l([
  p({ slot: "name" })
], o.prototype, "nameSlot", 2);
l([
  p({ slot: "job-title" })
], o.prototype, "jobTitleSlot", 2);
o = l([
  c("kmk-card-testimonial")
], o);
export {
  o as KmkCardTestimonial
};

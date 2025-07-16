import { LitElement as m, html as r } from "lit";
import { n as i, o as l, t as g } from "./vendor/@lit-zEaRr5DC.js";
import { o as c, e as y } from "./vendor/lit-html-7zeMcSoo.js";
import b from "./kmk-card-basic.css.lit.js";
import v from "./kmk-card.css.lit.js";
import { validateSlot as p } from "./utils/slot.js";
var S = Object.defineProperty, f = Object.getOwnPropertyDescriptor, o = (s, a, d, n) => {
  for (var e = n > 1 ? void 0 : n ? f(a, d) : a, u = s.length - 1, h; u >= 0; u--)
    (h = s[u]) && (e = (n ? h(a, d, e) : h(e)) || e);
  return n && e && S(a, d, e), e;
};
let t = class extends m {
  constructor() {
    super(...arguments), this.size = "lg", this.orientation = "vertical", this.background = "fill-1", this.target = "_blank";
  }
  firstUpdated() {
    p(this.imageSlot, ".image", this.shadowRoot), p(this.headingSlot, ".heading", this.shadowRoot), p(this.bodyCopySlot, ".body-copy", this.shadowRoot), p(this.buttonGroupSlot, ".button-group", this.shadowRoot);
  }
  render() {
    return r` ${this.url ? this.LinkTemplate() : this.CardTemplate()} `;
  }
  LinkTemplate() {
    return r`
      <a href=${c(this.url)} target=${this.target}>
        ${this.CardTemplate()}
      </a>
    `;
  }
  CardTemplate() {
    const s = {
      "kmk-card-basic": !0,
      "kmk-card": !0,
      [`size-${this.size}`]: !0,
      [`orientation-${this.orientation}`]: !0,
      [`background-${this.background}`]: !0
    };
    return r`
      <div class="${y(s)}">
        <div class="image">
          <slot name="image"></slot>
        </div>
        <div class="content">
          <div class="heading">
            <slot name="heading"></slot>
          </div>
          <div class="body-copy">
            <slot name="body-copy"></slot>
          </div>
          ${this.url ? r`` : r` <div class="button-group">
                <slot name="button-group"></slot>
              </div>`}
        </div>
      </div>
    `;
  }
};
t.styles = [b, v];
o([
  i({ type: String, attribute: "size" })
], t.prototype, "size", 2);
o([
  i({ type: String, attribute: "orientation" })
], t.prototype, "orientation", 2);
o([
  i({ type: String, attribute: "background" })
], t.prototype, "background", 2);
o([
  i({ type: String, attribute: "url" })
], t.prototype, "url", 2);
o([
  i({ type: String, attribute: "target" })
], t.prototype, "target", 2);
o([
  l({ slot: "image" })
], t.prototype, "imageSlot", 2);
o([
  l({ slot: "heading" })
], t.prototype, "headingSlot", 2);
o([
  l({ slot: "body-copy" })
], t.prototype, "bodyCopySlot", 2);
o([
  l({ slot: "button-group" })
], t.prototype, "buttonGroupSlot", 2);
t = o([
  g("kmk-card-basic")
], t);
export {
  t as KmkCardBasic
};

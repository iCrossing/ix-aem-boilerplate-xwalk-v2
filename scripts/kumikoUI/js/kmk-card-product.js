import { html as o } from "lit";
import { n as v, o as a, t as m } from "./vendor/@lit-zEaRr5DC.js";
import { e as n } from "./vendor/lit-html-7zeMcSoo.js";
import g from "./kmk-card-product.css.lit.js";
import u from "./kmk-card.css.lit.js";
import { KmkCardBasic as y } from "./kmk-card-basic.js";
import { validateSlot as e } from "./utils/slot.js";
var f = Object.defineProperty, S = Object.getOwnPropertyDescriptor, s = (l, r, p, d) => {
  for (var i = d > 1 ? void 0 : d ? S(r, p) : r, c = l.length - 1, h; c >= 0; c--)
    (h = l[c]) && (i = (d ? h(r, p, i) : h(i)) || i);
  return d && i && f(r, p, i), i;
};
let t = class extends y {
  constructor() {
    super(...arguments), this.variant = "standard";
  }
  firstUpdated() {
    e(this.logoSlot, ".logo", this.shadowRoot), e(this.logoChipSlot, ".logo-chip", this.shadowRoot), e(this.priceSlot, ".price", this.shadowRoot), e(this.productImageSlot, ".product-image", this.shadowRoot), e(this.chipsSlot, ".chips", this.shadowRoot), e(this.listSlot, ".list", this.shadowRoot), e(this.specsSlot, ".specs", this.shadowRoot);
  }
  CardTemplate() {
    const l = {
      "kmk-card-product": !0,
      "kmk-card": !0,
      [`size-${this.size}`]: !0,
      [`variant-${this.variant}`]: !0,
      [`background-${this.background}`]: !0,
      overlayBackgroundFill: this.variant === "overlay" && this.background === "fill-2"
    };
    return o`
      <div class="${n(l)}">
        <div class="header">
          ${this.variant === "standard" ? o`${this.HeaderInfoTemplate()} ${this.HeaderImageTemplate()}` : o` ${this.HeaderImageTemplate()}`}
        </div>
        <div class="content">
          ${this.variant === "overlay" ? this.HeaderInfoTemplate() : o``}
          <div class="body-copy">
            <slot name="body-copy"></slot>
          </div>
          <div class="chips">
            <slot name="chips"></slot>
          </div>
          <div class="list">
            <slot name="list"></slot>
          </div>
          <div class="specs">
            <slot name="specs"></slot>
          </div>
          ${this.url ? o`` : o` <div class="button-group">
                <slot name="button-group"></slot>
              </div>`}
        </div>
      </div>
    `;
  }
  HeaderInfoTemplate() {
    return o`
      <div class="header-info">
        <div class="logo-container">
          <div class="logo"><slot name="logo"></slot></div>
          <div class="logo-chip"><slot name="logo-chip"></slot></div>
        </div>
        <div class="heading">
          <slot name="heading"></slot>
        </div>
        <div class="price">
          <slot name="price"></slot>
        </div>
      </div>
    `;
  }
  HeaderImageTemplate() {
    return o`
      <div class="header-image">
        ${this.variant === "overlay" ? o`<div class="image">
              <slot name="image"></slot>
            </div>` : ""}
        <div class="product-image">
          <slot name="product-image"></slot>
        </div>
      </div>
    `;
  }
};
t.styles = [g, u];
s([
  v({ type: String, attribute: "variant" })
], t.prototype, "variant", 2);
s([
  a({ slot: "logo" })
], t.prototype, "logoSlot", 2);
s([
  a({ slot: "logo-chip" })
], t.prototype, "logoChipSlot", 2);
s([
  a({ slot: "price" })
], t.prototype, "priceSlot", 2);
s([
  a({ slot: "product-image" })
], t.prototype, "productImageSlot", 2);
s([
  a({ slot: "chips" })
], t.prototype, "chipsSlot", 2);
s([
  a({ slot: "list" })
], t.prototype, "listSlot", 2);
s([
  a({ slot: "specs" })
], t.prototype, "specsSlot", 2);
t = s([
  m("kmk-card-product")
], t);
export {
  t as KmkCardProduct
};

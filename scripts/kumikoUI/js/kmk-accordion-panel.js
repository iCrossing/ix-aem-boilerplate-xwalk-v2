import { LitElement as p, html as o } from "lit";
import { n as s, t as v } from "./vendor/@lit-zEaRr5DC.js";
import h from "./kmk-accordion-panel.css.lit.js";
import { e as m } from "./vendor/lit-html-7zeMcSoo.js";
import "./kmk-icon.js";
import "./kmk-divider.js";
var u = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (n, a, r, c) => {
  for (var e = c > 1 ? void 0 : c ? b(a, r) : a, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (e = (c ? d(a, r, e) : d(e)) || e);
  return c && e && u(a, r, e), e;
};
let t = class extends p {
  constructor() {
    super(...arguments), this.active = !1, this.disabled = !1, this.openIcon = "plus300", this.closeIcon = "minus300", this.showDivider = !1;
  }
  handleClick() {
    this.active = !this.active;
  }
  render() {
    const n = {
      active: this.active
    };
    return o`
      <div class="accordion-panel">
        <div class="accordion-heading">
          <button
            class="accordion-button"
            aria-expanded="${this.active}"
            @click="${this.handleClick}"
            class="${m(n)}"
            ?disabled="${this.disabled}"
          >
            <span>
              <slot name="heading"></slot>
              <slot name="description"></slot>
            </span>

            ${this.active ? o`<kmk-icon name="${this.closeIcon}"></kmk-icon>` : o`<kmk-icon name="${this.openIcon}"></kmk-icon>`}
          </button>
        </div>
        <div class="accordion-content" aria-hidden="${!this.active}">
          <slot></slot>
        </div>

        ${this.showDivider ? o`<kmk-divider orientation="horizontal" divider-style="solid"></kmk-divider>` : o``}
      </div>
    `;
  }
  setActive() {
    this.active = !this.active;
  }
};
t.styles = [h];
i([
  s({ type: Boolean, attribute: "active" })
], t.prototype, "active", 2);
i([
  s({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
i([
  s({ type: String, attribute: "open-icon" })
], t.prototype, "openIcon", 2);
i([
  s({ type: String, attribute: "close-icon" })
], t.prototype, "closeIcon", 2);
i([
  s({ type: Boolean, attribute: "show-divider" })
], t.prototype, "showDivider", 2);
t = i([
  v("kmk-accordion-panel")
], t);
export {
  t as KmkAccordionPanel
};

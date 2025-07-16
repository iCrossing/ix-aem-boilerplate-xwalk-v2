import { LitElement as f, html as c } from "lit";
import { e as m, n as p, r as d, t as v } from "./vendor/@lit-zEaRr5DC.js";
import { e as b, a as h } from "./vendor/lit-html-7zeMcSoo.js";
import u from "./kmk-banner-notification.css.lit.js";
import "./kmk-icon-button.js";
import "./kmk-icon.js";
var y = Object.defineProperty, k = Object.getOwnPropertyDescriptor, o = (s, n, r, e) => {
  for (var t = e > 1 ? void 0 : e ? k(n, r) : n, a = s.length - 1, l; a >= 0; a--)
    (l = s[a]) && (t = (e ? l(n, r, t) : l(t)) || t);
  return e && t && y(n, r, t), t;
};
let i = class extends f {
  constructor() {
    super(...arguments), this.variant = "neutral", this.icon = "info300", this.dismissible = !0, this.isVisible = !0, this.handleClose = () => {
      this.notification && (this.notification.classList.add("hide"), this.notification.addEventListener(
        "transitionend",
        () => {
          this.isVisible = !1;
        },
        { once: !0 }
      ));
    };
  }
  render() {
    const s = {
      "banner-notification": !0,
      [`variant-${this.variant}`]: !0
    }, n = {
      display: this.isVisible ? "flex" : "none"
    };
    return c`
      <div class=${b(s)} style="${h(n)}">
        <div class="notification-content">
          <div class="notification-icon">
            <kmk-icon name="${this.icon}"></kmk-icon>
          </div>
          <div class="notification-text">
            <slot></slot>
          </div>
        </div>
        ${this.dismissible ? c`<kmk-icon-button
              label="Close notification"
              icon="x300"
              variant="bg-light"
              size="sm"
              .onClick=${this.handleClose}
            ></kmk-icon-button>` : c``}
      </div>
    `;
  }
};
i.styles = [u];
o([
  m(".banner-notification")
], i.prototype, "notification", 2);
o([
  p({ type: String, attribute: "variant" })
], i.prototype, "variant", 2);
o([
  p({ type: String, attribute: "icon" })
], i.prototype, "icon", 2);
o([
  p({ type: Boolean, attribute: "dismissible" })
], i.prototype, "dismissible", 2);
o([
  d()
], i.prototype, "isVisible", 2);
i = o([
  v("kmk-banner-notification")
], i);
export {
  i as KmkBannerNotification
};

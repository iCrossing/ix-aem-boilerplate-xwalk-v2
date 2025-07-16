import { LitElement as g, html as i } from "lit";
import { n as r, t as b } from "./vendor/@lit-zEaRr5DC.js";
import { e as y, o as d } from "./vendor/lit-html-7zeMcSoo.js";
import { FirestoneLogo as u, BridgestoneLogoWithTagline as m, BridgestoneLogo as v, FirestoneBadge as f, BridgestoneBadge as h } from "./kmk-logos-svg.js";
import T from "./kmk-logo.css.lit.js";
var $ = Object.defineProperty, S = Object.getOwnPropertyDescriptor, e = (s, o, n, l) => {
  for (var a = l > 1 ? void 0 : l ? S(o, n) : o, c = s.length - 1, p; c >= 0; c--)
    (p = s[c]) && (a = (l ? p(o, n, a) : p(a)) || a);
  return l && a && $(o, n, a), a;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.brand = "bridgestone", this.displayVariant = "logo", this.color = "default", this.title = "", this.description = "", this.target = "_self", this.accessibilityTitle = this.title !== "" ? this.title : void 0, this.accessibilityDesc = this.description !== "" ? this.description : void 0;
  }
  render() {
    const s = {
      "kmk-logo": !0,
      ["brand-" + this.brand]: !0,
      [`color-${this.color}`]: !0
    };
    return i`
      <div class="${y(s)}">
        ${this.url ? i`<a href="${this.url}" target="${this.target}" aria-label="${d(this.ariaLabelValue)}">
              ${this.displayvariantTemplate()}
            </a>` : i` ${this.displayvariantTemplate()} `}
      </div>
    `;
  }
  displayvariantTemplate() {
    return i`
      ${this.displayVariant === "logo" ? this.logoSvgTemplate(this.brand) : this.badgeSvgTemplate(this.brand)}
    `;
  }
  logoSvgTemplate(s) {
    switch (s) {
      case "bridgestone":
        return i`${v(this.accessibilityTitle, this.accessibilityDesc)}`;
      case "bridgestone-with-tagline":
        return i`${m(this.accessibilityTitle, this.accessibilityDesc)}`;
      case "firestone":
        return i`${u(this.accessibilityTitle, this.accessibilityDesc)}`;
    }
  }
  badgeSvgTemplate(s) {
    switch (s) {
      case "bridgestone":
        return i`${h(this.accessibilityTitle, this.accessibilityDesc)}`;
      case "bridgestone-with-tagline":
        return i`${h(this.accessibilityTitle, this.accessibilityDesc)}`;
      case "firestone":
        return i`${f(this.accessibilityTitle, this.accessibilityDesc)}`;
    }
  }
};
t.styles = [T];
e([
  r({ type: String, attribute: "brand" })
], t.prototype, "brand", 2);
e([
  r({ type: String, attribute: "display-variant" })
], t.prototype, "displayVariant", 2);
e([
  r({ type: String, attribute: "color" })
], t.prototype, "color", 2);
e([
  r({ type: String, attribute: "title" })
], t.prototype, "title", 2);
e([
  r({ type: String, attribute: "description" })
], t.prototype, "description", 2);
e([
  r({ type: String, attribute: "url" })
], t.prototype, "url", 2);
e([
  r({ type: String, attribute: "target" })
], t.prototype, "target", 2);
e([
  r({ type: String, attribute: "aria-label-value" })
], t.prototype, "ariaLabelValue", 2);
t = e([
  b("kmk-logo")
], t);
export {
  t as KmkLogo
};

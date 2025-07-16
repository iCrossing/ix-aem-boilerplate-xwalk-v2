import { LitElement as h, html as p } from "lit";
import { n as r, r as d, t as c } from "./vendor/@lit-zEaRr5DC.js";
import g from "./kmk-geolocation-button.css.lit.js";
import "./kmk-link.js";
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, e = (l, i, s, n) => {
  for (var o = n > 1 ? void 0 : n ? m(i, s) : i, a = l.length - 1, u; a >= 0; a--)
    (u = l[a]) && (o = (n ? u(i, s, o) : u(o)) || o);
  return n && o && b(i, s, o), o;
};
let t = class extends h {
  constructor() {
    super(...arguments), this.disabled = !1, this.showText = !0, this.label = "Use my location", this.variant = "primary", this.size = "md", this.underline = !1, this.latitude = null, this.longitude = null;
  }
  getLocation(l) {
    l.preventDefault(), !this.disabled && (navigator.geolocation ? navigator.geolocation.getCurrentPosition((i) => {
      this.latitude = i.coords.latitude, this.longitude = i.coords.longitude;
    }) : console.error("Geolocation not supported"));
  }
  render() {
    return p`
      <kmk-link
        variant="${this.variant}"
        size="${this.size}"
        ?disabled="${this.disabled}"
        show-icon="true"
        icon="target300"
        icon-position="left"
        @click="${this.getLocation}"
        ?underline="${this.underline}"
      >
        ${this.showText ? this.label : ""}
      </kmk-link>
      ${this.latitude !== null && this.longitude !== null ? p`
            <div class="coordinates">
              <p>Latitude: ${this.latitude}</p>
              <p>Longitude: ${this.longitude}</p>
            </div>
          ` : ""}
    `;
  }
};
t.styles = [g];
e([
  r({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
e([
  r({ type: Boolean, attribute: "showText" })
], t.prototype, "showText", 2);
e([
  r({ type: String, attribute: "label" })
], t.prototype, "label", 2);
e([
  r({ type: String, attribute: "variant" })
], t.prototype, "variant", 2);
e([
  r({ type: String, attribute: "size" })
], t.prototype, "size", 2);
e([
  r({ type: Boolean, attribute: "underline" })
], t.prototype, "underline", 2);
e([
  d()
], t.prototype, "latitude", 2);
e([
  d()
], t.prototype, "longitude", 2);
t = e([
  c("kmk-geolocation-button")
], t);
export {
  t as KmkGeolocationButton
};

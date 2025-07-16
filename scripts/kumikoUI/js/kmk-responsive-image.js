import { html as t } from "lit";
import { n as g, t as l } from "./vendor/@lit-zEaRr5DC.js";
import n from "./kmk-responsive-image.css.lit.js";
import { e as h } from "./vendor/lit-html-7zeMcSoo.js";
import { K as v, F as f } from "./kmk-static-image-ADlrgLyO.js";
var u = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, c = (e, s, m, i) => {
  for (var r = i > 1 ? void 0 : i ? $(s, m) : s, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (r = (i ? p(s, m, r) : p(r)) || r);
  return i && r && u(s, m, r), r;
};
let a = class extends v {
  constructor() {
    super(...arguments), this.imageSrcset = [], this.ImageTemplate = () => t`
      ${this.imageSrc ? t`
            ${this.imageSrcset && this.imageSrcset.length > 0 ? this.imageSrcset.map((e) => t`<source srcset="${e.src}" media="${e.media}" />`) : ""}
            <img
              loading="lazy"
              src="${this.isError ? f : this.imageSrc}"
              alt="${this.imageAlt}"
              @error="${this.handleImageError}"
            />
          ` : t`<slot></slot>`}
    `;
  }
  render() {
    const e = {
      [`aspect-ratio-${this.imageRatio}`]: !!this.imageRatio
    };
    return t`
      <div class="kmk-responsive-image">
        <picture class="${h(e)}">${this.ImageTemplate()}</picture>
      </div>
    `;
  }
};
a.styles = [n];
c([
  g({ type: Array })
], a.prototype, "imageSrcset", 2);
a = c([
  l("kmk-responsive-image")
], a);
export {
  a as KmkResponsiveImage
};

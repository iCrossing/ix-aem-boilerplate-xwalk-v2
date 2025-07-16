import { LitElement as a, html as l } from "lit";
import { t as u } from "./vendor/@lit-zEaRr5DC.js";
import { e as c } from "./vendor/lit-html-7zeMcSoo.js";
import d from "./kmk-brand-tester.css.lit.js";
var p = Object.getOwnPropertyDescriptor, v = (t, i, m, o) => {
  for (var e = o > 1 ? void 0 : o ? p(i, m) : i, s = t.length - 1, n; s >= 0; s--)
    (n = t[s]) && (e = n(e) || e);
  return e;
};
let r = class extends a {
  render() {
    return l`
      <div class="${c({
      "brand-tester": !0
    })}">
        <h1>Brand Tester</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend elit, ac
            luctus turpis augue a velit. Etiam ac tortor eu metus euismod
            lobortis.
          </p>
        </div>
        <button>Read More</button>
      </div>
    `;
  }
};
r.styles = [d];
r = v([
  u("kmk-brand-tester")
], r);
export {
  r as KmkBrandTester
};

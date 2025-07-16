import { LitElement as m, html as f } from "lit";
import { e as h, b as u, n as d, t as b } from "./vendor/@lit-zEaRr5DC.js";
import { e as k } from "./vendor/lit-html-7zeMcSoo.js";
import { KmkButton as y } from "./kmk-button.js";
import v from "./kmk-modal-dialog.css.lit.js";
import E from "./utils/dialog.js";
import "./kmk-icon-button.js";
var D = Object.defineProperty, S = Object.getOwnPropertyDescriptor, i = (o, r, n, l) => {
  for (var t = l > 1 ? void 0 : l ? S(r, n) : r, p = o.length - 1, a; p >= 0; p--)
    (a = o[p]) && (t = (l ? a(r, n, t) : a(t)) || t);
  return l && t && D(r, n, t), t;
};
let e = class extends m {
  constructor() {
    super(...arguments), this.dialogOpen = !1, this.size = "md", this.heading = "", this.backdrop = "medium", this.closeDialog = (o) => {
      this.dialogOpen = !1, o.currentTarget.closest("dialog").close("cancel");
    };
  }
  updated() {
    this.cta?.forEach((o) => {
      o instanceof y && (o.onClick = () => {
        this.openDialog();
      });
    }), this.dialogOpen && this.openDialog();
  }
  render() {
    const o = {
      "kmk-modal-dialog": !0,
      [`size-${this.size}`]: !0,
      [`backdrop-${this.backdrop}`]: !0
    };
    return f`
      <div class="${k(o)}">
        <slot name="cta"></slot>
        <dialog class="dialog-wrapper">
          <div class="header">
            <div class="heading">${this.heading}</div>
            <kmk-icon-button variant="bg-light" size="md" icon="x300" @click="${this.closeDialog}"></kmk-icon-button>
          </div>
          <div class="content">
            <slot name="dialog-content"></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </dialog>
      </div>
    `;
  }
  openDialog() {
    E(this.dialogWrapper), this.dialogWrapper.showModal(), this.trapFocus();
  }
  trapFocus() {
    const o = "a[href], button, input, select, textarea, [tabindex]", r = this.dialogContent[0]?.querySelectorAll(o), l = this.dialogWrapper?.querySelector("kmk-icon-button")?.shadowRoot?.querySelectorAll(o);
    let t = Array.from(r);
    l && l.length > 0 && t.unshift(l[0]), this.footer[0]?.querySelectorAll("kmk-button")?.forEach((c) => {
      const s = c.shadowRoot?.querySelectorAll(o);
      s && (t = t.concat(Array.from(s)));
    });
    const a = t && t[0], g = t && t[t.length - 1];
    if (a) {
      const c = g ?? a;
      c && c.addEventListener("keydown", (s) => {
        s.key === "Tab" && s.shiftKey === !1 && (s.preventDefault(), a.focus());
      }), a && a.addEventListener("keydown", (s) => {
        s.key === "Tab" && s.shiftKey && (s.preventDefault(), c.focus());
      });
    }
  }
};
e.styles = [v];
i([
  h(".dialog-wrapper")
], e.prototype, "dialogWrapper", 2);
i([
  u({ slot: "cta" })
], e.prototype, "cta", 2);
i([
  u({ slot: "dialog-content" })
], e.prototype, "dialogContent", 2);
i([
  u({ slot: "footer" })
], e.prototype, "footer", 2);
i([
  d({ type: Boolean, reflect: !0, attribute: "dialog-open" })
], e.prototype, "dialogOpen", 2);
i([
  d({ type: String, attribute: "size" })
], e.prototype, "size", 2);
i([
  d({ type: String, attribute: "heading" })
], e.prototype, "heading", 2);
i([
  d({ type: String, attribute: "backdrop" })
], e.prototype, "backdrop", 2);
e = i([
  b("kmk-modal-dialog")
], e);
export {
  e as KmkModalDialog
};

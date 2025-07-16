import { LitElement as u, html as h } from "lit";
import { n as r, o as m, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { e as d } from "./vendor/lit-html-7zeMcSoo.js";
import f from "./kmk-tab-group.css.lit.js";
var E = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (t, e, s, n) => {
  for (var i = n > 1 ? void 0 : n ? b(e, s) : e, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (i = (n ? p(e, s, i) : p(i)) || i);
  return n && i && E(e, s, i), i;
};
let o = class extends u {
  constructor() {
    super(...arguments), this.position = "top", this.useStroke = !0;
  }
  initElements() {
    this._tabElements.map((t, e) => {
      if (this._panelElements[e]) {
        const s = e + 1;
        t.tabId = "tab-" + s, this._panelElements[e].panelId = "panel-" + s, t.position = this.position, t.useStroke = this.useStroke, t.onClick = () => this.handleClick(t), t.active && (this.setUnselectedElements(), this.setSelectedElement(t));
      }
    });
  }
  setUnselectedElements() {
    this._tabElements.map((t) => {
      t.active = !1;
    }), this._panelElements.map((t) => {
      t.active = !1;
    });
  }
  setSelectedElement(t) {
    t.active = !0;
    const e = this._panelElements.find(
      (s) => s.panelId?.split("-")[1] === t.tabId?.split("-")[1]
    );
    e && (e.active = !0);
  }
  handleClick(t) {
    this.setUnselectedElements(), this.setSelectedElement(t);
  }
  firstUpdated() {
    this.initElements();
  }
  updated(t) {
    t.has("position") && this.updateTabPositions(), t.has("useStroke") && this.updateTabStrokes();
  }
  updateTabPositions() {
    this._tabElements.forEach((t) => {
      t.position = this.position;
    });
  }
  updateTabStrokes() {
    this._tabElements.forEach((t) => {
      t.useStroke = this.useStroke;
    });
  }
  render() {
    const t = {
      "tab-group": !0,
      [`position-${this.position}`]: !0
    };
    return h`<div class=${d(t)}>
      <div class="tabs" role="tablist">
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot name="panels"></slot>
      </div>
    </div>`;
  }
};
o.styles = [f];
l([
  r({ type: String, attribute: "position" })
], o.prototype, "position", 2);
l([
  r({ type: Boolean, attribute: "use-stroke" })
], o.prototype, "useStroke", 2);
l([
  m({ slot: "tabs" })
], o.prototype, "_tabElements", 2);
l([
  m({ slot: "panels" })
], o.prototype, "_panelElements", 2);
o = l([
  c("kmk-tab-group")
], o);
export {
  o as KmkTabGroup
};

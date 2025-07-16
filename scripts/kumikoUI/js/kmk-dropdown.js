import { LitElement as p, html as d } from "lit";
import { n as l, r as c, o as v, t as y } from "./vendor/@lit-zEaRr5DC.js";
import u from "./kmk-dropdown.css.lit.js";
import "./kmk-icon.js";
import "./kmk-checkbox-group.js";
var L = Object.defineProperty, m = Object.getOwnPropertyDescriptor, i = (e, s, o, h) => {
  for (var r = h > 1 ? void 0 : h ? m(s, o) : s, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (r = (h ? a(s, o, r) : a(r)) || r);
  return h && r && L(s, o, r), r;
};
let t = class extends p {
  constructor() {
    super(...arguments), this.label = "Label", this.size = "md", this.variant = "standard", this.showPlaceholder = !0, this.placeholder = "Select an option", this.helperText = "Helper text", this.disabled = !1, this.error = !1, this.rightIcon = "chevronDown300", this.showHelperText = !0, this.showCheckbox = !1, this.isOpen = !1, this.itemArray = [];
  }
  validateInputLength(e, s) {
    return e.length > s ? e.slice(0, s) : e;
  }
  toggleDropdown() {
    this.disabled || (this.isOpen = !this.isOpen, this.rightIcon = this.isOpen ? "chevronUp300" : "chevronDown300");
  }
  updated() {
    this.items.forEach((e) => {
      const s = e.querySelector("kmk-checkbox"), o = s?.getAttribute("value");
      s && (s.style.display = this.showCheckbox ? "inline-block" : "none"), s && !e.hasAttribute("listener-attached") && (e.setAttribute("listener-attached", "true"), e.classList.add("dropdown-menu-item"), s.addEventListener("focus", () => {
        e.classList.add("focus-visible"), s.style.outline = "none";
      }), s.addEventListener("blur", () => {
        e.classList.remove("focus-visible");
      }), e.addEventListener("click", (h) => {
        const r = s.shadowRoot?.querySelector("label"), n = r?.classList.contains("selected");
        h.target !== s ? n ? (r?.classList.remove("selected"), e.classList.remove("selected-item"), this.itemArray = this.itemArray.filter(
          (a) => a !== o
        )) : (r?.classList.add("selected"), e.classList.add("selected-item"), o && !this.itemArray.includes(o) && (this.itemArray = [...this.itemArray, o])) : n ? (e.classList.remove("selected-item"), this.itemArray = this.itemArray.filter(
          (a) => a !== o
        )) : (e.classList.add("selected-item"), o && !this.itemArray.includes(o) && (this.itemArray = [...this.itemArray, o]));
      }), e.addEventListener("mouseenter", () => {
        e.classList.add("hover");
      }), e.addEventListener("mouseleave", () => {
        e.classList.remove("hover");
      }), e.addEventListener("mousedown", () => {
        e.classList.add("active");
      }), e.addEventListener("mouseup", () => {
        e.classList.remove("active");
      }));
    }), this.placeholder = this.validateInputLength(
      this.placeholder,
      t.PLACEHOLDER_LIMIT
    ), this.label = this.validateInputLength(this.label, t.LABEL_LIMIT), this.helperText = this.validateInputLength(
      this.helperText,
      t.HELPER_TEXT_LIMIT
    );
  }
  render() {
    return d`
      <div
        class="dropdown ${this.size} ${this.variant === "outlined" ? "outlined" : ""}"
        ?disabled="${this.disabled}"
        ?error="${this.error}"
      >
        <label
          class="${this.showPlaceholder || this.itemArray.length ? "label" : "hidden-label"} ${this.variant === "outlined" ? "outlined" : ""}"
          @click="${this.toggleDropdown}"
        >
          ${this.label}
        </label>

        <div
          class="dropdown-toggle ${this.itemArray.length > 0 ? "items-selected" : this.showPlaceholder ? "place-holder" : "no-placeholder"}"
          @click="${this.toggleDropdown}"
        >
          ${this.itemArray.join(", ") || (this.showPlaceholder ? this.placeholder : this.label)}
          <kmk-icon
            class="icon-right"
            size="icon-md"
            name="${this.rightIcon}"
          ></kmk-icon>
        </div>
        ${this.showHelperText ? d`<div class="helper-text">${this.helperText}</div>` : null}
        ${this.isOpen ? d`
              <kmk-checkbox-group layout="column">
                <div class="dropdown-menu">
                  <slot name="checkbox-item"></slot>
                </div>
              </kmk-checkbox-group>
            ` : null}
      </div>
    `;
  }
};
t.styles = [u];
t.PLACEHOLDER_LIMIT = 20;
t.LABEL_LIMIT = 10;
t.HELPER_TEXT_LIMIT = 20;
i([
  l({ type: String })
], t.prototype, "label", 2);
i([
  l({ type: String })
], t.prototype, "size", 2);
i([
  l({ type: String })
], t.prototype, "variant", 2);
i([
  l({ type: Boolean })
], t.prototype, "showPlaceholder", 2);
i([
  l({ type: String })
], t.prototype, "placeholder", 2);
i([
  l({ type: String })
], t.prototype, "helperText", 2);
i([
  l({ type: Boolean })
], t.prototype, "disabled", 2);
i([
  l({ type: Boolean })
], t.prototype, "error", 2);
i([
  l({ type: String })
], t.prototype, "rightIcon", 2);
i([
  l({ type: Boolean })
], t.prototype, "showHelperText", 2);
i([
  l({ type: Boolean })
], t.prototype, "showCheckbox", 2);
i([
  c()
], t.prototype, "isOpen", 2);
i([
  c()
], t.prototype, "itemArray", 2);
i([
  v({ slot: "checkbox-item" })
], t.prototype, "items", 2);
t = i([
  y("kmk-dropdown")
], t);
export {
  t as KmkDropdown
};

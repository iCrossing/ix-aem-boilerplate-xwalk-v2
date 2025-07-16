import { LitElement as v, html as E } from "lit";
import { o as u, e as f, n as h, r as b, t as S } from "./vendor/@lit-zEaRr5DC.js";
import { s as y, o as x, e as w, u as d, a as m } from "./vendor/lit-html-7zeMcSoo.js";
import { r as k } from "./vendor/swiper-B7fPa5U-.js";
import $ from "./kmk-carousel.css.lit.js";
import "./kmk-icon-button.js";
import "./kmk-text.js";
import { validateSlot as g } from "./utils/slot.js";
class A {
  constructor(t) {
    this._mutationObserver = new MutationObserver(this._handleMutation.bind(this)), this.host = t, t.addController(this);
  }
  hostConnected() {
  }
  /**
   * MutationObserver callback.
   */
  _handleMutation() {
    this._mutationObserver.disconnect(), this.host.requestUpdate();
  }
  /**
   * Get slotted nodes by slot name.
   * @param {string | null} slotName - The slot name to search for.
   * @returns {Array} An array of slotted nodes.
   */
  getSlottedNodes(t = null) {
    const i = t === "" || t === null;
    let e = [];
    return i ? e = Array.from(this.host.childNodes).filter(
      (s) => this.isDefaultSlotText(s) || this.isDefaultSlotElement(s)
    ) : e = Array.from(this.host.querySelectorAll(`[slot=${t}]`)), e.length ? e : !1;
  }
  /**
   * Check if a slot exists.
   * @param {string | null} slotName - The slot name to check for.
   * @returns {boolean} True if the slot exists, false otherwise.
   */
  exist(t = null) {
    return !!this.getSlottedNodes(t);
  }
  /**
   * Check if a node is a default slot text.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot text, false otherwise.
   */
  isDefaultSlotText(t) {
    return t.nodeType === t.TEXT_NODE && t.textContent.trim() !== "";
  }
  /**
   * Check if a node is a default slot element.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot element, false otherwise.
   */
  isDefaultSlotElement(t) {
    return t.nodeType === t.ELEMENT_NODE && t.getAttribute("slot") === null;
  }
  /**
   * Add annotations to a slot.
   * @param {string} slotName - The slot name.
   * @param {ChildNode} lightDomSlot - The light DOM slot.
   * @returns {HTMLElement} The annotated slot.
   */
  addAnnotations(t, i) {
    const e = i.cloneNode(!0), s = "slotsController cloned this " + (t === "" ? "default-slot" : `named-slot '${t}'`) + " into the shadow DOM";
    if (Array.from(this.host.childNodes).some((n) => n.nodeValue === s) || i.before(document.createComment(s)), t !== "")
      return e.setAttribute("cloned-slot-type", "named-slot"), e.setAttribute("cloned-slot-name", t), e.removeAttribute("slot"), e;
    if (this.isDefaultSlotElement(i))
      return e.setAttribute("cloned-slot-type", "default-slot--element"), e.setAttribute("cloned-slot-name", "default"), e.removeAttribute("slot"), e;
    {
      const n = document.createElement("cloned-slot");
      return e.parentNode?.insertBefore(n, e), n.appendChild(e), n.setAttribute("cloned-slot-type", "default-slot--text"), n.setAttribute("cloned-slot-name", "default"), n;
    }
  }
  /**
   * Dispatch events from cloned slots in shadow DOM to the equivalent light DOM slot.
   * @param {string[]} eventsToDispatch - The events to dispatch.
   * @param {HTMLElement} clonedSlot - The cloned slot.
   *
   * As there is no way (aside from devtools) to determine what events are occurring in the DOM,
   * what we can do is simulate an event that originated in the shadow DOM.
   * Therefore, clicking on an element in a slotted shadow DOM would simulate a click event
   * on a parallel element in a slotted light DOM.
   *
   * When an event triggers -
   * Step 1 -
   * In the Shadow DOM, identify the path that leads to the element that triggered the event.
   *
   * Step 2 -
   * In the Light DOM, find the equivalent path to the one found in step 1.
   *
   * Step 3 -
   * Dispatch the event to the light DOM, following the same path that was found in step 2.
   *
   * Step 4 -
   * Wait for the component to refresh (by using timeout 0), then focus is reset to the component that hosts the element.
   *
   * Step 5 -
   * Focus the browser on the original element in Shadow DOM that triggered the event found in step 1
   */
  dispatchEventsToLightDom(t, i) {
    t.forEach((e) => {
      i.addEventListener(e, (s) => {
        if (s.target) {
          const o = this.getElementPathInShadowDom(s), n = this.getElementPathInLightDom(o);
          n && n.dispatchEvent(new Event(e)), setTimeout(() => {
            const l = this.getElementPathInLightDom(o, !0);
            l && l.focus();
          }, 0);
        }
      });
    });
  }
  /**
   * Render a slot in the shadow DOM.
   * @param {string} [slotName=''] - The slot name.
   * @param {string[]} [eventsToDispatch=[]] - The events to dispatch.
   * @param {boolean} [addAnnotations=true] - Whether to add annotations to the slot.
   * @returns {Array | null} An array of cloned slots or null if no slots found.
   */
  renderInShadow(t = "", i = [], e = !0) {
    const s = this.getSlottedNodes(t);
    if (s) {
      const o = s.map((n) => {
        const l = n;
        let p;
        return e ? p = this.addAnnotations(t, l) : p = l.cloneNode(!0), this.dispatchEventsToLightDom(i, p), p;
      });
      return this._mutationObserver.observe(this.host, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        characterData: !0
      }), o;
    }
    return null;
  }
  /**
   * Get an array of CSS selectors that can be used to select the target of the event.
   * @param {Event} event - The event whose target we are trying to find.
   * @returns {Array} An array of CSS selectors that can be used to select the target of the event.
   */
  getElementPathInShadowDom(t) {
    const i = t.composedPath(), e = [];
    let s = !1;
    for (let n = 0; !s && n < i.length; n++) {
      const l = i[n];
      if (l.nodeName === "#document-fragment")
        s = !0;
      else {
        const p = this.getSelectorForSingleElement(l);
        p && e.push(p);
      }
    }
    return e.reverse();
  }
  /**
   * Get the class selector for a single element.
   * @param {HTMLElement} currentElement - The current element.
   * @returns {Object | null} The selector object or null if the element has no parent.
   */
  getSelectorForSingleElement(t) {
    if (!t.parentElement)
      return null;
    const i = Array.from(t.classList).join("."), e = `${t.localName}${i !== "" ? "." + i : ""}`, o = Array.from(t.parentElement.querySelectorAll(e)).indexOf(t);
    return {
      name: e,
      index: o
    };
  }
  /**
   * Gets the targeted element from the event path.
   * @param {Array} elementPathInShadowDom - The path of the event.
   * @param {boolean} [isShadow=false] - Whether to search in the shadow DOM.
   * @returns {Element | null} The targeted element or null if not found.
   */
  getElementPathInLightDom(t, i = !1) {
    let e = i ? this.host.shadowRoot : this.host;
    if (!e)
      return null;
    for (let s = 0; s < t.length; s++)
      e = e.querySelectorAll(t[s].name)[t[s].index];
    return e;
  }
  printExtraAttributes(t) {
    return y(t.map((i) => `${i.name}=${i.value}`).join(" "));
  }
  /**
   * Conditionally render a slot with a wrapper and additional classes.
   * @param {string} slotName - The slot name.
   * @param {boolean} [renderInShadow=true] - Whether to render the slot in the shadow DOM.
   * @param {string | null} [classes=null] - Additional classes to add to the wrapper.
   * @param {string | null} [attributes=null] - Additional attributes to add to the wrapper.
   * @returns {TemplateResult | null} The rendered slot or null if the slot does not exist.
   */
  conditionalSlot(t, i = !0, e = null, s = []) {
    const o = t === "" || t === null, n = {
      "default-slot": o,
      [`${t}`]: !o,
      [`${e}`]: e ?? !1
    };
    return this.exist(t) ? d` <div class="${x(w(n))}" ${this.printExtraAttributes(s)}>
        ${i ? d`${this.renderInShadow(t)}` : d`<slot name=${t}></slot> `}
      </div>` : null;
  }
}
var C = Object.defineProperty, L = Object.getOwnPropertyDescriptor, a = (c, t, i, e) => {
  for (var s = e > 1 ? void 0 : e ? L(t, i) : t, o = c.length - 1, n; o >= 0; o--)
    (n = c[o]) && (s = (e ? n(t, i, s) : n(s)) || s);
  return e && s && C(t, i, s), s;
};
let r = class extends v {
  constructor() {
    super(...arguments), this.slots = new A(this), this.slidesPerView = 3, this.navigationAlignment = "default", this.spacing = "lg", this.slideWrapperHeight = 0, this.handleResize = () => {
      this.swiperEl && (this.slideWrapperHeight = this.swiperEl.swiper.wrapperEl.offsetHeight);
    };
  }
  connectedCallback() {
    super.connectedCallback(), k(), window.addEventListener("resize", this.handleResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this.handleResize);
  }
  firstUpdated() {
    g(this.ctaSlot, ".cta", this.shadowRoot), g(this.headingSlot, ".heading", this.shadowRoot), this.swiperPagination.innerHTML = `<kmk-text><p><span>1</span> / <span>${this.swiperEl?.childElementCount}</span></p></kmk-text>`;
  }
  updated() {
    this.setSwipperCarousel();
  }
  setSwipperCarousel() {
    if (!this.swiperEl) {
      console.warn("Swiper container not found.");
      return;
    }
    const c = {
      pagination: {
        clickable: !0,
        type: "fraction",
        renderFraction: function(e, s) {
          return `<div class="swiper-pagination-footer"><kmk-text>
            <p><span class="${e}"></span> / <span class="${s}"></span></p>
            </kmk-text>
          </div>`;
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: !0
      },
      slidesPerView: this.slidesPerView,
      spaceBetween: 24
    };
    Object.assign(this.swiperEl, c), typeof this.swiperEl.initialize == "function" ? (this.swiperEl.initialize(), setTimeout(() => {
      this.slideWrapperHeight = this.swiperEl.swiper.wrapperEl.offsetHeight;
    }, 300)) : console.error("Swiper initialize method not found.");
    const t = this.shadowRoot.querySelector(".swiper-button-prev"), i = this.shadowRoot.querySelector(".swiper-button-next");
    t && t.addEventListener("click", () => {
      this.swiperEl?.swiper.slidePrev();
    }), i && i.addEventListener("click", () => {
      this.swiperEl?.swiper.slideNext();
    }), this.swiperEl.addEventListener("swiperslidechange", (e) => {
      const [s] = e.detail, o = s.pagination.el, n = o.querySelector(".swiper-pagination-current")?.textContent, l = o.querySelector(".swiper-pagination-total")?.textContent;
      this.swiperPagination.innerHTML = `<kmk-text><p><span>${n}</span> / <span>${l}</span></p></kmk-text>`;
    });
  }
  render() {
    const c = {
      "kmk-carousel": !0,
      [`alignment-${this.navigationAlignment}`]: !0,
      [`spacing-${this.spacing}`]: !0
    }, t = {
      height: `${this.navigationAlignment === "default" ? `${this.slideWrapperHeight}px` : "auto"}`
    };
    return E`
      <div class="${w(c)}">
        <div class="heading"><slot name="heading"></slot></div>
        <div class="kmk-carousel-container">
          <swiper-container init="false" class="swiper-container">
            ${this.slots.renderInShadow("slide-item")}
          </swiper-container>
          <div class="swiper-controls">
            <div class="swiper-prev-button" style="${m(t)}">
              <kmk-icon-button
                variant="bg-light"
                size="sm"
                icon="chevronLeft300"
                use-stroke
                class="swiper-button-prev"
              ></kmk-icon-button>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-next-button" style="${m(t)}">
              <kmk-icon-button
                variant="bg-light"
                size="sm"
                icon="chevronRight300"
                use-stroke
                class="swiper-button-next"
              ></kmk-icon-button>
            </div>
          </div>
        </div>
        <div class="cta"><slot name="cta"></slot></div>
      </div>
    `;
  }
};
r.styles = [$];
a([
  u({ slot: "slide-item", flatten: !0 })
], r.prototype, "slides", 2);
a([
  u({ slot: "cta" })
], r.prototype, "ctaSlot", 2);
a([
  u({ slot: "heading" })
], r.prototype, "headingSlot", 2);
a([
  f(".swiper-container")
], r.prototype, "swiperEl", 2);
a([
  f(".swiper-pagination")
], r.prototype, "swiperPagination", 2);
a([
  h({ type: Number, attribute: "slides-per-view" })
], r.prototype, "slidesPerView", 2);
a([
  h({ type: String, attribute: "navigation-alignemnt" })
], r.prototype, "navigationAlignment", 2);
a([
  h({ type: String, attribute: "spacing" })
], r.prototype, "spacing", 2);
a([
  b()
], r.prototype, "slideWrapperHeight", 2);
r = a([
  S("kmk-carousel")
], r);
export {
  r as KmkCarousel
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, b = I.trustedTypes, R = b ? b.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, z = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, Z = "?" + _, K = `<${Z}>`, m = document, N = () => m.createComment(""), x = (n) => n === null || typeof n != "object" && typeof n != "function", U = Array.isArray, Q = (n) => U(n) || typeof n?.[Symbol.iterator] == "function", C = `[ 	
\f\r]`, y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, k = /-->/g, B = />/g, f = RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), P = /'/g, D = /"/g, F = /^(?:script|style|textarea|title)$/i, X = (n) => (t, ...s) => ({ _$litType$: n, strings: t, values: s }), Y = X(1), p = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), W = /* @__PURE__ */ new WeakMap(), g = m.createTreeWalker(m, 129);
function G(n, t) {
  if (!U(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return R !== void 0 ? R.createHTML(t) : t;
}
const tt = (n, t) => {
  const s = n.length - 1, e = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = y;
  for (let u = 0; u < s; u++) {
    const h = n[u];
    let l, $, a = -1, d = 0;
    for (; d < h.length && (o.lastIndex = d, $ = o.exec(h), $ !== null); ) d = o.lastIndex, o === y ? $[1] === "!--" ? o = k : $[1] !== void 0 ? o = B : $[2] !== void 0 ? (F.test($[2]) && (i = RegExp("</" + $[2], "g")), o = f) : $[3] !== void 0 && (o = f) : o === f ? $[0] === ">" ? (o = i ?? y, a = -1) : $[1] === void 0 ? a = -2 : (a = o.lastIndex - $[2].length, l = $[1], o = $[3] === void 0 ? f : $[3] === '"' ? D : P) : o === D || o === P ? o = f : o === k || o === B ? o = y : (o = f, i = void 0);
    const A = o === f && n[u + 1].startsWith("/>") ? " " : "";
    r += o === y ? h + K : a >= 0 ? (e.push(l), h.slice(0, a) + z + h.slice(a) + _ + A) : h + _ + (a === -2 ? u : A);
  }
  return [G(n, r + (n[s] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), e];
};
class H {
  constructor({ strings: t, _$litType$: s }, e) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const u = t.length - 1, h = this.parts, [l, $] = tt(t, s);
    if (this.el = H.createElement(l, e), g.currentNode = this.el.content, s === 2 || s === 3) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (i = g.nextNode()) !== null && h.length < u; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const a of i.getAttributeNames()) if (a.endsWith(z)) {
          const d = $[o++], A = i.getAttribute(a).split(_), T = /([.?@])?(.*)/.exec(d);
          h.push({ type: 1, index: r, name: T[2], strings: A, ctor: T[1] === "." ? st : T[1] === "?" ? it : T[1] === "@" ? nt : M }), i.removeAttribute(a);
        } else a.startsWith(_) && (h.push({ type: 6, index: r }), i.removeAttribute(a));
        if (F.test(i.tagName)) {
          const a = i.textContent.split(_), d = a.length - 1;
          if (d > 0) {
            i.textContent = b ? b.emptyScript : "";
            for (let A = 0; A < d; A++) i.append(a[A], N()), g.nextNode(), h.push({ type: 2, index: ++r });
            i.append(a[d], N());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Z) h.push({ type: 2, index: r });
      else {
        let a = -1;
        for (; (a = i.data.indexOf(_, a + 1)) !== -1; ) h.push({ type: 7, index: r }), a += _.length - 1;
      }
      r++;
    }
  }
  static createElement(t, s) {
    const e = m.createElement("template");
    return e.innerHTML = t, e;
  }
}
function v(n, t, s = n, e) {
  if (t === p) return t;
  let i = e !== void 0 ? s._$Co?.[e] : s._$Cl;
  const r = x(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== r && (i?._$AO?.(!1), r === void 0 ? i = void 0 : (i = new r(n), i._$AT(n, s, e)), e !== void 0 ? (s._$Co ??= [])[e] = i : s._$Cl = i), i !== void 0 && (t = v(n, i._$AS(n, t.values), i, e)), t;
}
class et {
  constructor(t, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: s }, parts: e } = this._$AD, i = (t?.creationScope ?? m).importNode(s, !0);
    g.currentNode = i;
    let r = g.nextNode(), o = 0, u = 0, h = e[0];
    for (; h !== void 0; ) {
      if (o === h.index) {
        let l;
        h.type === 2 ? l = new w(r, r.nextSibling, this, t) : h.type === 1 ? l = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (l = new rt(r, this, t)), this._$AV.push(l), h = e[++u];
      }
      o !== h?.index && (r = g.nextNode(), o++);
    }
    return g.currentNode = m, i;
  }
  p(t) {
    let s = 0;
    for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(t, e, s), s += e.strings.length - 2) : e._$AI(t[s])), s++;
  }
}
class w {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, s, e, i) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = e, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && t?.nodeType === 11 && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    t = v(this, t, s), x(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== p && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Q(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && x(this._$AH) ? this._$AA.nextSibling.data = t : this.T(m.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: s, _$litType$: e } = t, i = typeof e == "number" ? this._$AC(t) : (e.el === void 0 && (e.el = H.createElement(G(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === i) this._$AH.p(s);
    else {
      const r = new et(i, this), o = r.u(this.options);
      r.p(s), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let s = W.get(t.strings);
    return s === void 0 && W.set(t.strings, s = new H(t)), s;
  }
  k(t) {
    U(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let e, i = 0;
    for (const r of t) i === s.length ? s.push(e = new w(this.O(N()), this.O(N()), this, this.options)) : e = s[i], e._$AI(r), i++;
    i < s.length && (this._$AR(e && e._$AB.nextSibling, i), s.length = i);
  }
  _$AR(t = this._$AA.nextSibling, s) {
    for (this._$AP?.(!1, !0, s); t && t !== this._$AB; ) {
      const e = t.nextSibling;
      t.remove(), t = e;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class M {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, s, e, i, r) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = s, this._$AM = i, this.options = r, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = c;
  }
  _$AI(t, s = this, e, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = v(this, t, s, 0), o = !x(t) || t !== this._$AH && t !== p, o && (this._$AH = t);
    else {
      const u = t;
      let h, l;
      for (t = r[0], h = 0; h < r.length - 1; h++) l = v(this, u[e + h], s, h), l === p && (l = this._$AH[h]), o ||= !x(l) || l !== this._$AH[h], l === c ? t = c : t !== c && (t += (l ?? "") + r[h + 1]), this._$AH[h] = l;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class st extends M {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class it extends M {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class nt extends M {
  constructor(t, s, e, i, r) {
    super(t, s, e, i, r), this.type = 5;
  }
  _$AI(t, s = this) {
    if ((t = v(this, t, s, 0) ?? c) === p) return;
    const e = this._$AH, i = t === c && e !== c || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, r = t !== c && (e === c || i);
    i && this.element.removeEventListener(this.name, this, e), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class rt {
  constructor(t, s, e) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    v(this, t);
  }
}
const ot = I.litHtmlPolyfillSupport;
ot?.(H, w), (I.litHtmlVersions ??= []).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = { ATTRIBUTE: 1, CHILD: 2 }, L = (n) => (...t) => ({ _$litDirective$: n, values: t });
let O = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, s, e) {
    this._$Ct = t, this._$AM = s, this._$Ci = e;
  }
  _$AS(t, s) {
    return this.update(t, s);
  }
  update(t, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t = L(class extends O {
  constructor(n) {
    if (super(n), n.type !== j.ATTRIBUTE || n.name !== "class" || n.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return " " + Object.keys(n).filter((t) => n[t]).join(" ") + " ";
  }
  update(n, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), n.strings !== void 0 && (this.nt = new Set(n.strings.join(" ").split(/\s/).filter((e) => e !== "")));
      for (const e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
      return this.render(t);
    }
    const s = n.element.classList;
    for (const e of this.st) e in t || (s.remove(e), this.st.delete(e));
    for (const e in t) {
      const i = !!t[e];
      i === this.st.has(e) || this.nt?.has(e) || (i ? (s.add(e), this.st.add(e)) : (s.remove(e), this.st.delete(e)));
    }
    return p;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = (n) => n ?? c;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = "important", ht = " !" + q, dt = L(class extends O {
  constructor(n) {
    if (super(n), n.type !== j.ATTRIBUTE || n.name !== "style" || n.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return Object.keys(n).reduce((t, s) => {
      const e = n[s];
      return e == null ? t : t + `${s = s.includes("-") ? s : s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${e};`;
    }, "");
  }
  update(n, [t]) {
    const { style: s } = n.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const e of this.ft) t[e] == null && (this.ft.delete(e), e.includes("-") ? s.removeProperty(e) : s[e] = null);
    for (const e in t) {
      const i = t[e];
      if (i != null) {
        this.ft.add(e);
        const r = typeof i == "string" && i.endsWith(ht);
        e.includes("-") || r ? s.setProperty(e, r ? i.slice(0, -11) : i, r ? q : "") : s[e] = i;
      }
    }
    return p;
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class S extends O {
  constructor(t) {
    if (super(t), this.it = c, t.type !== j.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === c || t == null) return this._t = void 0, this.it = t;
    if (t === p) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const s = [t];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
}
S.directiveName = "unsafeHTML", S.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class E extends S {
}
E.directiveName = "unsafeSVG", E.resultType = 2;
const At = L(E);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = Symbol.for(""), lt = (n) => {
  if (n?.r === J) return n?._$litStatic$;
}, _t = (n) => ({ _$litStatic$: n, r: J }), V = /* @__PURE__ */ new Map(), at = (n) => (t, ...s) => {
  const e = s.length;
  let i, r;
  const o = [], u = [];
  let h, l = 0, $ = !1;
  for (; l < e; ) {
    for (h = t[l]; l < e && (r = s[l], (i = lt(r)) !== void 0); ) h += i + t[++l], $ = !0;
    l !== e && u.push(r), o.push(h), l++;
  }
  if (l === e && o.push(t[e]), $) {
    const a = o.join("$$lit$$");
    (t = V.get(a)) === void 0 && (o.raw = o, V.set(a, t = o)), s = u;
  }
  return n(t, ...s);
}, pt = at(Y);
export {
  dt as a,
  At as b,
  $t as e,
  ut as o,
  _t as s,
  pt as u
};

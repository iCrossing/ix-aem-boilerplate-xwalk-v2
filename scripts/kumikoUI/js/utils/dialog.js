const a = new Event("closing"), l = new Event("closed"), d = new Event("opening"), v = new Event("opened"), u = new Event("removed"), E = new MutationObserver((e) => {
  e.forEach(async (t) => {
    if (t.attributeName === "open") {
      const n = t.target;
      if (!n.hasAttribute("open")) return;
      document.querySelector("body").style.overflow = "hidden";
      const s = n.querySelector("[autofocus]"), r = n.querySelector("kmk-icon-button");
      s ? s.focus() : r.shadowRoot?.querySelector("button")?.focus(), n.dispatchEvent(d), await o(n), n.dispatchEvent(v);
    }
  });
}), f = new MutationObserver((e) => {
  e.forEach((t) => {
    t.removedNodes.forEach((n) => {
      n.nodeName === "DIALOG" && (n.removeEventListener("click", c), n.removeEventListener("close", i), n.dispatchEvent(u));
    });
  });
}), o = (e) => Promise.allSettled(e.getAnimations().map((t) => t.finished)), c = ({ target: e }) => {
  const t = e;
  t.nodeName === "DIALOG" && t.close("dismiss");
}, i = async ({ target: e }) => {
  document.querySelector("body").style.overflow = "revert";
  const t = e;
  t.dispatchEvent(a), await o(t), t.dispatchEvent(l);
};
async function b(e) {
  e.addEventListener("click", c), e.addEventListener("close", i), e.addEventListener("keydown", function(t) {
    t.key === "Escape" && e.close("cancel");
  }), E.observe(e, {
    attributes: !0
  }), f.observe(document.body, {
    attributes: !1,
    subtree: !1,
    childList: !0
  }), await o(e), e.removeAttribute("loading");
}
export {
  b as default
};

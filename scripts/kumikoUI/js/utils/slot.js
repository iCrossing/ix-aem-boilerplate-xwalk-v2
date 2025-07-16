const s = (e, t, o) => {
  !!e.length || o?.querySelector(t)?.remove();
};
export {
  s as validateSlot
};

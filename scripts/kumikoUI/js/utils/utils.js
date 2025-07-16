const a = (e, t = {}) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
  return Object.entries(t).forEach(([o, c]) => {
    n.setAttribute(o, c);
  }), n;
}, u = (e) => {
  if (!e)
    return !1;
  try {
    return new RegExp(/(\d+px$|\d+rem$|\d+em$|\d+%$)/).test(e);
  } catch {
    return !1;
  }
}, m = (e) => {
  const t = [
    /(?<=v=|v\/|embed\/|youtu.be\/|user\/\w+\/|watch\?v=)([^#&?]*).*/,
    /(?<=youtu.be\/|embed\/|v\/|v=|user\/\w+\/|watch\?v=)([^#&?]*).*/
  ];
  for (const s of t) {
    const r = e.match(s);
    if (r)
      return r[1];
  }
  return null;
};
export {
  m as getYouTubeVideoId,
  u as isValidCssSize,
  a as svgTemplate
};

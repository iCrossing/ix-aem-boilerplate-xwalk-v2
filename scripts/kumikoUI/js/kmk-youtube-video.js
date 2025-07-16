import { LitElement as v, html as u } from "lit";
import { n as s, t as m } from "./vendor/@lit-zEaRr5DC.js";
import c from "./kmk-youtube-video.css.lit.js";
import { getYouTubeVideoId as y } from "./utils/utils.js";
import { e as h } from "./vendor/lit-html-7zeMcSoo.js";
var n = Object.defineProperty, f = Object.getOwnPropertyDescriptor, o = (i, r, d, a) => {
  for (var e = a > 1 ? void 0 : a ? f(r, d) : r, p = i.length - 1, l; p >= 0; p--)
    (l = i[p]) && (e = (a ? l(r, d, e) : l(e)) || e);
  return a && e && n(r, d, e), e;
};
let t = class extends v {
  constructor() {
    super(...arguments), this.videoId = "", this.autoplay = !1, this.aspectRatio = "16-9", this.videoIdValue = null;
  }
  render() {
    if (!this.videoId && !this.videoUrl)
      throw new Error("You must provide either a video ID or a video URL.");
    this.videoId ? this.videoIdValue = this.videoId : this.videoUrl && (this.videoIdValue = y(this.videoUrl));
    const i = {
      "kmk-youtube-video": !0,
      [`aspect-ratio-${this.aspectRatio}`]: !0
    };
    return u`
      ${this.videoIdValue ? u`
            <div class="${h(i)}">
              <iframe
                src="https://www.youtube.com/embed/${this.videoIdValue}${this.autoplay ? "?autoplay=1" : ""}"
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ` : ""}
    `;
  }
};
t.styles = [c];
o([
  s({ type: String, attribute: "video-id" })
], t.prototype, "videoId", 2);
o([
  s({ type: String, attribute: "video-url" })
], t.prototype, "videoUrl", 2);
o([
  s({ type: Boolean, attribute: "autoplay" })
], t.prototype, "autoplay", 2);
o([
  s({ type: String, attribute: "aspect-ratio" })
], t.prototype, "aspectRatio", 2);
t = o([
  m("kmk-youtube-video")
], t);
export {
  t as KmkYoutubeVideo
};

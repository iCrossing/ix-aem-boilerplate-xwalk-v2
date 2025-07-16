import { LitElement as n, html as y } from "lit";
import { n as a, r as h, t as c } from "./vendor/@lit-zEaRr5DC.js";
import { e as m, o as d } from "./vendor/lit-html-7zeMcSoo.js";
import v from "./kmk-video.css.lit.js";
import "./kmk-youtube-video.js";
import "./kmk-icon-button.js";
var b = Object.defineProperty, g = Object.getOwnPropertyDescriptor, o = (i, r, l, s) => {
  for (var e = s > 1 ? void 0 : s ? g(r, l) : r, p = i.length - 1, u; p >= 0; p--)
    (u = i[p]) && (e = (s ? u(r, l, e) : u(e)) || e);
  return s && e && b(r, l, e), e;
};
let t = class extends n {
  constructor() {
    super(...arguments), this.youtubeVideoId = "", this.thumbnail = "", this.aspectRatio = "16-9", this.playing = !1, this.showPlaceholder = !0, this.playVideo = () => {
      this.playing = !0, this.showPlaceholder = !1;
    };
  }
  render() {
    const i = {
      "kmk-video": !0,
      [`aspect-ratio-${this.aspectRatio}`]: !0
    };
    return y`
      <div class="${m(i)}">
        <div class="placeholder ${this.showPlaceholder ? "" : "hidden"}">
          <img src="${this.thumbnail}" alt="" />
          <div class="overlay">
            <kmk-icon-button
              icon="play300"
              variant="bg-dark"
              size="lg"
              use-stroke
              label="Play video"
              .onClick="${this.playVideo}"
            ></kmk-icon-button>
          </div>
        </div>
        <kmk-youtube-video
          video-id="${d(this.youtubeVideoId)}"
          video-url="${d(this.youtubeVideoUrl)}"
          ?autoplay="${this.playing}"
          aspect-ratio="${this.aspectRatio}"
        ></kmk-youtube-video>
      </div>
    `;
  }
};
t.styles = [v];
o([
  a({ type: String, attribute: "youtube-video-id" })
], t.prototype, "youtubeVideoId", 2);
o([
  a({ type: String, attribute: "youtube-video-url" })
], t.prototype, "youtubeVideoUrl", 2);
o([
  a({ type: String, attribute: "thumbnail" })
], t.prototype, "thumbnail", 2);
o([
  a({ type: String, attribute: "aspect-ratio" })
], t.prototype, "aspectRatio", 2);
o([
  h()
], t.prototype, "playing", 2);
o([
  h()
], t.prototype, "showPlaceholder", 2);
t = o([
  c("kmk-video")
], t);
export {
  t as KmkVideo
};

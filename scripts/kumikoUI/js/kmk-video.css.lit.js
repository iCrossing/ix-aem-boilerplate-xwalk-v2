import { css as i } from "lit";
const e = i`
:host {
  width: 100%;
  display: inline-flex;
}
.kmk-video {
  width: 100%;
  position: relative;
  display: inline-flex;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  transition: all .4s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--video-color-container-fill-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder.hidden {
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
}

.aspect-ratio-1-1 {
  aspect-ratio: 1 / 1;
}

.aspect-ratio-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-ratio-21-9 {
  aspect-ratio: 21 / 9;
}

.aspect-ratio-9-16 {
  aspect-ratio: 9 / 16;
}
`;
export {
  e as default
};

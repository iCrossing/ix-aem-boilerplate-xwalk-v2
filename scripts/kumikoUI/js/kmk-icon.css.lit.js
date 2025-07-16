import { css as i } from "lit";
const e = i`
:host {
  display: inline-flex;
  svg path {
    fill: inherit;
  }
}

.kmk-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  /* keep consistensy with other icons */
  width: var(--svg-icon-size);
  height: var(--svg-icon-size);
}
.kmk-icon svg path {
  fill: var(--svg-icon-color, currentColor);
}
.kmk-icon svg {
  width: auto;
  height: var(--svg-icon-size);
}

`;
export {
  e as default
};

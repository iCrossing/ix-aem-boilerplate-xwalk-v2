import { css as o } from "lit";
const r = o`
.kmk-chip {
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  padding-top: var(--chip-spacing-ver-padding-top);
  padding-bottom: var(--chip-spacing-ver-padding-bottom);
  padding-left: var(--chip-spacing-hor-padding-left);
  padding-right: var(--chip-spacing-hor-padding-right);
  border-radius: var(--chip-border-radius);

  font-weight: var(--chip-fonts-label-font-weight);
  font-size: var(--chip-fonts-label-font-size);
  line-height: var(--chip-fonts-label-line-height);
  font-family: var(--chip-fonts-label-font-family);
  letter-spacing: var(--chip-fonts-label-letter-spacing);
  margin: var(--chip-fonts-label-margin-spacing) 0;
  text-indent: var(--chip-fonts-label-text-indent);
  text-transform: var(--chip-fonts-label-text-transform);
  text-decoration: var(--chip-fonts-label-text-decoration);
  box-shadow: var(--chip-elevation-default);
  --svg-icon-size: var(--chip-sizing-icon-container-left);

  &:not(:disabled) {
    cursor: pointer;
  }

  &.icon-position-right span {
    margin-right: var(--chip-spacing-hor-item);
  }
  &.icon-position-left span {
    margin-left: var(--chip-spacing-hor-item);
  }
  
  &:hover {
    box-shadow: var(--chip-elevation-hover);
  }
  &:active {
    box-shadow: var(--chip-elevation-pressed);
  }
  &:focus-visible {
    box-shadow: var(--chip-elevation-focus);
  }

  &.variant-neutral:not(.disabled) {
    background-color: var(--chip-color-container-fill-neutral-default);
    color: var(--chip-color-text-fill-neutral-default);
    --svg-icon-color: var(--chip-color-icon-fill-left-neutral-default);
    border: var(--chip-border-style-neutral-default);
    &:hover {
      background-color: var(--chip-color-container-fill-neutral-hover);
      color: var(--chip-color-text-fill-neutral-hover);
      --svg-icon-color: var(--chip-color-icon-fill-left-neutral-hover);
      border: var(--chip-border-style-neutral-hover);
    }
    &:active {
      background-color: var(--chip-color-container-fill-neutral-pressed);
      color: var(--chip-color-text-fill-neutral-pressed);
      --svg-icon-color: var(--chip-color-icon-fill-left-neutral-pressed);
      border: var(--chip-border-style-neutral-pressed);
    }
    &:focus-visible {
      background-color: var(--chip-color-container-fill-neutral-focus);
      color: var(--chip-color-text-fill-neutral-focus);
      --svg-icon-color: var(--chip-color-icon-fill-left-neutral-focus);
      border: var(--chip-border-style-neutral-focus);
    }
  }
  &.variant-accent01:not(.disabled) {
    background-color: var(--chip-color-container-fill-accent1-default);
    color: var(--chip-color-text-fill-accent1-default);
    --svg-icon-color: var(--chip-color-icon-fill-left-accent1-default);
    border: var(--chip-border-style-accent1-default);
    &:hover {
      background-color: var(--chip-color-container-fill-accent1-hover);
      color: var(--chip-color-text-fill-accent1-hover);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent1-hover);
      border: var(--chip-border-style-accent1-hover);
    }
    &:active {
      background-color: var(--chip-color-container-fill-accent1-pressed);
      color: var(--chip-color-text-fill-accent1-pressed);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent1-pressed);
      border: var(--chip-border-style-accent1-pressed);
    }
    &:focus-visible {
      background-color: var(--chip-color-container-fill-accent1-focus);
      color: var(--chip-color-text-fill-accent1-focus);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent1-focus);
      border: var(--chip-border-style-accent1-focus);
    }
  }
  &.variant-accent02:not(.disabled) {
    background-color: var(--chip-color-container-fill-accent2-default);
    color: var(--chip-color-text-fill-accent2-default);
    --svg-icon-color: var(--chip-color-icon-fill-left-accent2-default);
    border: var(--chip-border-style-accent2-default);
    &:hover {
      background-color: var(--chip-color-container-fill-accent2-hover);
      color: var(--chip-color-text-fill-accent2-hover);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent2-hover);
      border: var(--chip-border-style-accent2-hover);
    }
    &:active {
      background-color: var(--chip-color-container-fill-accent2-pressed);
      color: var(--chip-color-text-fill-accent2-pressed);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent2-pressed);
      border: var(--chip-border-style-accent2-pressed);
    }
    &:focus-visible {
      background-color: var(--chip-color-container-fill-accent2-focus);
      color: var(--chip-color-text-fill-accent2-focus);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent2-focus);
      border: var(--chip-border-style-accent2-focus);
    }
  }
  &.variant-accent03:not(.disabled) {
    background-color: var(--chip-color-container-fill-accent3-default);
    color: var(--chip-color-text-fill-accent3-default);
    --svg-icon-color: var(--chip-color-icon-fill-left-accent3-default);
    border: var(--chip-border-style-accent3-default);
    &:hover {
      background-color: var(--chip-color-container-fill-accent3-hover);
      color: var(--chip-color-text-fill-accent3-hover);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent3-hover);
      border: var(--chip-border-style-accent3-hover);
    }
    &:active {
      background-color: var(--chip-color-container-fill-accent3-pressed);
      color: var(--chip-color-text-fill-accent3-pressed);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent3-pressed);
      border: var(--chip-border-style-accent3-pressed);
    }
    &:focus-visible {
      background-color: var(--chip-color-container-fill-accent3-focus);
      color: var(--chip-color-text-fill-accent3-focus);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent3-focus);
      border: var(--chip-border-style-accent3-focus);
    }
  }
  &.variant-accent04:not(.disabled) {
    background-color: var(--chip-color-container-fill-accent4-default);
    color: var(--chip-color-text-fill-accent4-default);
    --svg-icon-color: var(--chip-color-icon-fill-left-accent4-default);
    border: var(--chip-border-style-accent4-default);
    &:hover {
      background-color: var(--chip-color-container-fill-accent4-hover);
      color: var(--chip-color-text-fill-accent4-hover);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent4-hover);
      border: var(--chip-border-style-accent4-hover);
    }
    &:active {
      background-color: var(--chip-color-container-fill-accent4-pressed);
      color: var(--chip-color-text-fill-accent4-pressed);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent4-pressed);
      border: var(--chip-border-style-accent4-pressed);
    }
    &:focus-visible {
      background-color: var(--chip-color-container-fill-accent4-focus);
      color: var(--chip-color-text-fill-accent4-focus);
      --svg-icon-color: var(--chip-color-icon-fill-left-accent4-focus);
      border: var(--chip-border-style-accent4-focus);
    }
  }
  &.disabled {
    background-color: var(--chip-color-container-fill-disabled);
    color: var(--chip-color-text-fill-disabled);
    --svg-icon-color: var(--chip-color-icon-fill-left-disabled);
    border: var(--chip-border-style-disabled);
    box-shadow: var(--chip-elevation-disabled);
  }
}

`;
export {
  r as default
};

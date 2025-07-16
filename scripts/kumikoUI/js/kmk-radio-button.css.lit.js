import { css as r } from "lit";
const t = r`
input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
label {
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
}
.radio-container {
  display: inline-block;
  position: relative;
}
.radio {
  background-color: var(--radio-button-color-container-fill-input-container-empty-default);
  display: inline-flex;
  position: relative;
  z-index: 5;
  border-radius: 50%;
}
.focus-ring {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--radio-button-color-container-fill-state-container-empty-default);
  border-radius: var(--radio-button-border-radius-state-container-empty-default);
  border-radius: 50%;
  z-index: 1;
  width: 0;
  height: 0;
  transition: width .3s ease-in-out, height .3s ease-in-out;
}
kmk-icon {
  color: transparent;
}
::slotted(kmk-text) {
  position: relative;
  z-index: 5;
  --kmk-text-color: var(--radio-button-label-color-text-fill-label-default);
}

.size-sm {
  .radio {
    width: var(--radio-button-sizing-input-container-sm);
    height: var(--radio-button-sizing-input-container-sm);
    border: var(--radio-button-border-style-input-container-sm-default);
    border-radius: var(--radio-button-border-radius-input-container-sm);
    margin: var(--radio-button-spacing-ver-padding-top-sm) 
      var(--radio-button-spacing-hor-padding-right-sm) 
      var(--radio-button-spacing-ver-padding-bottom-sm) 
      var(--radio-button-spacing-hor-padding-left-sm);
  }
  kmk-icon {
    --svg-icon-size: var(--radio-button-sizing-icon-sm);
  }
  ::slotted(kmk-text) {
    font-weight: var(--radio-button-label-fonts-label-sm-font-weight);
    font-size: var(--radio-button-label-fonts-label-sm-font-size);
    line-height: var(--radio-button-label-fonts-label-sm-line-height);
    font-family: var(--radio-button-label-fonts-label-sm-font-family);
    letter-spacing: var(--radio-button-label-fonts-label-sm-letter-spacing);
    text-transform: var(--radio-button-label-fonts-label-sm-text-transform);
    text-decoration: var(--radio-button-label-fonts-label-sm-text-decoration);
  }
  &.error {
    .radio{
      border: var(--radio-button-border-style-input-container-sm-error-default);
    }
  }
  &:hover {
    .radio {
      border: var(--radio-button-border-style-input-container-sm-hover);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-sm-error-hover);
      }
    }
  }
  &:has(input:focus-visible) {
    .radio {
      border: var(--radio-button-border-style-input-container-sm-focus);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-sm-error-hover);
      }
    }
  }
  &.disabled {
    .radio {
      border: var(--radio-button-border-style-input-container-sm-disabled);
    }
  }
}

.size-md {
  .radio {
    width: var(--radio-button-sizing-input-container-md);
    height: var(--radio-button-sizing-input-container-md);
    border: var(--radio-button-border-style-input-container-md-default);
    border-radius: var(--radio-button-border-radius-input-container-md);
    margin: var(--radio-button-spacing-ver-padding-top-md) 
      var(--radio-button-spacing-hor-padding-right-md) 
      var(--radio-button-spacing-ver-padding-bottom-md) 
      var(--radio-button-spacing-hor-padding-left-md);
  }
  kmk-icon {
    --svg-icon-size: var(--radio-button-sizing-icon-md);
  }
  ::slotted(kmk-text) {
    font-weight: var(--radio-button-label-fonts-label-md-font-weight);
    font-size: var(--radio-button-label-fonts-label-md-font-size);
    line-height: var(--radio-button-label-fonts-label-md-line-height);
    font-family: var(--radio-button-label-fonts-label-md-font-family);
    letter-spacing: var(--radio-button-label-fonts-label-md-letter-spacing);
    text-transform: var(--radio-button-label-fonts-label-md-text-transform);
    text-decoration: var(--radio-button-label-fonts-label-md-text-decoration);
  }

  &.error {
    .radio{
      border: var(--radio-button-border-style-input-container-md-error-default)
    }
  }

  &.hover {
    .radio {
      border: var(--radio-button-border-style-input-container-md-hover);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-md-error-hover);
      }
    }
  }
  &:has(input:focus-visible) {
    .radio {
      border: var(--radio-button-border-style-input-container-md-focus);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-md-error-focus);
      }
    }
  }
  &.disabled {
    .radio {
      border: var(--radio-button-border-style-input-container-md-disabled);
    }
  }
}

.size-lg {
  .radio {
    width: var(--radio-button-sizing-input-container-lg);
    height: var(--radio-button-sizing-input-container-lg);
    border: var(--radio-button-border-style-input-container-lg-default);
    border-radius: var(--radio-button-border-radius-input-container-lg);
    margin: var(--radio-button-spacing-ver-padding-top-lg) 
      var(--radio-button-spacing-hor-padding-right-lg) 
      var(--radio-button-spacing-ver-padding-bottom-lg)
      var(--radio-button-spacing-hor-padding-left-lg);
  }
  kmk-icon {
    --svg-icon-size: var(--radio-button-sizing-icon-lg);
  }
  ::slotted(kmk-text) {
    font-weight: var(--radio-button-label-fonts-label-lg-font-weight);
    font-size: var(--radio-button-label-fonts-label-lg-font-size);
    line-height: var(--radio-button-label-fonts-label-lg-line-height);
    font-family: var(--radio-button-label-fonts-label-lg-font-family);
    letter-spacing: var(--radio-button-label-fonts-label-lg-letter-spacing);
    text-transform: var(--radio-button-label-fonts-label-lg-text-transform);
    text-decoration: var(--radio-button-label-fonts-label-lg-text-decoration);
  }
  &.error {
    .radio{
      border: var(--radio-button-border-style-input-container-lg-error-default)
    }
  }
  &.hover {
    .radio {
      border: var(--radio-button-border-style-input-container-lg-hover);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-lg-error-hover);
      }
    }
  }
  &:has(input:focus-visible) {
    .radio {
      border: var(--radio-button-border-style-input-container-lg-focus);
    }
    &.error {
      .radio {
        border: var(--radio-button-border-style-input-container-lg-error-focus);
      }
    }
  }
  &.disabled {
    .radio {
      border: var(--radio-button-border-style-input-container-lg-disabled);
    }
  }
}

/* selected state */
label.selected {
  .radio {
    background-color: var(--radio-button-color-container-fill-input-container-selected-default);
  }
  .focus-ring {
    background-color: var(--radio-button-color-container-fill-state-container-selected-default);
    border-radius: var(--radio-button-border-radius-state-container-selected-default);
  }
  kmk-icon {
    color: var(--radio-button-color-dot-fill-default);
  }
}

/* disabled state */
label.disabled {
  .radio {
    background-color: var(--radio-button-color-container-fill-input-container-empty-disabled);
  }
  .focus-ring {
    background-color: var(--radio-button-color-container-fill-state-container-empty-disabled);
    border-radius: var(--radio-button-border-radius-state-container-empty-disabled);
  }
  ::slotted(kmk-text) {
    --kmk-text-color: var(--radio-button-label-color-text-fill-label-disabled);
  }
  &.selected {
    .radio {
      background-color: var(--radio-button-color-container-fill-input-container-selected-disabled);
    }
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-selected-disabled);
      border-radius: var(--radio-button-border-radius-state-container-selected-disabled);
    }
    kmk-icon {
      color: var(--radio-button-color-dot-fill-disabled);
    }
  }
}

/* error state */
label.error {
  .radio {
    background-color: var(--radio-button-color-container-fill-input-container-empty-error);
  }
  .focus-ring {
    background-color: var(--radio-button-color-container-fill-state-container-empty-error-default);
    border-radius: var(--radio-button-border-radius-state-container-empty-error-default);
  }
  &.selected {
    .radio {
      background-color: var(--radio-button-color-container-fill-input-container-selected-error);
    }
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-selected-error);
      border-radius: var(--radio-button-border-radius-state-container-selected-error);
    }
    &:hover:not(.disabled) {
      kmk-icon {
        color: var(--radio-button-color-dot-fill-error-hover);
      }
    }
    &:focus:not(.disabled) {
      kmk-icon {
        color: var(--radio-button-color-dot-fill-error-focus);
      }
    }
  }
  &.selected:not(.disabled) {
    kmk-icon {
      color: var(--radio-button-color-dot-fill-error-default);
    }
  }
  &:hover:not(.disabled) {
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-empty-error-hover);
      border-radius: var(--radio-button-border-radius-state-container-empty-error-hover);
    }
  }
  &:has(input:focus-visible):not(.disabled) {
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-empty-error-focus);
      border-radius: var(--radio-button-border-radius-state-container-empty-error-focus);
    }
  }
}

/* hover state */
label:hover:not(.disabled):not(.error) {
  .radio {
    background-color: var(--radio-button-color-container-fill-input-container-empty-hover);
  }
  .focus-ring {
    background-color: var(--radio-button-color-container-fill-state-container-empty-hover);
    border-radius: var(--radio-button-border-radius-state-container-empty-hover);
  }
  &.selected {
    .radio {
      background-color: var(--radio-button-color-container-fill-input-container-selected-hover);
    }
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-selected-hover);
      border-radius: var(--radio-button-border-radius-state-container-selected-hover);
    }
    kmk-icon {
      color: var(--radio-button-color-dot-fill-hover);
    }
  }
}

/* focus state */
label:has(input:focus-visible):not(.error) {
  .radio {
    background-color: var(--radio-button-color-container-fill-input-container-empty-focus);
  }
  .focus-ring {
    background-color: var(--radio-button-color-container-fill-state-container-empty-focus);
    border-radius: var(--radio-button-border-radius-state-container-empty-focus);
  }
  &.selected {
    .radio {
      background-color: var(--radio-button-color-container-fill-input-container-selected-focus);
    }
    .focus-ring {
      background-color: var(--radio-button-color-container-fill-state-container-selected-focus);
      border-radius: var(--radio-button-border-radius-state-container-selected-focus);
    }
    kmk-icon {
      color: var(--radio-button-color-dot-fill-focus);
    }
  }
}

/* hover and focus state */
label:hover:not(.disabled),
label:has(input:focus-visible):not(.disabled) {
  &.size-sm {
    .focus-ring {
      width: 28px;
      height: 28px;
    }
  }
  &.size-md {
    .focus-ring {
      width: 32px;
      height: 32px;
    }
  }
  &.size-lg {
    .focus-ring {
      width: 44px;
      height: 44px;
    }
  }
}

`;
export {
  t as default
};

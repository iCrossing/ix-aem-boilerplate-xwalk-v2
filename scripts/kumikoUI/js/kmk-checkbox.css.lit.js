import { css as e } from "lit";
const o = e`
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
.checkmark-container {
  display: inline-block;
  position: relative;
}
.checkmark {
  display: inline-flex;
  position: relative;
  z-index: 5;
}
.focus-ring {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(
    --checkbox-color-container-fill-state-container-empty-default
  );
  border-radius: var(--checkbox-border-radius-state-container-empty-default);
  z-index: 1;
  width: 0;
  height: 0;
  transition:
    width 0.3s linear,
    height 0.3s linear;
}
kmk-icon {
  color: transparent;
}
::slotted(kmk-text) {
  position: relative;
  z-index: 5;
  --kmk-text-color: var(--checkbox-label-color-text-fill-label-default);
}

.size-sm {
  .checkmark {
    width: var(--checkbox-sizing-input-container-sm);
    height: var(--checkbox-sizing-input-container-sm);
    border: var(--checkbox-border-style-input-container-sm-default);
    border-radius: var(--checkbox-border-radius-input-container-sm);
    margin: var(--checkbox-spacing-ver-padding-top-sm)
      var(--checkbox-spacing-hor-padding-right-sm)
      var(--checkbox-spacing-ver-padding-bottom-sm)
      var(--checkbox-spacing-hor-padding-left-sm);
  }
  kmk-icon {
    --svg-icon-size: var(--checkbox-sizing-icon-sm);
  }
  ::slotted(kmk-text) {
    font-weight: var(--checkbox-label-fonts-label-sm-font-weight);
    font-size: var(--checkbox-label-fonts-label-sm-font-size);
    line-height: var(--checkbox-label-fonts-label-sm-line-height);
    font-family: var(--checkbox-label-fonts-label-sm-font-family);
    letter-spacing: var(--checkbox-label-fonts-label-sm-letter-spacing);
    text-transform: var(--checkbox-label-fonts-label-sm-text-transform);
    text-decoration: var(--checkbox-label-fonts-label-sm-text-decoration);
  }
  &.error {
    .checkmark {
      border: var(--checkbox-border-style-input-container-sm-error-default);
    }
  }
  &:hover {
    .checkmark {
      border: var(--checkbox-border-style-input-container-sm-hover);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-sm-error-hover);
      }
    }
  }
  &.focused {
    .checkmark {
      border: var(--checkbox-border-style-input-container-sm-focus);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-sm-error-hover);
      }
    }
  }
  &.disabled,
  &.error.disabled {
    .checkmark {
      border: var(--checkbox-border-style-input-container-sm-disabled);
    }
  }
}

.size-md {
  .checkmark {
    width: var(--checkbox-sizing-input-container-md);
    height: var(--checkbox-sizing-input-container-md);
    border: var(--checkbox-border-style-input-container-md-default);
    border-radius: var(--checkbox-border-radius-input-container-md);
    margin: var(--checkbox-spacing-ver-padding-top-md)
      var(--checkbox-spacing-hor-padding-right-md)
      var(--checkbox-spacing-ver-padding-bottom-md)
      var(--checkbox-spacing-hor-padding-left-md);
  }
  kmk-icon {
    --svg-icon-size: var(--checkbox-sizing-icon-md);
  }
  ::slotted(kmk-text) {
    font-weight: var(--checkbox-label-fonts-label-md-font-weight);
    font-size: var(--checkbox-label-fonts-label-md-font-size);
    line-height: var(--checkbox-label-fonts-label-md-line-height);
    font-family: var(--checkbox-label-fonts-label-md-font-family);
    letter-spacing: var(--checkbox-label-fonts-label-md-letter-spacing);
    text-transform: var(--checkbox-label-fonts-label-md-text-transform);
    text-decoration: var(--checkbox-label-fonts-label-md-text-decoration);
  }
  &.error {
    .checkmark {
      border: var(--checkbox-border-style-input-container-md-error-default);
    }
  }

  &.hover {
    .checkmark {
      border: var(--checkbox-border-style-input-container-md-hover);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-md-error-hover);
      }
    }
  }
  &.focused {
    .checkmark {
      border: var(--checkbox-border-style-input-container-md-focus);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-md-error-focus);
      }
    }
  }
  &.disabled,
  &.error.disabled {
    .checkmark {
      border: var(--checkbox-border-style-input-container-md-disabled);
    }
  }
}

.size-lg {
  .checkmark {
    width: var(--checkbox-sizing-input-container-lg);
    height: var(--checkbox-sizing-input-container-lg);
    border: var(--checkbox-border-style-input-container-lg-default);
    border-radius: var(--checkbox-border-radius-input-container-lg);
    margin: var(--checkbox-spacing-ver-padding-top-lg)
      var(--checkbox-spacing-hor-padding-right-lg)
      var(--checkbox-spacing-ver-padding-bottom-lg)
      var(--checkbox-spacing-hor-padding-left-lg);
  }
  kmk-icon {
    --svg-icon-size: var(--checkbox-sizing-icon-lg);
  }
  ::slotted(kmk-text) {
    font-weight: var(--checkbox-label-fonts-label-lg-font-weight);
    font-size: var(--checkbox-label-fonts-label-lg-font-size);
    line-height: var(--checkbox-label-fonts-label-lg-line-height);
    font-family: var(--checkbox-label-fonts-label-lg-font-family);
    letter-spacing: var(--checkbox-label-fonts-label-lg-letter-spacing);
    text-transform: var(--checkbox-label-fonts-label-lg-text-transform);
    text-decoration: var(--checkbox-label-fonts-label-lg-text-decoration);
  }
  &.error {
    .checkmark {
      border: var(--checkbox-border-style-input-container-lg-error-default);
    }
  }
  &.hover {
    .checkmark {
      border: var(--checkbox-border-style-input-container-lg-hover);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-lg-error-hover);
      }
    }
  }
  &.focused {
    .checkmark {
      border: var(--checkbox-border-style-input-container-lg-focus);
    }
    &.error {
      .checkmark {
        border: var(--checkbox-border-style-input-container-lg-error-focus);
      }
    }
  }
  &.disabled,
  &.error.disabled {
    .checkmark {
      border: var(--checkbox-border-style-input-container-lg-disabled);
    }
  }
}

/* selected state */
label.selected,
label.indeterminate {
  .checkmark {
    background-color: var(
      --checkbox-color-container-fill-input-container-selected-default
    );
  }
  .focus-ring {
    background-color: var(
      --checkbox-color-container-fill-state-container-selected-default
    );
    border-radius: var(
      --checkbox-border-radius-state-container-selected-default
    );
  }
  kmk-icon {
    color: var(--checkbox-color-icon-fill-checkmark-default);
  }
}

/* disabled state */
label.disabled,
label.error.disabled {
  .checkmark {
    background-color: var(
      --checkbox-color-container-fill-input-container-empty-disabled
    );
  }
  .focus-ring {
    background-color: var(
      --checkbox-color-container-fill-state-container-empty-disabled
    );
    border-radius: var(--checkbox-border-radius-state-container-empty-disabled);
  }
  ::slotted(kmk-text) {
    --kmk-text-color: var(--checkbox-label-color-text-fill-label-disabled);
  }
  &.selected,
  &.indeterminate {
    .checkmark {
      background-color: var(
        --checkbox-color-container-fill-input-container-selected-disabled
      );
    }
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-selected-disabled
      );
      border-radius: var(
        --checkbox-border-radius-state-container-selected-disabled
      );
    }
    kmk-icon {
      color: var(--checkbox-color-icon-fill-checkmark-disabled);
    }
  }
}

/* error state */
label.error,
label.error.indeterminate {
  .checkmark {
    background-color: var(
      --checkbox-color-container-fill-input-container-empty-error-default
    );
  }
  .focus-ring {
    background-color: var(
      --checkbox-color-container-fill-state-container-empty-error-default
    );
    border-radius: var(
      --checkbox-border-radius-state-container-empty-error-default
    );
  }
  &.selected {
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-selected-error-default
      );
      border-radius: var(
        --checkbox-border-radius-state-container-selected-error-default
      );
    }
    &:hover:not(.disabled) {
      .checkmark {
        background-color: var(
          --checkbox-color-container-fill-input-container-selected-error-hover
        );
      }
      kmk-icon {
        color: var(--checkbox-color-icon-fill-checkmark-error-hover);
      }
    }
    &:focus:not(.disabled) {
      .checkmark {
        background-color: var(
          --checkbox-color-container-fill-input-container-selected-error-focus
        );
      }
      kmk-icon {
        color: var(--checkbox-color-icon-fill-checkmark-error-focus);
      }
    }
  }
  &.selected:not(.disabled),
  &.indeterminate:not(.disabled) {
    .checkmark {
      background-color: var(
        --checkbox-color-container-fill-input-container-selected-error-default
      );
    }
    kmk-icon {
      color: var(--checkbox-color-icon-fill-checkmark-error-default);
    }
  }
  &:hover:not(.disabled) {
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-empty-error-hover
      );
      border-radius: var(
        --checkbox-border-radius-state-container-empty-error-hover
      );
    }
  }
  &.focused:not(.disabled) {
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-empty-error-focus
      );
      border-radius: var(
        --checkbox-border-radius-state-container-empty-error-focus
      );
    }
  }
}

/* hover state */
label:hover:not(.disabled):not(.error) {
  .checkmark {
    background-color: var(
      --checkbox-color-container-fill-input-container-empty-hover
    );
  }
  .focus-ring {
    background-color: var(
      --checkbox-color-container-fill-state-container-empty-hover
    );
    border-radius: var(--checkbox-border-radius-state-container-empty-hover);
  }
  &.selected,
  &.indeterminate {
    .checkmark {
      background-color: var(
        --checkbox-color-container-fill-input-container-selected-hover
      );
    }
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-selected-hover
      );
      border-radius: var(
        --checkbox-border-radius-state-container-selected-hover
      );
    }
    kmk-icon {
      color: var(--checkbox-color-icon-fill-checkmark-hover);
    }
  }
}

/* focus state */
label.focused:not(.error) {
  .checkmark {
    background-color: var(
      --checkbox-color-container-fill-input-container-empty-focus
    );
  }
  .focus-ring {
    background-color: var(
      --checkbox-color-container-fill-state-container-empty-focus
    );
    border-radius: var(--checkbox-border-radius-state-container-empty-focus);
  }
  &.selected,
  &.indeterminate {
    .checkmark {
      background-color: var(
        --checkbox-color-container-fill-input-container-selected-focus
      );
    }
    .focus-ring {
      background-color: var(
        --checkbox-color-container-fill-state-container-selected-focus
      );
      border-radius: var(
        --checkbox-border-radius-state-container-selected-focus
      );
    }
    kmk-icon {
      color: var(--checkbox-color-icon-fill-checkmark-focus);
    }
  }
}

/* hover and focus state */
label:hover:not(.disabled),
.focused {
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
  o as default
};

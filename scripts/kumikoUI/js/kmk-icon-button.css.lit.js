import { css as o } from "lit";
const t = o`
button, a {
  outline: none;
  display: inline-flex;
  align-items: center;
  border: none;
  &:not(:disabled) {
    cursor: pointer;
  }
}

.kmk-icon-button {
  &.size-sm {
    border-radius: var(--icon-button-border-radius-no-stroke-sm);
    padding-left: var(--icon-button-spacing-hor-padding-left-no-stroke-sm);
    padding-right: var(--icon-button-spacing-hor-padding-right-no-stroke-sm);
    padding-top: var(--icon-button-spacing-ver-padding-top-no-stroke-sm);
    padding-bottom: var(--icon-button-spacing-ver-padding-bottom-no-stroke-sm);
    &.stroke {
      border-radius: var(--icon-button-border-radius-with-stroke-sm);
      padding-left: var(--icon-button-spacing-hor-padding-left-with-stroke-sm);
      padding-right: var(--icon-button-spacing-hor-padding-right-with-stroke-sm);
      padding-top: var(--icon-button-spacing-ver-padding-top-with-stroke-sm);
      padding-bottom: var(--icon-button-spacing-ver-padding-bottom-with-stroke-sm);
    }
    --svg-icon-size: var(--icon-button-sizing-icon-sm);
  }

  &.size-md {
    border-radius: var(--icon-button-border-radius-no-stroke-md);
    padding-left: var(--icon-button-spacing-hor-padding-left-no-stroke-md);
    padding-right: var(--icon-button-spacing-hor-padding-right-no-stroke-md);
    padding-top: var(--icon-button-spacing-ver-padding-top-no-stroke-md);
    padding-bottom: var(--icon-button-spacing-ver-padding-bottom-no-stroke-md);
    &.stroke {
      border-radius: var(--icon-button-border-radius-with-stroke-md);
      padding-left: var(--icon-button-spacing-hor-padding-left-with-stroke-md);
      padding-right: var(--icon-button-spacing-hor-padding-right-with-stroke-md);
      padding-top: var(--icon-button-spacing-ver-padding-top-with-stroke-md);
      padding-bottom: var(--icon-button-spacing-ver-padding-bottom-with-stroke-md);
    }
    --svg-icon-size: var(--icon-button-sizing-icon-md);
  }

  &.size-lg {
    border-radius: var(--icon-button-border-radius-no-stroke-lg);
    padding-left: var(--icon-button-spacing-hor-padding-left-no-stroke-lg);
    padding-right: var(--icon-button-spacing-hor-padding-right-no-stroke-lg);
    padding-top: var(--icon-button-spacing-ver-padding-top-no-stroke-lg);
    padding-bottom: var(--icon-button-spacing-ver-padding-bottom-no-stroke-lg);
    &.stroke {
     border-radius: var(--icon-button-border-radius-with-stroke-lg);
      padding-left: var(--icon-button-spacing-hor-padding-left-with-stroke-lg);
      padding-right: var(--icon-button-spacing-hor-padding-right-with-stroke-lg);
      padding-top: var(--icon-button-spacing-ver-padding-top-with-stroke-lg);
      padding-bottom: var(--icon-button-spacing-ver-padding-bottom-with-stroke-lg);
    }
    --svg-icon-size: var(--icon-button-sizing-icon-lg);
  }
}

.variant-bg-dark {
  background-color: var(--icon-button-color-container-fill-no-stroke-default-on-dark);
  --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-default-on-dark);
  border: var(--icon-button-border-style-no-stroke-default-on-dark);

  &:hover:not(:disabled) {
    background-color: var(--icon-button-color-container-fill-no-stroke-hover-on-dark);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-hover-on-dark);
    border: var(--icon-button-border-style-no-stroke-hover-on-dark);
  }
  &:active:not(:disabled) {
    background-color: var(--icon-button-color-container-fill-no-stroke-pressed-on-dark);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-pressed-on-dark);
    border: var(--icon-button-border-style-no-stroke-pressed-on-dark);
  }
  &:focus-visible:not(:disabled):not(:active) {
    background-color: var(--icon-button-color-container-fill-no-stroke-focus-on-dark);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-focus-on-dark);
    border: var(--icon-button-border-style-no-stroke-focus-on-dark);
  }
  &:disabled {
    background-color: var(--icon-button-color-container-fill-no-stroke-disabled-on-dark);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-disabled-on-dark);
    border: var(--icon-button-border-style-no-stroke-disabled-on-dark);
  }
  
  &.stroke {
    background-color: var(--icon-button-color-container-fill-with-stroke-default-on-dark);
    --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-default-on-dark);
    border: var(--icon-button-border-style-with-stroke-default-on-dark);

    &:hover:not(:disabled) {
      background-color: var(--icon-button-color-container-fill-with-stroke-hover-on-dark);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-hover-on-dark);
      border: var(--icon-button-border-style-with-stroke-hover-on-dark);
    }
    &:active:not(:disabled) {
      background-color: var(--icon-button-color-container-fill-with-stroke-pressed-on-dark);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-pressed-on-dark);
      border: var(--icon-button-border-style-with-stroke-pressed-on-dark);
    }
    &:focus-visible:not(:disabled):not(:active) {
      background-color: var(--icon-button-color-container-fill-with-stroke-focus-on-dark);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-focus-on-dark);
      border: var(--icon-button-border-style-with-stroke-focus-on-dark);
    }
    &:disabled {
      background-color: var(--icon-button-color-container-fill-with-stroke-disabled-on-dark);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-disabled-on-dark);
      border: var(--icon-button-border-style-with-stroke-disabled-on-dark);
    }
  }
}

.variant-bg-light {
  background-color: var(--icon-button-color-container-fill-no-stroke-default-on-light);
  --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-default-on-light);
  border: var(--icon-button-border-style-no-stroke-default-on-light);

  &:hover:not(:disabled) {
    background-color: var(--icon-button-color-container-fill-no-stroke-hover-on-light);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-hover-on-light);
    border: var(--icon-button-border-style-no-stroke-hover-on-light);
  }
  &:active:not(:disabled) {
    background-color: var(--icon-button-color-container-fill-no-stroke-pressed-on-light);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-pressed-on-light);
    border: var(--icon-button-border-style-no-stroke-pressed-on-light);
  }
  &:focus-visible:not(:disabled):not(:active) {
    background-color: var(--icon-button-color-container-fill-no-stroke-focus-on-light);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-focus-on-light);
    border: var(--icon-button-border-style-no-stroke-focus-on-light);
  }
  &:disabled {
    background-color: var(--icon-button-color-container-fill-no-stroke-disabled-on-light);
    --svg-icon-color: var(--icon-button-color-icon-fill-no-stroke-disabled-on-light);
    border: var(--icon-button-border-style-no-stroke-disabled-on-light);
  }

  &.stroke {
    background-color: var(--icon-button-color-container-fill-with-stroke-default-on-light);
    --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-default-on-light);
    border: var(--icon-button-border-style-with-stroke-default-on-light);

    &:hover:not(:disabled) {
      background-color: var(--icon-button-color-container-fill-with-stroke-hover-on-light);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-hover-on-light);
      border: var(--icon-button-border-style-with-stroke-hover-on-light);
    }
    &:active:not(:disabled) {
      background-color: var(--icon-button-color-container-fill-with-stroke-pressed-on-light);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-pressed-on-light);
      border: var(--icon-button-border-style-with-stroke-pressed-on-light);
    }
    &:focus-visible:not(:disabled):not(:active) {
      background-color: var(--icon-button-color-container-fill-with-stroke-focus-on-light);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-focus-on-light);
      border: var(--icon-button-border-style-with-stroke-focus-on-light);
    }
    &:disabled {
      background-color: var(--icon-button-color-container-fill-with-stroke-disabled-on-light);
      --svg-icon-color: var(--icon-button-color-icon-fill-with-stroke-disabled-on-light);
      border: var(--icon-button-border-style-with-stroke-disabled-on-light);
    }
  }
}
`;
export {
  t as default
};
